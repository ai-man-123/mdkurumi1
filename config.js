let fs = require('fs')
//bts================================================
global.owner = ['60102810046', '0', '0'] // Letakan nomor kamu disini
global.mods = ['60102810046', '0'] // Moderator?
global.prems = JSON.parse(fs.readFileSync('./src/premium.json')) // Pengguna premium tidak memerlukan limit
global.APIs = { // API Prefix
  // nama: 'https://website'
  hardianto: 'https://hardianto-chan.herokuapp.com',
  jonaz: 'https://jonaz-api-v2.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zekais: 'http://zekais-api.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  vhtear: 'https://api.vhtear.com',
  lolhum: 'https://api.lolhuman.xyz',
  fxc7: 'https://fxc7-api.herokuapp.com',
  aqul: 'https://api.justaqul.xyz',
  irwan: 'https://irwan-api1-xyz.herokuapp.com',
  mel: 'https://melcanz.com'

}
global.APIKeys = { // APIKey nya disini
  // 'https://website': 'apikey'
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://pencarikode.xyz': 'pais',
  'https://api.xteam.xyz': '1005ef65a6159cea',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
  'https://api.lolhuman.xyz': '4ef1b11287339c1b10699ece',
  'https://api.vhtear.com': 'sayahafiz',
  'https://fxc7-api.herokuapp.com': 'apikey',
  'https://api.justaqul.xyz': 'apikey',
  'http://zekais-api.herokuapp.com': 'apikey',
  'https://irwan-api1-xyz.herokuapp.com': 'memek',
  'https://melcanz.com': 'melcantik'

}

// Sticker WM
global.packname = ':)'
global.author = '@Aiman'
global.irwan1 = '60102810046@s.whatsapp.net'
global.wan = `0@s.whatsapp.net` //gausah di ubah
global.wait = '「 ⏱️ 」Loading...'
global.ganteng = 'https://wa.me/60102810046?text=Hallo Mas, Kamu Ganteng'
global.gantengku = 'Link Ke Whatsapp Developer Bot'
global.eror = '「❗」Server ERROR!'
global._gc1 = 'https://chat.whatsapp.com/'
global._gc2 = 'https://chat.whatsapp.com/'
global.fla = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text='
global.watermark = '© Aiman ᝣ '
global.wm = '© Aiman ᝣ '
global.gc1 = '0@g.us'
global.gc2 = '0@g.us'
global.sumberurl = 'https://www.youtube.com/watch?v=TaXTvW0HGE'
global.deskripsiurl = 'Aiman-wabot adalah salah satu bot WhatsApp, yang mempunyai ±350 fitur'
global.namabot = "Aiman" //manual di sini
global.thanks = `Thanks to:\n•Allah swt\n•Nurutomo\n•Aiman\n•Ariffb\n•Aca Mirabel\n•Penyedia Layanan API\n•Orang-orang yang Berdonasi\n•Wifi Tetangga\n\nJika menemukan bug atau request fitur dan join bot harap chat owner dengan cara:\n*#report* [pesan].\n\n(Bot join group NOT FREE!)\nPrice:\n10K untuk 1 bulan\nUntuk 1 group\n\nNb:bot ini masih terus dikembangkan.`
global.multiplier = 69 // Semakin tinggi, semakin sulit naik level

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
