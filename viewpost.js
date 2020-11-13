// get post
var wrapone = document.getElementById("wrap");
let wrap = document.getElementById("wrap1");
let userprofile = [];
let allPost = [];
let datax = "";
let propic = document.querySelector(".propic");
let infofancy = document.querySelector(".infofancy");
let content = document.querySelector(".content");
let recentPost = document.querySelector("#recentpost");
let viewpostt = document.querySelector("#forpost");
let getidnum = "";

class Posts {
    async getProfiledata() {
        try {
            let result = await fetch("users.json");
            let data = await result.json();
            let posts = data.user;
            posts = posts.map((users) => {
                const {
                    id,
                    username,
                    propic,
                    description,
                    favquote,
                    tab1,
                    tab2,
                    tab3,
                    tab4,
                    tab5,
                    tab6,
                    tab7,
                    tab8,
                    sex,
                } = users.profile;
                return {
                    id,
                    username,
                    propic,
                    description,
                    favquote,
                    tab1,
                    tab2,
                    tab3,
                    tab4,
                    tab5,
                    tab6,
                    tab7,
                    tab8,
                    sex,
                };
            });
            return posts;
        } catch (error) {
            console.log(error);
        }
    }

    async getPost() {
        try {
            let result = await fetch("post.json");
            let data = await result.json();
            let posts = data.posts;
            posts = posts.map((it) => {
                const {
                    username,
                    id,
                    propic,
                    data,
                    price,
                    description,
                    images,
                    ammount
                } = it;

                return {
                    username,
                    id,
                    propic,
                    data,
                    price,
                    description,
                    images,
                    ammount
                };
            });
            return posts;
        } catch (error) {
            console.log(error);
        }
    }
}

// displaypost
class UI {
    constructor() {
        this.result = "";
    }

