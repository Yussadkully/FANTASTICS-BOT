reconst fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/71ce7bc2c1af81cbc7df7.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ DUDUU_MENDEZ²²¹-ᴍᴅ" 


global.devs = "255749750707" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255616829792;




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,255xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,255xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "255616829792";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_01_08_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMTksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTAwLFxuICAgICAgICA4MixcbiAgICAgICAgMTAwLFxuICAgICAgICAyNixcbiAgICAgICAgNzQsXG4gICAgICAgIDMzLFxuICAgICAgICAxMjksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTI2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNjksXG4gICAgICAgIDUwLFxuICAgICAgICAyMyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAzNCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxODYsXG4gICAgICAgIDk2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTksXG4gICAgICAgIDEzNCxcbiAgICAgICAgODksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjksXG4gICAgICAgIDExLFxuICAgICAgICAxNTcsXG4gICAgICAgIDY0LFxuICAgICAgICA3MixcbiAgICAgICAgMjA3LFxuICAgICAgICAxODgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDM0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxODksXG4gICAgICAgIDIxMCxcbiAgICAgICAgODEsXG4gICAgICAgIDcwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDM0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDk1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI1LFxuICAgICAgICA1OCxcbiAgICAgICAgMTg5LFxuICAgICAgICAzMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTUyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTMxLFxuICAgICAgICA5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjksXG4gICAgICAgIDIxNixcbiAgICAgICAgMjAsXG4gICAgICAgIDIyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjM4LFxuICAgICAgICA3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgODUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTA2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEsXG4gICAgICAgIDE0LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTE3LFxuICAgICAgICA3OSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDcyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDExMixcbiAgICAgICAgNzIsXG4gICAgICAgIDE1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEwLFxuICAgICAgICAxNTksXG4gICAgICAgIDUwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDQ3LFxuICAgICAgICA4LFxuICAgICAgICAzMixcbiAgICAgICAgOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDU4LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMTk4LFxuICAgICAgICAyOCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDU4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDQwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAzNixcbiAgICAgICAgMTcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDgyLFxuICAgICAgICAxOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDAsXG4gICAgICAgIDk4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjQyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMixcbiAgICAgICAgMTE3LFxuICAgICAgICAxOCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzksXG4gICAgICAgIDcxLFxuICAgICAgICAxODEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDUyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNDksXG4gICAgICAgIDk5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjUwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjM5LFxuICAgICAgICA5NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDQzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTA4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDYwLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDk4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNixcbiAgICAgICAgMTg1LFxuICAgICAgICAxODMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMzgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTgzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMzksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTMyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyOSxcbiAgICAgICAgMjI2LFxuICAgICAgICA3NixcbiAgICAgICAgMTE4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDc5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDkxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDI3LFxuICAgICAgICAxODIsXG4gICAgICAgIDUyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODMsXG4gICAgICAgIDM1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDM3LFxuICAgICAgICAxODYsXG4gICAgICAgIDExMixcbiAgICAgICAgODYsXG4gICAgICAgIDcxLFxuICAgICAgICAxMzksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTMyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI3ZU9nbU5McUMxMEFaNkdnNm5RdG9mQ2dHTzlta0dTaGRaK0ozYlV1VllJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NTYxNjgyOTc5MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNzEzN0VEMzU3OEY1NjEzNjFEQjAzMDc3NDM3MzBGQjRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIzODg1MjYxXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjR1ekQzRjd6UWtpb1lNdnRrbVJiM3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiN2I5N2Q5MjctYTJmYi00MzdiLThjODYtYjdkMDBlOThhMDBmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExOCxcbiAgICAgIDE5MSxcbiAgICAgIDE2NyxcbiAgICAgIDIwMSxcbiAgICAgIDE5OSxcbiAgICAgIDE5MSxcbiAgICAgIDIsXG4gICAgICAyNDgsXG4gICAgICAxMDMsXG4gICAgICA2NixcbiAgICAgIDYyLFxuICAgICAgMjQ3LFxuICAgICAgNTIsXG4gICAgICAxMzUsXG4gICAgICAyMjYsXG4gICAgICAxMzIsXG4gICAgICAyMDMsXG4gICAgICAxMzcsXG4gICAgICA3LFxuICAgICAgODVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOCxcbiAgICAgIDEwOCxcbiAgICAgIDE1LFxuICAgICAgMTg5LFxuICAgICAgMTYyLFxuICAgICAgMTYyLFxuICAgICAgOTAsXG4gICAgICAxNDgsXG4gICAgICAyMjgsXG4gICAgICA2OCxcbiAgICAgIDE3OCxcbiAgICAgIDIzNCxcbiAgICAgIDIwNixcbiAgICAgIDEwOCxcbiAgICAgIDEwMyxcbiAgICAgIDE1NSxcbiAgICAgIDUwLFxuICAgICAgMjYsXG4gICAgICAxMDYsXG4gICAgICA0N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI0R1FSTTUyTlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU1NjE2ODI5NzkyOjI0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxODM2NzkwMjQzOTg0ODU6MjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT3pnbE5FQ0VNUE5nYllHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJIanhWMGpkNEJYR3dPTEc0Ti9VYWtFUnpvbUlScmJ4ZFZpbmJ5SlM2NlNFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlZwNFFOUk51dnRvSTNCQ0FCNzY2UFhQTElsRjA1SEk1bFhKcnN0NFBnbDFma2U0Q25hUzRhRnBaakNIWmZleElySUl0MlVqMEJoc0V0S1I5ZVllNENBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInVVTjh4RHBBUVVoQ2Q5ai82eW5pb0kzZnZlT09lK2VuUXV6blphNEdjQ2xWVkIrc3d4c2pHQXhTWUZ5aGtSbStrV3VXdHgrUE12cTlpZ1ZxdFhmdWlBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NTYxNjgyOTc5MjoyNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAzM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIzODg1MjU1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQ3RqXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDdGouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJEczd5U1RCSkt1eVBlWjlMQTJVRU5GbjB4WkJpUFVycXBuWFZySDJob21vPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcwNzA4MDI5OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjU5OTIyMTc4NFwifSIKfQ=="  // PUT your SESSION_ID  

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "@",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ MENDEZ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • MENDEZ ᴛᴇᴄʜ』*\n youtube.com/@DUDUU_MENDEZ"),
 
  author : process.env.PACK_AUTHER|| "Yussad",
  packname: process.env.PACK_NAME || "Yussad",
  botname : process.env.BOT_NAME  || "FANTASTICS BOT",
  ownername:process.env.OWNER_NAME|| "YUSSAD",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-None-RMkn7loW3l2EmY3JV1pNT3BlbkFJOM2MSmCXkKhLFKg95Bdg",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "FANTASTICS"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
