const {Permissions, MessageEmbed, MessageActionRow, MessageSelectMenu }=require('discord.js')
module.exports = {
    name: 'interactionCreate',
    async execute(client, interaction) {
        if (!interaction.isSelectMenu()) return;
        
	const row = new MessageActionRow()
                .addComponents(
                    new MessageSelectMenu()
                    .setCustomId('del')
                    .setPlaceholder('Close Here')
					.addOptions([
						{
							label: '\🔒 Close',
							value: 'delete',
						}
					])
                );
                
                
        let catégorie = "940116837134368768"
        let roleStaff = interaction.guild.roles.cache.get('945268481748791326')

        let DejaUnChannel = interaction.guild.channels.cache.find(c => c.topic == interaction.user.id)
        
        if(interaction.customId === "del") {
            if (interaction.values[0] == "delete") {
                const channel = interaction.channel
                channel.delete();
            }
        }

        if (interaction.customId == "select") {
            if (DejaUnChannel) return interaction.reply({content: '**Έχεις ήδη ένα Ticket ανοιχτό.**', ephemeral: true})
            if (interaction.values[0] == "ticket1") {
                interaction.guild.channels.create(`📞ticket-${interaction.user.username}`, {
                    type: 'GUILD_TEXT',
                    topic: `${interaction.user.id}`,
                    parent: `940116837134368768`,
                    permissionOverwrites: [
                        {   
                            id: interaction.guild.id,
                            deny: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: interaction.user.id,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: roleStaff,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        }
                    ]
                }).then((c)=>{
                    const partenariat = new MessageEmbed()
                    .setTitle('To Ticket δημιουργήθηκε με επιτυχία με θεμα: ``📞Support``')
                    .setDescription('**Περιέγραψε αναλυτικά το πρόβλημα σου. Το πρώτο διαθέσιμο Staff θα σας εξυπηρετήσει άμεσα!**')
                    c.send({embeds: [partenariat], content: `${roleStaff} | ${interaction.user}`, components: [row]})
                    interaction.reply({content: `**Μπορείς να βρεις το Ticket σου εδώ :** <#${c.id}>`, ephemeral: true})
                })
                
            } else if (interaction.values[0] == "ticket2") {
                interaction.guild.channels.create(`💸ticket-${interaction.user.username}`, {
                    type: 'GUILD_TEXT',
                    topic: `${interaction.user.id}`,
                    parent: `940116837134368768`,
                    permissionOverwrites: [
                        {   
                            id: interaction.guild.id,
                            deny: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: interaction.user.id,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: roleStaff,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        }
                    ]
                }).then((c)=>{
                    const plainte = new MessageEmbed()
                    .setTitle('To Ticket δημιουργήθηκε με επιτυχία με θεμα: ``💸Donate``')
                    .setDescription('**Περιέγραψε αναλυτικά το πρόβλημα σου. Το πρώτο διαθέσιμο Staff θα σας εξυπηρετήσει άμεσα!**')
                    c.send({embeds: [plainte], content: `${roleStaff} | ${interaction.user}`, components: [row]})
                    interaction.reply({content: `**Μπορείς να βρεις το Ticket σου εδώ :** <#${c.id}>`, ephemeral: true})
                })
            } else if (interaction.values[0] == "ticket3") {
                interaction.guild.channels.create(`🔎ticket-${interaction.user.username}`, {
                    type: 'GUILD_TEXT',
                    topic: `${interaction.user.id}`,
                    parent: `940116837134368768`,
                    permissionOverwrites: [
                        {   
                            id: interaction.guild.id,
                            deny: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: interaction.user.id,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: roleStaff,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        }
                    ]
                }).then((c)=>{
                    const plainte = new MessageEmbed()
                    .setTitle('To Ticket δημιουργήθηκε με επιτυχία με θεμα: ``🔎Staff Report``')
                    .setDescription('**Περιέγραψε αναλυτικά το πρόβλημα σου. Το πρώτο διαθέσιμο Staff θα σας εξυπηρετήσει άμεσα!**')
                    c.send({embeds: [plainte], content: `${roleStaff} | ${interaction.user}`, components: [row]})
                    interaction.reply({content: `**Μπορείς να βρεις το Ticket σου εδώ :** <#${c.id}>`, ephemeral: true})
                })
            } else if (interaction.values[0] == "ticket4") {
                interaction.guild.channels.create(`🚫ticket-${interaction.user.username}`, {
                    type: 'GUILD_TEXT',
                    topic: `${interaction.user.id}`,
                    parent: `940116837134368768`,
                    permissionOverwrites: [
                        {   
                            id: interaction.guild.id,
                            deny: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: interaction.user.id,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: roleStaff,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        }
                    ]
                }).then((c)=>{
                    const plainte = new MessageEmbed()
                    .setTitle('To Ticket δημιουργήθηκε με επιτυχία με θεμα: ``🚫Ban Appeal``')
                    .setDescription('**Περιέγραψε αναλυτικά το πρόβλημα σου. Το πρώτο διαθέσιμο Staff θα σας εξυπηρετήσει άμεσα!**')
                    c.send({embeds: [plainte], content: `${roleStaff} | ${interaction.user}`, components: [row]})
                    interaction.reply({content: `**Μπορείς να βρεις το Ticket σου εδώ :** <#${c.id}>`, ephemeral: true})
                })
            } else if (interaction.values[0] == "ticket6") {
                interaction.guild.channels.create(`❓ticket-${interaction.user.username}`, {
                    type: 'GUILD_TEXT',
                    topic: `${interaction.user.id}`,
                    parent: `940116837134368768`,
                    permissionOverwrites: [
                        {   
                            id: interaction.guild.id,
                            deny: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: interaction.user.id,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: roleStaff,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        }
                    ]
                }).then((c)=>{
                    const plainte = new MessageEmbed()
                    .setTitle('To Ticket δημιουργήθηκε με επιτυχία με θεμα: ``❓Other``')
                    .setDescription('**Περιέγραψε αναλυτικά το πρόβλημα σου. Το πρώτο διαθέσιμο Staff θα σας εξυπηρετήσει άμεσα!**')
                    c.send({embeds: [plainte], content: `${roleStaff} | ${interaction.user}`, components: [row]})
                    interaction.reply({content: `**Μπορείς να βρεις το Ticket σου εδώ :** <#${c.id}>`, ephemeral: true})
                })
            } else if (interaction.values[0] == "ticket3") {
                interaction.guild.channels.create(`🔎ticket-${interaction.user.username}`, {
                    type: 'GUILD_TEXT',
                    topic: `${interaction.user.id}`,
                    parent: `940116837134368768`,
                    permissionOverwrites: [
                        {   
                            id: interaction.guild.id,
                            deny: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: interaction.user.id,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: roleStaff,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        }
                    ]
                }).then((c)=>{
                    const plainte = new MessageEmbed()
                    .setTitle('To Ticket δημιουργήθηκε με επιτυχία με θεμα: ``🔎Staff Report``')
                    .setDescription('**Περιέγραψε αναλυτικά το πρόβλημα σου. Το πρώτο διαθέσιμο Staff θα σας εξυπηρετήσει άμεσα!**')
                    c.send({embeds: [plainte], content: `${roleStaff} | ${interaction.user}`, components: [row]})
                    interaction.reply({content: `**Μπορείς να βρεις το Ticket σου εδώ :** <#${c.id}>`, ephemeral: true})
                })
            } else if (interaction.values[0] == "ticket5") {
                interaction.guild.channels.create(`🐛ticket-${interaction.user.username}`, {
                    type: 'GUILD_TEXT',
                    topic: `${interaction.user.id}`,
                    parent: `940116837134368768`,
                    permissionOverwrites: [
                        {   
                            id: interaction.guild.id,
                            deny: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: interaction.user.id,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        },
                        {
                            id: roleStaff,
                            allow: [Permissions.FLAGS.VIEW_CHANNEL]
                        }
                    ]
                    
                }).then((c)=>{
                    const embed = new MessageEmbed()
                    .setTitle('To Ticket δημιουργήθηκε με επιτυχία με θεμα: ``🐛Bug Report``')
                    .setDescription('**Περιέγραψε αναλυτικά το πρόβλημα σου. Το πρώτο διαθέσιμο Staff θα σας εξυπηρετήσει άμεσα!**')
                    c.send({embeds: [embed], content: `${roleStaff} | ${interaction.user}`, components: [row]})
                    interaction.reply({content: `**Μπορείς να βρεις το Ticket σου εδώ :** <#${c.id}>`, ephemeral: true})
                }) 
                
            
                
            
            }
        }
    }
}