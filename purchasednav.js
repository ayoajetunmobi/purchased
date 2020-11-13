var i = 0,
    loginbtn = document.querySelector("#loginbtn"),
    homebtn = document.querySelector("#homebtn"),
    guidebtn = document.querySelector("#guidebtn"),
    X = document.querySelector("#X"),
    probtn = document.querySelector("#probtn"),
    producbtn = document.querySelector("#producbtn"),
    sections = document.getElementById('section');
let createAcct = document.getElementById("createAcct");
let profilenavbtn = document.getElementById("profilenavbtn");

homebtn.addEventListener('click', homebt);
profilenavbtn.addEventListener('click', probt);
guidebtn.addEventListener('click', guidebt)
loginbtn.addEventListener('click', appear);
X.addEventListener('click', disappear);
probtn.addEventListener('click', proappear);
producbtn.addEventListener('click', producappear);
createAcct.addEventListener('click', secAppear);

function homebt() {
    remover()
    homebtn.classList.add('active')
}

function probt() {
    remover()
    profilenavbtn.classList.add('active')
}

function guidebt() {
    remover()
    guidebtn.classList.add('active')
}


function appear() {
    remover()
    var login = document.getElementById('login');
    login.style.display = 'block';
    loginbtn.classList.add('active');
}

function disappear() {
    var login = document.getElementById('login');
    remover()
    login.style.display = 'none';
    homebtn.classList.add('active')
    if (wrapone.style.display == 'none') {
        remover()
        profilenavbtn.classList.add('active')
    }
    if (sections.style.display == 'block') {
        loginbtn.classList.add('active')
    }
}

function secAppear() {
    let docs = document.documentElement;
    if (docs.offsetWidth <= 500) {
        profile.style.display = 'none'
        product.style.display = 'none'
        wrapone.style.display = "none"
        sections.style.display = "block"
        login.style.display = 'none';
    }
}

function proappear(event) {
    event.preventDefault()
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
    event.preventDefault()
    var profile = document.getElementById('profile'),
        product = document.getElementById('products');

    profile.style.display = 'none'
    product.style.display = 'block'
    probtn.classList.remove('active')
    producbtn.classList.add('active')

}

function remover() {
    let navs = [...document.querySelectorAll("nav li a")];
    navs.forEach(nav => nav.classList.remove('active'))
}