/* 后来自己调用别人动画库实现的点击效果 */
var isDangan = true;
var leftFrame = document.getElementById('mainLeft');
var leftTable = document.getElementById('leftTable');
var ava = document.getElementById('avatar');
var myName = document.getElementById('myName');
var author = document.getElementById('author');
function slideOut() {
    dynamics.animate(leftTable,
        {
            translateX : -1000,
        }, {
            type: dynamics.easeInOut,
            complete : changeBackGround(),
        });
    alert("fuck");
}



/* 先前自己写的变化效果 */
/* var isDangan = false;
var b = document.getElementById('mainLeft');
var ava = document.getElementById('avatar');
var myName = document.getElementById('myName');
var author = document.getElementById('author');

function shiftToDanganColor() {
    if (!isDangan) {
        b.style.animationPlayState = "running";
        setTimeout(function () {
            myName.innerHTML = "Ryukamine Yuuji";
            author.innerHTML = "by Ryukamine Yuuji 2017"
            b.className = 'left whiteFont changeBackColor shiftDangan ato';
            b.style.backgroundColor = "#ff01cc";
            b.style.color = "#000000";
            ava.src = "../img/monokuma.jpg";
            isDangan = true;
        }, 1000);
    }
}

function shiftToNormalColor() {
    if (isDangan) {
        setTimeout(function () {
            myName.innerHTML = "Kazami Hatsuroku";
            author.innerHTML = "by Kazami Hatsuroku 2017"
            b.className = 'left whiteFont changeBackColor shiftDangan mae';
            b.style.backgroundColor = "#1467A3";
            b.style.color = "#FFFFFF";
            ava.src = "../img/dora_kid.jpg";
            isDangan = false;
        }, 1000);
    }
}

function shiftColor() {
    if (!isDangan) {
        b.style.animationPlayState = "running";
        setTimeout(function () {
            myName.innerHTML = "Ryukamine Yuuji";
            author.innerHTML = "by Ryukamine Yuuji 2017"
            b.className = 'left whiteFont changeBackColor shiftDangan ato';
            b.style.backgroundColor = "#ff01cc";
            b.style.color = "#000000";
            ava.src = "../img/monokuma.jpg";
            isDangan = true;
        }, 1000);
    }
    else {
        b.style.animationPlayState = "running";
        setTimeout(function () {
            myName.innerHTML = "Kazami Hatsuroku";
            author.innerHTML = "by Kazami Hatsuroku 2017"
            b.className = 'left whiteFont changeBackColor shiftDangan mae';
            b.style.backgroundColor = "#1467A3";
            b.style.color = "#FFFFFF";
            ava.src = "../img/dora_kid.jpg";
            isDangan = false;
        }, 1000);
    }
} */
