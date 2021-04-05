var cases = [];

for(i=0; i<2; i++) { 
    cases.push('/images/frites.png');
    cases.push('/images/glace.png');
    cases.push('/images/hamburger.png');
    cases.push('/images/hotdog.png');
    cases.push('/images/milkshake.png');
    cases.push('/images/pizza.png');
}

cases = randomize(cases);

var b = 0 ;
Array.from(document.querySelectorAll('img')).forEach(el => {
        el.src = cases[b];
        el.id=cases[b]
        b++;
    }
);

stateChange(-1);

function stateChange(newState) {
    setTimeout(function(){
        Array.from(document.querySelectorAll('img')).forEach(el => {
                el.src = "/images/face_cachee.png";
            }
        );
    }, 5000);
}

var card1;
var card2;
var find=0;
var lastClicked;

Array.from(document.querySelectorAll('button img')).forEach(el => {
    el.onclick = function(){
        el.src = el.id;
        if(lastClicked != el){
            if(card1 == null){
                card1 = el;
            } else {
                card2 = el;
                if(card1.src == card2.src ) {
                    effacerPairesTrouve(el);
                    find+=2;
                } else {
                    hide();
                }
                card1 = null;
                card2 = null;
            }
            lastClicked = el;
        } else {
            el.src = "/images/face_cachee.png";
        }
    }
});

function hide(){
    card1.src = "/images/face_cachee.png";
    card2.src = "/images/face_cachee.png";
}


function randomize(tab) 
{
    var i, j, tmp;
    for (i = tab.length - 1; i > 0; i--) 
    {
        j = Math.floor(Math.random() * (i + 1));
        tmp = tab[i];
        tab[i] = tab[j];
        tab[j] = tmp;
    }
    return tab;
}


function effacerPairesTrouve(el){
    el.parentNode.remove();
    lastClicked.parentNode.remove();
}

