var colors = ['#220000', '#00ff00', '#0000ff', '#330000', '#00aa00', '#0000aa', '#440000', '#00ee00'];
var random = colors[Math.floor(Math.random() * colors.length)];

var color_options = document.getElementsByClassName('color');

function pick(el) {
    reset();
    el.classList.add("picked");
}

function reset() {
    for (var i = 0; i < color_options.length; i++) {
        color_options[i].classList.remove("picked");
    }
}