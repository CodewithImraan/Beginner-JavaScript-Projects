const inputarea = document.getElementById("inputarea");
const submitbtn = document.getElementById("submitbtn");
const result = document.getElementById("result");
let age;

submitbtn.onclick = function () {
  age = inputarea.value;
  age = Number(age);

  if (age >= 100) {
    result.textContent = "Youre not supposed to live 😂";
  } else if (age == 0) {
    result.textContent = "Welcome to this fake World🎁";
  } else if (age <= 18) {
    result.textContent = "Focus on Studies and career";
  } else if ((age >= 18, age <= 49)) {
    result.textContent = "Dont slave to Drugs 👍";
  } else if ((age >= 50, age <= 69)) {
    result.textContent = "Please try to consult a Doctor❤️";
  } else {
    result.textContent = "You need some rest form unnecessary things✔️";
  }
};
