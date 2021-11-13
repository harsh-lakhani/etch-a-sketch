for(i=0;i<16*16;i++) {
div = document.createElement('div');
div.setAttribute('class', 'box');
container = document.getElementById("container").appendChild(div);
}

function white() {
    let box = document.getElementsByClassName("box");
    for (i=0; i<box.length; i++) {
        box[i].onmouseover = function() {
        this.style.backgroundColor = "white";
        }
    }
}

function clearPage() {
    let boxes = document.getElementsByClassName("box");
    for(i=0; i<boxes.length; i++) {
        boxes[i].style.backgroundColor = "black";
    }
}

function color() {
    let box = document.getElementsByClassName("box");
    for (i=0; i<box.length; i++) {
        box[i].onmouseover = function() {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        this.style.backgroundColor = "#" + randomColor;
        }
    }
}

function changeSize(noOfRows) {

    noOfRows=document.getElementById("newSize").value;

    let boxes = document.getElementsByClassName("box");
    for(i=boxes.length-1;i>=0;i--) {
        boxes[i].remove();
    }

    for(i=0;i<(noOfRows)*(noOfRows);i++) {
    div = document.createElement('div');
    div.setAttribute('class', 'box');
    container = document.getElementById("container").appendChild(div);
    }

    let box = document.getElementsByClassName("box");
    newHeight = 256/noOfRows+"px";
    for(i=0; i<box.length; i++) {
        box[i].style.height = newHeight;
        box[i].style.width = newHeight;
    }

}

