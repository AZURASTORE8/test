module.exports = {
    // Application settings for Discord bot
    app: {
        token: process.env.DISCORD_TOKEN || (() => { throw new Error('DISCORD_TOKEN is not defined in .env file'); })(),
        playing: 'by the Community ❤️',
        global: true,
        guild: process.env.GUILD_ID || (() => { throw new Error('GUILD_ID is not defined in .env file'); })(),
        extraMessages: false,
        loopMessage: false,
        lang: 'en',
        enableEmojis: false,
    },

    // Emoji settings for player controls
    emojis: {
        back: '⏪',
        skip: '⏩',
        ResumePause: '⏯️',
        savetrack: '💾',
        volumeUp: '🔊',
        volumeDown: '🔉',
        loop: '🔁',
    },

    // Player and bot options
    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        Translate_Timeout: 10000,
        maxVol: 100,
        spotifyBridge: true,
        volume: 75,
        leaveOnEmpty: true,
        leaveOnEmptyCooldown: 30000,
        leaveOnEnd: true,
        leaveOnEndCooldown: 30000,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};