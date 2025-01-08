
const counting = document.getElementById('counting') ;
const increase = document.getElementById('increase') ;
const decrease = document.getElementById('decrease') ;
const reset = document.getElementById('reset') ;
let count = 0;

increase.onclick = function (){
    count++;
    counting.textContent = count;
}
decrease.onclick = function (){
    count--;
    counting.textContent = count;
}
reset.onclick = function (){
    count=0;
    counting.textContent = count;
}