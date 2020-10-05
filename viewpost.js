window.onscroll = yhandler;

function yhandler() {
    var wrap = document.getElementById("wrap1");
    var contentheight = wrap.offsetHeight + 500;
    var yoffset = window.pageYOffset;
    var y = yoffset + window.innerHeight;
    if (y >= contentheight) {
        wrap.innerHTML += '<div class="pos" id="1"><div class = "propicp">  <a href="#"><img src="image-1.jpeg" alt="" bigpic="image-1.jpeg" id="propicc"></a><a>Username</a></div></div>';
    }

}