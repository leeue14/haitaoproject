var oAllin = document.getElementById('allIn');
var banner = document.getElementById('banner');
oAllin.onmousemove = function () {
    banner.style.display = 'block';
    aHoverBox[0].style.visibility = 'visible';
}/*移进去会显示*/

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
            aHoverBox[j].style.color ="#fff";
        }


    }
}


<!--拖动滚动条或滚动鼠标轮-->
/*window.onscroll=function(){
    if(document.body.scrollTop||document.documentElement.scrollTop>500){
        console.log(document.documentElement.scrollTop);
        document.getElementById('gomain').style.display="block"
    }/!*else{
        document.getElementById('gomain').style.display="none"
    }*!/
}
<!--点击“回到顶部”按钮-->
function toTop(){

   /!* document.getElementById('gomain').style.display="none"*!/
}*/


