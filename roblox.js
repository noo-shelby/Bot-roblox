const noblox = require("noblox.js");

async function startRoblox() {
    try {
        let cookie = process.env.ROBLOX_COOKIE;

        if (!cookie) {
            console.error("❌ ROBLOX_COOKIE não definida");
            return;
        }

        // remove qualquer quebra invisível (ESSENCIAL no Render)
        cookie = cookie
            .replace(/\r?\n|\r/g, "")
            .trim();

        const user = await noblox.setCookie(cookie);

        console.log("✅ Roblox conectado como:", user.UserName);

        return user;

    } catch (err) {
        console.error("❌ Falha ao conectar Roblox:");
        console.error(err);
    }
}

module.exports = { startRoblox };