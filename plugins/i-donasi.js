let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, await (await fetch(fla + 'donasi')).buffer(), `
╭━━•›ꪶ ۪۪⸙ ━ ━ ━ ━ ꪶ ۪۪⸙‹•━━╮ 
┃╭┈─────────────⩵꙰ཱི࿐ 
┃╰──*DONATE*──➤ ↶↷* 
╰•͙✩̣̣
⁙┃ ુོ    : 60102810046
⁙┃ ુོ 
⁙┃
⁙┃ https://gitub.com/ai-man-123
⁙┃ 
⁙╰•°°°🕊°°°°°🕊°°°°°°🕊°°°°°°°°
`.trim(), '© Aiman', 'Konfirmasi', '.konfirm saya ingin donasi/bayar ', m)
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
