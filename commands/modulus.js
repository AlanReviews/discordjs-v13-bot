const { SlashCommandBuilder } = require('@discordjs/builders');

const data = new SlashCommandBuilder()
.setName('modulus')
.setDescription('Gives you the remainder')
.addIntegerOption(option1 =>
	option1.setName('dividend')
		.setDescription('Integer as dividend')
		.setRequired(true))
.addIntegerOption(option2 =>
    option2.setName('divisor')
        .setDescription('Integer as divisor')
        .setRequired(true));
        

module.exports = {
	name: 'add',
	description: 'Adds two integers',
	data: data,
	async execute(interaction) {
		const int1 = interaction.options.getInteger("dividend");
        const int2 = interaction.options.getInteger("divisor");
        await interaction.reply(`${int1 % int2}`);
	}
};