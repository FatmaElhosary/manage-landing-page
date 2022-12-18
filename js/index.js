/* --------------------------------O M A A R---------------------------------------------- */

var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

var logo = document.getElementById("logo");

var maxWidth = window.matchMedia("(max-width: 768px)");

var flag = true;

function track() {
    
    if (flag == true) {
        if (window.outerWidth > 768) {
            btn.style.display = "none";
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
    if (maxWidth.matches) {
        btn.style.display = "block";
        logo.style.paddingLeft = "0%";
    }
    else {
        btn.style.display = "none";
    }
    flag = true;
    start();
}



// btn.onclick = function() {
//     modal.style.display = "block";
//     logo.style.paddingLeft = "30%";
//   }

//   span.onclick = function() {
//     modal.style.display = "none";
//     logo.style.paddingLeft = "0%";
//   }

//   window.onclick = function(event) {
//     if (event.target == modal) {
//       modal.style.display = "none";
//       logo.style.paddingLeft = "0%";
//     }
//   }

// window.onclick = function (event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//         if (x.matches) {
//             btn.style.display = "block";
//             logo.style.paddingLeft = "0%";
//         }
//         else {
//             btn.style.display = "none";
//         }
//     }
//     flag = true;
// }

/* --------------------------------O M A A R---------------------------------------------- */