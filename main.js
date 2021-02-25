
//array

let images = ["images/dreamy.jpg", "images/human.jpg", "images/nightsky.jpg"];
let i = 0;
let image = images.length - 1;

//prev
function prev() {
    if (i < image) {
        i--;
    }
    return document.getElementsByClassName("item").src = images[i];
}

//next
function next() {
    if (i > image) {
        i++;
    }
    return document.getElementsByClassName("item").src = images[i];
}

//current image
function slide(n) {
    for (i = 0; i < image; i++) {
        if (n === n) {
            return document.getElementsByClassName("item").src = images[i];
        }
    }
}