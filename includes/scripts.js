var plusObj;

function Init() {
    plusObj = document.getElementById('plus');
    plusObj.addEventListener('click', onPlusClick);
}


var onPlusClick = function() {
    new BoxManager();
};

function getRandomOpacity() {
    var num = Math.random();
    var valOfOpacity = num.toFixed(1);

    return valOfOpacity;
}

function Box() {
    var boxObj = document.createElement('article');
    boxObj.className = "box";

    var firstOpacity = getRandomOpacity();
    boxObj.style.opacity = firstOpacity;

    boxObj.onmouseover = function(){
        boxObj.style.opacity = "1";
    };

    boxObj.onmouseout = function(){
        boxObj.style.opacity = firstOpacity;
    };

    return boxObj;
}

function BoxManager() {

    var boxObj = new Box();

    var mainObj = document.getElementsByTagName('main');    // show parent
    mainObj[0].appendChild(boxObj);                     // put the box inside the main object

    //sectionObj.appendChild(boxObj);



    }
