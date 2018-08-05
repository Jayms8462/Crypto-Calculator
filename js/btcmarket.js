'use strict'
//comment
let menu = true;

let BtcMarket = [
  {	
    coin: '2GIVE',
    csn: '2GIVE',
    img: '/res/coinImages/2GIVE.png',
    alt: '2GIVE' 
  },	
  {	
    coin: 'ArtByte',
    csn: 'ABY',
    img: '/res/coinImages/ABY.png',
    alt: 'ArtByte' 
  },	
  {	
    coin: 'Ada',
    csn: 'ADA',
    img: '/res/coinImages/ADA.png',
    alt: 'Ada' 
  },	
  {	
    coin: 'adToken',
    csn: 'ADT',
    img: '/res/coinImages/ADT.png',
    alt: 'adToken' 
  },	
  {	
    coin: 'AdEx',
    csn: 'ADX',
    img: '/res/coinImages/ADX.png',
    alt: 'AdEx' 
  },	
  {	
    coin: 'Aeon',
    csn: 'AEON',
    img: '/res/coinImages/AEON.png',
    alt: 'Aeon' 
  },	
  {	
    coin: 'AidCoin',
    csn: 'AID',
    img: '/res/coinImages/AID.png',
    alt: 'AidCoin' 
  },	
  {	
    coin: 'AMP',
    csn: 'AMP',
    img: '/res/coinImages/AMP.png',
    alt: 'AMP' 
  },	
  {	
    coin: 'Aragon',
    csn: 'ANT',
    img: '/res/coinImages/ANT.png',
    alt: 'Aragon' 
  },	
  {	
    coin: 'Ardor',
    csn: 'ARDR',
    img: '/res/coinImages/ARDR.png',
    alt: 'Ardor' 
  },	
  {	
    coin: 'Ark',
    csn: 'ARK',
    img: '/res/coinImages/ARK.png',
    alt: 'Ark' 
  },	
  {	
    coin: 'AuroraCoin',
    csn: 'AUR',
    img: '/res/coinImages/AUR.png',
    alt: 'AuroraCoin' 
  },	
  {	
    coin: 'Basic Attention Token',
    csn: 'BAT',
    img: '/res/coinImages/BAT.png',
    alt: 'Basic Attention Token' 
  },	
  {	
    coin: 'BitBay',
    csn: 'BAY',
    img: '/res/coinImages/BAY.png',
    alt: 'BitBay' 
  },	
  {	
    coin: 'Bitcoin Cash',
    csn: 'BCH',
    img: '/res/coinImages/BCH.png',
    alt: 'Bitcoin Cash' 
  },	
  {	
    coin: 'BlockMason Credit Protocol',
    csn: 'BCPT',
    img: '/res/coinImages/BCPT.png',
    alt: 'BlockMason Credit Protocol' 
  },	
  {	
    coin: 'BitCrystals',
    csn: 'BCY',
    img: '/res/coinImages/BCY.png',
    alt: 'BitCrystals' 
  },	
  {	
    coin: 'BitBean',
    csn: 'BITB',
    img: '/res/coinImages/BITB.png',
    alt: 'BitBean' 
  },	
  {	
    coin: 'Bitswift',
    csn: 'BITS',
    img: '/res/coinImages/BITS.png',
    alt: 'Bitswift' 
  },	
  {	
    coin: 'Bankex',
    csn: 'BKX',
    img: '/res/coinImages/BKX.png',
    alt: 'Bankex' 
  },	
  {	
    coin: 'BlackCoin',
    csn: 'BLK',
    img: '/res/coinImages/BLK.png',
    alt: 'BlackCoin' 
  },	
  {	
    coin: 'Blocknet',
    csn: 'BLOCK',
    img: '/res/coinImages/BLOCK.png',
    alt: 'Blocknet' 
  },	
  {	
    coin: 'Bloom',
    csn: 'BLT',
    img: '/res/coinImages/BLT.png',
    alt: 'Bloom' 
  },	
  {	
    coin: 'Bancor',
    csn: 'BNT',
    img: '/res/coinImages/BNT.png',
    alt: 'Bancor' 
  },	
  {	
    coin: 'Breakout',
    csn: 'BRK',
    img: '/res/coinImages/BRK.png',
    alt: 'Breakout' 
  },	
  {	
    coin: 'Breakout Stake',
    csn: 'BRX',
    img: '/res/coinImages/BRX.png',
    alt: 'Breakout Stake' 
  },	
  {	
    coin: 'BitSend',
    csn: 'BSD',
    img: '/res/coinImages/BSD.png',
    alt: 'BitSend' 
  },	
  {	
    coin: 'Bitcoin Gold',
    csn: 'BTG',
    img: '/res/coinImages/BTG.png',
    alt: 'Bitcoin Gold' 
  },	
  {	
    coin: 'BURSTCoin',
    csn: 'BURST',
    img: '/res/coinImages/BURST.png',
    alt: 'BURSTCoin' 
  },	
  {	
    coin: 'Bytecent',
    csn: 'BYC',
    img: '/res/coinImages/BYC.png',
    alt: 'Bytecent' 
  },	
  {	
    coin: 'CannabisCoin',
    csn: 'CANN',
    img: '/res/coinImages/CANN.png',
    alt: 'CannabisCoin' 
  },	
  {	
    coin: 'CashBet',
    csn: 'CBC',
    img: '/res/coinImages/CBC.png',
    alt: 'CashBet' 
  },	
  {	
    coin: 'Cofound.it',
    csn: 'CFI',
    img: '/res/coinImages/CFI.png',
    alt: 'Cofound.it' 
  },	
  {	
    coin: 'CLAMs',
    csn: 'CLAM ',
    img: '/res/coinImages/CLAM .png',
    alt: 'CLAMs' 
  },	
  {	
    coin: 'CloakCoin',
    csn: 'CLOAK',
    img: '/res/coinImages/CLOAK.png',
    alt: 'CloakCoin' 
  },	
  {	
    coin: 'Crowd Machine',
    csn: 'CMCT',
    img: '/res/coinImages/CMCT.png',
    alt: 'Crowd Machine' 
  },	
  {	
    coin: 'Circuits of Value',
    csn: 'COVAL',
    img: '/res/coinImages/COVAL.png',
    alt: 'Circuits of Value' 
  },	
  {	
    coin: 'CreditBit',
    csn: 'CRB',
    img: '/res/coinImages/CRB.png',
    alt: 'CreditBit' 
  },	
  {	
    coin: 'Crown',
    csn: 'CRW',
    img: '/res/coinImages/CRW.png',
    alt: 'Crown' 
  },	
  {	
    coin: 'CureCoin',
    csn: 'CURE',
    img: '/res/coinImages/CURE.png',
    alt: 'CureCoin' 
  },	
  {	
    coin: 'Civic',
    csn: 'CVC',
    img: '/res/coinImages/CVC.png',
    alt: 'Civic' 
  },	
  {	
    coin: 'Dash',
    csn: 'DASH',
    img: '/res/coinImages/DASH.png',
    alt: 'Dash' 
  },	
  {	
    coin: 'Decred',
    csn: 'DCR',
    img: '/res/coinImages/DCR.png',
    alt: 'Decred' 
  },	
  {	
    coin: 'DECENT',
    csn: 'DCT',
    img: '/res/coinImages/DCT.png',
    alt: 'DECENT' 
  },	
  {	
    coin: 'DigiByte',
    csn: 'DGB',
    img: '/res/coinImages/DGB.png',
    alt: 'DigiByte' 
  },	
  {	
    coin: 'Diamond',
    csn: 'DMD',
    img: '/res/coinImages/DMD.png',
    alt: 'Diamond' 
  },	
  {	
    coin: 'DMarket',
    csn: 'DMT',
    img: '/res/coinImages/DMT.png',
    alt: 'DMarket' 
  },	
  {	
    coin: 'district0x',
    csn: 'DNT',
    img: '/res/coinImages/DNT.png',
    alt: 'district0x' 
  },	
  {	
    coin: 'Dogecoin',
    csn: 'DOGE',
    img: '/res/coinImages/DOGE.png',
    alt: 'Dogecoin' 
  },	
  {	
    coin: 'DopeCoin',
    csn: 'DOPE',
    img: '/res/coinImages/DOPE.png',
    alt: 'DopeCoin' 
  },	
  {	
    coin: 'Databits',
    csn: 'DTB',
    img: '/res/coinImages/DTB.png',
    alt: 'Databits' 
  },	
  {	
    coin: 'Dynamic',
    csn: 'DYN',
    img: '/res/coinImages/DYN.png',
    alt: 'Dynamic' 
  },	
  {	
    coin: 'eBoost',
    csn: 'EBST',
    img: '/res/coinImages/EBST.png',
    alt: 'eBoost' 
  },	
  {	
    coin: 'Edgeless',
    csn: 'EDG',
    img: '/res/coinImages/EDG.png',
    alt: 'Edgeless' 
  },	
  {	
    coin: 'ElectronicGulden',
    csn: 'EFL',
    img: '/res/coinImages/EFL.png',
    alt: 'ElectronicGulden' 
  },	
  {	
    coin: 'EverGreenCoin',
    csn: 'EGC',
    img: '/res/coinImages/EGC.png',
    alt: 'EverGreenCoin' 
  },	
  {	
    coin: 'EmerCoin',
    csn: 'EMC',
    img: '/res/coinImages/EMC.png',
    alt: 'EmerCoin' 
  },	
  {	
    coin: 'Einsteinium',
    csn: 'EMC2',
    img: '/res/coinImages/EMC2.png',
    alt: 'Einsteinium' 
  },	
  {	
    coin: 'Enigma',
    csn: 'ENG',
    img: '/res/coinImages/ENG.png',
    alt: 'Enigma' 
  },	
  {	
    coin: 'EnergyCoin',
    csn: 'ENRG',
    img: '/res/coinImages/ENRG.png',
    alt: 'EnergyCoin' 
  },	
  {	
    coin: 'EuropeCoin',
    csn: 'ERC',
    img: '/res/coinImages/ERC.png',
    alt: 'EuropeCoin' 
  },	
  {	
    coin: 'Ethereum Classic',
    csn: 'ETC',
    img: '/res/coinImages/ETC.png',
    alt: 'Ethereum Classic' 
  },	
  {	
    coin: 'Ethereum',
    csn: 'ETH',
    img: '/res/coinImages/ETH.png',
    alt: 'Ethereum' 
  },	
  {	
    coin: 'ExclusiveCoin',
    csn: 'EXCL',
    img: '/res/coinImages/EXCL.png',
    alt: 'ExclusiveCoin' 
  },	
  {	
    coin: 'Expanse',
    csn: 'EXP',
    img: '/res/coinImages/EXP.png',
    alt: 'Expanse' 
  },	
  {	
    coin: 'Factom',
    csn: 'FCT',
    img: '/res/coinImages/FCT.png',
    alt: 'Factom' 
  },	
  {	
    coin: 'FoldingCoin',
    csn: 'FLDC',
    img: '/res/coinImages/FLDC.png',
    alt: 'FoldingCoin' 
  },	
  {	
    coin: 'Florin',
    csn: 'FLO',
    img: '/res/coinImages/FLO.png',
    alt: 'Florin' 
  },	
  {	
    coin: 'Feathercoin',
    csn: 'FTC',
    img: '/res/coinImages/FTC.png',
    alt: 'Feathercoin' 
  },	
  {	
    coin: 'Gambit',
    csn: 'GAM',
    img: '/res/coinImages/GAM.png',
    alt: 'Gambit' 
  },	
  {	
    coin: 'GameCredits',
    csn: 'GAME',
    img: '/res/coinImages/GAME.png',
    alt: 'GameCredits' 
  },	
  {	
    coin: 'GBG',
    csn: 'GBG',
    img: '/res/coinImages/GBG.png',
    alt: 'GBG' 
  },	
  {	
    coin: 'Bytes',
    csn: 'GBYTE',
    img: '/res/coinImages/GBYTE.png',
    alt: 'Bytes' 
  },	
  {	
    coin: 'GeoCoin',
    csn: 'GEO',
    img: '/res/coinImages/GEO.png',
    alt: 'GeoCoin' 
  },	
  {	
    coin: 'GoldCoin',
    csn: 'GLD',
    img: '/res/coinImages/GLD.png',
    alt: 'GoldCoin' 
  },	
  {	
    coin: 'Gnosis',
    csn: 'GNO',
    img: '/res/coinImages/GNO.png',
    alt: 'Gnosis' 
  },	
  {	
    coin: 'Golem',
    csn: 'GNT',
    img: '/res/coinImages/GNT.png',
    alt: 'Golem' 
  },	
  {	
    coin: 'Golos',
    csn: 'GOLOS',
    img: '/res/coinImages/GOLOS.png',
    alt: 'Golos' 
  },	
  {	
    coin: 'GridCoin',
    csn: 'GRC',
    img: '/res/coinImages/GRC.png',
    alt: 'GridCoin' 
  },	
  {	
    coin: 'Groestlcoin',
    csn: 'GRS',
    img: '/res/coinImages/GRS.png',
    alt: 'Groestlcoin' 
  },	
  {	
    coin: 'Gifto',
    csn: 'GTO',
    img: '/res/coinImages/GTO.png',
    alt: 'Gifto' 
  },	
  {	
    coin: 'Guppy',
    csn: 'GUP',
    img: '/res/coinImages/GUP.png',
    alt: 'Guppy' 
  },	
  {	
    coin: 'Humaniq',
    csn: 'HMQ',
    img: '/res/coinImages/HMQ.png',
    alt: 'Humaniq' 
  },	
  {	
    coin: 'Ignis',
    csn: 'IGNIS',
    img: '/res/coinImages/IGNIS.png',
    alt: 'Ignis' 
  },	
  {	
    coin: 'Incent',
    csn: 'INCNT',
    img: '/res/coinImages/INCNT.png',
    alt: 'Incent' 
  },	
  {	
    coin: 'I/OCoin',
    csn: 'IOC',
    img: '/res/coinImages/IOC.png',
    alt: 'I/OCoin' 
  },	
  {	
    coin: 'Ion',
    csn: 'ION',
    img: '/res/coinImages/ION.png',
    alt: 'Ion' 
  },	
  {	
    coin: 'Internet Of People',
    csn: 'IOP',
    img: '/res/coinImages/IOP.png',
    alt: 'Internet Of People' 
  },	
  {	
    coin: 'Komodo',
    csn: 'KMD',
    img: '/res/coinImages/KMD.png',
    alt: 'Komodo' 
  },	
  {	
    coin: 'Kore',
    csn: 'KORE',
    img: '/res/coinImages/KORE.png',
    alt: 'Kore' 
  },	
  {	
    coin: 'LBRY Credits',
    csn: 'LBC',
    img: '/res/coinImages/LBC.png',
    alt: 'LBRY Credits' 
  },	
  {	
    coin: 'Lomocoin',
    csn: 'LMC',
    img: '/res/coinImages/LMC.png',
    alt: 'Lomocoin' 
  },	
  {	
    coin: 'Loom Network',
    csn: 'LOOM',
    img: '/res/coinImages/LOOM.png',
    alt: 'Loom Network' 
  },	
  {	
    coin: 'Loopring',
    csn: 'LRC',
    img: '/res/coinImages/LRC.png',
    alt: 'Loopring' 
  },	
  {	
    coin: 'Lisk',
    csn: 'LSK',
    img: '/res/coinImages/LSK.png',
    alt: 'Lisk' 
  },	
  {	
    coin: 'Litecoin',
    csn: 'LTC',
    img: '/res/coinImages/LTC.png',
    alt: 'Litecoin' 
  },	
  {	
    coin: 'Lunyr',
    csn: 'LUN',
    img: '/res/coinImages/LUN.png',
    alt: 'Lunyr' 
  },	
  {	
    coin: 'Decentraland',
    csn: 'MANA',
    img: '/res/coinImages/MANA.png',
    alt: 'Decentraland' 
  },	
  {	
    coin: 'Monaco',
    csn: 'MCO',
    img: '/res/coinImages/MCO.png',
    alt: 'Monaco' 
  },	
  {	
    coin: 'Memetic',
    csn: 'MEME',
    img: '/res/coinImages/MEME.png',
    alt: 'Memetic' 
  },	
  {	
    coin: 'Mercury',
    csn: 'MER',
    img: '/res/coinImages/MER.png',
    alt: 'Mercury' 
  },	
  {	
    coin: 'Mainframe',
    csn: 'MFT',
    img: '/res/coinImages/MFT.png',
    alt: 'Mainframe' 
  },	
  {	
    coin: 'Melon',
    csn: 'MLN',
    img: '/res/coinImages/MLN.png',
    alt: 'Melon' 
  },	
  {	
    coin: 'MonaCoin',
    csn: 'MONA',
    img: '/res/coinImages/MONA.png',
    alt: 'MonaCoin' 
  },	
  {	
    coin: 'More',
    csn: 'MORE',
    img: '/res/coinImages/MORE.png',
    alt: 'More' 
  },	
  {	
    coin: 'MonetaryUnit',
    csn: 'MUE',
    img: '/res/coinImages/MUE.png',
    alt: 'MonetaryUnit' 
  },	
  {	
    coin: 'Musicoin',
    csn: 'MUSIC',
    img: '/res/coinImages/MUSIC.png',
    alt: 'Musicoin' 
  },	
  {	
    coin: 'NAVCoin',
    csn: 'NAV',
    img: '/res/coinImages/NAV.png',
    alt: 'NAVCoin' 
  },	
  {	
    coin: 'Nubits',
    csn: 'NBT',
    img: '/res/coinImages/NBT.png',
    alt: 'Nubits' 
  },	
  {	
    coin: 'Neo',
    csn: 'NEO',
    img: '/res/coinImages/NEO.png',
    alt: 'Neo' 
  },	
  {	
    coin: 'NeosCoin',
    csn: 'NEOS',
    img: '/res/coinImages/NEOS.png',
    alt: 'NeosCoin' 
  },	
  {	
    coin: 'Naga',
    csn: 'NGC',
    img: '/res/coinImages/NGC.png',
    alt: 'Naga' 
  },	
  {	
    coin: 'NoLimitCoin',
    csn: 'NLC2',
    img: '/res/coinImages/NLC2.png',
    alt: 'NoLimitCoin' 
  },	
  {	
    coin: 'Gulden',
    csn: 'NLG',
    img: '/res/coinImages/NLG.png',
    alt: 'Gulden' 
  },	
  {	
    coin: 'Numeraire',
    csn: 'NMR',
    img: '/res/coinImages/NMR.png',
    alt: 'Numeraire' 
  },	
  {	
    coin: 'Nexium',
    csn: 'NXC',
    img: '/res/coinImages/NXC.png',
    alt: 'Nexium' 
  },	
  {	
    coin: 'Nexus',
    csn: 'NXS',
    img: '/res/coinImages/NXS.png',
    alt: 'Nexus' 
  },	
  {	
    coin: 'NXT',
    csn: 'NXT',
    img: '/res/coinImages/NXT.png',
    alt: 'NXT' 
  },	
  {	
    coin: 'Odyssey',
    csn: 'OCN',
    img: '/res/coinImages/OCN.png',
    alt: 'Odyssey' 
  },	
  {	
    coin: 'OkCash',
    csn: 'OK',
    img: '/res/coinImages/OK.png',
    alt: 'OkCash' 
  },	
  {	
    coin: 'OmiseGO',
    csn: 'OMG',
    img: '/res/coinImages/OMG.png',
    alt: 'OmiseGO' 
  },	
  {	
    coin: 'OMNI',
    csn: 'OMNI',
    img: '/res/coinImages/OMNI.png',
    alt: 'OMNI' 
  },	
  {	
    coin: 'Particl',
    csn: 'PART',
    img: '/res/coinImages/PART.png',
    alt: 'Particl' 
  },	
  {	
    coin: 'TenX Pay Token',
    csn: 'PAY',
    img: '/res/coinImages/PAY.png',
    alt: 'TenX Pay Token' 
  },	
  {	
    coin: 'PinkCoin',
    csn: 'PINK',
    img: '/res/coinImages/PINK.png',
    alt: 'PinkCoin' 
  },	
  {	
    coin: 'Pivx',
    csn: 'PIVX',
    img: '/res/coinImages/PIVX.png',
    alt: 'Pivx' 
  },	
  {	
    coin: 'Polymath',
    csn: 'POLY',
    img: '/res/coinImages/POLY.png',
    alt: 'Polymath' 
  },	
  {	
    coin: 'PotCoin',
    csn: 'POT',
    img: '/res/coinImages/POT.png',
    alt: 'PotCoin' 
  },	
  {	
    coin: 'PowerLedger',
    csn: 'POWR',
    img: '/res/coinImages/POWR.png',
    alt: 'PowerLedger' 
  },	
  {	
    coin: 'Peercoin',
    csn: 'PPC',
    img: '/res/coinImages/PPC.png',
    alt: 'Peercoin' 
  },	
  {	
    coin: 'Propy',
    csn: 'PRO',
    img: '/res/coinImages/PRO.png',
    alt: 'Propy' 
  },	
  {	
    coin: 'PesetaCoin',
    csn: 'PTC',
    img: '/res/coinImages/PTC.png',
    alt: 'PesetaCoin' 
  },	
  {	
    coin: 'Patientory',
    csn: 'PTOY',
    img: '/res/coinImages/PTOY.png',
    alt: 'Patientory' 
  },	
  {	
    coin: 'Quantum Resistant Ledger',
    csn: 'QRL',
    img: '/res/coinImages/QRL.png',
    alt: 'Quantum Resistant Ledger' 
  },	
  {	
    coin: 'Qtum',
    csn: 'QTUM',
    img: '/res/coinImages/QTUM.png',
    alt: 'Qtum' 
  },	
  {	
    coin: 'Qwark',
    csn: 'QWARK',
    img: '/res/coinImages/QWARK.png',
    alt: 'Qwark' 
  },	
  {	
    coin: 'Radium',
    csn: 'RADS',
    img: '/res/coinImages/RADS.png',
    alt: 'Radium' 
  },	
  {	
    coin: 'RubyCoin',
    csn: 'RBY',
    img: '/res/coinImages/RBY.png',
    alt: 'RubyCoin' 
  },	
  {	
    coin: 'Ripio Credit Network',
    csn: 'RCN',
    img: '/res/coinImages/RCN.png',
    alt: 'Ripio Credit Network' 
  },	
  {	
    coin: 'ReddCoin',
    csn: 'RDD',
    img: '/res/coinImages/RDD.png',
    alt: 'ReddCoin' 
  },	
  {	
    coin: 'Augur',
    csn: 'REP',
    img: '/res/coinImages/REP.png',
    alt: 'Augur' 
  },	
  {	
    coin: 'Refereum',
    csn: 'RFR',
    img: '/res/coinImages/RFR.png',
    alt: 'Refereum' 
  },	
  {	
    coin: 'iEx.ec',
    csn: 'RLC',
    img: '/res/coinImages/RLC.png',
    alt: 'iEx.ec' 
  },	
  {	
    coin: 'RevolutionVR',
    csn: 'RVR',
    img: '/res/coinImages/RVR.png',
    alt: 'RevolutionVR' 
  },	
  {	
    coin: 'Salt',
    csn: 'SALT',
    img: '/res/coinImages/SALT.png',
    alt: 'Salt' 
  },	
  {	
    coin: 'SteemDollars',
    csn: 'SBD',
    img: '/res/coinImages/SBD.png',
    alt: 'SteemDollars' 
  },	
  {	
    coin: 'Siacoin',
    csn: 'SC',
    img: '/res/coinImages/SC.png',
    alt: 'Siacoin' 
  },	
  {	
    coin: 'Sequence',
    csn: 'SEQ',
    img: '/res/coinImages/SEQ.png',
    alt: 'Sequence' 
  },	
  {	
    coin: 'Shift',
    csn: 'SHIFT',
    img: '/res/coinImages/SHIFT.png',
    alt: 'Shift' 
  },	
  {	
    coin: 'Sibcoin',
    csn: 'SIB',
    img: '/res/coinImages/SIB.png',
    alt: 'Sibcoin' 
  },	
  {	
    coin: 'SolarCoin',
    csn: 'SLR',
    img: '/res/coinImages/SLR.png',
    alt: 'SolarCoin' 
  },	
  {	
    coin: 'SaluS',
    csn: 'SLS',
    img: '/res/coinImages/SLS.png',
    alt: 'SaluS' 
  },	
  {	
    coin: 'Status Network Token',
    csn: 'SNT',
    img: '/res/coinImages/SNT.png',
    alt: 'Status Network Token' 
  },	
  {	
    coin: 'Sphere',
    csn: 'SPHR',
    img: '/res/coinImages/SPHR.png',
    alt: 'Sphere' 
  },	
  {	
    coin: 'SpreadCoin',
    csn: 'SPR',
    img: '/res/coinImages/SPR.png',
    alt: 'SpreadCoin' 
  },	
  {	
    coin: 'Sirin Token',
    csn: 'SRN',
    img: '/res/coinImages/SRN.png',
    alt: 'Sirin Token' 
  },	
  {	
    coin: 'STEEM',
    csn: 'STEEM',
    img: '/res/coinImages/STEEM.png',
    alt: 'STEEM' 
  },	
  {	
    coin: 'Storj',
    csn: 'STORJ',
    img: '/res/coinImages/STORJ.png',
    alt: 'Storj' 
  },	
  {	
    coin: 'Storm',
    csn: 'STORM',
    img: '/res/coinImages/STORM.png',
    alt: 'Storm' 
  },	
  {	
    coin: 'Stratis',
    csn: 'STRAT',
    img: '/res/coinImages/STRAT.png',
    alt: 'Stratis' 
  },	
  {	
    coin: 'Swarm City Token',
    csn: 'SWT',
    img: '/res/coinImages/SWT.png',
    alt: 'Swarm City Token' 
  },	
  {	
    coin: 'Syndicate',
    csn: 'SYNX',
    img: '/res/coinImages/SYNX.png',
    alt: 'Syndicate' 
  },	
  {	
    coin: 'SysCoin',
    csn: 'SYS',
    img: '/res/coinImages/SYS.png',
    alt: 'SysCoin' 
  },	
  {	
    coin: 'HempCoin',
    csn: 'THC',
    img: '/res/coinImages/THC.png',
    alt: 'HempCoin' 
  },	
  {	
    coin: 'Blocktix',
    csn: 'TIX',
    img: '/res/coinImages/TIX.png',
    alt: 'Blocktix' 
  },	
  {	
    coin: 'Tokes',
    csn: 'TKS',
    img: '/res/coinImages/TKS.png',
    alt: 'Tokes' 
  },	
  {	
    coin: 'TrustPlus',
    csn: 'TRUST',
    img: '/res/coinImages/TRUST.png',
    alt: 'TrustPlus' 
  },	
  {	
    coin: 'TRON',
    csn: 'TRX',
    img: '/res/coinImages/TRX.png',
    alt: 'TRON' 
  },	
  {	
    coin: 'BitTube',
    csn: 'TUBE',
    img: '/res/coinImages/TUBE.png',
    alt: 'BitTube' 
  },	
  {	
    coin: 'TrueUSD',
    csn: 'TUSD',
    img: '/res/coinImages/TUSD.png',
    alt: 'TrueUSD' 
  },	
  {	
    coin: 'TransferCoin',
    csn: 'TX',
    img: '/res/coinImages/TX.png',
    alt: 'TransferCoin' 
  },	
  {	
    coin: 'Ubiq',
    csn: 'UBQ',
    img: '/res/coinImages/UBQ.png',
    alt: 'Ubiq' 
  },	
  {	
    coin: 'UnikoinGold',
    csn: 'UKG',
    img: '/res/coinImages/UKG.png',
    alt: 'UnikoinGold' 
  },	
  {	
    coin: 'UnbreakableCoin',
    csn: 'UNB',
    img: '/res/coinImages/UNB.png',
    alt: 'UnbreakableCoin' 
  },	
  {	
    coin: 'UpToken',
    csn: 'UP',
    img: '/res/coinImages/UP.png',
    alt: 'UpToken' 
  },	
  {	
    coin: 'BLOCKv',
    csn: 'VEE',
    img: '/res/coinImages/VEE.png',
    alt: 'BLOCKv' 
  },	
  {	
    coin: 'ViaCoin',
    csn: 'VIA',
    img: '/res/coinImages/VIA.png',
    alt: 'ViaCoin' 
  },	
  {	
    coin: 'Viberate',
    csn: 'VIB',
    img: '/res/coinImages/VIB.png',
    alt: 'Viberate' 
  },	
  {	
    coin: 'VeriCoin',
    csn: 'VRC',
    img: '/res/coinImages/VRC.png',
    alt: 'VeriCoin' 
  },	
  {	
    coin: 'Verium',
    csn: 'VRM',
    img: '/res/coinImages/VRM.png',
    alt: 'Verium' 
  },	
  {	
    coin: 'Vertcoin',
    csn: 'VTC',
    img: '/res/coinImages/VTC.png',
    alt: 'Vertcoin' 
  },	
  {	
    coin: 'Waves',
    csn: 'WAVES',
    img: '/res/coinImages/WAVES.png',
    alt: 'Waves' 
  },	
  {	
    coin: 'Worldwide Asset Exchange',
    csn: 'WAX',
    img: '/res/coinImages/WAX.png',
    alt: 'Worldwide Asset Exchange' 
  },	
  {	
    coin: 'Wings DAO',
    csn: 'WINGS',
    img: '/res/coinImages/WINGS.png',
    alt: 'Wings DAO' 
  },	
  {	
    coin: 'Counterparty',
    csn: 'XCP',
    img: '/res/coinImages/XCP.png',
    alt: 'Counterparty' 
  },	
  {	
    coin: 'DigitalNote',
    csn: 'XDN',
    img: '/res/coinImages/XDN.png',
    alt: 'DigitalNote' 
  },	
  {	
    coin: 'Elastic',
    csn: 'XEL',
    img: '/res/coinImages/XEL.png',
    alt: 'Elastic' 
  },	
  {	
    coin: 'NEM',
    csn: 'XEM',
    img: '/res/coinImages/XEM.png',
    alt: 'NEM' 
  },	
  {	
    coin: 'Lumen',
    csn: 'XLM',
    img: '/res/coinImages/XLM.png',
    alt: 'Lumen' 
  },	
  {	
    coin: 'Magi',
    csn: 'XMG',
    img: '/res/coinImages/XMG.png',
    alt: 'Magi' 
  },	
  {	
    coin: 'Monero',
    csn: 'XMR',
    img: '/res/coinImages/XMR.png',
    alt: 'Monero' 
  },	
  {	
    coin: 'Myriad',
    csn: 'XMY',
    img: '/res/coinImages/XMY.png',
    alt: 'Myriad' 
  },	
  {	
    coin: 'XRP',
    csn: 'XRP',
    img: '/res/coinImages/XRP.png',
    alt: 'XRP' 
  },	
  {	
    coin: 'Stealth',
    csn: 'XST',
    img: '/res/coinImages/XST.png',
    alt: 'Stealth' 
  },	
  {	
    coin: 'Verge',
    csn: 'XVG',
    img: '/res/coinImages/XVG.png',
    alt: 'Verge' 
  },	
  {	
    coin: 'WhiteCoin',
    csn: 'XWC',
    img: '/res/coinImages/XWC.png',
    alt: 'WhiteCoin' 
  },	
  {	
    coin: 'ZCoin',
    csn: 'XZC',
    img: '/res/coinImages/XZC.png',
    alt: 'ZCoin' 
  },	
  {	
    coin: 'Zclassic',
    csn: 'ZCL',
    img: '/res/coinImages/ZCL.png',
    alt: 'Zclassic' 
  },	
  {	
    coin: 'Zcash',
    csn: 'ZEC',
    img: '/res/coinImages/ZEC.png',
    alt: 'Zcash' 
  },	
  {	
    coin: 'Zencash',
    csn: 'ZEN',
    img: '/res/coinImages/ZEN.png',
    alt: 'Zencash' 
  },	
  {	
    coin: '0x Protocol',
    csn: 'ZRX',
    img: '/res/coinImages/ZRX.png',
    alt: '0x Protocol' 
  } 
];