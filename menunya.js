const chalk = require('chalk')
const fs = require('fs')

global.menunya = (pushname, prefix, hituet) =>{
	return `╭─❒ 「 *INFO MENU* 」
│
│○ !owner  
│○ !sc  
│○ !ping  
│○ !donate  
│○ !tqto  
│○ !sewa  
│○ !q  
│○ !sewa  
│○ !buyprem  
│○ !runtime  
│○ !groupbot  
│○ !developer  
│
╰❒ 

╭─❒ 「 *OWNER MENU* 」
│
│○ !addprem  
│○ !delprem  
│○ !listprem  
│○ !block  
│○ !unblock  
│○ !public  
│○ !self  
│○ !out  
│○ !kosong  
│○ !join  
│○ !addsewa  
│○ !delsewa  
│○ !setnamabot  
│○ !setbiobot  
│○ !broadcastvid  
│○ !bctext  
│○ !bcimage  
│○ !pushkon
│○ !pushkonid
│○ !anticall [on/off]
│○ !setexif
│○ !idgrub
│○ !idgc
│○ !jadibot
│○ !listjadibot
│○ !restartbot
│○ !creategc
│○ !banned
│○ !listbanned
│○ !unbanned
│○ !autoread
│○ !autoblok212 [on/off]
│○ !getcase
│○ !setppbot
│○ !pppanjang
│○ !addowner
│○ !delowner
│○ !setbot
│○ !delsetbot
│
╰❒

╭─❒ 「 *DATABASE MENU* 」
│
│○ !addvn
│○ !listvn
│○ !delvn
│○ !addzip
│○ !delzip
│○ !listzip
│○ !yozip
│○ !sendzip
│○ !addapk
│○ !delapk
│○ !listapk
│○ !sendapk
│○ !addpdf
│○ !listpdf
│○ !sendpdf
│○ !yopdf
│○ !sendpdf
│
╰❒

╭─❒ 「  *STORE MENU*  」
│
│○ !list  
│○ !addlist  
│○ !updatelist  
│○ !dellist  
│○ !jeda  
│○ !tambah  
│○ !kurang  
│○ !kali  
│○ !bagi  
│○ !setproses  
│○ !changeproses  
│○ !delsetproses  
│○ !setdone  
│○ !changedone  
│○ !delsetdone  
│○ !proses  
│○ !done  
│○ !setwelcome  
│○ !changewelcome  
│○ !delsetwelcome  
│○ !setleft  
│○ !changeleft  
│○ !delsetleft  
│○ !opentime
│○ !closetime
│
╰❒

╭─❒ 「 *GROUP MENU* 」 
│
│○ !antiwame  [on/off]
│○ !antiwame2  [on/off]
│○ !antilink  [on/off]
│○ !antilink2  [on/off]
│○ !welcome  [on/off]
│○ !goodbye  [on/off]
│○ !group [open/close]
│○ !group [close/open]
│○ !hidetag  
│○ !kick  
│○ !linkgc  
│○ !resetlinkgc  
│○ !delete  
│○ !listonline  
│○ !setnamegc  
│○ !setdesc  
│○ !listsewa  
│○ !add  
│○ !promote  
│○ !demote  
│○ !antilinkall [on/off]
│○ !sendlinkgc  
│○ !tagall  
│○ !totag
│○ !mute [on/off]
│○ !nsfw [on/off]
│○ !setppgroup
│
╰❒

╭─❒ 「 *SEARCH MENU* 」 
│
│○ !ytsearch  
│○ !google  
│○ !cariresep
│○ !bacaresep
│○ !happymod
│○ !ssweb
│○ !grupwa
│○ !translate
│○ !listbahasa
│
╰❒

╭─❒ 「 *DOWNLOAD MENU* 」
│ 
│○ !tiktok  
│○ !tiktokvn  
│○ !tiktokaudio  
│○ !tiktok2
│○ !tiktokaudio2
│○ !spotify  
│○ !ytmp3  
│○ !ytmp4  
│○ !play  
│○ !playmp3  
│○ !playmp4  
│○ !tomp4
│○ !toaudio
│○ !tomp3
│○ !tovn
│○ !togif
│○ !igdl  
│○ !igvideo  
│○ !instavid
│○ !igreels
│○ !fbdl
│○ !facebook
│○ !gitclone
│○ !twiter
│
╰❒

╭─❒ 「 *OTHER MENU* 」 
│
│○ !afk
│○ !bot
│○ !sapa
│
╰❒

╭─❒ 「 *RANDOM STICKER* 」 
│
│○ !patrick  
│○ !popoci  
│○ !sponsbob  
│○ !kawan-sponsbob  
│○ !awoawo  
│○ !chat  
│○ !benedict  
│○ !dbfly  
│○ !dino-kuning  
│○ !doge  
│○ !gojosatoru  
│○ !hope-boy  
│○ !jisoo  
│○ !kr-robot  
│○ !kucing   
│○ !lonte  
│○ !manusia_lidi  
│○ !menjamet  
│○ !meow  
│○ !nicholas  
│○ !tyni  
│
╰❒

╭─❒ 「 *STICKER MENU* 」 
│
│○ !sticker  
│○ !toimage  
│○ !pinterest  
│○ !ttp  
│○ !smeme  
│○ !attp  
│○ !emojimix  
│○ !wm  
│○ !qc
│○ !snobg
│
╰❒

╭─❒ 「 *Anonymous MENU* 」 
│
│○ !menfess
│
╰❒

╭─❒ 「 *Ai Menu* 」 
│
│○ !ai
│○ !chatgpt  
│○ !aiimg
│
╰❒

╭─❒ 「 *STALKER MENU* 」 
│
│○ !ffstalk
│○ !mlstalk
│○ !githubstalk
│○ !npmstalk
│○ !igstalk
│
╰❒

╭─❒ 「 *GAMES MENU* 」 
│
│○ !tebakkata  
│○ !tebakgambar  
│○ !tebakbendera  
│○ !caklontong  
│○ !susunkata  
│○ !tebakkalimat  
│○ !jodohku
│○ !jadian
│○ !halah
│○ !hilih
│○ !huluh
│○ !heleh
│○ !holoh
│
╰❒

╭─❒ 「 *TEXTPRO MENU* 」
│
│○ !candy
│○ !christmas
│○ !3dchristmas
│○ !sparklechristmas
│○ !deepsea
│○ !scifi
│○ !rainbow
│○ !waterpipe
│○ !spooky
│○ !pencil
│○ !circuit
│○ !discovery
│○ !metalic
│○ !fiction
│○ !demon
│○ !transformer
│○ !berry
│○ !thunder
│○ !magma
│○ !3dstone
│○ !neonlight
│○ !glitch
│○ !harrypotter
│○ !brokenglass
│○ !papercut
│○ !watercolor
│○ !multicolor
│○ !neondevil
│○ !underwater
│○ !graffitibike
│○ !snow
│○ !cloud
│○ !honey
│○ !ice
│○ !fruitjuice
│○ !biscuit
│○ !wood
│○ !chocolate
│○ !strawberry
│○ !matrix
│○ !blood
│○ !dropwater
│○ !toxic
│○ !lava
│○ !rock
│○ !bloodglas
│○ !hallowen
│○ !joker
│○ !darkgold
│○ !wicker
│○ !firework
│○ !skeleton
│○ !blackpink
│○ !sand
│○ !glue
│○ !1917
│○ !leaves
│
╰❒

╭─❒ 「 *EPHOTO MENU* 」
│
│○ !glitchtext
│○ !writetext
│○ !advancedglow
│○ !typographytext
│○ !pixelglitch
│○ !flagtext
│○ !neonglitch
│○ !flagtext
│○ !flag3dtext
│○ !deletingtext
│○ !glowingtext
│○ !blackpinkstyle
│○ !underwatertext
│○ !logomaker
│○ !papercutstyle
│○ !cartoonstyle
│○ !watercolortext
│○ !effectclouds
│○ !blackpinklogo
│○ !gradienttext
│○ !summerbeach
│○ !luxurygold
│○ !multicoloredneon
│○ !sandsummer
│○ !galaxywallpaper
│○ !1917style
│○ !makingneon
│○ !royaltext
│○ !freecreate
│○ !galaxystyle
│○ !lighteffects
│
╰❒

╭─❒ 「 *LOGO MENU* 」
│
│○ !horror
│○ !game8bit
│○ !layered
│○ !glitch2
│○ !cool-graffiti
│○ !cool-wall-graffiti
│○ !realistic
│○ !space3d
│○ !glitch-tiktok
│○ !stone
│○ !marvel
│○ !marvel2
│○ !metal-rose-gold
│○ !pornhub
│○ !avengers
│○ !metal-rainbow
│○ !metal-gold
│○ !metal-galaxy
│○ !lion
│○ !wolf-black-white
│○ !wolf-galaxy
│○ !ninja
│○ !3dsteel
│○ !horror2
│○ !lava
│○ !bagel
│
╰❒

╭─❒ 「 *PRIMBON MENU* 」
│
│○ !nomorhoki
│○ !artimimpi
│○ !ramalanjodoh
│○ !ramalanjodohbali
│○ !suamiistri
│○ !ramalancinta
│○ !artinama
│○ !cocoknama
│○ !pasangan
│○ !jadiannikah
│○ !sifatusaha
│○ !rejeki
│○ !pekerjaan
│○ !ramalnasib
│○ !penyakit
│○ !artitarot
│○ !fengshui
│○ !haribaik
│○ !harisangar
│○ !harisial
│○ !harinaga
│○ !arahrejeki
│○ !peruntungan
│○ !weton
│○ !sifat
│○ !keberuntungan
│○ !memancing
│○ !masasubur
│○ !shio
│
╰❒

╭─❒ 「 *FUN MENU* 」 
│
│○ !memek
│○ !bego
│○ !goblok
│○ !janda
│○ !perawan
│○ !babi
│○ !tolol
│○ !pinter
│○ !pintar
│○ !asu
│○ !bodoh
│○ !gay
│○ !lesby
│○ !bajingan
│○ !jancok
│○ !anjing
│○ !ngentod
│○ !ngentot
│○ !monyet
│○ !mastah
│○ !newbie
│○ !bangsat
│○ !bangke
│○ !sange
│○ !sangean
│○ !dakjal
│○ !horny
│○ !wibu
│○ !puki
│○ !pantex
│○ !pantek
│○ !setan
│○ !iblis
│○ !cacat
│○ !yatim
│○ !piatu
│○ !checkme
│
╰❒

╭─❒ 「 *PHOTOXY MENU* 」
│
│○ !shadow
│○ !write
│○ !romantic
│○ !burnpaper
│○ !smoke
│○ !narutobanner
│○ !love
│○ !undergrass
│○ !doublelove
│○ !coffecup
│○ !underwaterocean
│○ !smokyneon
│○ !starstext
│○ !rainboweffect
│○ !balloontext
│○ !metalliceffect
│○ !embroiderytext
│○ !flamingtext
│○ !stonetext
│○ !writeart
│○ !summertext
│○ !wolfmetaltext
│○ !nature3dtext
│○ !rosestext
│○ !naturetypography
│○ !quotesunder
│○ !shinetext
│
╰❒

╭─❒ 「 *THANKS TO* 」 
│
│○ Allah Swt.
│○ Myparents
│○ Hads
│○ VinzDev
│○ itsuka Botz
│○ Misel
│○ Fatih Arridho
│○ Ferdiz
│○ Zeeoneofc
│○ Jer Ofc
│○ Lynxaiman
│○ All Creator Bot
│
╰❒
`
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})