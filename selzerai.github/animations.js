
window.alert("Welcome to my page!");

<img id="myImage" onclick="changeImage()" src="nighingale.png" width="100" height="180">

<p>Click the image!.</p>

<script>
function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("nighingale1")) {
        image.src = "nighingale.png";
    } else {
        image.src = "nighingale1.png";
    }
<h1 id = "myImage">Welcome!</h1>
<button id="btn" onclick = "changeImage()" >Click Me!</button>
}
</script>