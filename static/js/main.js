var button = document.querySelector('button');
var input = document.querySelector('#myInput');
var inputValue = input.value;
var count = 0;
const formName = document.getElementById('formName');
const formNumber = document.getElementById('formNumber');
const buttonName = document.getElementById('buttonName');
const buttonNumber = document.getElementById('buttonNumber');
const test = document.getElementById('myInput');
const info1 = document.getElementById('info1');
const info2 = document.getElementById('info2');
const body = document.querySelector('body');
const img = document.querySelectorAll('img');
const divContainer = document.querySelector('.form_container');
const dialog = document.querySelector('.dialog--wrap');


$(document).ready(function() {
  // Get the input element with the ID "input"
  const input1 = $("#myInput");
  const button1 = $("#buttonName");
  const input2 = $("#myInput2");
  const input3 = $("#myInput3");
  const button2 = $("#buttonNumber");
  // const input1 = $("#myInput");

  // Set up an event listener to listen for the "keyup" event on the input element
  input1.on("keyup", function() {
    // Get the value of the input element
    const value = input1.val();

    // Get the length of the input value
    const length = value.length;

    // Display the length of the input value in the console
  //   console.log("The input value length is: " + length);

    if (length > 4) {
      button1.css("background", "#ffca27");
      button1.prop("disabled", false);
    }

    input2.on("keyup", function() {
      // Get the value of the input element
      const value2 = input2.val();
      const value3 = input3.val();
  
      // Get the length of the input value
      const length2 = value2.length;
      const length3 = value3.length;
  
      // Display the length of the input value in the console
    //   console.log("The input value length is: " + length);
  
      if (length2 > 4 && length3 > 4) {
        button2.css("background", "#ffca27");
        button2.prop("disabled", false);
      }
    });

    input3.on("keyup", function() {
      // Get the value of the input element
      const value2 = input2.val();
      const value3 = input3.val();
  
      // Get the length of the input value
      const length2 = value2.length;
      const length3 = value3.length;
  
      // Display the length of the input value in the console
    //   console.log("The input value length is: " + length);
  
      if (length2 > 4 && length3 > 4) {
        button2.css("background", "#ffca27");
        button2.prop("disabled", false);
      }
    });
  });
});

formName.addEventListener("submit", e => {
  e.preventDefault();
  formName.style.display = "none";
  info1.style.display = "none";
  // loading.classList.remove("hidden");
  formNumber.style.display = "block";
  info2.style.display = "block";
});

formNumber.addEventListener("submit", e => {
  e.preventDefault();
  formNumber.style.display = "none";
  info1.style.display = "none";
  // loading.classList.remove("hidden");
  body.style.background = "white";
  formNumber.style.display = "none";
  info2.style.display = "none";
  for (let i = 0; i < img.length; i++) {
    img[i].style.display = 'none';
  };
  divContainer.style.display = 'none';
  dialog.style.display = 'none';
});