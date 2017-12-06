window.onload = function () {
    onMoverBanner(); /*移动显示菜单*/
    getTop();//获取顶部的值
    getHeaderHeight();
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


function  getTop() {
    var scroll=document.documentElement.scrollTop||document.body.scrollTop;


}/*getTop end*/



/*获取顶部的高度*/

window.onscroll = function () {

    getHeaderHeight();
}
function  getHeaderHeight() {
    var oIframeContent = document.getElementById('iframecontent');
    var oSpecify = document.getElementById('specify');
    var oVipBanner = document.getElementById('vip-banner');
    var oSidebar = document.getElementById('side-bar');
    var oVippink = document.getElementById('vip-pink');
    var oFloor1 = document.getElementById('floor1').offsetHeight;
    var oFloor2 = document.getElementById('floor2').offsetHeight;
    var oFloor3 = document.getElementById('floor3').offsetHeight;
    var oFloor4 = document.getElementById('floor4').offsetHeight;
    var oFloor5 = document.getElementById('floor5').offsetHeight;
    var oFloor6 = document.getElementById('floor6').offsetHeight;
    var aFloorH = [oFloor1,oFloor2,oFloor3,oFloor4,oFloor5,oFloor6];
/*获取左侧导航栏的a*/
    var oLift = document.getElementById('lift');
    var aLifta = oLift.getElementsByTagName('a');

    var height = oIframeContent.offsetHeight + oSpecify.offsetHeight + oVipBanner.offsetHeight + oVippink.offsetHeight;

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
            aLifta[i].className += ' selected';
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
        aLifta[i].setAttribute('class','floor');
    }
}


/*右侧导航菜单*/
