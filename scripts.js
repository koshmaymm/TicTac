window.onload = function () {
    var container = {};
    container.count = 1;
    container.someOneCell = document.querySelectorAll(".cell");
    container.playField = [[], []];
    container.testResults = [[11, 12, 13], [21, 22, 23], [31, 32, 33], [11, 21, 31], [12, 22, 32], [13, 23, 33], [13, 22, 31], [11, 22, 33]];
    container.getClick = function (e) {
        var targetCell = e.target;
        if (targetCell.getAttribute('data-number') === null) {
            return;
        }
        else {
            mark = (container.count % 2 !== 0) ? 2 : 1;
            var action = targetCell.getAttribute('data-number');
            container.pushCellToPlayfield(+action, mark);
            targetCell.removeAttribute('data-number');
            targetCell.setAttribute('data-mark', mark);
            container.pushPicture(e);
        }
    }
    container.pushPicture = function (e) {
        var newImg = document.createElement('img');
        newImg.src = (container.count % 2 !== 0) ? 'img/tic.JPG' : 'img/tac.JPG';
        e.target.appendChild(newImg);
        e.target.classList.add("checked");
        container.count++;
    }
    for (var i = 0; i < container.someOneCell.length; i++) {
        container.someOneCell[i].addEventListener("click", container.getClick, false);
    }
    container.pushCellToPlayfield = function (a, b) {
        (b % 2 === 0) ? container.pushFirstPicture(a): container.pushSecondPicture(a);
    }
    container.pushFirstPicture = function (a) {
        container.playField[0].push(a);
        container.sortPlayField(container.playField[0]);
        //var p = document.createElement('p');
        //p.innerHTML ="First part " + container.playField[0];
        //exit.appendChild(p);
    }
    container.pushSecondPicture = function (a) {
        container.playField[1].push(a);
        container.sortPlayField(container.playField[1]);
        //var p = document.createElement('p');
        //p.innerHTML ="Second part " + container.playField[1];
        //exit.appendChild(p);
    }
    container.sortPlayField = function (mass) {
        mass.sort();
        container.checkMass(mass);
    }
    container.checkMass = function (mass) {
        if (container.count < 5) {
            return;
        }
        //alert (mass.join() === container.testResults[0].join());
        //if (mass.join() === container.testResults[0].join()) {alert("HI");}
        switch (mass.join()) {
        case container.testResults[0].join():
            alert('Вы победили !!!');
            break;
        case container.testResults[1].join():
            alert('Вы победили !!!');
            break;
        case container.testResults[2].join():
            alert('Вы победили !!!');
            break;
        case container.testResults[3].join():
            alert('Вы победили !!!');
            break;
        case container.testResults[4].join():
            alert('Вы победили !!!');
            break;
        case container.testResults[5].join():
            alert('Вы победили !!!');
            break;
        case container.testResults[6].join():
            alert('Вы победили !!!');
            break;
        case container.testResults[7].join():
            alert('Вы победили !!!');
            break;
        }
    };
}