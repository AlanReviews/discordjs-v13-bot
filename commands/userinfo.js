const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'userinfo',
	description: 'Gets user info',
	data: new SlashCommandBuilder()
		.setName('userinfo')
		.setDescription('Gets user info in an embed')
        .addUserOption(option =>
            option
			.setName('user')
			.setDescription('The user you want to get their info with')
			.setRequired(false)
        ),
	async execute(interaction) {
        const member = interaction.options.getUser("user") || interaction.user;
		const userInfo = new MessageEmbed()
        userInfo.setTitle(member.username).setThumbnail(member.displayAvatarURL())
		userInfo.addField("ID", `${member.id}`)
		userInfo.addField("Created at", `${member.createdAt}`)
		userInfo.addField("Bot", `${member.bot}`)
        await interaction.reply({embeds: [userInfo], ephemeral: false });
	},
};
