const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'serverinfo',
	description: 'Gets server info',
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Gets server info in an embed'),
	async execute(interaction) {
		const serverInfo = new MessageEmbed()
        serverInfo.setTitle(interaction.guild.name)
		serverInfo.addField("Members", `${interaction.guild.memberCount}`)
        await interaction.reply({embeds: [serverInfo], ephemeral: false });
	},
};