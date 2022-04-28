const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	name: 'ping',
	description: 'Basic command. Check latency times in milliseconds',
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong and latency times.'),
	async execute(interaction) {
		await interaction.reply(`Pong! Latency is ${Date.now() - interaction.createdTimestamp} ms.`);
	},
};
