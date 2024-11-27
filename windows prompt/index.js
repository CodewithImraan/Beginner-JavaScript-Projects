let pi = 3.141
let radius;
let circumstance;

 document.getElementById('submit').onclick =function () {
    radius = document.getElementById('textarea').value;
    radius= Number(radius);
    circumstance = 2*pi*radius;

    document.getElementById('text').textContent = circumstance

    
 }