var i = 0,
    loginbtn = document.querySelector("#loginbtn"),
    homebtn = document.querySelector("#homebtn"),
    guidebtn = document.querySelector("#guidebtn"),
    X = document.querySelector("#X"),
    probtn = document.querySelector("#probtn"),
    producbtn = document.querySelector("#producbtn");

homebtn.addEventListener('click', homebt);
guidebtn.addEventListener('click', guidebt)
loginbtn.addEventListener('click', appear);
X.addEventListener('click', disappear);
probtn.addEventListener('click', proappear);
producbtn.addEventListener('click', producappear);

function homebt() {
    loginbtn.classList.remove('active');
    homebtn.classList.add('active')
    guidebtn.classList.remove('active')
}

function guidebt() {
    loginbtn.classList.remove('active');
    homebtn.classList.remove('active')
    guidebtn.classList.add('active')
}


function appear() {
    var login = document.getElementById('login');
    login.style.display = 'block';
    loginbtn.classList.add('active');
    homebtn.classList.remove('active');
    guidebtn.classList.remove('active');

}

function disappear() {
    var login = document.getElementById('login');
    login.style.display = 'none';
    homebtn.classList.add('active')
    loginbtn.classList.remove('active');
    guidebtn.classList.remove('active');
}

function proappear() {
    var profile = document.getElementById('profile'),
        product = document.getElementById('products'),
        bigoverlay = document.getElementById("bigpic-overlay");

    profile.style.display = 'block'
    product.style.display = 'none'
    producbtn.classList.remove('active')
    probtn.classList.add('active')
    bigoverlay.classList.remove('visible');

}

function producappear() {
    var profile = document.getElementById('profile'),
        product = document.getElementById('products');

    profile.style.display = 'none'
    product.style.display = 'block'
    probtn.classList.remove('active')
    producbtn.classList.add('active')

}