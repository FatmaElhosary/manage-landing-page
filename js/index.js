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