    displaypost(posts) {
        posts.forEach((post) => {
            this.result += ` <div class="pos" data=${post.data}>
                <a href="#" class="a">${post.username}da</a>
                <div class="propicp">
                    <a href="#"><img data-id=${post.id} src=${
        post.propic
      } alt=""></a>
                </div>
                <div class='article' data=${post.data}>
                    <button class="btnp2" data=${post.data}>></button>
                    <button class="btnp1" data=${post.data}>
                        <</button>
                    <h5 class="pricinp">N${post.price}</h5>
                 ${
                   post.data && post.images
                     ? images(post.data, post.images)
                     : ""
                 }
                </div>
                <div class="parr">
                    <p class="interested" data=${post.data}>Interested :  ${post.ammount}</p>
                </div>
                <div class="describe">
                    <h4> ${post.description} </h4>
                </div>
            </div>`;
        });
        return this.result;
    }
    postfunction() {
        let slider = [...document.getElementsByClassName("slider")];
        let slideWidth = 200;
        let slide;
        let btn2 = document.querySelectorAll(".btn2");
        let btn1 = document.querySelectorAll(".btn1");
        let delet = [...document.querySelectorAll(".delete")];
        let dot = [...document.querySelectorAll(".dot")];

        if (slider.length > 0) {
            slider.forEach((sliderr) => {
                slide = [...sliderr.getElementsByClassName("slide")];
                for (var i = 0; i < slide.length; i++) {
                    slide[i].classList.add("animated");
                    slide[i].style.left = slideWidth * i + "px";
                }
                if (sliderr.children.length == 1) {
                    let id = sliderr.getAttribute("data");
                    btn1.forEach((element) => {
                        let el = element.getAttribute("data");
                        if (id == el) {
                            element.style.opacity = 0;
                        }
                    });
                    btn2.forEach((element) => {
                        let el = element.getAttribute("data");
                        if (id == el) {
                            element.style.opacity = 0;
                        }
                    });
                }
            });
        }

        btn2.forEach((btn22) => {
            btn22.addEventListener("click", function(e) {
                let elem = e.target;
                let id = elem.getAttribute("data");
                let inslide = slider.find((item) => item.getAttribute("data") == id);
                let move = inslide.getElementsByClassName("slide");
                let lastchild = inslide.lastChild.previousSibling;
                let firstchild = inslide.firstChild.nextSibling;
                if (lastchild.style.left != 0 + "px") {
                    moveSlides(move, "forward");
                }
                btn1.forEach((elemen) => {
                    let idd = elemen.getAttribute("data");

                    if (id == idd && firstchild.style.left != 0 + "px") {
                        elemen.style.opacity = 1;
                    }
                });
                btn2.forEach((elemen) => {
                    let idd = elemen.getAttribute("data");

                    if (id == idd && lastchild.style.left == 0 + "px") {
                        elemen.style.opacity = 0;
                    }
                });
            });
        });
        btn1.forEach((btn11) => {
            btn11.addEventListener("click", function(e) {
                let elem = e.target;
                let id = elem.getAttribute("data");
                let inslide = slider.find((item) => item.getAttribute("data") == id);
                let move = inslide.getElementsByClassName("slide");
                let firstchild = inslide.firstChild.nextSibling;
                let lastchild = inslide.lastChild.previousSibling;
                if (firstchild.style.left != 0 + "px") {
                    moveSlides(move, "backward");
                }
                btn1.forEach((elemen) => {
                    let idd = elemen.getAttribute("data");

                    if (id == idd && firstchild.style.left == 0 + "px") {
                        elemen.style.opacity = 0;
                    }
                });
                btn2.forEach((elemen) => {
                    let idd = elemen.getAttribute("data");

                    if (id == idd && lastchild.style.left != 0 + "px") {
                        elemen.style.opacity = 1;
                    }
                });
            });
        });

        function moveSlides(move, direction) {
            for (var j = 0; j < move.length; j++) {
                if (direction == "backward") {
                    move[j].style.left = +move[j].style.left.replace(/[^-\d\.]/g, "") + slideWidth + "px";
                } else if (direction == "forward") {
                    move[j].style.left = +move[j].style.left.replace(/[^-\d\.]/g, "") - slideWidth + "px";
                }
            }
        }
    }
    postfunctionalityII() {
        let slider = [...document.getElementsByClassName("slider")];
        let slideWidth = 200;
        let slide;
        let btn2 = document.querySelectorAll(".btn2");
        let btn1 = document.querySelectorAll(".btn1");
        let delet = [...document.querySelectorAll(".delete")];
        let dot = [...document.querySelectorAll(".dot")];

        if (slider.length > 0) {
            slider.forEach((sliderr) => {
                slide = [...sliderr.getElementsByClassName("slide")];
                for (var i = 0; i < slide.length; i++) {
                    slide[i].classList.add("animated");
                    slide[i].style.left = slideWidth * i + "px";
                }
                if (sliderr.children.length == 1) {
                    let id = sliderr.getAttribute("data");
                    btn1.forEach((element) => {
                        let el = element.getAttribute("data");
                        if (id == el) {
                            element.style.opacity = 0;
                        }
                    });
                    btn2.forEach((element) => {
                        let el = element.getAttribute("data");
                        if (id == el) {
                            element.style.opacity = 0;
                        }
                    });
                }
            });
        }

        btn2.forEach((btn22) => {
            btn22.addEventListener("click", function(e) {
                let elem = e.target;
                let id = elem.getAttribute("data");
                let inslide = slider.find((item) => item.getAttribute("data") == id);
                let move = inslide.getElementsByClassName("slide");
                let lastchild = inslide.lastChild.previousSibling;
                let firstchild = inslide.firstChild.nextSibling;
                if (lastchild.style.left != 0 + "px") {
                    moveSlides(move, "forward");
                }
                btn1.forEach((elemen) => {
                    let idd = elemen.getAttribute("data");

                    if (id == idd && firstchild.style.left != 0 + "px") {
                        elemen.style.opacity = 1;
                    }
                });
                btn2.forEach((elemen) => {
                    let idd = elemen.getAttribute("data");

                    if (id == idd && lastchild.style.left == 0 + "px") {
                        elemen.style.opacity = 0;
                    }
                });
            });
        });
        btn1.forEach((btn11) => {
            btn11.addEventListener("click", function(e) {
                let elem = e.target;
                let id = elem.getAttribute("data");
                let inslide = slider.find((item) => item.getAttribute("data") == id);
                let move = inslide.getElementsByClassName("slide");
                let firstchild = inslide.firstChild.nextSibling;
                let lastchild = inslide.lastChild.previousSibling;
                if (firstchild.style.left != 0 + "px") {
                    moveSlides(move, "backward");
                }
                btn1.forEach((elemen) => {
                    let idd = elemen.getAttribute("data");

                    if (id == idd && firstchild.style.left == 0 + "px") {
                        elemen.style.opacity = 0;
                    }
                });
                btn2.forEach((elemen) => {
                    let idd = elemen.getAttribute("data");

                    if (id == idd && lastchild.style.left != 0 + "px") {
                        elemen.style.opacity = 1;
                    }
                });
            });
        });

        function moveSlides(move, direction) {
            for (var j = 0; j < move.length; j++) {
                if (direction == "backward") {
                    move[j].style.left = +move[j].style.left.replace(/[^-\d\.]/g, "") + slideWidth + "px";
                } else if (direction == "forward") {
                    move[j].style.left = +move[j].style.left.replace(/[^-\d\.]/g, "") - slideWidth + "px";
                }
            }
        }
        let deltoggle = 0;
        dot.forEach((dot) => {
            dot.addEventListener("click", function(e) {
                let elem = e.target;
                let id = elem.getAttribute("data");
                let del = delet.find((item) => item.getAttribute("data") == id);
                if (!deltoggle) {
                    del.style.transform = "translateX(0)";
                    deltoggle = 1;
                } else {
                    del.style.transform = "translateX(106%)";
                    deltoggle = 0;
                }
            });
        });
        this.deletepost();
    }
    remove(id) {
        allPost = allPost.filter((post) => post.data != id);
        storage.savePost(allPost);
    }

