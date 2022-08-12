const btn = document.querySelector("#btn");
const menu = document.querySelector(".menu");


let count_1 = 0;
btn.addEventListener('click', function onClick(e) {
    count_1 ++;
    if (count_1 %2 == 0) {
        btn.src = "images/icon-hamburger.svg";
        menu.classList.remove("show");
    }else {
        btn.src = "images/icon-close.svg";
        menu.classList.add("show");    } 
})