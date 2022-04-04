const { SlashCommandBuilder, channelMention } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'help',
	description: 'Lists commands for the bot',
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Lists commands for the bot'),
	async execute(interaction) {
		const embed = new MessageEmbed()
		embed.setTitle("Help")
        embed.setDescription("Here are my commands")
		embed.addField("cat", "Returns a cat image")
		embed.addField("echo", "Sends inputted text messages")
		embed.addField("ping", "Basic command. Returns ping")
		embed.addField("quote", "Returns a zen quote")
		embed.addField("eightball", "Predict the future by asking a question")
        await interaction.reply({embeds: [embed], ephemeral: false });
	},
};