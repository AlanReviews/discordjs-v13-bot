const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'serverinfo',
	description: 'Gets server info',
	data: new SlashCommandBuilder()
		.setName('serverinfo')
		.setDescription('Gets server info in an embed'),
	async execute(interaction) {
		const serverInfo = new MessageEmbed()
        serverInfo.setTitle(interaction.guild.name)
		serverInfo.setThumbnail(interaction.guild.iconURL())
		serverInfo.addField("Members", `${interaction.guild.memberCount}`)
		serverInfo.addField("NSFW Level", interaction.guild.nsfwLevel)
		serverInfo.addField("Explicit content filteer", interaction.guild.explicitContentFilter)
		serverInfo.addField("Creation date", `${interaction.guild.createdAt}`)
        await interaction.reply({embeds: [serverInfo], ephemeral: false });
	},
};
