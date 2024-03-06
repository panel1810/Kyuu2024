const chalk = require("chalk")
const fs = require("fs")

global.publik = true

global.yanz = "-"
global.skizo = "-"
global.caliph = "-"
global.ibeng = "-"
global.lolkey = "-"
global.BotKey = "-"
global.ZenzKey = "-"
global.rose = "-"
global.rull = "-"

global.ownerName = "Kurumi"
global.ownername = "Kurumi"
global.author = "Kurumi"
global.sessionName = "Kurumi"
global.botNumber = "62838764598810"
global.botName = "Kyuu"
global.owner = "33757050057"
global.wmbot = "Kyuu 33757050057"
global.yt = "Kyuu"
global.wm = "Kyuu"
global.wagc = "https://whatsapp.com/"
global.fake2 = '-'
global.thumbnyaa = fs.readFileSync("./database/thumbnail/thumb.jpg")
global.Intervalmsg = 1000 //detik
global.gcounti = {
'prem' : 1000,
'user' : 20
} 

global.packname = "Kyuu"
global.author = "Kurumi"

global.mess = {
    success: 'ini dia kakak',
    admin: 'Fitur ini hanya dapat digunakan oleh admin!',
    botAdmin: 'jadikan Bot Admin Terlebih Dahulu!',
    premime: 'Fitur Khusus Premium Jika Ingin Silakan Hub Ownerku',
    owner: 'Fitur ini hanya dapat digunakan oleh owner',
    group: 'Fitur Hanya Digunakan Untuk Grup!',
    private: 'Fitur Hanya Digunakan Di Private Chat!',
    bot: 'Fitur ini hanya dapat digunakan oleh bot',
    wait: 'proses...',
    linkm: 'Mana Link nya?',
    nsfw: 'Fitur nsfw belum diaktifkan, silahkan menghubungi admin untuk mengaktifkan',
    Badmin: 'Fitur dapat Digunakan Setelah Bot menjadi ADMIN!',
    Iv: 'Link yang kamu berikan tidak valid',
    api: 'Ups, terjadi kesalahan pada botkey, silahkan hubungi owner untuk memperbaikinya'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})