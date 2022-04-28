const { SlashCommandBuilder } = require('@discordjs/builders');

const data = new SlashCommandBuilder()
.setName('add')
.setDescription('Adds 2 integers')
.addIntegerOption(option1 =>
	option1.setName('integer1')
		.setDescription('Integer to add')
		.setRequired(true))
.addIntegerOption(option2 =>
    option2.setName('integer2')
        .setDescription('Integer to add')
        .setRequired(true));
        

module.exports = {
	name: 'add',
	description: 'Adds two integers',
	data: data,
	async execute(interaction) {
		const int1 = interaction.options.getInteger("integer1")
        const int2 = interaction.options.getInteger("integer2")
        console.log(int1);
        console.log(int2);
        await interaction.reply(`${int1 + int2}`);
	},
};