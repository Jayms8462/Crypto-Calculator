'use strict'

var target;
var currentTarget;
var btcmarket = document.getElementById("btcmarket");
var ethmarket = document.getElementById("ethmarket");
var usdtmarket = document.getElementById("usdtmarket");
var usdmarket = document.getElementById("usdmarket");

function hide(currentTarget, target) {
  debugger;
  currentTarget.style.display = "none";

}

function show() {
  if(target === btcmarket){
    btcmarket.style.display = "inline-block";
    console.log("BTC Market");
    btcmarket();
  }else if(target === ethmarket) {
    // ethmarket.style.display = "inline-block";
    console.log("ETH Market");
  }else if(target === usdtmarket) {
    // usdtmarket.style.display = "inline-block";
    console.log("USDT Market");
  }else if(target === usdmarket) {
    // usdmarket.style.display = "inline-block";
    console.log("USD Market");
  }
}

function markets() {
  currentTarget = document.getElementById("markets");
  document.getElementById("markets").innerHTML += '<div onclick="target = btcmarket; hide(currentTarget); show(currentTarget)"><img src="/res/coinImages/BTC.png" alt="Bitcoin Markets"><span style="margin-left: 4px">BTC Markets</span></div>';
  document.getElementById("markets").innerHTML += '<div onclick="target = ethmarket; hide(currentTarget); show(currentTarget)"><img src="/res/coinImages/ETH.png" alt="Ethereum Markets"><span style="margin-left: 4px">ETH Markets</span></div>';
  document.getElementById("markets").innerHTML += '<div onclick="target = usdmarket; hide(currentTarget); show(currentTarget)"><img src="/res/coinImages/USD.png" alt="Tether Markets"><span style="margin-left: 4px">USD Markets</span></div>';
  document.getElementById("markets").innerHTML += '<div onclick="target = usdtmarket; hide(currentTarget); show(currentTarget)"><img src="/res/coinImages/USDT.png" alt="USD Markets"><span style="margin-left: 4px">USDT Markets</span></div>';
}

