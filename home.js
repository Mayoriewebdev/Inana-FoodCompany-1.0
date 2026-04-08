
const images = [
"images/Everyone gateway text.png",
"images/Nestle.png",
];

let index = 0;
const slider = document.getElementById("headlineSlider");

setInterval(() => {

index++;
if(index >= images.length){
index = 0;
}

slider.src = images[index];

}, 3000); // 10 seconds

