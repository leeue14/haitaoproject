

var oUl = document.getElementById('uls');
var aLis = oUl.getElementsByTagName('li');
/*原点点击*/
var oUNum = document.getElementById('numUl');
var aNUmLis = oUNum.getElementsByTagName('li');

var iNow = 0;
var oNext = document.getElementById('next');
var oPrev = document.getElementById('prev');

var banner = document.getElementById('banner');
var timer = null;

var zIndex = aLis.length - 1;  //代表要显示的图片的z-index=4

for (var i = 0; i < aNUmLis.length; i++) {

    aNUmLis[i].index = i;
    aNUmLis[i].onclick = function () {
        iNow = this.index;
        changeImg(this.index);

    };
    aNUmLis[i].onselectstart = function () {
        return false;
    };
    aLis[i].style.zIndex = aLis.length - i - 1;
}


/*换图函数*/
function changeImg(index) {
    for (var j = 0; j < aLis.length; j++) {
     //   aLis[j].style.display = 'none';
        aNUmLis[j].style.background = '#aaaaaa';
    }
   // aLis[index].style.display = 'block';
    aNUmLis[index].style.background = '#fff';

    /*更新*/
    var oImg = aLis[index];
    oImg.style.opacity = 0;
    oImg.style.filter = 'alpha(opacity=0)';
    oImg.style.zIndex = ++zIndex;
    animate(oImg, {opacity:100});

}


/*上一页下一页*/
oNext.onclick = function () {
    iNow++;
    if (iNow < aLis.length && iNow >= 0) {
        changeImg(iNow);
        auto();
    } else {
        iNow = 0;
        changeImg(iNow);
        auto();
    }

}

oPrev.onclick = function () {
    iNow--;
    if (iNow < aLis.length && iNow >= 0) {
        changeImg(iNow);
        auto();
    } else {
        iNow = aLis.length - 1;
        changeImg(iNow);
        auto();
    }

}

function run() { //自动轮播
    timer = setInterval(function () {
        oNext.onclick();
    }, 3000)
}

function kill() { //清除定时器
    clearInterval(timer);
    console.log("清除定时器");
}
function auto() { //先清除定时器再轮番
    kill();
    run();
}



banner.onmousemove = function () {

    kill();
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
    clickMove();/*超值单品移动事件*/
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


/*倒计时*/


window.onload = function(){
    setInterval("buyLimit(2017,12,5,23,9,54)",1000);/*抢购倒计时*/
    buyLimitmove()/*倒计时左边方块移动*/
    shopbuyMove();//*超值单品菜单移动*/
    onClickMove();/*官网大促移动*/
}


/*抢购倒计时*/
function buyLimit(year,mouth,day,hour,minute,second) {
    var times = leftTime(year,mouth,day,hour,minute,second);

    var timeHour = document.getElementsByClassName('time-hour');
    var timeMinutes = document.getElementsByClassName('time-minit');
    var timeSecond = document.getElementsByClassName('time-second');

    timeHour[0].innerHTML = times[1];
    timeMinutes[0].innerHTML = times[2];
    timeSecond[0].innerHTML = times[3];
}

/*计算倒计时时间函数*/
function leftTime(year,mouth,day,hour,minute,second) {
    var leftTime = (new Date(year,mouth-1,day,hour,minute,second)) - (new Date());//计算剩余的天数
    var days = parseInt(leftTime / 1000 / 60 / 60 / 24 , 10); //计算剩余的天数
    var hours = parseInt(leftTime / 1000 / 60 / 60 % 24 , 10); //计算剩余的小时
    var minutes = parseInt(leftTime / 1000 / 60 % 60, 10);//计算剩余的分钟
    var seconds = parseInt(leftTime / 1000 % 60, 10);//计算剩余的秒数
    days = checkTime(days);
    hours = checkTime(hours);
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);
    var times = [days,hours,minutes,seconds];
    return times;
}

function checkTime(i){ //将0-9的数字前面加上0，例1变为01
    if(i<10)
    {
        i = "0" + i;
    }
    return i;
}

