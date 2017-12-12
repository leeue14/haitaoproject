/**
 * Created by leeue on 2017/12/5.
 */


/*点击函数*/

window.onload = function () {
    clickDesc();/*菜单显示隐藏点击事件*/
    openClick();//分类点击事件
};

/*小按钮点击事件*/

function clickDesc() {
    var oCategory = document.getElementById("category");
    var aBList = oCategory.getElementsByTagName("b");
    var aUlList = oCategory.children;
   // var aUlList = null;
    //1 3 5 7
    //0 1 2 3 4

    
    for(var i = 0; i < aBList.length; i++){
        aBList[i].index = i;
        aBList[i].flag = true;/*表示没有打开*/
        aBList[i].ulIndex = i*2+1;
        aBList[i].onclick = function () {
            if(this.flag){
                this.classList.remove("a-desc");
                this.classList.add("a-asc");
                this.flag = false;
               
                aUlList[this.ulIndex].style.display = "block";
            }else{

                this.classList.remove("a-asc");
                this.classList.add("a-desc");
                this.flag = true;
                aUlList[this.ulIndex].style.display = "none";
            }
        };
    }
}


/*分类*/

function openClick(){
    aOpen = document.getElementById("open");
    aLetter = document.getElementById("letterS")
    aBrandAll = document.getElementById("brandAll");
    var flag = true;
    aOpen.onclick = function () {

        if(flag){
            aLetter.style.display = "block";
            aBrandAll.style.overflow = "auto";
            aBrandAll.style.height = "165px";
            this.innerHTML = "收起";
            var node = document.createElement("i");
            node.style.backgroundPosition = "-55px -53px";
            this.appendChild(node);

            flag = false;
        }else{
            aLetter.style.display = "none";
            aBrandAll.style.overflow = "hidden";
            aBrandAll.style.height = "84px";
            this.innerHTML = "展开";
            var node = document.createElement("i");
            node.style.backgroundPosition = "-71px -53px";
            this.appendChild(node);
            flag = true;
        }
    };

    /*酒精hover*/
    aChoose = document.getElementsByClassName("choose");
    aDiv = document.getElementsByClassName("moreOption")[0].getElementsByTagName("div");
    for (var i = 0; i < aChoose.length; i++){
        aChoose[i].index = i;
        aChoose[i].onmousemove = function () {
            aDiv[this.index].style.display = "block";
            aDiv[this.index].onmousemove = function () {
                this.style.display = "block";
            };
        };
        aChoose[i].onmouseout = function () {
            aDiv[this.index].style.display = "none";
            aDiv[this.index].onmouseout = function () {
                this.style.display = "none";
            };
        };
    }
}



