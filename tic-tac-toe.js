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

            // disable click event for a box already clicked
            if (tile.classList.contains("X") || tile.classList.contains("O")) {
                
            } else if (record.length == 0 || record[record.length - 1] == "O") {
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

    //  ACTIVITY - FIVE
    let newGame = document.getElementsByClassName("btn")[0];
    newGame.onclick = function () {
        record = []; // reset the state

        for (let b of boxList) {
            // clear the grid
            b.innerHTML = ""; 
            b.classList.remove("X", "O");
        }

        // reset status div
        let stat = document.getElementById("status");
        stat.classList.remove("you-won");
        stat.textContent = "Move your mouse over a square and click to play an X or an O.";
    };

    //  ACTIVITY - SIX
    // lines 21 - 23

};