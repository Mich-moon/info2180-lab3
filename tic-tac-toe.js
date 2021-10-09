"use strict";

window.onload = function() {

  let board = document.getElementById("board");
  //console.log(board);
  let boxList = board.getElementsByTagName("div");
  
  for (let box of boxList) {
    box.setAttribute("class", "square");
  }
  
};