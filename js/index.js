
////////////////////Dark Mode Code////////////////////////////////
$(".change").on("click", function () {
    if ($("body").hasClass("dark")) {
        $("body").removeClass("dark");
        $(".change").text("OFF");
    } else {
        $("body").addClass("dark");
        $(".change").text("ON");
    }
});
////////////////////Dark Mode Code////////////////////////////////

const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', ()=>{
  document.body.classList.toggle('dark');
})


////////////////////Email validation//////////////////////////////////////////////////
var valid = document.getElementById('valid')
var invalid = document.getElementById('invalid')

function ValidateEmail(input) {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (input.value.match(validRegex)) {
  
    //   alert("Valid email address!");
  
    //   document.form1.text1.focus();

   valid.style.display = 'block'
   invalid.style.display = 'none'
    
      return true;
  
    } else {
  
    //   alert("Invalid email address!");
  
    //   document.form1.text1.focus();
    valid.style.display = 'none'
    invalid.style.display = 'block'
      return false;
  
    }
  
  }

 var val = document.getElementById('update');


  document.getElementById('submit').addEventListener('click' ,()=>{ValidateEmail(val)} )