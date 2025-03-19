let box = document.getElementsByClassName('box');
let btn = document.getElementById('btn');
btn.onclick = function () {
    if (box[0].style.backgroundColor == 'white') {
        box[0].style.backgroundColor = 'black';
        box[0].style.color = 'white';
    } else {
        box[0].style.backgroundColor = 'white';
        box[0].style.color = 'black';
    }
};