/*倒计时滑块移动*/
function  buyLimitmove() {
    var oSeckill = document.getElementsByClassName("seckill-list");
    var aSeckillUl = oSeckill[0].getElementsByTagName("ul");
    var aSeclKillLi = aSeckillUl[0].getElementsByTagName("li");
  //  alert(aSeclKillLi.length);
    var oBuyLimitPrev = document.getElementById("buyLimitPrev");
    var oBuyLimitNext = document.getElementById("buyLimitNext");

    var indexPrev = 0;
    var indexNext = 0;

   /* alert(aSeclKillLi.length);*///9
    for(var i = 0; i < aSeclKillLi.length; i++){
            aSeclKillLi[i].index = i;
    }
    oBuyLimitPrev.onclick = function () {

        if(indexPrev == 0){
            indexPrev = -4;
        }
        indexPrev = indexPrev + 4;
        aSeckillUl[0].style.left = indexPrev * aSeclKillLi[0].offsetWidth +'px';
    };
    oBuyLimitNext.onclick = function () {
        indexNext = indexNext - 4;
        indexPrev = indexPrev - 4;
        if(indexNext <= -aSeclKillLi.length){
            indexNext = 0;
            indexPrev = 0;
        }
        aSeckillUl[0].style.left = indexNext*aSeclKillLi[0].offsetWidth +'px';

    };

} /*end*/

/*超值单品动画显示*/

function shopbuyMove(){/*菜单移动显示*/
    var oSb = document.getElementById("st");
    var oSnTab = document.getElementById("sn-tab");
    var aDiv = oSb.children;
    var aSnTabList = oSnTab.children;//8个还有一个是p
    var len = aSnTabList.length -1;
   
    
    for(var i =0; i < len ; i++) {
        aSnTabList[i].index = i;
        aSnTabList[i].onmousemove = function () {
            for (var j = 0; j < aSnTabList.length - 1; j++) {
                aSnTabList[j].removeAttribute('class', 'cur');
          /*      aDiv[j].style.display = "none";*/
                aDiv[j].classList.add("none");/*增加一个class*/
            }
            this.setAttribute('class', 'cur');
            aSnTabList[len].style.left = this.offsetLeft + "px";
        /*    aDiv[this.index].style.display = "inline";*/
            aDiv[this.index].classList.remove("none");/*移除一个class*/
        };

    }//*for end*/
    clickMove("sm-main-item0");
    clickMove("sm-main-item1");
    clickMove("sm-main-item2");
    clickMove("sm-main-item3");
    clickMove("sm-main-item4");
    clickMove("sm-main-item5");
    clickMove("sm-main-item6");
    
}/* end*/

/*给超值单品左右按钮添加点击事件*/
function clickMove(oItemStrId) {
    var oItem = document.getElementById(oItemStrId);
    var aItemList = oItem.children;/*第一个是有前一页后一页的*/
    var aItemLi = aItemList[2].getElementsByTagName('li');

    var indexPrev = 0;
    var indeNext = 0;

   for(var i = 0; i < aItemLi.length; i++){
       aItemLi[i].index = i;
   }
    aItemList[0].onclick = function () {/*上一页 */
        console.log("indexPrev = "+indexPrev );
        if(indexPrev <= 0){
            indexPrev = 0;
        }
        console.log("index = "+indexPrev );
        aItemList[2].style.left = -indexPrev * aItemLi[indexPrev].offsetWidth +"px";
        indeNext = indexPrev;
        indexPrev--;

    };
    aItemList[1].onclick = function () {/*下一页  负数*/

        indeNext++;
        indexPrev = indeNext -1;
        if(indeNext >= aItemLi.length){
            indeNext = 0;
            indexPrev = 0;
        }
        aItemList[2].style.left = -indeNext * aItemLi[indeNext].offsetWidth +"px";
        console.log("indeNext = "+indeNext );
    }

}

function clickNext(indeNext,indexPrev,aItemLi,oLitemList,mPx) {
    indeNext++;
    indexPrev = indeNext -1;
    if(indeNext >= aItemLi.length){
        indeNext = 0;
        indexPrev = 0;
    }
    oLitemList.style.marginLeft = -indeNext * aItemLi[indeNext].offsetWidth-15 +"px";
}

