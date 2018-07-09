'use strict'

var menu = true;

function printItems() {
  document.write('<div onclick="hide()"><img src="/res/coinImages/BTC.png" alt="Bitcoin Markets"><span style=margin-left: 4px">BTC Markets</span></div>');
  document.write('<div onclick="hide();"><img src="/res/coinImages/ETH.png" alt="Ethereum Markets"><span style=margin-left: 4px">ETH Markets</span></div>');
  document.write('<div onclick="hide();"><img src="/res/coinImages/USD.png" alt="USD Markets"><span style=margin-left: 4px">USD Markets</span></div>');
  document.write('<div onclick="hide();"><img src="/res/coinImages/USDT.png" alt="Tether Markets"><span style=margin-left: 4px">USDT Markets</span></div>');
}

function hide() {
  var target = document.getElementById("markets");
  var targetMenu = document.getElementById("btcmarket");
  if (menu === true) {
    console.log("test");
    target.style.display = "none";
    btcMenu();
  }
}

printItems();
