'use strict'

function hideMenu() {
  document.write('<img src="/res/menu.png" id="menu" style="width:60px; opacity: 0.40" onclick="hide()"');
  document.write('<div id="closeMenu" style="display: none"></div>');
}

hideMenu();
