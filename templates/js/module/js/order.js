

window.onload = function () {
    orderHover();
}

function  orderHover() {
    oOrderTime = document.getElementsByClassName("ordertime-cont")[0];
    oOrderTime.onmousemove = function () {
        this.classList.add("ordertime-hover");
    };
    oOrderTime.onmouseout = function () {
        this.classList.remove("ordertime-hover");
    };

    /*状态hover*/

    oDealState = document.getElementsByClassName("deal-state-cont")[0];
    oStateList = document.getElementsByClassName("state-list")[0];
    aALis = oStateList.getElementsByTagName("a");
    oDealState.onmousemove = function () {
        this.classList.add("deal-state-hover");
    };
    oDealState.onmouseout = function () {
        this.classList.remove("deal-state-hover");
    };
    for(var  i =0; i < aALis.length; i++){
        aALis[i].index = i;
        aALis[i].onclick = function () {
            for (var  i = 0; i < aALis.length; i++){
                aALis[i].classList.remove("curr");
            }
            this.classList.add("curr");
        };
    }
}


