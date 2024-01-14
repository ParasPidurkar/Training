var images = [
    "./images/test1.jfif", // Placeholder image 1
    "./images/test2.jfif", // Placeholder image 2
    "./images/test3.jfif"  // Placeholder image 3
];
var currentImageIndex = 0;

function showImage(index) {
    var img = document.getElementById("sliderImage");
    img.src = images[index];
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(currentImageIndex);
}

window.onload = function() {
    showImage(currentImageIndex);
}
