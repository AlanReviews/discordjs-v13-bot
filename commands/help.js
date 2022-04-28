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
        embed.setDescription("Here are my basic commands")
		embed.addField("cat", "Returns a cat image")
		embed.addField("echo", "Sends inputted text messages")
		embed.addField("eightball", "Predict the future by asking a question")
		embed.addField("ping", "Basic command. Returns ping")
		embed.addField("quote", "Returns a zen quote")
		embed.addField("stats", "Show bot operating system and memory usage")
		embed.addField("serverinfo", "Shows server info in an embed")
		embed.addField("userinfo", "Shows user info in an embed")
		const mathEmbed = new MessageEmbed()
		mathEmbed.setTitle("Math commands")
		mathEmbed.setDescription("Here are my math commands")
		mathEmbed.addField("modulus", "Gets the remainder from the dividend and divisor")
        await interaction.reply({embeds: [embed, mathEmbed], ephemeral: false });
	},
};