    slideFunctionality() {
        // begining of post sliderp

        let article = document.getElementsByClassName("article");
        let sliderp = [...document.getElementsByClassName("sliderp")];
        let slidewidth = 500;
        let slidep;
        let btnp2 = document.querySelectorAll(".btnp2");
        let btnp1 = document.querySelectorAll(".btnp1");
        let a = [...document.getElementsByClassName("a")];

        a.forEach((elem) => {
            elem.addEventListener("click", () => {
                event.preventDefault();
            });
        });

        if (sliderp.length > 0) {
            sliderp.forEach((sliderr) => {
                slidep = [...sliderr.getElementsByClassName("slidep")];
                for (var i = 0; i < slidep.length; i++) {
                    slidep[i].style.left = slidewidth * i + "px";
                    slidep[i].classList.add("animated");
                }
                if (sliderr.children.length == 1) {
                    let id = sliderr.getAttribute("data");
                    btnp1.forEach((element) => {
                        let el = element.getAttribute("data");
                        if (id == el) {
                            element.style.cursor = "none";
                            element.style.opacity = 0;
                        }
                    });
                    btnp2.forEach((element) => {
                        let el = element.getAttribute("data");
                        if (id == el) {
                            element.style.cursor = "none";
                            element.style.opacity = 0;
                        }
                    });
                }
            });
        }

        btnp2.forEach((btn222) => {
            btn222.addEventListener("click", function(e) {
                let elem = e.target;
                let id = elem.getAttribute("data");
                let inslide = sliderp.find((item) => item.getAttribute("data") == id);
                let move = inslide.getElementsByClassName("slidep");
                let lastchild = inslide.lastChild.previousSibling;
                let firstchild = inslide.firstChild.nextSibling;
                if (lastchild.style.left != 0 + "px") {
                    moveSlidep(move, "forward");
                }

                btnp1.forEach((elemen) => {
                    let idd = elemen.getAttribute("data");

                    if (id == idd && firstchild.style.left != 0 + "px") {
                        elemen.style.opacity = 1;
                    }
                });
                btnp2.forEach((elemen) => {
                    let idd = elemen.getAttribute("data");

                    if (id == idd && lastchild.style.left == 0 + "px") {
                        elemen.style.opacity = 0;
                    }
                });
            });
        });
        btnp1.forEach((btn11) => {
            btn11.addEventListener("click", function(e) {
                let elem = e.target;
                let id = elem.getAttribute("data");
                let inslide = sliderp.find((item) => item.getAttribute("data") == id);
                let move = inslide.getElementsByClassName("slidep");
                let firstchild = inslide.firstChild.nextSibling;
                let lastchild = inslide.lastChild.previousSibling;
                if (firstchild.style.left != 0 + "px") {
                    moveSlidep(move, "backward");
                }
                btnp1.forEach((elemen) => {
                    let idd = elemen.getAttribute("data");

                    if (id == idd && firstchild.style.left == 0 + "px") {
                        elemen.style.opacity = 0;
                    }
                });
                btnp2.forEach((elemen) => {
                    let idd = elemen.getAttribute("data");

                    if (id == idd && lastchild.style.left != 0 + "px") {
                        elemen.style.opacity = 1;
                    }
                });
            });
        });

        function moveSlidep(move, direction) {
            for (var j = 0; j < move.length; j++) {
                if (direction == "backward") {
                    move[j].style.left = +move[j].style.left.replace(/[^-\d\.]/g, "") + slidewidth + "px";
                } else if (direction == "forward") {
                    move[j].style.left = +move[j].style.left.replace(/[^-\d\.]/g, "") - slidewidth + "px";
                }
            }
        }

        // end of post sliderp

        // begining of  get profiles
        this.propicclick();
        // end of get profiles
    }
    propicclick() {
        let propic = [...document.getElementsByClassName("propicp")];
        let documentss = document.body;
        let docs = document.documentElement;
        propic.forEach((propic) => {
            propic.addEventListener("click", (elem) => {
                let profilenavbtn = document.getElementById("profilenavbtn");
                let navs = [...document.querySelectorAll("nav li a")];
                navs.forEach(nav => nav.classList.remove('active'))
                profilenavbtn.classList.add('active')
                elem.preventDefault();
                if (elem.target.getAttribute('data-id') == null) {
                    return false
                }
                if (docs.offsetWidth <= 500) {
                    let search = document.getElementById("search");
                    wrapone.style.display = 'none'
                    profile.style.display = 'block'
                    links.style.display = 'block'
                    search.style.display = 'none'
                }
                let data = [];
                let target = elem.target;
                let userp = storage.getPdata(target.getAttribute("data-id"));
                getidnum = target.getAttribute("data-id");
                userprofile = userp;
                allPost.forEach((post) => {
                    if (post.id == target.getAttribute("data-id")) {
                        data.push(post);
                    }
                });
                this.firsttab();
                this.addtoproduct(data);
                this.recentPostt(data[0]);
                this.postfunctionalityII();
                this.addtoProfile(userprofile);

            });
        });
    }
    deletepost() {
        let delet = [...document.querySelectorAll(".delete")];
        delet.forEach((del) => {
            del.addEventListener("click", (event) => {
                event.preventDefault();
                let data = [];
                let target = event.target;
                let parent = target.parentElement;
                viewpostt.removeChild(parent);

                this.remove(target.getAttribute("data"));
                allPost.forEach((post) => {
                    if (post.id == getidnum) {
                        data.push(post);
                    }
                });
                let pos = [...wrap.getElementsByClassName("pos")];
                pos.forEach((element) => {
                    if (element.getAttribute("data") == target.getAttribute("data")) {
                        wrap.removeChild(element);
                    }
                });
                if (data.length > 0) {
                    this.recentPostt(data[0]);
                    this.addtoproduct(data);
                    this.postfunctionalityII();
                }
                if (data.length == 0) {
                    recentPost.innerHTML = "";
                }
            });
        });
    }
    addtoProfile(profile) {
        propic.innerHTML = "";
        content.innerHTML = "";
        infofancy.innerHTML = "";

        let a = document.createElement("a");
        let info = document.createElement("ul");
        let tabContent = document.createElement("ul");

        tabContent.classList.add("tab-cotents");

        a.innerHTML = `<img src=${profile.propic} alt="" bigpic=${profile.propic} id="propicc" />`;
        propic.appendChild(a);
        info.innerHTML = `
        <h2 id="usernamepro">username: ${profile.username}</h2>
                        <h4 id="descriptionpro">about: ${profile.description}</h4>
                        <h4 id="quotepro">quote: ${profile.favquote}</h4>
                        <h4 id="sexpro">gender: ${profile.sex}</h4>
      `;
        infofancy.appendChild(info);
        tabContent.innerHTML = `
             <li id = "tab-1" class = "visible"> ${profile.tab1} </li> 
             <li id = "tab-2"> ${profile.tab2} </li> 
             <li id = "tab-3"> ${profile.tab3} </li> 
             <li id = "tab-4">  ${profile.tab4} </li> 
             <li id = "tab-5">  ${profile.tab5} </li> 
             <li id = "tab-6">  ${profile.tab6} </li> 
             <li id = "tab-7">  ${profile.tab7} </li> 
             <li id = "tab-8">  ${profile.tab8} </li>
      `;
        content.appendChild(tabContent);
    }
    recentPostt(profile) {
        recentPost.innerHTML = "";
        let Article = document.createElement("article");
        Article.innerHTML = `
                        <button class="btn2" data=${
                          profile.data + 2000000000000
                        }>></button>
                        <button class="btn1" data=${
                          profile.data + 2000000000000
                        }>
                            <</button>
                        <h5 class="pricin">N${profile.price}</h5>
                       ${
                         profile.recentpost
                           ? image(
                               profile.data + 2000000000000,
                               profile.recentpost
                             )
                           : image(profile.data + 2000000000000, profile.images)
                       } 
                      `;
        recentPost.appendChild(Article);
    }

