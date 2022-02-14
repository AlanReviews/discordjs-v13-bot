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
		const commandFiles = fs.readdirSync(__dirname).filter(file => file.endsWith('.js'));
		const embed = new MessageEmbed()
		embed.setTitle("Help")
        embed.setAuthor("Alan")
        embed.setDescription("Here are my commands")
		for (const command of commandFiles) {
			console.log(command.name)
			console.log(command.description)
			embed.addField(command.name, command.description, false)
		}
        await interaction.reply({embeds: [embed], ephemeral: false });
	},
};
