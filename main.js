var btn= document.querySelectorAll('.tab-btn');
var tab= document.querySelectorAll('.tab');
function reset(){
    for(var i=0; i<tab.length;i++){
        tab[i].style.display="none";
        tab[i].style.backgroundColor="#08c";
        btn[i].style.backgroundColor="#222";

    }
}

function tabOne(){
    reset();
    tab[0].style.display="block";
    tab[0].style.backgroundColor="#08c";
    btn[0].style.backgroundColor="#08c";
}
tabOne();

for(let a=0; a<tab.length; a++){
    btn[a].addEventListener('mouseover',function(){
        reset();
        tab[a].style.display="block";
        //tab[a].style.backgroundColor="#08c";
        btn[a].style.backgroundColor="#08c";
    });
}