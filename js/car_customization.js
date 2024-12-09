var colors = ['#220000', '#00ff00', '#0000ff', '#330000', '#00aa00', '#0000aa', '#440000', '#00ee00'];
var random = colors[Math.floor(Math.random() * colors.length)];

var color_options = document.getElementsByClassName('color');

for (var i = 0; i < colors.length; i++) {
    color_options[i].style.background = random;
    console.log("Color");
}

function pick(el) {
    el.classList.add("picked");
}