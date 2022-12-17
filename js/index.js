
////////////////////Dark Mode Code////////////////////////////////
var flag = true;
var logo = document.getElementById('logo')

$(function(){
  $('.checkbox').on('change' , function() {

    flag = !flag;
    console.log(flag);

    if(flag == true)
      {
    $(':root').css('--varyLightGray' , 'hsl(0, 0%, 98%)')
    $(':root').css('--darkBlue' , 'hsl(228, 39%, 23%)')
    logo.src="./images/logo.svg" ;
      }else{
    $(':root').css('--varyLightGray' , 'hsl(228, 39%, 23%)')
    $(':root').css('--darkBlue' , 'hsl(0, 0%, 98%)')
    logo.src="./images/logofoter.svg" ;
  }
  })
})

/////////////////////Changing social images color //////////////////////// 

var coimages = document.querySelectorAll('.h33')

console.log(coimages);
coimages.forEach((img) => {
  img.addEventListener('mouseover', function(){
    console.log(img.id);

    switch (img.id) {
      case 'face':
        img.src = '../images/icon-facebook2.svg'
      break;
      case 'youtube':
        img.src = '../images/icon-youtube2.svg' 
      break;
      case "twitter" :
        img.src = '../images/icon-twitter2.svg' 
      break;
      case "pinterest" :
        img.src = '../images/icon-pinterest2.svg' 
      break;
      case "instagram" :
        img.src = '../images/icon-instagram2.svg' 
      break;
      default:
        break;
    }

  })
  img.addEventListener('mouseout', function(){
    console.log(img.id);

    switch (img.id) {
      case 'face':
        img.src = '../images/icon-facebook.svg'
      break;
      case 'youtube':
        img.src = '../images/icon-youtube.svg' 
      break;
      case "twitter" :
        img.src = '../images/icon-twitter.svg' 
      break;
      case "pinterest" :
        img.src = '../images/icon-pinterest.svg' 
      break;
      case "instagram" :
        img.src = '../images/icon-instagram.svg' 
      break;
      default:
        break;
    }

  })
}

)

////////////////////Email validation//////////////////////////////////////////////////
var valid = document.getElementById('valid')
var invalid = document.getElementById('invalid')

function ValidateEmail(input) {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (input.value.match(validRegex)) {
  
    //   alert("Valid email address!");
  
    //   document.form1.text1.focus();

   valid.style.display = 'flex'
   invalid.style.display = 'none'
    
      return true;
  
    } else {
  
    //   alert("Invalid email address!");
  
    //   document.form1.text1.focus();
    valid.style.display = 'none'
    invalid.style.display = 'flex'
      return false;
  
    }
  
  }

 var val = document.getElementById('update');


  document.getElementById('submit').addEventListener('click' ,()=>{ValidateEmail(val)} )




  /* --------------------------------O M A A R---------------------------------------------- */

var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

var logo = document.getElementById("logo");

var x = window.matchMedia("(max-width: 768px)");

var flag = true;

function track() {
    
    if (flag == true) {
        if (window.outerWidth > 768) {
            btn.style.display = "none";
            console.log("Big Screen");
        }
        else {
            btn.style.display = "block";
        }
    }
    else{
        btn.style.display = "none";
    }
}
var myInterval
function start(){
 myInterval = setInterval(track, 250);
}
   

function stop(){
    clearInterval(myInterval);
}
// When the user clicks the button, open the modal 
btn.onclick = function () {
    flag = false;
    stop();
    modal.style.display = "block";
    btn.style.display = "none";
    logo.style.paddingLeft = "30%";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
    if (x.matches) {
        btn.style.display = "block";
        logo.style.paddingLeft = "0%";
    }
    else {
        btn.style.display = "none";
    }
    flag = true;
    start();
}


/* --------------------------------O M A A R---------------------------------------------- */
/* --------------------------------O M A A R---------------------------------------------- */
/* --------------------------------O M A A R---------------------------------------------- */




/*.................................F a t m a ...............................................*/
/*.................................F a t m a ...............................................*/
/*.................................F a t m a ...............................................*/
/*.................................F a t m a ...............................................*/


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