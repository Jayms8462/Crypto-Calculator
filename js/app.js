'use strict'

//***************************************************************Sidenav*************************************************
var target;
var currentTarget;
var btcmarket = document.getElementById("btcmarket");
var ethmarket = document.getElementById("ethmarket");
var usdtmarket = document.getElementById("usdtmarket");
var usdmarket = document.getElementById("usdmarket");

function hide(currentTarget, target) {
  currentTarget.style.left = "none";
}

function show() {
  if(target === btcmarket){
    btcmarket.style.display = "inline-block";
  }else if(target === ethmarket) {
    ethmarket.style.display = "inline-block";
  }else if(target === usdtmarket) {
    usdtmarket.style.display = "inline-block";
  }else if(target === usdmarket) {
    usdmarket.style.display = "inline-block";
  }
}

function markets() {
  currentTarget = document.getElementById("markets");
  document.getElementById("markets").innerHTML += '<div onclick="target = btcmarket; hide(currentTarget); show(currentTarget)"><img src="/res/coinImages/BTC.png" alt="Bitcoin Markets"><span style="margin-left: 4px">BTC Markets</span></div>';
  document.getElementById("markets").innerHTML += '<div onclick="target = ethmarket; hide(currentTarget); show(currentTarget)"><img src="/res/coinImages/ETH.png" alt="Ethereum Markets"><span style="margin-left: 4px">ETH Markets</span></div>';
  document.getElementById("markets").innerHTML += '<div onclick="target = usdmarket; hide(currentTarget); show(currentTarget)"><img src="/res/coinImages/USD.png" alt="Tether Markets"><span style="margin-left: 4px">USD Markets</span></div>';
  document.getElementById("markets").innerHTML += '<div onclick="target = usdtmarket; hide(currentTarget); show(currentTarget)"><img src="/res/coinImages/USDT.png" alt="USD Markets"><span style="margin-left: 4px">USDT Markets</span></div>';
}

function setMarket(currentTarget, target) {
  hide(currentTarget, target);
}

markets();

//************************************************************Doc Parser******************************************************

// function parse(){
//   console.log("Test");
// }
// var regex = new RegExp("(.*?)\.(csv)$");
//
// function triggerValidation(el) {
//   if (!(regex.test(el.value.toLowerCase()))) {
//     el.value = '';
//     alert('Please select correct file format');
//   }
// }
