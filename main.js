require('dotenv').config();

const { Player } = require('discord-player');
const { Client, GatewayIntentBits } = require('discord.js');
const { YoutubeiExtractor } = require('discord-player-youtubei');

// Initialize Discord client with necessary intents
global.client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.MessageContent,
    ],
    disableMentions: 'everyone',
});

client.config = require('./config');

// Initialize Discord Player with custom options
const player = new Player(client, client.config.opt.discordPlayer);

// Register YouTube extractor with error handling
try {
    player.extractors.register(YoutubeiExtractor, {});
    console.log('YouTube extractor registered successfully.');
} catch (error) {
    console.error('Failed to register YouTube extractor:', error);
}

console.clear();
require('./loader');

// Login to Discord with error handling
client.login(client.config.app.token).catch((error) => {
    if (error.message.includes('invalid token')) {
        require('./process_tools').throwConfigError('app', 'token', '\n\t   ❌ Invalid Token Provided! ❌ \n\tChange the token in the .env file\n');
    } else {
        console.error('❌ An error occurred while trying to login to the bot! ❌\n', error);
    }
});

// Clear module cache to prevent reloading issues
delete require.cache[require.resolve('./config')];