
const counting = document.getElementById('counting') ;
const bada = document.getElementById('bada') ;
const ghata = document.getElementById('ghata') ;
const mat = document.getElementById('mat') ;
let count = 0;

bada.onclick = function (){
    count++;
    counting.textContent = count;
}
ghata.onclick = function (){
    count--;
    counting.textContent = count;
}
mat.onclick = function (){
    count=0;
    counting.textContent = count;
}