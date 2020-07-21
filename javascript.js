var bg = document.querySelector("#bg");
var mole = document.querySelector("#mole");
var reminder = document.querySelector("#reminder");
var score = document.querySelector("#score");
var start = document.querySelector("#start");
var restart = document.querySelector("#restart");
var bgmusic = document.querySelector("#bgmusic");
var t = 30;
var index = 0;
/*鼠标样式切换*/
bg.onmousedown = function () {
    bg.style.cursor = "url('materials/hammer2.png'),auto";
}
bg.onmouseup = function () {
    bg.style.cursor = "url('materials/hammer.png'),auto";
}

mole.onmouseup = function () {
    mole.style.cursor = "url('materials/hammer.png'),auto"
}
/*地鼠位置*/
var loc = [{ x: 425, y: 173 }, { x: 614, y: 173 }, { x: 813, y: 177 }, { x: 394, y: 265 }, { x: 618, y: 265 }, { x: 814, y: 263 }, { x: 388, y: 365 }, { x: 620, y: 365 }, { x: 836, y: 367 }];

/*开始按钮*/

start.onclick = function () {
    /*播放背景音乐*/
    bgmusic.play();
    /*计分*/
    var i = 0;
    mole.onmousedown = function () {
        if (index == 0) {
            i = i + 100;
            score.innerHTML = "你的得分为:" + i;
            mole.src = "materials/mole_cry.png";
            index = 1;
        }
        else if (index == 2) {
            i = i - 200;
            score.innerHTML = "你的得分为:" + i;
            mole.src = "materials/mole_girl_cry.png";
            index = 1;
        }
        mole.style.cursor = "url('materials/hammer2.png'),auto";
    }
    /*计时*/
    var timer = setInterval(() => {
        if (t > 0) {
            start.disabled = "disabled";
            restart.disabled = "disabled";
            t = t - 1;
            reminder.innerHTML = "时间剩余:" + t + "s";
        }
        else {
            restart.disabled = false;
            bg.src = "materials/bg_gameover.png";
            clearInterval(mole_show);
            clearInterval(timer);
            mole.style.display = "none";
            bgmusic.pause();
        }
    }, 1000);
    /*出现地鼠*/
    var mole_show = setInterval(() => {
        if (t > 0) {
            mole.style.display = "block";
            var random_class_number = Math.floor(Math.random() * 10);
            if (random_class_number >= 2) {
                mole.src = "materials/mole_laugh.png";
                index = 0;
            }
            else {
                mole.src = "materials/mole_girl.png"
                index = 2;
            }
            var random_location_number = Math.floor(Math.random() * 9);
            mole.style.left = loc[random_location_number].x + "px";
            mole.style.top = loc[random_location_number].y + "px";
        }
        else {
            clearInterval(mole_show);
        }
    }, 500);
}
/*重新开始*/

restart.onclick = function () {
    /*初始化*/
    t = 30;
    var i = 0;
    bg.src = "materials/bg_canvas.png";
    reminder.innerHTML = "时间剩余:30s";
    score.innerHTML = "你的得分为:0";
    /*同开始按钮*/
    bgmusic.play();
    mole.onmousedown = function () {
        if (index == 0) {
            i = i + 100;
            score.innerHTML = "你的得分为:" + i;
            mole.src = "materials/mole_cry.png";
            index = 1;
        }
        else if (index == 2) {
            i = i - 200;
            score.innerHTML = "你的得分为:" + i;
            mole.src = "materials/mole_girl_cry.png";
            index = 1;
        }
        mole.style.cursor = "url('materials/hammer2.png'),auto";

    }
    var timer = setInterval(() => {
        if (t >= 0) {
            start.disabled = "disabled";
            restart.disabled = "disabled";
            reminder.innerHTML = "时间剩余:" + t + "s";
            t = t - 1;
        }
        else {
            restart.disabled = false;
            bg.src = "materials/bg_gameover.png";
            clearInterval(mole_show);
            clearInterval(timer);
            mole.style.display = "none";
            bgmusic.pause();
        }
    }, 1000);
    var mole_show = setInterval(() => {
        mole.style.display = "block";
        var random_class_number = Math.floor(Math.random() * 10);
        if (random_class_number >= 2) {
            mole.src = "materials/mole_laugh.png";
            index = 0;
        }
        else {
            mole.src = "materials/mole_girl.png"
            index = 2;
        }
        var random_location_number = Math.floor(Math.random() * 9);
        mole.style.left = loc[random_location_number].x + "px";
        mole.style.top = loc[random_location_number].y + "px";
    }, 500);
}