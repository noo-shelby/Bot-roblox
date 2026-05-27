require("dotenv").config();

const express = require("express");
const { Client, GatewayIntentBits } = require("discord.js");
const { startRoblox } = require("./roblox");

const app = express();
app.get("/", (req, res) => res.send("Shelby Bot Online"));
app.listen(process.env.PORT || 3000);

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.once("ready", async () => {
    console.log(`🚀 Discord Online: ${client.user.tag}`);

    // conecta Roblox separado (IMPORTANTE)
    await startRoblox();
});

client.login(process.env.DISCORD_TOKEN);