function btcmarket() {
  document.write('<div style="word-wrap: break-word;"><img src="/res/coinImages/2GIVE.png" alt="2GIVE"><span style=margin-left: 4px">2GIVE</span></div>');
  document.write('<div style="word-wrap: break-word;"><img src="/res/coinImages/ABY.png" alt="ArtByte"><span style=margin-left: 4px">ABY</span></div>');
  document.write('<div style="word-wrap: break-word;"><img src="/res/coinImages/ADA.png" alt="Ada"><span style=margin-left: 4px">ADA</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/ADT.png" alt="adToken"><span style=margin-left: 4px">ADT</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/ADX.png" alt="AdEx"><span style=margin-left: 4px">ADX</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/AEON.png" alt="Aeon"><span style=margin-left: 4px">AEON</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/AID.png" alt="AidCoin"><span style=margin-left: 4px">AID</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/AMP.png" alt="AMP"><span style=margin-left: 4px">AMP</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/ANT.png" alt="Aragon"><span style=margin-left: 4px">ANT</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/ARDR.png" alt="Ardor"><span style=margin-left: 4px">ARDR</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/ARK.png" alt="Ark"><span style=margin-left: 4px">ARK</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/AUR.png" alt="AuroraCoin"><span style=margin-left: 4px">AUR</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/BAT.png" alt="Basic Attention Token"><span style=margin-left: 4px">BAT</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/BAY.png" alt="BitBay"><span style=margin-left: 4px">BAY</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/BCH.png" alt="Bitcoin Cash"><span style=margin-left: 4px">BCH</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/BCPT.png" alt="BlockMason Credit Protocol"><span style=margin-left: 4px">BCPT</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/BCY.png" alt="BitCrystals"><span style=margin-left: 4px">BCY</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/BITB.png" alt="BitBean"><span style=margin-left: 4px">BITB</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/BITS.png" alt="Bitswift"><span style=margin-left: 4px">BITS</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/BLK.png" alt="BlackCoin"><span style=margin-left: 4px">BLK</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/BLOCK.png" alt="Blocknet"><span style=margin-left: 4px">BLOCK</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/BLT.png" alt="Bloom"><span style=margin-left: 4px">BLT</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/BNT.png" alt="Bancor"><span style=margin-left: 4px">BNT</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/BRK.png" alt="Breakout"><span style=margin-left: 4px">BRK</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/BRX.png" alt="Breakout Stake"><span style=margin-left: 4px">BRX</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/BSD.png" alt="BitSend"><span style=margin-left: 4px">BSD</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/BTG.png" alt="Bitcoin Gold"><span style=margin-left: 4px">BTG</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/BURST.png" alt="BURSTCoin"><span style=margin-left: 4px">BURST</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/BYC.png" alt="Bytecent"><span style=margin-left: 4px">BYC</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/CANN.png" alt="CannabisCoin"><span style=margin-left: 4px">CANN</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/CBC.png" alt="CashBet"><span style=margin-left: 4px">CBC</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/CFI.png" alt="Cofound.it"><span style=margin-left: 4px">CFI</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/CLAM.png" alt="CLAMs"><span style=margin-left: 4px">CLAM</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/CLOAK.png" alt="CloakCoin"><span style=margin-left: 4px">CLOAK</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/CMCT.png" alt="Crowd Machine"><span style=margin-left: 4px">CMCT</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/COVAL.png" alt="Circuits of Value"><span style=margin-left: 4px">COVAL</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/CRB.png" alt="CreditBit"><span style=margin-left: 4px">CRB</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/CRW.png" alt="Crown"><span style=margin-left: 4px">CRW</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/CURE.png" alt="CureCoin"><span style=margin-left: 4px">CURE</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/CVC.png" alt="Civic"><span style=margin-left: 4px">CVC</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/DASH.png" alt="Dash"><span style=margin-left: 4px">DASH</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/DCR.png" alt="Decred"><span style=margin-left: 4px">DCR</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/DCT.png" alt="DECENT"><span style=margin-left: 4px">DCT</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/DGB.png" alt="Digibyte"><span style=margin-left: 4px">DGB</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/DMD.png" alt="Diamond"><span style=margin-left: 4px">DMD</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/DMT.png" alt="DMarket"><span style=margin-left: 4px">DMT</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/DNT.png" alt="district0x"><span style=margin-left: 4px">DNT</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/DOGE.png" alt="Dogecoin"><span style=margin-left: 4px">DOGE</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/DOPE.png" alt="DopeCoin"><span style=margin-left: 4px">DOPE</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/DTB.png" alt="Databits"><span style=margin-left: 4px">DTB</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/DYN.png" alt="Dynamic"><span style=margin-left: 4px">DYN</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/EBST.png" alt="eBoost"><span style=margin-left: 4px">EBST</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/EDG.png" alt="Edgeless"><span style=margin-left: 4px">EDG</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/EFL.png" alt="ElectronicGulden"><span style=margin-left: 4px">EFL</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/EGC.png" alt="EverGreenCoin"><span style=margin-left: 4px">EGC</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/EMC.png" alt="EmerCoin"><span style=margin-left: 4px">EMC</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/EMC2.png" alt="Einsteinium"><span style=margin-left: 4px">EMC2</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/ENG.png" alt="Enigma"><span style=margin-left: 4px">ENG</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/ENRG.png" alt="EnergyCoin"><span style=margin-left: 4px">ENRG</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/ERC.png" alt="EuropeCoin"><span style=margin-left: 4px">ERC</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/ETC.png" alt="Ethereum Classic"><span style=margin-left: 4px">ETC</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/ETH.png" alt="Ethereum"><span style=margin-left: 4px">ETH</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/EXCL.png" alt="ExclusiveCoin"><span style=margin-left: 4px">EXCL</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/EXP.png" alt="Expanse"><span style=margin-left: 4px">EXP</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/FCT.png" alt="Factom"><span style=margin-left: 4px">FCT</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/FLDC.png" alt="FoldingCoin"><span style=margin-left: 4px">FLDC</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/FLO.png" alt="Florin"><span style=margin-left: 4px">FLO</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/FTC.png" alt="Feathercoin"><span style=margin-left: 4px">FTC</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/GAM.png" alt="Gambit"><span style=margin-left: 4px">GAM</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/GAME.png" alt="GameCredits"><span style=margin-left: 4px">GAME</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/GBG.png" alt="GBG"><span style=margin-left: 4px">GBG</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/GBYTE.png" alt="Bytes"><span style=margin-left: 4px">GBYTE</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/GEO.png" alt="GeoCoin"><span style=margin-left: 4px">GEO</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/GLD.png" alt="GoldCoin"><span style=margin-left: 4px">GLD</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/GNO.png" alt="Gnosis"><span style=margin-left: 4px">GNO</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/GNT.png" alt="Golem"><span style=margin-left: 4px">GNT</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/GOLOS.png" alt="Golos"><span style=margin-left: 4px">GOLOS</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/GRC.png" alt="GridCoin"><span style=margin-left: 4px">GRC</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/GRS.png" alt="Groestlcoin"><span style=margin-left: 4px">GRS</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/GTO.png" alt="Gifto"><span style=margin-left: 4px">GTO</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/GUP.png" alt="Guppy"><span style=margin-left: 4px">GUP</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/HMQ.png" alt="Humaniq"><span style=margin-left: 4px">HMQ</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/IGNIS.png" alt="Ignis"><span style=margin-left: 4px">IGNIS</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/INCNT.png" alt="Incent"><span style=margin-left: 4px">INCNT</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/IOC.png" alt="I/OCoin"><span style=margin-left: 4px">IOC</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/ION.png" alt="Ion"><span style=margin-left: 4px">ION</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/IOP.png" alt="Internet Of People"><span style=margin-left: 4px">IOP</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/KMD.png" alt="Komodo"><span style=margin-left: 4px">KMD</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/KORE.png" alt="Kore"><span style=margin-left: 4px">KORE</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/LBC.png" alt="LBRY Credits"><span style=margin-left: 4px">LBC</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/LMC.png" alt="Lomocoin"><span style=margin-left: 4px">LMC</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/LRC.png" alt="Loopring"><span style=margin-left: 4px">LRC</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/LSK.png" alt="Lisk"><span style=margin-left: 4px">LSK</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/LTC.png" alt="Litecoin"><span style=margin-left: 4px">LTC</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/LUN.png" alt="Lunyr"><span style=margin-left: 4px">LUN</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/MANA.png" alt="Decentraland"><span style=margin-left: 4px">MANA</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/MCO.png" alt="Monaco"><span style=margin-left: 4px">MCO</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/MEME.png" alt="Memetic"><span style=margin-left: 4px">MEME</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/MER.png" alt="Mercury"><span style=margin-left: 4px">MER</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/MLN.png" alt="Melon"><span style=margin-left: 4px">MLN</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/MONA.png" alt="MonaCoin"><span style=margin-left: 4px">MONA</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/MORE.png" alt="More"><span style=margin-left: 4px">MORE</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/MUE.png" alt="MonetaryUnit"><span style=margin-left: 4px">MUE</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/MUSIC.png" alt="Musicoin"><span style=margin-left: 4px">MUSIC</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/NAV.png" alt="NAVCoin"><span style=margin-left: 4px">NAV</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/NBT.png" alt="Nubits"><span style=margin-left: 4px">NBT</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/NEO.png" alt="Neo"><span style=margin-left: 4px">NEO</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/NEOS.png" alt="NeosCoin"><span style=margin-left: 4px">NEOS</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/NGC.png" alt="Naga"><span style=margin-left: 4px">NGC</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/NLC2.png" alt="NoLimitCoin"><span style=margin-left: 4px">NLC2</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/NLG.png" alt="Gulden"><span style=margin-left: 4px">NLG</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/NMR.png" alt="Numeraire"><span style=margin-left: 4px">NMR</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/NXC.png" alt="Nexium"><span style=margin-left: 4px">NXC</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/NXS.png" alt="Nexus"><span style=margin-left: 4px">NXS</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/NXT.png" alt="NXT"><span style=margin-left: 4px">NXT</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/OCN.png" alt="Odyssey"><span style=margin-left: 4px">OCN</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/OK.png" alt="OkCash"><span style=margin-left: 4px">OK</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/OMG.png" alt="OmiseGO"><span style=margin-left: 4px">OMG</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/OMNI.png" alt="OMNI"><span style=margin-left: 4px">OMNI</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/PART.png" alt="Particl"><span style=margin-left: 4px">PART</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/PAY.png" alt="TenX Pay Token"><span style=margin-left: 4px">PAY</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/PINK.png" alt="PinkCoin"><span style=margin-left: 4px">PINK</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/PIVX.png" alt="Pivx"><span style=margin-left: 4px">PIVX</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/POLY.png" alt="Polymath"><span style=margin-left: 4px">POLY</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/POT.png" alt="PotCoin"><span style=margin-left: 4px">POT</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/POWR.png" alt="PowerLedger"><span style=margin-left: 4px">POWR</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/PPC.png" alt="Peercoin"><span style=margin-left: 4px">PPC</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/PRO.png" alt="Propy"><span style=margin-left: 4px">PRO</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/PTC.png" alt="PesetaCoin"><span style=margin-left: 4px">PTC</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/PTOY.png" alt="Patientory"><span style=margin-left: 4px">PTOY</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/QRL.png" alt="Quantum Resistant Ledger"><span style=margin-left: 4px">QRL</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/QTUM.png" alt="Qtum"><span style=margin-left: 4px">QTUM</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/QWARK.png" alt="Qwark"><span style=margin-left: 4px">QWARK</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/RADS.png" alt="Radium"><span style=margin-left: 4px">RADS</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/RBY.png" alt="RubyCoin"><span style=margin-left: 4px">RBY</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/RCN.png" alt="Ripio Credit Network"><span style=margin-left: 4px">RCN</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/RDD.png" alt="ReddCoin"><span style=margin-left: 4px">RDD</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/REP.png" alt="Augur"><span style=margin-left: 4px">REP</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/RLC.png" alt="iEx.ec"><span style=margin-left: 4px">RLC</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/RVR.png" alt="RevolutionVR"><span style=margin-left: 4px">RVR</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/SALT.png" alt="Salt"><span style=margin-left: 4px">SALT</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/SBD.png" alt="SteemDollars"><span style=margin-left: 4px">SBD</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/SC.png" alt="Siacoin"><span style=margin-left: 4px">SC</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/SEQ.png" alt="Sequence"><span style=margin-left: 4px">SEQ</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/SHIFT.png" alt="Shift"><span style=margin-left: 4px">SHIFT</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/SIB.png" alt="Siberian Chervonets"><span style=margin-left: 4px">SIB</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/SLR.png" alt="SolarCoin"><span style=margin-left: 4px">SLR</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/SLS.png" alt="SaluS"><span style=margin-left: 4px">SLS</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/SNT.png" alt="Status Network Token"><span style=margin-left: 4px">SNT</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/SPHR.png" alt="Sphere"><span style=margin-left: 4px">SPHR</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/SPR.png" alt="SpreadCoin"><span style=margin-left: 4px">SPR</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/SRN.png" alt="Sirin Token"><span style=margin-left: 4px">SRN</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/STEEM.png" alt="STEEM"><span style=margin-left: 4px">STEEM</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/STORJ.png" alt="Storj"><span style=margin-left: 4px">STORJ</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/STORM.png" alt="Storm"><span style=margin-left: 4px">STORM</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/STRAT.png" alt="Stratis"><span style=margin-left: 4px">STRAT</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/SWT.png" alt="Swarm City Token"><span style=margin-left: 4px">SWT</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/SYNX.png" alt="Syndicate"><span style=margin-left: 4px">SYNX</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/SYS.png" alt="SysCoin"><span style=margin-left: 4px">SYS</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/THC.png" alt="HempCoin"><span style=margin-left: 4px">THC</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/TIX.png" alt="Blocktix"><span style=margin-left: 4px">TIX</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/TKS.png" alt="Tokes"><span style=margin-left: 4px">TKS</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/TRUST.png" alt="TrustPlus"><span style=margin-left: 4px">TRUST</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/TRX.png" alt="TRON"><span style=margin-left: 4px">TRX</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/TUBE.png" alt="BitTube"><span style=margin-left: 4px">TUBE</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/TUSD.png" alt="TrueUSD"><span style=margin-left: 4px">TUSD</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/TX.png" alt="TransferCoin"><span style=margin-left: 4px">TX</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/UBQ.png" alt="Ubiq"><span style=margin-left: 4px">UBQ</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/UKG.png" alt="UnikoinGold"><span style=margin-left: 4px">UKG</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/UNB.png" alt="UnbreakableCoin"><span style=margin-left: 4px">UNB</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/UP.png" alt="UpToken"><span style=margin-left: 4px">UP</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/VEE.png" alt="BLOCKv"><span style=margin-left: 4px">VEE</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/VIA.png" alt="ViaCoin"><span style=margin-left: 4px">VIA</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/VIB.png" alt="Viberate"><span style=margin-left: 4px">VIB</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/VRC.png" alt="VeriCoin"><span style=margin-left: 4px">VRC</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/VRM.png" alt="Verium"><span style=margin-left: 4px">VRM</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/VTC.png" alt="Vertcoin"><span style=margin-left: 4px">VTC</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/VTR.png" alt="vTorrent"><span style=margin-left: 4px">VTR</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/WAVES.png" alt="Waves"><span style=margin-left: 4px">WAVES</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/WAX.png" alt="Worldwide Asset Exchange"><span style=margin-left: 4px">WAX</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/WINGS.png" alt="Wings DAO"><span style=margin-left: 4px">WINGS</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/XCP.png" alt="Counterparty"><span style=margin-left: 4px">XCP</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/XDN.png" alt="DigitalNote"><span style=margin-left: 4px">XDN</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/XEL.png" alt="Elastic"><span style=margin-left: 4px">XEL</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/XEM.png" alt="NEM"><span style=margin-left: 4px">XEM</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/XLM.png" alt="Lumen"><span style=margin-left: 4px">XLM</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/XMG.png" alt="Magi"><span style=margin-left: 4px">XMG</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/XMR.png" alt="Monero"><span style=margin-left: 4px">XMR</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/XMY.png" alt="Myriad"><span style=margin-left: 4px">XMY</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/XRP.png" alt="Ripple"><span style=margin-left: 4px">XRP</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/XST.png" alt="Stealth"><span style=margin-left: 4px">XST</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/XVG.png" alt="Verge"><span style=margin-left: 4px">XVG</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/XWC.png" alt="WhiteCoin"><span style=margin-left: 4px">XWC</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/XZC.png" alt="ZCoin"><span style=margin-left: 4px">XZC</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/ZCL.png" alt="Zclassic"><span style=margin-left: 4px">ZCL</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/ZEC.png" alt="Zcash"><span style=margin-left: 4px">ZEC</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/ZEN.png" alt="Zencash"><span style=margin-left: 4px">ZEN</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/ZRX.png" alt="0x Protocol"><span style=margin-left: 4px">ZRX</span></div>');
  // document.write('<div style="word-wrap: break-word; display: none;"><img src="/res/coinImages/USDT.png" alt="Tether"><span style=margin-left: 4px">USDT</span></div>');
}

function setMarket(currentTarget, target) {
  hide(currentTarget, target);
}

markets();
