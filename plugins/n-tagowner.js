let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]

  conn.reply(m.chat, `
Owner, Ada yang tag
`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /@60102810046/i
handler.command = new RegExp

module.exports = handler