function clickPrev(indeNext,indexPrev,aItemLi,oLitemList,mPx) {
    if(indexPrev <= 0){
        indexPrev = 0;
    }
    console.log("index = "+indexPrev );
    oLitemList.style.marginLeft = -indexPrev * aItemLi[indexPrev].offsetWidth +"px";
    indeNext = indexPrev;
    indexPrev--;
}


/*官网大促动画*/
function onClickMove() {
    var aPre = document.getElementsByClassName("prev");/*IE9一下不兼容 getElementByClassName*/
   // alert(aPre.length);/*公有6个 前两个不要*/
    var aNext = document.getElementsByClassName("next");
   // alert(aNext.length);
    var aImgItems = document.getElementsByClassName("imgitems");
   // alert(aImgItems.length);/*5个 最后一个不需要*/

    for(var i = 2; i < aPre.length; i++){
        aNext[i].index = i;
        aNext[i].indeNext = 0;
        aPre[i].index = i;
        aPre[i].indexPre = 0;
        aNext[i].onclick = function () {
            var aImgItem =   aImgItems[this.index-2].getElementsByTagName("a");

            clickNext(this.indeNext,aPre[this.index].indexPre,aImgItem,aImgItems[this.index-2]);
           // console.log("aPre[this.index].indexPre"+aPre[this.index].indexPre);
           // alert("hah");
        };
        aPre[i].onclick = function () {
            var aImgItem =   aImgItems[this.index-2].getElementsByTagName("a");
            //  alert(aImgItem[0].offsetWidth);
            clickPrev(this.indeNext,aPre[this.index].indexPre,aImgItem,aImgItems[this.index-2]);
           // aImgItems[0].style.marginLeft = aImgItem[0].offsetWidth + 15 +"px";
            // alert("hah");
        };
    }


}
/*获取ImgItem的值*/



/*左侧导航栏js*/
window.onscroll = function () {
    getHeaderHeight();
}
function  getHeaderHeight() {
    var oIframeContent = document.getElementById('iframecontent');
    var oSpecify = document.getElementById('specify');

    var oSidebar = document.getElementById('side-bar');
    var oFloor1 = document.getElementById('0F').offsetHeight;
    var oFloor2 = document.getElementById('1F').offsetHeight;
    var oFloor3 = document.getElementById('2F').offsetHeight;
    var oFloor4 = document.getElementById('3F').offsetHeight;
    var oFloor5 = document.getElementById('4F').offsetHeight;
    var oFloor6 = document.getElementById('5F').offsetHeight;
    var aFloorH = [oFloor1,oFloor2,oFloor3,oFloor4,oFloor5,oFloor6];
    /*获取左侧导航栏的a*/
    var oLift = document.getElementById('lift');
    var aLifta = oLift.getElementsByTagName('a');

    var height = oIframeContent.offsetHeight + oSpecify.offsetHeight;
    console.log(oIframeContent.offsetHeight);
    var scroll=document.documentElement.scrollTop||document.body.scrollTop;
    console.log("当前height="+height+"滚动高度"+scroll);
    if(scroll >= height){
        oSidebar.style.display ='block';
        height += aFloorH[0];
    }else{
        oSidebar.style.display ='none';
    }
    for(var i = 1; i <aLifta.length; i++){
        /* console.log("当前height="+height+"滚动高度"+scroll);*/
        if(scroll >= height){
            height += aFloorH[i];
            intiFloorA(aLifta);
            aLifta[i].className += ' on';
            console.log(i+"加了");
        }
    }
    /* console.log("顶部"+scroll);*/
    //alert(height);
}/*getHeaderHeight end*/
/*获取某个object的高度*/
function getHeight(obj) {
    var height = obj.offsetHeight;
    return height;
}/*getHeight end*/
function  intiFloorA(aLifta) {
    for(var i = 0; i < aLifta.length; i++){
        aLifta[i].setAttribute('class','');
    }
}