    addtoproduct(product) {
        viewpostt.innerHTML = "";
        let result = "";
        product.forEach((pro) => {
            result += `<article data=${pro.data}>
                        <p class="dot" data=${pro.data} draggable="true">...</p>
                        <a href="#" class="delete" data=${
                          pro.data
                        }>Delete Post</a>
                        <button class="btn2" data=${pro.data}>></button>
                        <button class="btn1" data=${pro.data}>
                            <</button>
                        <h5 class="pricin">N${pro.price}</h5>
                       ${image(pro.data, pro.images)} 
                       </article>
                      `;
            viewpostt.innerHTML = result;
        });
    }

    firsttab() {
        let tabs = document.querySelectorAll(".tabs li a");
        let tabsactt = document.querySelector(".activity");
        for (var i = 0; i < tabs.length; i++) {
            tabs[i].classList.remove("activated");
        }
        tabsactt.classList.add("activated");

        var probtn = document.querySelector("#probtn"),
            producbtn = document.querySelector("#producbtn");

        producbtn.classList.remove("active");
        probtn.classList.add("active");
        profile.style.display = "block";
        product.style.display = "none";
        let links = document.getElementById("links");
        links.style.display = "block";
        let viewmore = document.getElementById("viewpost");
        viewmore.style.display = "none";
    }

