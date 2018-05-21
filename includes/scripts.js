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
    boxObj.style.opacity = getRandomOpacity();
    boxObj.onmouseover = function(){
        boxObj.style.opacity = "1";
    };
    return boxObj;
}

function BoxManager() {
    var iBoxNum = 4;
    var sectionObj = null;

    for(var i=0; i<iBoxNum; i++) {
        if(sectionObj === null) {
            sectionObj = document.createElement('section');
            sectionObj.className = "boxSection";
        }

        var boxObj = new Box();
        sectionObj.appendChild(boxObj);
        console.log("box "+i+" was created");
    }

    var mainObj = document.getElementsByTagName('main');    // show parent
    mainObj[0].appendChild(sectionObj);                     // put the section with the 4 boxes inside the main object
}
