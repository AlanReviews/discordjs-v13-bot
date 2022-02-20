const { SlashCommandBuilder } = require('@discordjs/builders');
const fetch = require('node-fetch');

module.exports = {
	name: 'cat',
	description: 'Sends a cat image',
	data: new SlashCommandBuilder()
		.setName('cat')
		.setDescription('Sends a cat image'),
	async execute(interaction) {
		await interaction.deferReply();
        const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());
        interaction.editReply({ files: [file] });
	},
};
