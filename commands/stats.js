const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
let os = require('os');

module.exports = {
	name: 'stats',
	description: 'Shows bot statistics in an embed',
	data: new SlashCommandBuilder()
		.setName('stats')
		.setDescription('Shows bot statistics in an embed'),
	async execute(interaction) {
		var usedMemory = os.totalmem() -os.freemem();
		const stats = new MessageEmbed();
		stats.setTitle("Statistics")
		stats.setDescription("Here are the stats:")
		stats.addField("Operating System", "Ubuntu 20.04")
		stats.addField("Memory usage in GB", `${(usedMemory/ Math.pow(1024, 3)).toFixed(2)}`)
		await interaction.reply({embeds: [stats], ephemeral: false });
	},
};
