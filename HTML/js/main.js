/* 尝试用jQuery库来实现 */
var isDangan = false;

function changeStyle() {
    if(isDangan) {
        $("#avatar").attr("src","../img/dora_kid.jpg");
        $("#myName").text("Kazami Hatsuroku");
        $("#author").text("By Kazami Hatsuroku 2017");
        $("#mainLeft").css({
            "color" : "white",
            "backgroundColor" : "#1467a3",
        });
        $(".mae a").css({
            "color": "white",
        });
        $("#hiddenLink").css({
            "color": "transparent",
            "transform": "none",
        });
        isDangan = false;
    }
    else {
        $("#avatar").attr("src","../img/monokuma.jpg");
        $("#myName").text("Ryukamine Yuuji");
        $("#author").text("By Ryukamine Yuuji 2017");
        $("#mainLeft").css({
            "color" : "black",
            "backgroundColor" : "#ff01cc",
        });
        $(".mae a").css({
            "color": "black",
        });
        $("#hiddenLink").css({
            "color": "transparent",
            "transform": "none",
        });
        isDangan = true;
    }
}


$(document).ready(function () {
    $("#avatar").click(function () {
        $("#mainLeft")
            .animate({
                right : '500px',
            }, 1000, changeStyle)
            .animate({
                right: "0px",
            }, 1000);
        });
});






/* 后来自己调用别人动画库实现的点击效果 */
/*var isDangan = false;
var leftFrame = document.getElementById('mainLeft');
var leftTable = document.getElementById('leftTable');
var ava = document.getElementById('avatar');
var myName = document.getElementById('myName');
var author = document.getElementById('author');
function slideOut() {
    dynamics.animate(leftTable,
        {
            translateX : -500,
        }, {
            type: dynamics.easeInOut,
            complete : changeDanganColor,
        });
}

function changeDanganColor() {
    dynamics.animate(leftFrame,
        {
            backgroundColor : isDangan? "#1467A3" : "#FF01CC",
        }, {
            type: dynamics.linear,
            complete: changeSituation,
            duration : 100,
        });
}


function changeSituation() {
    if (isDangan) {
        myName.innerHTML = "Kazami Hatsuroku";
        author.innerHTML = "by Kazami Hatsuroku 2017";
        leftFrame.className = 'left whiteFont changeBackColor shiftDangan mae';
        leftFrame.style.backgroundColor = "#1467A3";
        leftFrame.style.color = "#FFFFFF";
        ava.src = "../img/dora_kid.jpg";
        isDangan = false;
        slideIn();
        return;
    }
    else {
        myName.innerHTML = "Ryukamine Yuuji";
        author.innerHTML = "by Ryukamine Yuuji 2017";
        leftFrame.className = 'left whiteFont changeBackColor shiftDangan ato';
        leftFrame.style.color = "#000000";
        ava.src = "../img/monokuma.jpg";
        isDangan = true;
        slideIn();
        return;
    }
}

function slideIn() {
    dynamics.animate(leftTable,
        {
            translateX : 0,
        }, {
            type: dynamics.easeInOut,
        });
}*/





/* 先前自己写的变化效果 */
/*
var isDangan = false;
var leftFrame = document.getElementById('mainLeft');
var ava = document.getElementById('avatar');
var myName = document.getElementById('myName');
var author = document.getElementById('author');

function shiftToDanganColor() {
    if (!isDangan) {
        leftFrame.style.animationPlayState = "running";
        setTimeout(function () {
            myName.innerHTML = "Ryukamine Yuuji";
            author.innerHTML = "by Ryukamine Yuuji 2017"
            leftFrame.className = 'left whiteFont changeBackColor shiftDangan ato';
            leftFrame.style.backgroundColor = "#ff01cc";
            leftFrame.style.color = "#000000";
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
            leftFrame.className = 'left whiteFont changeBackColor shiftDangan mae';
            leftFrame.style.backgroundColor = "#1467A3";
            leftFrame.style.color = "#FFFFFF";
            ava.src = "../img/dora_kid.jpg";
            isDangan = false;
        }, 1000);
    }
}

function shiftColor() {
    if (!isDangan) {
        leftFrame.style.animationPlayState = "running";
        setTimeout(function () {
            myName.innerHTML = "Ryukamine Yuuji";
            author.innerHTML = "by Ryukamine Yuuji 2017"
            leftFrame.className = 'left whiteFont changeBackColor shiftDangan ato';
            leftFrame.style.backgroundColor = "#ff01cc";
            leftFrame.style.color = "#000000";
            ava.src = "../img/monokuma.jpg";
            isDangan = true;
        }, 1000);
    }
    else {
        leftFrame.style.animationPlayState = "running";
        setTimeout(function () {
            myName.innerHTML = "Kazami Hatsuroku";
            author.innerHTML = "by Kazami Hatsuroku 2017"
            leftFrame.className = 'left whiteFont changeBackColor shiftDangan mae';
            leftFrame.style.backgroundColor = "#1467A3";
            leftFrame.style.color = "#FFFFFF";
            ava.src = "../img/dora_kid.jpg";
            isDangan = false;
        }, 1000);
    }
} */
