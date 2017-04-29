window.onload = function () {
    var count = 1;
    var someOneCell = document.querySelectorAll(".cell");
    for (var i = 0; i < someOneCell.length; i++) {
        someOneCell[i].addEventListener("click", getClick, false);
    }

    function getClick(e) {
        var targetCell = e.target;
        if (targetCell.getAttribute('data-number') === null) {
            return;
        }
        else {
            mark = (count % 2 !== 0) ? 1 : 2;
            var action = targetCell.getAttribute('data-number');
            console.log('data-number = ' + action);
            targetCell.removeAttribute('data-number');
            targetCell.setAttribute('data-mark', mark);
            pushPicture(e);
            var action = targetCell.getAttribute('data-mark');
            console.log('data-mark = ' + action);
        }
    }

    function pushPicture(e) {
        var newImg = document.createElement('img');
        newImg.src = (count % 2 !== 0) ? 'img/tic.JPG' : 'img/tac.JPG';
        e.target.appendChild(newImg);
        e.target.classList.add("checked");
        count++;
    }
}