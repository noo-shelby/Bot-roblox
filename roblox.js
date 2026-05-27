const noblox = require("noblox.js");

async function startRoblox() {
    try {
        console.log("🔄 [ROBLOX] Iniciando conexão...");

        let cookie = process.env.ROBLOX_COOKIE;

        console.log("📦 [ROBLOX] Cookie existe?", !!cookie);

        if (!cookie) {
            console.error("❌ [ROBLOX] ROBLOX_COOKIE não encontrada no ambiente");
            return;
        }

        console.log("📏 [ROBLOX] Tamanho bruto do cookie:", cookie.length);
        console.log("🔍 [ROBLOX] Contém \\n ?", cookie.includes("\n"));

        // limpeza forte (remove qualquer sujeira do Render)
        cookie = cookie
            .replace(/\r?\n|\r/g, "")
            .replace(/\s/g, "")
            .trim();

        console.log("🧹 [ROBLOX] Cookie limpo aplicado");
        console.log("📏 [ROBLOX] Novo tamanho:", cookie.length);

        console.log("🔌 [ROBLOX] Tentando autenticar no Roblox...");

        const user = await noblox.setCookie(cookie);

        console.log("✅ [ROBLOX] Conectado com sucesso!");
        console.log("👤 [ROBLOX] Usuário:", user.UserName);
        console.log("🆔 [ROBLOX] ID:", user.UserID);

        return user;

    } catch (err) {
        console.error("❌ [ROBLOX] ERRO AO CONECTAR:");
        console.error(err);
    }
}

module.exports = { startRoblox };
