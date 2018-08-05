'use strict'

let EthMenu = [
    { 	
        coin: 'Ada',
        csn: 'ADA',
        img: '/res/coinImages/ADA',
        alt: 'Ada'
    },	
    { 	
        coin: 'AdEx',
        csn: 'ADX',
        img: '/res/coinImages/ADX',
        alt: 'AdEx'
    },	
    { 	
        coin: 'AidCoin',
        csn: 'AID',
        img: '/res/coinImages/AID',
        alt: 'AidCoin'
    },	
    { 	
        coin: 'Aragon',
        csn: 'ANT',
        img: '/res/coinImages/ANT',
        alt: 'Aragon'
    },	
    { 	
        coin: 'Basic Attention Token',
        csn: 'BAT',
        img: '/res/coinImages/BAT',
        alt: 'Basic Attention Token'
    },	
    { 	
        coin: 'Bitcoin Cash',
        csn: 'BCH',
        img: '/res/coinImages/BCH',
        alt: 'Bitcoin Cash'
    },	
    { 	
        coin: 'BlockMason Credit Protocol',
        csn: 'BCPT ',
        img: '/res/coinImages/BCPT ',
        alt: 'BlockMason Credit Protocol'
    },	
    { 	
        coin: 'Bloom',
        csn: 'BLT',
        img: '/res/coinImages/BLT',
        alt: 'Bloom'
    },	
    { 	
        coin: 'Bancor',
        csn: 'BNT',
        img: '/res/coinImages/BNT',
        alt: 'Bancor'
    },	
    { 	
        coin: 'Bitcoin Gold',
        csn: 'BTG',
        img: '/res/coinImages/BTG',
        alt: 'Bitcoin Gold'
    },	
    { 	
        coin: 'Civic',
        csn: 'CVC',
        img: '/res/coinImages/CVC',
        alt: 'Civic'
    },	
    { 	
        coin: 'Dash',
        csn: 'DASH',
        img: '/res/coinImages/DASH',
        alt: 'Dash'
    },	
    { 	
        coin: 'DigiByte',
        csn: 'DGB',
        img: '/res/coinImages/DGB',
        alt: 'DigiByte'
    },	
    { 	
        coin: 'DMarket',
        csn: 'DMT',
        img: '/res/coinImages/DMT',
        alt: 'DMarket'
    },	
    { 	
        coin: 'Enigma',
        csn: 'ENG',
        img: '/res/coinImages/ENG',
        alt: 'Enigma'
    },	
    { 	
        coin: 'Ethereum Classic',
        csn: 'ETC',
        img: '/res/coinImages/ETC',
        alt: 'Ethereum Classic'
    },	
    { 	
        coin: 'Factom',
        csn: 'FCT',
        img: '/res/coinImages/FCT',
        alt: 'Factom'
    },	
    { 	
        coin: 'Gnosis',
        csn: 'GNO',
        img: '/res/coinImages/GNO',
        alt: 'Gnosis'
    },	
    { 	
        coin: 'Golem',
        csn: 'GNT',
        img: '/res/coinImages/GNT',
        alt: 'Golem'
    },	
    { 	
        coin: 'Gifto',
        csn: 'GTO',
        img: '/res/coinImages/GTO',
        alt: 'Gifto'
    },	
    { 	
        coin: 'Loopring',
        csn: 'LRC',
        img: '/res/coinImages/LRC',
        alt: 'Loopring'
    },	
    { 	
        coin: 'Litecoin',
        csn: 'LTC',
        img: '/res/coinImages/LTC',
        alt: 'Litecoin'
    },	
    { 	
        coin: 'Lunyr',
        csn: 'LUN',
        img: '/res/coinImages/LUN',
        alt: 'Lunyr'
    },	
    { 	
        coin: 'Decentraland',
        csn: 'MANA',
        img: '/res/coinImages/MANA',
        alt: 'Decentraland'
    },	
    { 	
        coin: 'Monaco',
        csn: 'MCO',
        img: '/res/coinImages/MCO',
        alt: 'Monaco'
    },	
    { 	
        coin: 'More',
        csn: 'MORE',
        img: '/res/coinImages/MORE',
        alt: 'More'
    },	
    { 	
        coin: 'Neo',
        csn: 'NEO',
        img: '/res/coinImages/NEO',
        alt: 'Neo'
    },	
    { 	
        coin: 'Naga',
        csn: 'NGC',
        img: '/res/coinImages/NGC',
        alt: 'Naga'
    },	
    { 	
        coin: 'Odyssey',
        csn: 'OCN',
        img: '/res/coinImages/OCN',
        alt: 'Odyssey'
    },	
    { 	
        coin: 'OmiseGO',
        csn: 'OMG',
        img: '/res/coinImages/OMG',
        alt: 'OmiseGO'
    },	
    { 	
        coin: 'TenX Pay Token',
        csn: 'PAY',
        img: '/res/coinImages/PAY',
        alt: 'TenX Pay Token'
    },	
    { 	
        coin: 'Polymath',
        csn: 'POLY',
        img: '/res/coinImages/POLY',
        alt: 'Polymath'
    },	
    { 	
        coin: 'PowerLedger',
        csn: 'POWR',
        img: '/res/coinImages/POWR',
        alt: 'PowerLedger'
    },	
    { 	
        coin: 'Propy',
        csn: 'PRO',
        img: '/res/coinImages/PRO',
        alt: 'Propy'
    },	
    { 	
        coin: 'Qtum',
        csn: 'QTUM',
        img: '/res/coinImages/QTUM',
        alt: 'Qtum'
    },	
    { 	
        coin: 'Ripio Credit Network',
        csn: 'RCN ',
        img: '/res/coinImages/RCN ',
        alt: 'Ripio Credit Network'
    },	
    { 	
        coin: 'Augur',
        csn: 'REP',
        img: '/res/coinImages/REP',
        alt: 'Augur'
    },	
    { 	
        coin: 'iEx.ec',
        csn: 'RLC',
        img: '/res/coinImages/RLC',
        alt: 'iEx.ec'
    },	
    { 	
        coin: 'Salt',
        csn: 'SALT',
        img: '/res/coinImages/SALT',
        alt: 'Salt'
    },	
    { 	
        coin: 'Siacoin',
        csn: 'SC',
        img: '/res/coinImages/SC',
        alt: 'Siacoin'
    },	
    { 	
        coin: 'Status Network Token',
        csn: 'SNT',
        img: '/res/coinImages/SNT',
        alt: 'Status Network Token'
    },	
    { 	
        coin: 'Sirin Token',
        csn: 'SRN',
        img: '/res/coinImages/SRN',
        alt: 'Sirin Token'
    },	
    { 	
        coin: 'Storm',
        csn: 'STORM',
        img: '/res/coinImages/STORM',
        alt: 'Storm'
    },	
    { 	
        coin: 'Stratis',
        csn: 'STRAT',
        img: '/res/coinImages/STRAT',
        alt: 'Stratis'
    },	
    { 	
        coin: 'TRON',
        csn: 'TRX',
        img: '/res/coinImages/TRX',
        alt: 'TRON'
    },	
    { 	
        coin: 'TrueUSD',
        csn: 'TUSD',
        img: '/res/coinImages/TUSD',
        alt: 'TrueUSD'
    },	
    { 	
        coin: 'UnikoinGold',
        csn: 'UKG',
        img: '/res/coinImages/UKG',
        alt: 'UnikoinGold'
    },	
    { 	
        coin: 'UpToken',
        csn: 'UP',
        img: '/res/coinImages/UP',
        alt: 'UpToken'
    },	
    { 	
        coin: 'BLOCKv',
        csn: 'VEE',
        img: '/res/coinImages/VEE',
        alt: 'BLOCKv'
    },	
    { 	
        coin: 'Viberate',
        csn: 'VIB',
        img: '/res/coinImages/VIB',
        alt: 'Viberate'
    },	
    { 	
        coin: 'Waves',
        csn: 'WAVES',
        img: '/res/coinImages/WAVES',
        alt: 'Waves'
    },	
    { 	
        coin: 'Worldwide Asset Exchange',
        csn: 'WAX',
        img: '/res/coinImages/WAX',
        alt: 'Worldwide Asset Exchange'
    },	
    { 	
        coin: 'NEM',
        csn: 'XEM',
        img: '/res/coinImages/XEM',
        alt: 'NEM'
    },	
    { 	
        coin: 'Lumen',
        csn: 'XLM',
        img: '/res/coinImages/XLM',
        alt: 'Lumen'
    },	
    { 	
        coin: 'Monero',
        csn: 'XMR',
        img: '/res/coinImages/XMR',
        alt: 'Monero'
    },	
    { 	
        coin: 'XRP',
        csn: 'XRP',
        img: '/res/coinImages/XRP',
        alt: 'XRP'
    },	
    { 	
        coin: 'ZCash',
        csn: 'ZEC',
        img: '/res/coinImages/ZEC',
        alt: 'ZCash'
    },	
    { 	
        coin: '0x Protocol',
        csn: 'ZRX',
        img: '/res/coinImages/ZRX',
        alt: '0x Protocol'
    }      
];