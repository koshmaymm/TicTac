window.onload = function () {
    var container = {};
    container.count = 1;
    container.someOneCell = document.querySelectorAll(".cell");
    container.field = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    container.playerAA = document.getElementById("cell11");
    container.playerAB = document.getElementById("cell12");
    container.playerAC = document.getElementById("cell13");
    container.playerBA = document.getElementById("cell21");
    container.playerBB = document.getElementById("cell22");
    container.playerBC = document.getElementById("cell23");
    container.playerCA = document.getElementById("cell31");
    container.playerCB = document.getElementById("cell32");
    container.playerCC = document.getElementById("cell33");
    container.getClick = function (e) {
        var targetCell = e.target;
        if (targetCell.getAttribute('data-number') === null) {
            return;
        }
        else {
            var mark = (container.count % 2 !== 0) ? 2 : 1;
            var action = targetCell.getAttribute('data-number');
            targetCell.removeAttribute('data-number');
            container.pushPicture(e);
            container.appendExit(action);
            container.changeFieldOfPlay(action);
            container.monitorFieldOfPlay();
        }
    }
    for (var i = 0; i < container.someOneCell.length; i++) {
        container.someOneCell[i].addEventListener("click", container.getClick, false);
    }
    container.pushPicture = function (e) {
        var newImg = document.createElement('img');
        newImg.src = (container.count % 2 !== 0) ? 'img/tic.JPG' : 'img/tac.JPG';
        e.target.appendChild(newImg);
        e.target.classList.add("checked");
        container.count++;
    }
    container.appendExit = function (a) {
        var p = document.createElement("p");
        p.innerHTML = a;
        exit.appendChild(p);
    }
    container.changeFieldOfPlay = function (a) {
        switch (+a) {
        case 11:
            container.field[0] = (container.count % 2 + 2);
            break;
        case 12:
            container.field[1] = (container.count % 2 + 2);
            break;
        case 13:
            container.field[2] = (container.count % 2 + 2);
            break;
        case 21:
            container.field[3] = (container.count % 2 + 2);
            break;
        case 22:
            container.field[4] = (container.count % 2 + 2);
            break;
        case 23:
            container.field[5] = (container.count % 2 + 2);
            break;
        case 31:
            container.field[6] = (container.count % 2 + 2);
            break;
        case 32:
            container.field[7] = (container.count % 2 + 2);
            break;
        case 33:
            container.field[8] = (container.count % 2 + 2);
            break;
        default:
            alert('Ошибка');
        }
        var p = document.createElement("p");
        p.innerHTML = container.field;
        exit2.appendChild(p);
    }
    container.monitorFieldOfPlay = function () {
        if (container.count < 5) {
            return;
        }
        if ((container.field[0] === container.field[1]) && (container.field[2] === container.field[1]) && (container.field[2] !== 0)) {
            container.stopPropagationOfGame();
            container.changeGorizontalLines(container.playerAA, container.playerAB, container.playerAC);
        }
        if ((container.field[3] === container.field[4]) && (container.field[3] === container.field[5]) && (container.field[3] !== 0)) {
            container.stopPropagationOfGame();
            container.changeGorizontalLines(container.playerBA, container.playerBB, container.playerBC);
        }
        if ((container.field[6] === container.field[7]) && (container.field[6] === container.field[8]) && (container.field[6] !== 0)) {
            container.stopPropagationOfGame();
            container.changeGorizontalLines(container.playerCA, container.playerCB, container.playerCC);
        }
        if ((container.field[0] === container.field[3]) && (container.field[6] === container.field[0]) && (container.field[6] !== 0)) {
            container.stopPropagationOfGame();
            container.changeVerticalLines(container.playerAA, container.playerBA, container.playerCA);
        }
        if ((container.field[1] === container.field[4]) && (container.field[7] === container.field[1]) && (container.field[7] !== 0)) {
            container.stopPropagationOfGame();
            container.changeVerticalLines(container.playerAB, container.playerBB, container.playerCB);
        }
        if ((container.field[2] === container.field[5]) && (container.field[8] === container.field[2]) && (container.field[8] !== 0)) {
            container.stopPropagationOfGame();
            container.changeVerticalLines(container.playerAC, container.playerBC, container.playerCC);
        }
        if ((container.field[0] === container.field[4]) && (container.field[8] === container.field[0]) && (container.field[8] !== 0)) {
            container.stopPropagationOfGame();
            container.changeDiagonalUpDownLines(container.playerAA, container.playerBB, container.playerCC);
        }
        if ((container.field[2] === container.field[4]) && (container.field[6] === container.field[2]) && (container.field[6] !== 0)) {
            container.stopPropagationOfGame();
            container.changeDiagonalDownUpLines(container.playerAC, container.playerBB, container.playerCA);
        }
    }
    container.stopPropagationOfGame = function () {
        for (var i = 0; i < container.someOneCell.length; i++) {
            container.someOneCell[i].removeEventListener("click", container.getClick, false);
        }
    }
    container.changeGorizontalLines = function (a, b, c) {
        a.childNodes[0].src = (container.count % 2 === 0) ? 'img/tic_gorizontal_line.JPG' : 'img/tac_gorizontal_line.JPG';
        b.childNodes[0].src = (container.count % 2 === 0) ? 'img/tic_gorizontal_line.JPG' : 'img/tac_gorizontal_line.JPG';
        c.childNodes[0].src = (container.count % 2 === 0) ? 'img/tic_gorizontal_line.JPG' : 'img/tac_gorizontal_line.JPG';
    }
    container.changeVerticalLines = function (a, b, c) {
        a.childNodes[0].src = (container.count % 2 === 0) ? 'img/tic_vertical_line.JPG' : 'img/tac_gorizontal_line.JPG';
        b.childNodes[0].src = (container.count % 2 === 0) ? 'img/tic_vertical_line.JPG' : 'img/tac_gorizontal_line.JPG';
        c.childNodes[0].src = (container.count % 2 === 0) ? 'img/tic_vertical_line.JPG' : 'img/tac_gorizontal_line.JPG';
    }
    container.changeDiagonalUpDownLines = function (a, b, c) {
        a.childNodes[0].src = (container.count % 2 === 0) ? 'img/tic-diagonal-left-right-line.JPG' : 'img/tac_diagonal_left_right_line.JPG';
        b.childNodes[0].src = (container.count % 2 === 0) ? 'img/tic-diagonal-left-right-line.JPG' : 'img/tac_diagonal_left_right_line.JPG';
        c.childNodes[0].src = (container.count % 2 === 0) ? 'img/tic-diagonal-left-right-line.JPG' : 'img/tac_diagonal_left_right_line.JPG';
    }
    container.changeDiagonalDownUpLines = function (a, b, c) {
        a.childNodes[0].src = (container.count % 2 === 0) ? 'img/tic-diagonal-right-left-line.JPG' : 'img/tac_diagonal_right_left_line.JPG';
        b.childNodes[0].src = (container.count % 2 === 0) ? 'img/tic-diagonal-right-left-line.JPG' : 'img/tac_diagonal_right_left_line.JPG';
        c.childNodes[0].src = (container.count % 2 === 0) ? 'img/tic-diagonal-right-left-line.JPG' : 'img/tac_diagonal_right_left_line.JPG';
    }
}