var slider = document.getElementById("volumeRange");
var output = document.getElementById("volumeValue");
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
}