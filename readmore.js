var btt = document.getElementById('btt')

var i = 0

btt.addEventListener('click', function(event) {
    if (!i) {
        document.getElementById('dot').style.display = 'none';
        document.getElementById('open').style.display = 'inline';
        btt.innerHTML = 'read less'
        i = 1;

    } else {
        document.getElementById('dot').style.display = 'inline';
        document.getElementById('open').style.display = 'none';
        btt.innerHTML = 'read more'
        i = 0;
    }

})