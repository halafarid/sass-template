document.getElementById('btn-menu').addEventListener('click', function() {
    // document.querySelector('.list-overlay').classList.add('.list-overlay--show');
    document.querySelector('.list-overlay').style.display = 'block';
    document.querySelector('.mousemove').style.display = 'block';
    document.querySelector('body').style.overflowY = 'hidden';
});

document.querySelector('.list-overlay').addEventListener('click', function() {
    // document.querySelector('.list-overlay').classList.remove('.list-overlay--show');
    document.querySelector('.list-overlay').style.display = 'none';

    document.querySelector('.mousemove').style.display = 'none';
    document.querySelector('body').style.overflowY = 'visible';
});

document.querySelector('.list-close').addEventListener('click', function() {
    // document.querySelector('.list-overlay').classList.remove('.list-overlay--show');
    document.querySelector('.list-overlay').style.display = 'none';

    document.querySelector('.mousemove').style.display = 'none';
    document.querySelector('body').style.overflowY = 'visible';
});

document.querySelector('.list__toggle').addEventListener('mouseenter', function() {
    document.querySelector('.mousemove').style.opacity = '0';
});

document.querySelector('.list-overlay').addEventListener('mouseenter', function() {
    document.querySelector('.mousemove').style.opacity = '1';
});

var div;

(function createDiv(){
    div = document.createElement("div");
    text = document.createTextNode('Click here to Close!');
    div.appendChild(text);
    document.body.appendChild(div);
    div.classList.add('mousemove');
    div.style.display = 'none';
    div.style.position = "absolute";
    div.style.left = "0px";
    div.style.top = "0px";
    div.style.width = "20rem";
    div.style.height = "3rem";
    div.style.background = "#fff";
    div.style.color = "#384141";
    div.style.textAlign = 'center';
    div.style.paddingTop = '0.5rem';
    div.style.borderRadius = '5px';
    div.style.zIndex = '999';    
    div.style.transition = 'opacity 0.3s ease-in-out';
})();


// console,l===

document.addEventListener('mousemove', function(e) {
    div.style.left = e.clientX - 180 + 'px';
    div.style.top = e.clientY -  30 + 'px';
});