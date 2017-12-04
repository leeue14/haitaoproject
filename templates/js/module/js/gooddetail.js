window.onload = function () {
    bannerHover();//子菜单显示
    hoverChangeImg();//hover切换图片
    changeSmallImg();//左右切换图片
    selectColor();//选择商品颜色
    selectSize();//选择尺码
}

function bannerHover() {
    var oAllin = document.getElementById('allIn');
    var banner = document.getElementById('banner');
    oAllin.onmousemove = function () {
        banner.style.display = 'block';
        aHoverBox[0].style.visibility = 'visible';
    }
    /*移进去会显示*/

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
            for (var j = 0; j < aHoverBox.length; j++) {
                aHoverBox[j].style.visibility = 'hidden';
                aWhite[j].style.display = 'none';
            }
            aHoverBox[this.index].style.visibility = 'visible';
            aWhite[this.index].style.display = 'block';
            banner.style.display = 'block';
        }

        aCatesLi[i].onmouseout = function () {
            for (var j = 0; j < aHoverBox.length; j++) {
                /*aHoverBox[j].style.visibility = 'hidden';
                 aWhite[j].style.display = 'none';
                 banner.style.display = 'none';*/
                aHoverBox[j].style.color = "#fff";
            }


        }
    }

}

/*返回顶部按钮*/
<!--拖动滚动条或滚动鼠标轮-->
window.onscroll=function(){
    if(document.body.scrollTop||document.documentElement.scrollTop>400){
       // console.log(document.documentElement.scrollTop);
        document.getElementById('backTop').style.display="block"
    }else{
        document.getElementById('backTop').style.display="none"
    }
}
<!--点击“回到顶部”按钮-->
function toTop(){
    window.scrollTo('0','0');
    document.getElementById('backTop').style.display="none"
}


/*hover切换图片*/

function  hoverChangeImg() {
    var oImgUl = document.getElementById("list_small_img");
    var aImgLi = oImgUl.getElementsByTagName("img");

    var oImgShow = document.getElementById("img-show");

    for(var i = 0; i < aImgLi.length; i++){
        aImgLi[i].onmouseover = function () {

            var path = this.src;
            oImgShow.style.backgroundImage = "url("+path+")";
        };/*移动*/
    }

}
/*上一个图片*/
function changeSmallImg(){
    var btnNext = document.getElementById("wrapper-next");
    var btnPrev = document.getElementById("wrapper-prev");
    var oImgUl = document.getElementById("list_small_img").getElementsByTagName("ul");
    var aImgLi = oImgUl[0].getElementsByTagName("img");

    indexNext = 0;
    indexPrev = 0;
    btnNext.onclick = function () {
        indexNext = indexNext - 4;
        indexPrev = indexPrev - 4;
        if(indexNext <= -aImgLi.length){
            indexNext = 0;
            indexPrev = 0;
        }
        oImgUl[0].style.left = indexNext*100 +'px';
    };
    btnPrev.onclick = function () {
        if(indexPrev == 0){
            indexPrev = -4;
            indexNext = 4;
        }
        indexPrev = indexPrev + 4;
        oImgUl[0].style.left = indexPrev * 100 +'px';
    };



}


/*切换函数*/
function clickNext(indeNext,indexPrev,aItemLi,oLitemList) {

}

function clickPrev(indeNext,indexPrev,aItemLi,oLitemList) {
    if(indexPrev <= 0){
        indexPrev = 0;
    }
    console.log("indexPrev = "+indexPrev );
    oLitemList.style.left += -indexPrev * aItemLi[indexPrev].offsetWidth +"px";
    indeNext = indexPrev;
    indexPrev--;
}

/*选择颜色*/
function selectColor() {

    var oRectSelect = document.getElementById("rect-select");
    var aAList = oRectSelect.getElementsByTagName("a");
    for(var i = 0; i < aAList.length; i++){

        aAList[i].index = i;
        aAList[i].onclick = function () {
            for(var j = 0; j < aAList.length;j++){
                aAList[j].classList.remove("selected");
            }
            this.classList.add("selected");

        };

    }
}

/*选择尺码*/
function  selectSize() {
    var oLi = document.getElementById("select");
    var aRectSelect = oLi.getElementsByTagName("div");
    var aAList = aRectSelect[0].getElementsByTagName("a");
    for(var i = 0; i < aAList.length; i++){

        aAList[i].index = i;
        aAList[i].onclick = function () {
            for(var j = 0; j < aAList.length;j++){
                aAList[j].classList.remove("selected");
            }
            this.classList.add("selected");

        };

    }
}