    yhandler() {
        window.onscroll = () => {
            let post = new Posts();
            let contentHeight = wrapone.offsetHeight + 50;
            let yoffset = window.pageYOffset;
            let y = yoffset + window.innerHeight;
            if (y > contentHeight) {
                post.getPost().then((post) => {
                    this.displaypost(post);
                    storage.savePost(post);
                });

                wrap.innerHTML += this.result;
                this.slideFunctionality();
            }
        };
    }
    search() {

        document.getElementById('searchbox').addEventListener('keyup', (e) => {
            let search = document.getElementById('searchbox').value;
            allPost.forEach(post => {
                if (post.username.toLowerCase().indexOf(search.toLowerCase()) != -1) {
                    console.log(post.username)
                }
            })
        })


    }
}
class storage {
    static savePdata(pdata) {
        localStorage.setItem("pdata", JSON.stringify(pdata));
    }

    static getPdata(id) {
        let prodata = JSON.parse(localStorage.getItem("pdata"));
        return prodata.find((profile) => profile.id == id);
    }

    static savePost(post) {
        localStorage.setItem("post", JSON.stringify(post));
    }
    static getPost() {
        let postdata = JSON.parse(localStorage.getItem("post"));
        return postdata;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    let post = new Posts();
    let ui = new UI();

    ui.yhandler();

    post
        .getProfiledata()
        .then((pdata) => {
            storage.savePdata(pdata);
        })
        .then(() => {
            ui.yhandler();
        });


    post.getPost().then(post => {
        ui.displaypost(post)
        allPost = post
    })
    ui.search()
});

function images(data, pic) {
    return `
       <ul class="sliderp" data=${data}>
           ${pic
             .map(
               (pic) => `<img class="slidep" data= ${data} src=${pic} alt="" />`
             )
             .join("")}
      </ul> `;
}

function image(data, pic) {
    return `
       <ul class="slider" data=${data}>
           ${pic
             .map(
               (pic) => `<img class= "slide" data= ${data} src=${pic} alt="" />`
             )
             .join("")}
      </ul> `;
}
propic.addEventListener("click", () => {
    event.preventDefault();
});

let a = [...document.getElementsByClassName("a")];
a.forEach((elem) => {
    elem.addEventListener("click", () => {
        event.preventDefault();
    });
});