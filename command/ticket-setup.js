const {MessageActionRow, MessageSelectMenu} = require('discord.js')
module.exports = {
    name: 'ticket',
    usage: 'template',
    category: "mod",
    description: `Commande template.`,
    async execute(client, message, args) {
		message.delete()
        const row = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('select')
					.setPlaceholder('Select the type of ticket to create.')
					.addOptions([
						{
							label: '📞 Support',
							description: "Ανοιξαι ενα 📞support ticket",
							value: 'ticket1',
						},
						{
							label: '💸 Donate',
							description: "Ανοιξαι ενα 💸Donate ticket",
							value: 'ticket2',
						},
                        {
							label: '🔎Staff Report',
							description: "Ανοιξαι ενα 🔎Satff Report ticket",
							value: 'ticket3',
						},
                        {
							label: '🚫Ban Appeal',
							description: "Ανοιξαι ενα 🚫Ban Appeal ticket",
							value: 'ticket4',
						},
                        {
							label: '🐛Bug Report',
							description: "Ανοιξαι ενα 🐛Bug Report ticket",
							value: 'ticket5',
						},	
						{
							label: '❓Other',
							description: 'Ανοιξαι ενα ❓Other ticket',
							value: 'ticket6',
						},																		
					]),
			);

        message.channel.send({
            embeds: [{
                title: '🛠𝗠𝗮𝗿𝗼𝘂𝗮𝗸𝗼𝘀 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗶𝗻𝗴 𝗦𝗲𝗿𝘃𝗲𝗿',
                description: '**Για την καλύτερη εξυπηρέτησή σας, επιλέξτε το είδος του Ticket που σας ενδιαφέρει.**',
				author: ('Corks Community', client.user.avatarURL()),
                color: '#2F3136',
				thumbnail:{
					url: "https://media.discordapp.net/attachments/956281140346515536/963026288711462912/discord.gif"
				}
            }],
            components: [row]
        })
    }
}
