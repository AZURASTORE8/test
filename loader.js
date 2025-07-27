client.on("ready", (client) => {
    try {
        if (client.config.app.global) {
            client.application.commands.set(commandsArray);
            console.log("Registered global commands.");
        } else {
            const guild = client.guilds.cache.get(client.config.app.guild);
            if (guild) {
                guild.commands.set(commandsArray);
                console.log(`Registered commands for guild ${client.config.app.guild}.`);
            } else {
                console.error(`Guild ${client.config.app.guild} not found.`);
            }
        }
    } catch (error) {
        console.error("Failed to register commands:", error);
    }
});