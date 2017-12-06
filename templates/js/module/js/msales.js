
window.onload = function () {
    onClickMove();
}
/*官网大促动画*/
function onClickMove() {
    var aPre = document.getElementsByClassName("prev");/*IE9一下不兼容 getElementByClassName*/
  //  alert(aPre.length);
    // alert(aPre.length);/*公有6个 前两个不要*/
    var aNext = document.getElementsByClassName("next");
    // alert(aNext.length);
    var aImgItems = document.getElementsByClassName("imgitems");
    // alert(aImgItems.length);/*5个 最后一个不需要*/
  //  alert(aImgItems[0].getElementsByTagName("a").length); 4
    for(var i = 0; i < aPre.length; i++){
        aNext[i].index = i;
        aNext[i].indeNext = 0;
        aPre[i].index = i;
        aPre[i].indexPre = 0;
        aNext[i].onclick = function () {
            var aImgItem =   aImgItems[this.index].getElementsByTagName("a");

            clickNext(this.indeNext,aPre[this.index].indexPre,aImgItem,aImgItems[this.index]);
            // console.log("aPre[this.index].indexPre"+aPre[this.index].indexPre);
            // alert("hah");
        };
        aPre[i].onclick = function () {
            var aImgItem =   aImgItems[this.index].getElementsByTagName("a");
            //  alert(aImgItem[0].offsetWidth);
            clickPrev(this.indeNext,aPre[this.index].indexPre,aImgItem,aImgItems[this.index]);
            // aImgItems[0].style.marginLeft = aImgItem[0].offsetWidth + 15 +"px";
            // alert("hah");
        };
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
