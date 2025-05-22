const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('0029VahusSh0QeaoFzHJCk2x')
const {makeid} = require('./id');
const QRCode = require('qrcode');
const express = require('express');
const path = require('path');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
	default: Prince_Junior_Tech,
	useMultiFileAuthState,
	jidNormalizedUser,
	Browsers,
	delay,
	makeInMemoryStore,
} = require("@whiskeysockets/baileys");

function removeFile(FilePath) {
	if (!fs.existsSync(FilePath)) return false;
	fs.rmSync(FilePath, {
		recursive: true,
		force: true
	})
};
const {
	readFile
} = require("node:fs/promises")
router.get('/', async (req, res) => {
	const id = makeid();
	async function PRINCE_JUNIOR_V2_QR_CODE() {
		const {
			state,
			saveCreds
		} = await useMultiFileAuthState('./temp/' + id)
		try {
			let Qr_Code_By_Prince_Junior_Tech = Prine_Junior_Tech({
				auth: state,
				printQRInTerminal: false,
				logger: pino({
					level: "silent"
				}),
				browser: Browsers.macOS("Desktop"),
			});

			Qr_Code_By_Prince_Junior_Tech.ev.on('creds.update', saveCreds)
			Qr_Code_By_Prince_Junior_Tech.ev.on("connection.update", async (s) => {
				const {
					connection,
					lastDisconnect,
					qr
				} = s;
				if (qr) await res.end(await QRCode.toBuffer(qr));
				if (connection == "open") {
					await delay(5000);
					let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
					await delay(800);
				   let b64data = Buffer.from(data).toString('base64');
				   let session = await Qr_Code_By_Prince_Junior_Tech.sendMessage(Qr_Code_By_Prince_Junior_Tech.user.id, { text: '' + b64data });
	
				   let PRINCE_JUNIOR_V2_TEXT = `
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
❸ || Owner = https://wa.me/+254723275807
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
❺ || GIT HUB REPO = https://github.com/Nyanuga/Prince-junior-v2
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍʀ Uthuman Dev😌`
	 await Qr_Code_By_Prince_Junior_Tech.sendMessage(Qr_Code_By_Prince_Junior_Tech.user.id,{text:PRINCE_JUNIOR_V2_TEXT},{quoted:session})



					await delay(100);
					awaitQr_Code_By_Prince_Junior_Tech.ws.close();
					return await removeFile("temp/" + id);
				} else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
					await delay(10000);
					PRINCE_JUNIOR_V2_QR_CODE();
				}
			});
		} catch (err) {
			if (!res.headersSent) {
				await res.json({
					code: "Service is Currently Unavailable"
				});
			}
			console.log(err);
			await removeFile("temp/" + id);
		}
	}
	return await PRINCE_JUNIOR_V2_QR_CODE()
});
module.exports = router
