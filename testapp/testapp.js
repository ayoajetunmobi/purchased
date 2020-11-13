let conTinue = document.getElementById('contbtn');
let preVious = document.getElementById('previous');
let Start = document.getElementById("startbtn");
let next = document.getElementById('nextbtn');
let nextbtn = document.getElementById('nextdisbtn');
let submitbtn = document.getElementById("subDesc");
let succpage = [...document.querySelectorAll(".succesful img")];
let nomatch = [...document.querySelectorAll(".home img")];
let amatch = [...document.querySelectorAll(".amatch img")];
let app = document.getElementById('myapp');
let count = 2;
let tog = 0;
let datar = [];
let gender = document.getElementById("gender");
let status = document.getElementById("status")

gender.addEventListener('click', gendercheck);
status.addEventListener('click', statuscheck);




document.addEventListener('click', function(event) {
    let elem = event.target;
    event.preventDefault()
    if (elem == conTinue) {
        count++
        remove()
        app.children[count].classList.add('visible')
    }
    if (elem == Start) {
        count++
        remove()
        app.children[count].classList.add('visible')
    }
    if (elem == next) {
        count++
        remove()
        app.children[count].classList.add('visible')
    }
    if (elem == nextbtn) {
        count++
        remove()
        app.children[count].classList.add('visible')
    }
    if (elem == submitbtn) {
        count++
        remove()
        app.children[count].classList.add('visible')
        getdata()
    }
    succpage.forEach(element => {
        if (elem == element) {
            preVious.style.display = 'none'
            count++
            display()
        }
    })
    amatch.forEach(element => {
        if (elem == element) {
            count++
            remove
            show()
            preVious.style.display = 'none'
        }
    })

    if (elem == preVious && count > 2) {
        remove()
        app.children[count].previousElementSibling.classList.add('visible')
        count--
    }
    cont()
})

function cont() {
    if (count > 4) {
        preVious.style.display = "block"
    }
    if (count == 4) {
        preVious.style.display = "none"
    }
}

function remove() {
    let page = [...document.getElementsByClassName('page')];
    page.forEach(page => {
        page.classList.remove('visible')
    })
}

function getdata() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;
    let handle = document.getElementById("handle").value;
    let eyes = document.getElementById("eyes").value;
    let nose = document.getElementById("nose").value;
    let lips = document.getElementById("lips").value;
    let eyebrow = document.getElementById("eyebrow").value;
    let hair = document.getElementById("hair").value;
    let height = document.getElementById("height").value;
    let personality = document.getElementById("personality").value;
    let hobbies = document.getElementById("hobbies").value;
    let facts = document.getElementById("facts").value;

    let userData = {
        name: name,
        email: email,
        age: age,
        handle: handle,
        eyes: eyes,
        nose: nose,
        lips: lips,
        eyebrow: eyebrow,
        hair: hair,
        height: height,
        personality: personality,
        hobbies: hobbies,
        facts: facts
    }

    if (localStorage.getItem('data') == null) {
        let data = []
        data.push(userData)
        localStorage.setItem('data', JSON.stringify(data));
    } else {
        let data = JSON.parse(localStorage.getItem('data'));
        data.push(userData)
        localStorage.setItem('data', JSON.stringify(data))
    }

}


function display() {
    datar = JSON.parse(localStorage.getItem('data'));
    console.log(datar)
    let eyes = document.getElementById("eyes").value;
    let nose = document.getElementById("nose").value;
    let lips = document.getElementById("lips").value;
    let eyebrow = document.getElementById("eyebrow").value;
    let hair = document.getElementById("hair").value;
    let height = document.getElementById("height").value;
    let personality = document.getElementById("personality").value;
    let hobbies = document.getElementById("hobbies").value;
    let facts = document.getElementById("facts").value;

    datar.forEach(data => {
        if (data.eyes.toLowerCase() == eyes.toLowerCase() &&
            data.nose.toLowerCase() == nose.toLowerCase() &&
            data.lips.toLowerCase() == lips.toLowerCase() &&
            data.eyebrow.toLowerCase() == eyebrow.toLowerCase() &&
            data.hair.toLowerCase() == hair.toLowerCase() &&
            data.height.toLowerCase() == height.toLowerCase() &&
            data.personality.toLowerCase() == personality.toLowerCase() &&
            data.hobbies.toLowerCase() == hobbies.toLowerCase() &&
            data.facts.toLowerCase() == facts.toLowerCase()
        ) {
            let cus = count + 1;
            remove()
            app.children[cus].classList.add('visible')
            console.log('yes')
        } else {
            remove()
            app.children[count].classList.add('visible')
        }
    })
}

function show() {
    let eyes = document.getElementById("eyes").value;
    let nose = document.getElementById("nose").value;
    let lips = document.getElementById("lips").value;
    let eyebrow = document.getElementById("eyebrow").value;
    let hair = document.getElementById("hair").value;
    let height = document.getElementById("height").value;
    let personality = document.getElementById("personality").value;
    let hobbies = document.getElementById("hobbies").value;
    let facts = document.getElementById("facts").value;

    let div = document.createElement('div');
    div.classList.add('page')
    div.classList.add('visible')
    div.classList.add('description');

    div.innerHTML = `   <div>
                <img src="./form page/komma 1 copy 18-8.png " class="backimg" alt="">
            </div>
            <form action="" class="form">
     <h6>STRANGER'S POTRAIT</h6>
                <h6>Draw Me !</h6>
                <h5>FACIAL FEATURES</h5>
                <input type="text" placeholder="EYES:${eyes}" id="eyes"><br>
                <input type="text" placeholder="NOSE:${nose}" id="nose"><br>
                <input type="text" placeholder="LIPS:${lips}" id="lips"><br>
                <input type="text" placeholder="EYEBROW:${eyebrow}" id="eyebrow"><br>


                <h5>FEATURES</h5>


                <input type="text" placeholder="hair:${hair}" id="hair"><br>
                <input type="text" placeholder="height:${height}" id="height">

                <h5>PERSONALITY</h5>

                <input type="text" id="personality" placeholder=${personality}>

                <h5>HOBBIES/FAVORITE THINGS</h5>

                <input type="text" id="hobbies" placeholder=${hobbies}>
                <h5>INTERSTING FACT / SHORT NOTE</h5>

                <input type="text" id="facts" placeholder=${facts}><br>`

    app.appendChild(div)
}




function gendercheck(event) {
    let elem = event.target;
    let genders = document.querySelectorAll("#gender .gender");
    if (elem.className.indexOf("active") == -1) {
        for (var i = 0; i < genders.length; i++) {
            genders[i].classList.remove('active')
        }
        if (elem.hasAttribute("data")) {
            elem.classList.add("active")
        }
    }
}

function statuscheck() {
    let elem = event.target;
    let statuss = document.querySelectorAll("#status .statuss");
    if (elem.className.indexOf("active") == -1) {
        for (var i = 0; i < statuss.length; i++) {
            statuss[i].classList.remove('active')
        }
        if (elem.hasAttribute("data")) {
            elem.classList.add("active")
        }
    }
}