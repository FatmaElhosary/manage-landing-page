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