
const checkbox = document.getElementById('checkbox');
const webdev = document.getElementById('webdev');
const appdev = document.getElementById('appdev');
const uiux = document.getElementById('uiux');
const digital = document.getElementById('digital');
const mySubmit = document.getElementById('mySubmit')
const purchaseResult = document.getElementById('purchaseResult');
const courseResult = document.getElementById('courseResult');


mySubmit.onclick = function () {

    if (checkbox.checked) {
        purchaseResult.textContent = `You're Purchased 👍`
    }
    else{
        purchaseResult.textContent = `You're NOT Purchased❌`

    }

    if (webdev.checked) {
        courseResult.textContent = `Web development`
    }
    else if (appdev.checked){
        courseResult.textContent = `App development`
    } 
    else if (uiux.checked){
        courseResult.textContent = `UI/Ux Designer`
    }
    else if (digital.checked){
        courseResult.textContent = `Digital Marketing`
    }
    else{
        courseResult.textContent = ` One of the Trending Topic`
    }
    
    
}