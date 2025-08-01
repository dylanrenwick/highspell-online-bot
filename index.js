import { validateConfig } from './util.js';
import config from './config.json' with { type: "json" };
// Throws if config is invalid
validateConfig(config);

import { Client, GatewayIntentBits } from 'discord.js';
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });

import OnlineBot from './bot.js';
const bot = new OnlineBot(config, client);

// Start the bot
bot.run();
