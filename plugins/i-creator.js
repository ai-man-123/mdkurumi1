function handler(m) {
  m.reply('Chat jika penting, harap tidak spam.')
  this.sendContact(m.chat, global.owner[0], this.getName(global.owner[0] + '@s.whatsapp.net'), m)
  this.sendContact(m.chat, '60102810046@s.whatsapp.net', 'Aimanx2', m)
}
handler.help = ['owner1', 'creator1']
handler.tags = ['info']

handler.command = /^(owner1|creator1)$/i

module.exports = handler
