"use strict";

window.onload = function() {

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
    tile.onclick = function() {
     
        if (record.length == 0 || record[record.length - 1] == "O") {
            // if array is empty OR if last element is O, put an X and add to state
            tile.innerHTML = "<strong>X</strong>";
            tile.classList.add("X");
            record.push("X");

        } else if (record[record.length - 1] == "X") {
            // if last element in array is X, then put an O and add to state
            tile.innerHTML = "<strong>O</strong>";
            tile.classList.add("O");
            record.push("O");
        }
    }
  };
};