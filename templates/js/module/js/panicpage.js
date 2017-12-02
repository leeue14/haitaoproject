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
    console.log("顶部"+scroll);

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
    var oFloor6 = document.getElementById('floor5').offsetHeight;
    var aFloorH = [oFloor1,oFloor2,oFloor3,oFloor4,oFloor5,oFloor6];
/*获取左侧导航栏的a*/
    var oLift = document.getElementById('lift');
    var aLifta = oLift.getElementsByTagName('a');

    var height = oIframeContent.offsetHeight + oSpecify.offsetHeight + oVipBanner.offsetHeight + oVippink.offsetHeight - 20;

    var scroll=document.documentElement.scrollTop||document.body.scrollTop;
    if(scroll >= height){
        oSidebar.style.display ='block';
        height += aFloorH[0];
    }else{
        oSidebar.style.display ='none';
    }
    for(var i = 0; i <aLifta.length; i++){
        if(scroll >= height){
            height += aFloorH[i];
            intiFloorA(aLifta);
            aLifta[i].className += ' selected';

        }
    }
    console.log("顶部"+scroll);
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
/*接下来是js代码*/
/*
window.onload=function () {
    function scroll() {
        var menu=document.getElementById("menu")
        var content=document.getElementById("content")
        var itmes=getcls(content,"item");//获取所有类名为item的div
        var menus=menu.getElementsByTagName("a");
        var scroll=document.documentElement.scrollTop||document.body.scrollTop;
        var conID='';
        for(var i=0;i&lt;itmes.length;i++){ var top=itmes[i].offsetTop;//遍历获取每一个div的offsetTOP值 if (scroll&gt;top-200){
            //如果滚动条到顶部的距离大于哪一个div的offsetTOP到顶部的距离就把items的ID复制给conID;
            conID=itmes[i].id;
        }else {
            break;//退出循环
        }
    }
    if (conID){
//循环a元素
        for(var i=0;i&lt;menus.length;i++){
//获取a元素的链接，用#号分隔成数组
            var href=menus[i].href.split("#");
//如果数组的最后一项的值等于conID，那么给这个a赋值类名current
            if (href[href.length-1]==conID){
                menus[i].className="current";
            }else {
                menus[i].className="";
            }
        }
    }
}
scroll()
window.onscroll=function () {
    scroll()
}
}

//获取类名
function getcls(par,cls) {
    var odiv=par.getElementsByTagName("*");
    var rel=[];
    for(var i=0;i&lt;odiv.length;i++){
        if (odiv[i].className==cls){
            rel.push(odiv[i])
        }
    }
    return rel
}*/