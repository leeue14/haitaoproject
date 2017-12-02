var oUl = document.getElementById('uls');
var aLis = oUl.getElementsByTagName('li');
/*原点点击*/
var oUNum = document.getElementById('numUl');
var aNUmLis = oUNum.getElementsByTagName('li');

var iNow = 0;
var oNext = document.getElementById('next');
var oPrev = document.getElementById('prev');

var banner = document.getElementById('banner');


for (var i = 0; i < aNUmLis.length; i++) {

    aNUmLis[i].index = i;
    aNUmLis[i].onclick = function () {
        changeImg(this.index);
    }
}


/*换图函数*/
function changeImg(index) {
    for (var j = 0; j < aLis.length; j++) {
        aLis[j].style.display = 'none';
        aNUmLis[j].style.background = '#aaaaaa';
    }
    aLis[index].style.display = 'block';
    aNUmLis[index].style.background = '#fff';
}


/*上一页下一页*/
oNext.onclick = function () {
    iNow++;
    if (iNow < aLis.length && iNow >= 0) {
        changeImg(iNow);
    } else {
        iNow = 0;
        changeImg(iNow);
    }

}

oPrev.onclick = function () {
    iNow--;
    if (iNow < aLis.length && iNow >= 0) {
        changeImg(iNow);
    } else {
        iNow = aLis.length - 1;
        changeImg(iNow);
    }

}


/*定时器  定时轮播!*/
timer = setInterval(function () {
    oNext.onclick();
    /!*直接点击下一步*!/
}, 3000);//每隔0.5秒就会执行这个函数代码

/!*清除定时器*!/

banner.onmousemove = function () {
    clearInterval(timer);
}
/*鼠标移到图片的位置就清除掉定时器*/
banner.onmouseout = function () {
    timer = setInterval(function () {
        oNext.onclick();
        /!*直接点击下一步*!/
    }, 3000);//每隔0.5秒就会执行这个函数代码
}

/*子菜单添加事件*/
var oCates = document.getElementById('cates');
var aCatesLi = oCates.children;

var aHoverBox = document.getElementsByClassName('hover-boxs');
/*获取到隐藏框*/

var aWhite = oCates.getElementsByClassName('white');

/* alert();*/
for (var i = 0; i < aCatesLi.length; i++) {
    aCatesLi[i].index = i;
    aCatesLi[i].onmousemove = function () {
        for (var j = 0; j < aHoverBox.length; j++) {
            aHoverBox[j].style.visibility = 'hidden';
            aWhite[j].style.display = 'none';
        }
        aHoverBox[this.index].style.visibility = 'visible';
        aWhite[this.index].style.display = 'block';
    }

    aCatesLi[i].onmouseout = function () {
        for (var j = 0; j < aHoverBox.length; j++) {
            aHoverBox[j].style.visibility = 'hidden';
            aWhite[j].style.display = 'none';
        }

    }
}


window.onload = function () {
    onMoverBanner(); /*移动显示菜单*/
}

function onMoverBanner(){
    var oAllin = document.getElementById('allIn');
    var banner = document.getElementById('banner');
    oAllin.onmouseout = function () {
        banner.style.display = 'none';
    }
    /*子菜单添加事件*/
    var oCates = document.getElementById('cates');
    var aCatesLi = oCates.children;

    var aHoverBox = document.getElementsByClassName('hover-boxs');
    /*获取到隐藏框*/

    var aWhite = oCates.getElementsByClassName('white');

    /* alert();*/
    for (var i = 0; i < aCatesLi.length; i++) {
        aCatesLi[i].index = i;
        aCatesLi[i].onmousemove = function () {
            for(var j = 0; j < aHoverBox.length; j++) {
                aHoverBox[j].style.visibility = 'hidden';
                aWhite[j].style.display = 'none';
            }
            aHoverBox[this.index].style.visibility = 'visible';
            aWhite[this.index].style.display = 'block';
            banner.style.display = 'block';
        }
    }
    oAllin.onmousemove = function () {

        banner.style.display = 'block';
        aHoverBox[0].style.visibility = 'visible';

    }/*移进去会显示*/
    /*for --end*/
}/*onMoverBanner end*/

