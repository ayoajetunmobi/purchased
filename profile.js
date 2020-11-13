let profile = document.querySelector("#profile");
let view = document.querySelector("#view");
let close = document.querySelector("#close");
let product = document.getElementById("products");

profile.addEventListener('click', tabclick);
// Define a function that filters the unwanted click events on the document
function tabclick(event) {
    var elem = event.target,
        elemhref = elem.getAttribute('href'),
        tabs = document.querySelectorAll('.tabs li a'),
        tabcontents = document.querySelectorAll('.tab-cotents li');

    // If we click an element whos href contains "tab-", proceed
    if (elemhref != null && elemhref.indexOf('tab-') != -1) {
        event.preventDefault();
        // If we didn't click an active item, switch tabs
        if (elem.className.indexOf('activated') == -1) {
            // Remove the active class from the tabs and the visible class from the tab contents
            for (var i = 0; i < tabs.length; i++) {
                tabs[i].classList.remove('activated');
                tabcontents[i].classList.remove('visible');
            }

            // Add the active class to the clicked element and the visible class to the corresponding tab
            elem.classList.add('activated');
            document.getElementById(elemhref).classList.add('visible');
        }
    }

}
profile.addEventListener('click', propicture);

function propicture(event) {
    var elem = event.target,
        elemID = elem.getAttribute('id'),
        bigpropic = document.getElementById('bigpropic'),
        bigoverlay = document.getElementById("bigpic-overlay"),
        newImg = new Image();


    // If we click an element with the attribute "bigpic", show a bigger bigpicture
    if (elem.hasAttribute('bigpic')) {
        event.preventDefault();

        newImg.onload = function() {
            bigpropic.src = this.src
        }
        bigpropic.src = '';
        newImg.src = elem.getAttribute('bigpic');
        bigoverlay.classList.add('visible');
    }
    // If we click any of these 2 elements, close the lightbox
    if (elemID == 'bigpropic' || elemID == 'bigpic-overlay') {
        event.preventDefault();

        bigoverlay.classList.remove('visible');
    }
}
view.addEventListener('click', viewmore);

function viewmore(event) {
    event.preventDefault();
    var viewmore = document.getElementById('viewpost'),
        links = document.getElementById("links");

    viewmore.style.display = 'block'
    links.style.display = 'none'
}

close.addEventListener('click', disapp);

function disapp(event) {
    event.preventDefault();
    var viewmore = document.getElementById('viewpost'),
        links = document.getElementById("links");

    viewmore.style.display = 'none'
    links.style.display = 'block'
}