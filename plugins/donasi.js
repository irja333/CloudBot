let handler =  m => m.reply(`
╭─「 Group 」
│ • https://chat.whatsapp.com/Fd92L258maQ6lWjIua6Djq
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
