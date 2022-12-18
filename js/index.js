

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

 const menu=document.querySelector('.menu');
document.querySelectorAll('.menu--wrapper').forEach(carousel=>{
const items=carousel.querySelectorAll('.menu--item');
const buttonsHtml=Array.from(items,()=>{
    return ` <span class="carousel-button"></span>`;
});
//console.log(buttonsHtml);
 carousel.insertAdjacentHTML("beforeend",`
<div class="carousel-nav">
${buttonsHtml.join("")}
</div>
`); 


const buttons=carousel.querySelectorAll('.carousel-button');
buttons.forEach((button,i)=>{
button.addEventListener('click',()=>{
    //unselect all the items
    items.forEach(item=>item.classList.remove('item-selected'));
    buttons.forEach(button=>button.classList.remove('carousel-button-selected'));

    ///select
    items[i].classList.add('item-selected');
    button.classList.add("carousel-button-selected");
});
});
//select the first item in page load
items[0].classList.add('item-selected');
buttons[0].classList.add("carousel-button-selected");
}); 
////////////////////////////////////////////////////////////////////
let sliderContainer = document.querySelector('.menu');
let innerSlider = document.querySelector('.menu--wrapper');

let pressed = false;
let startX;
let x;

const checkBoundary = () => {
    let outer = sliderContainer.getBoundingClientRect();
    let inner = innerSlider.getBoundingClientRect();

    if (parseInt(innerSlider.style.left) > 0) {
        innerSlider.style.left = "0px";
    }
   else if (inner.right < outer.right) {
        innerSlider.style.left = `-${inner.width - outer.width}px`;
    }
    
};
sliderContainer.addEventListener("mousedown", (e) => {
    pressed = true;
    startX = e.offsetX - innerSlider.offsetLeft;
    sliderContainer.style.cursor = "grabbing";
});

sliderContainer.addEventListener("mouseenter", () => {
    sliderContainer.style.cursor = "grab";
});

sliderContainer.addEventListener("mouseup", () => {
    sliderContainer.style.cursor = "grab";
    pressed = false;
});

sliderContainer.addEventListener("mousemove", (e) => {
    if (!pressed) return;
    e.preventDefault();

    x = e.offsetX;

    innerSlider.style.left = `${x - startX}px`;
    checkBoundary();
});

