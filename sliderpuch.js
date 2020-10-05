let art = document.getElementsByTagName("article");
let slider = [...document.getElementsByClassName("slider")];
let slideWidth = 200;
let slide;
let btn2 = document.querySelectorAll('.btn2');
let btn1 = document.querySelectorAll('.btn1');
let delet = [...document.querySelectorAll('.delete')];
let dot = [...document.querySelectorAll('.dot')];

let article = document.getElementsByClassName("article");
let sliderp = [...document.getElementsByClassName("sliderp")];
let slidewidth = 500;
let slidep;
let btnp2 = document.querySelectorAll('.btnp2');
let btnp1 = document.querySelectorAll('.btnp1');


if (slider.length > 0) {
    slider.forEach(sliderr => {
        slide = [...sliderr.getElementsByClassName('slide')];
        for (var i = 0; i < slide.length; i++) {
            slide[i].classList.add('animated')
            slide[i].style.left = slideWidth * i + 'px'
        }
        if (sliderr.children.length == 1) {
            let id = sliderr.getAttribute('data');
            btn1.forEach(element => {
                let el = element.getAttribute('data');
                if (id == el) {
                    element.style.opacity = 0
                }
            })
            btn2.forEach(element => {
                let el = element.getAttribute('data');
                if (id == el) {
                    element.style.opacity = 0
                }
            })
        }
    })
}

btn2.forEach(btn22 => {
    btn22.addEventListener('click', function(e) {
        let elem = e.target;
        let id = elem.getAttribute('data');
        let inslide = slider.find(item => item.getAttribute('data') == id);
        let move = inslide.getElementsByClassName('slide');
        let lastchild = inslide.lastChild.previousSibling;
        let firstchild = inslide.firstChild.nextSibling;
        if (lastchild.style.left != 0 + 'px') {
            moveSlides(move, 'forward')
        }
        btn1.forEach(elemen => {
            let idd = elemen.getAttribute('data');

            if (id == idd && firstchild.style.left != 0 + 'px') {
                elemen.style.opacity = 1
            }
        })
        btn2.forEach(elemen => {
            let idd = elemen.getAttribute('data');

            if (id == idd && lastchild.style.left == 0 + 'px') {
                elemen.style.opacity = 0
            }
        })
    })
})
btn1.forEach(btn11 => {
    btn11.addEventListener('click', function(e) {
        let elem = e.target;
        let id = elem.getAttribute('data');
        let inslide = slider.find(item => item.getAttribute('data') == id);
        let move = inslide.getElementsByClassName('slide');
        let firstchild = inslide.firstChild.nextSibling;
        let lastchild = inslide.lastChild.previousSibling;
        if (firstchild.style.left != 0 + 'px') {
            moveSlides(move, 'backward')
        }
        btn1.forEach(elemen => {
            let idd = elemen.getAttribute('data');

            if (id == idd && firstchild.style.left == 0 + 'px') {
                elemen.style.opacity = 0
            }
        })
        btn2.forEach(elemen => {
            let idd = elemen.getAttribute('data');

            if (id == idd && lastchild.style.left != 0 + 'px') {
                elemen.style.opacity = 1
            }
        })
    })
})



function moveSlides(move, direction) {
    for (var j = 0; j < move.length; j++) {
        if (direction == "backward") {
            move[j].style.left = +move[j].style.left.replace(/[^-\d\.]/g, '') + slideWidth + "px";
        } else if (direction == "forward") {
            move[j].style.left = +move[j].style.left.replace(/[^-\d\.]/g, '') - slideWidth + "px";
        }
    }
}



if (sliderp.length > 0) {
    sliderp.forEach(sliderr => {
        slidep = [...sliderr.getElementsByClassName('slidep')];
        for (var i = 0; i < slidep.length; i++) {
            slidep[i].style.left = slidewidth * i + 'px'
            slidep[i].classList.add('animated')
        }
        if (sliderr.children.length == 1) {
            let id = sliderr.getAttribute('data');
            btnp1.forEach(element => {
                let el = element.getAttribute('data');
                if (id == el) {
                    element.style.opacity = 0
                }
            })
            btnp2.forEach(element => {
                let el = element.getAttribute('data');
                if (id == el) {
                    element.style.opacity = 0
                }
            })
        }
    })
}

btnp2.forEach(btn222 => {
    btn222.addEventListener('click', function(e) {
        let elem = e.target;
        let id = elem.getAttribute('data');
        let inslide = sliderp.find(item => item.getAttribute('data') == id);
        let move = inslide.getElementsByClassName('slidep');
        let lastchild = inslide.lastChild.previousSibling;
        let firstchild = inslide.firstChild.nextSibling;
        if (lastchild.style.left != 0 + 'px') {
            moveSlidep(move, 'forward')
        }
        window.addEventListener('resize', function() {
            // Get the new slide width


            // Recalculate the left position of the slides
            for (i = 0; i < move.length; i++) {
                if (i <= (move.length - 1)) {
                    move[i].style.left = "-" + slidewidth * ((move.length - 1) - i) + "px";
                } else if (i > (move.length - 1)) {
                    move[i].style.left = slidewidth * (i - (move.length - 1)) + "px";
                }
            }
        });
        btnp1.forEach(elemen => {
            let idd = elemen.getAttribute('data');

            if (id == idd && firstchild.style.left != 0 + 'px') {
                elemen.style.opacity = 1
            }
        })
        btnp2.forEach(elemen => {
            let idd = elemen.getAttribute('data');

            if (id == idd && lastchild.style.left == 0 + 'px') {
                elemen.style.opacity = 0
            }
        })
    })
})
btnp1.forEach(btn11 => {
    btn11.addEventListener('click', function(e) {
        let elem = e.target;
        let id = elem.getAttribute('data');
        let inslide = sliderp.find(item => item.getAttribute('data') == id);
        let move = inslide.getElementsByClassName('slidep');
        let firstchild = inslide.firstChild.nextSibling;
        let lastchild = inslide.lastChild.previousSibling;
        if (firstchild.style.left != 0 + 'px') {
            moveSlidep(move, 'backward')
        }
        btnp1.forEach(elemen => {
            let idd = elemen.getAttribute('data');

            if (id == idd && firstchild.style.left == 0 + 'px') {
                elemen.style.opacity = 0
            }
        })
        btnp2.forEach(elemen => {
            let idd = elemen.getAttribute('data');

            if (id == idd && lastchild.style.left != 0 + 'px') {
                elemen.style.opacity = 1
            }
        })
    })
})


function moveSlidep(move, direction) {
    for (var j = 0; j < move.length; j++) {
        if (direction == "backward") {
            move[j].style.left = +move[j].style.left.replace(/[^-\d\.]/g, '') + slidewidth + "px";
        } else if (direction == "forward") {
            move[j].style.left = +move[j].style.left.replace(/[^-\d\.]/g, '') - slidewidth + "px";
        }
    }
}
let deltoggle = 0;
dot.forEach(dot => {
    dot.addEventListener('click', function(e) {
        let elem = e.target;
        let id = elem.getAttribute('data')
        let del = delet.find(item => item.getAttribute('data') == id)
        if (!deltoggle) {
            del.style.transform = 'translateX(0)'
            deltoggle = 1;
        } else {
            del.style.transform = 'translateX(106%)'
            deltoggle = 0;
        }

    })
})