//array
let sliders = document.querySelectorAll(".item");
let right = document.querySelector(".fa-angle-right");
let left = document.querySelector(".fa-angle-left");
let i = 0;

//interval
// let interval = setInterval(next(), 3000);

//prev&next
right.addEventListener("click", () => {
    i++;

    sliders.forEach((slide) => {
        slide.classList.remove("active");
    });

    if (i >= sliders.length) {
        i = 0;
    }

    sliders[i].classList.add("active");

});

left.addEventListener("click", () => {
    i--;

    sliders.forEach((slide) => {
        slide.classList.remove("active");
    });

    if (i < 0) {
        i = sliders.length - 1;
    }

    sliders[i].classList.add("active");

});