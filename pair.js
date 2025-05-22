const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: Prince_Junior_Tech,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("maher-zubair-baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function PRINCE_JUNIOR_V2_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_Prince_junior_Tech = Prince_Junior_Tech({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Linux)", "", ""]
             });
             if(!Pair_Code_By_Prince_junior_Tech .authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_Prince_junior_Tech .requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_Prince_junior_Tech .ev.on('creds.update', saveCreds)
            Pair_Code_By_Prince_junior_Tech .ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_Prince_junior_Tech .sendMessage(Pair_Code_By_Prince_junior_Tech .user.id, { text: '' + b64data });

               let GIFTED_MD_TEXT = `

┏━━━━━━━━━━━━━━
┃PRINCE-JUNIOR-V2 SESSION IS 
┃SUCCESSFULLY
┃CONNECTED 💯🔥
┗━━━━━━━━━━━━━━━
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❶ || Creator =JUNIOR EZED POWER 
      Designed=VEE VIVIAN
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❷ || WhattsApp Channel = https://whatsapp.com/channel/0029Vb5U5AI3wtb8r6Gbex2p
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❸ || Owner = https://wa.me/+25423245807
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❺ || GIT HUB REPO = https://github.com/Nyanuga/Prince-junior-v2
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍʀ Uthuman Dev😌`
 await Pair_Code_By_Prince_junior_Tech .sendMessage(Pair_Code_By_Prince_junior_Tech .user.id,{text:PRINCE_JUNIOR_V2_TEXT},{quoted:session})
 

        await delay(100);
        await Pair_Code_By_Prince_junior_Tech .ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    PRINE_JUNIOR_V2_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service Unavailable"});
         }
        }
    }
    return await PRINE_JUNIOR_V2_PAIR_CODE()
});
module.exports = router
