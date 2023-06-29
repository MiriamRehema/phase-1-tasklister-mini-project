document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const checkbox = document.querySelector("#id-checkbox");

checkbox.addEventListener("click", checkboxClick, false);

function checkboxClick(event) {
  let warn = "preventDefault() won't let you check this!<br>";
  document.getElementById("output-box").innerHTML += warn;
  event.preventDefault();
}
  console.log("The DOM has loaded");
  console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );
});


const dateControl = document.querySelector('input[type="date"]');
dateControl.value = "2017-06-01";
console.log(dateControl.value); 



preventDefault()


const myTextbox = document.getElementById("my-textbox");
myTextbox.addEventListener("keypress", checkName, false);




});
