//array

let images = ["images/dreamy.jpg", "images/human.jpg", "images/nightsky.jpg"];
let i;
let image = images.length;
let interval = setInterval(next, 3000);
//prev
function prev() {
    for (i = 0; i < image; i++) {
        i--;
    }
    return document.getElementsByClassName("item").src = images[i];
}

//next
function next() {
    for (i = 0; i < image; i++) {
        i = i + 1;
        return document.getElementsByClassName("item").src = images[i];
    }
}

//current image
function slide(n) {
    for (; i < image; i++) {
        if (n == n) {
            return document.getElementsByClassName("item").src = images[i];
        }
    }
}

//interval

// function timer() {
//     for (i = 0; i < image; i++) {
//         i++
//     }

// }