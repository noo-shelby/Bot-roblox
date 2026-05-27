require("dotenv").config();

const express = require("express");
const { startRoblox } = require("./roblox");

const app = express();

app.get("/", (req, res) => {
    res.send("Roblox Bot Online 🚀");
});

app.listen(process.env.PORT || 3000, async () => {
    console.log("🌐 [SERVER] Rodando na porta:", process.env.PORT || 3000);

    console.log("📦 [ENV] ROBLOX_COOKIE existe?", !!process.env.ROBLOX_COOKIE);

    await startRoblox();
});
