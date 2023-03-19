const { SlashCommandBuilder, SlashCommandStringOption } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('change token')
        .setDescription('changes token!')
        .addStringOption(option =>
            option.setName('new token')
                .setDescription('new token')
                .setRequired(true)),
    async execute(interaction) {
        await user.token.set(new token)
    },
};
