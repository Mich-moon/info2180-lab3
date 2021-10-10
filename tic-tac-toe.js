"use strict";

window.onload = function () {

    // ACTIVITY - ONE
    let board = document.getElementById("board");
    //console.log(board);
    let boxList = board.getElementsByTagName("div");

    for (let box of boxList) {
        box.setAttribute("class", "square");
    }

    // ACTIVITY - TWO
    var record = []; // array for storing state

    //Adding click event to all boxes
    for (let tile of boxList) {
        tile.onclick = function () {

            if (record.length == 0 || record[record.length - 1] == "O") {
                // if array is empty OR if last element is O, push an X and add to state
                tile.innerHTML = "<strong>X</strong>";
                tile.classList.add("X");
                record.push("X");
                winCheck("X");

            } else if (record[record.length - 1] == "X") {
                // if last element in array is X, then push an O and add to state
                tile.innerHTML = "<strong>O</strong>";
                tile.classList.add("O");
                record.push("O");
                winCheck("O");
            }
        };

        // ACTIVITY - THREE
        tile.onmouseenter = function () {
            tile.classList.add("hover");
        };
        tile.onmouseleave = function () {
            tile.classList.remove("hover");
        };
    };
    //console.log(boxList);

    //  ACTIVITY - FOUR
    var winCheck = function (p) {
        /*  checking if p occurs three in a row
            using indices of boxes in boxList
            which are arranged like the grid below
            0 1 2
            3 4 5
            6 7 8
        */
        if (boxList[0].classList.contains(p) && boxList[1].classList.contains(p) && boxList[2].classList.contains(p) ) {
            winner(p);
        } else if (boxList[3].classList.contains(p) && boxList[4].classList.contains(p) && boxList[5].classList.contains(p)) {
            winner(p);
        } else if (boxList[6].classList.contains(p) && boxList[7].classList.contains(p) && boxList[8].classList.contains(p)) {
            winner(p);
        } else if (boxList[0].classList.contains(p) && boxList[4].classList.contains(p) && boxList[8].classList.contains(p)) {
            winner(p);
        } else if (boxList[2].classList.contains(p) && boxList[4].classList.contains(p) && boxList[6].classList.contains(p)) {
            winner(p);
        } else if (boxList[0].classList.contains(p) && boxList[3].classList.contains(p) && boxList[6].classList.contains(p)) {
            winner(p);
        } else if (boxList[1].classList.contains(p) && boxList[4].classList.contains(p) && boxList[7].classList.contains(p)) {
            winner(p);
        } else if (boxList[2].classList.contains(p) && boxList[5].classList.contains(p) && boxList[8].classList.contains(p)) {
            winner(p);
        }
        //console.log(boxList);
    };

    var winner = function (champ) {
        let stat = document.getElementById("status");
        stat.classList.add("you-won");
        stat.textContent = "Congratulations! "+champ +" is the Winner!";

    };
};