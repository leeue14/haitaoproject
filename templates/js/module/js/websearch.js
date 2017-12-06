/**
 * Created by leeue on 2017/12/5.
 */


/*点击函数*/

window.onload = function () {
    clickDesc();/*菜单显示隐藏点击事件*/
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