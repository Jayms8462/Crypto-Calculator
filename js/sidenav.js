'use strict'

var menu = true;

function hideMenu() {
  document.write('<img src="/res/menu.png" id="menu" style="width:60px; opacity: 0.40" onclick="hide()">');
  document.write('<div id="closeMenu" style="display: none"></div>');

}

function hide(){
  var target = document.getElementById("menu");
  var targetMenu = document.getElementById("sideNav");
  if (menu === false) {
    target.style.display = "inline-block";
  } else if (menu === true) {
    target.style.display = "none";
    targetMenu.style.display = "inline-block";
  }
}

hideMenu();
