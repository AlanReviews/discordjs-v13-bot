const { SlashCommandBuilder, channelMention } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const fs = require('fs');
const path = require('path');

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
        await interaction.reply({embeds: [embed], ephemeral: false });
	},
};
