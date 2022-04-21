module.exports = {
    name: 'ready',
    once: true,

    async execute(client) {
        console.log(`MAROUAKO TO BOT ME ONOMA ${client.user.username} EINAI ONLINE`)

        var compteurStatus = 1
        setInterval(async () => {
            status =  [`Ticket Bot`]
            compteurStatus = (compteurStatus + 1) % (status.length);
            client.user.setPresence({
                activities: [{
                    name: `${status[compteurStatus]}`,
                    type: "PLAYING",
                    url: "https://www.twitch.tv/"
                  }],
                  status: "online"})
        }, 5000);
    }
}
