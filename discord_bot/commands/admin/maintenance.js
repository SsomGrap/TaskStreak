module.exports = {
    name: 'maintenance',
    description: 'Enable ou disenable the maintenance mod.',
    usage: ' <opt:args>',
    category: 'admin',
    async execute(message, args) {

        const client = message.client;

		const { maintenanceMod } = client;

        const mtncMod = await maintenanceMod.get(client.user);

        if (args.length) {

            if (args[0] == 'on') {

                await maintenanceMod.set(client.user, true);
                client.user.setPresence({ activities: [{ name: 'maintenance...' }], status: 'idle' });
                return message.channel.send('Succesfully set the bot in maintenance mod!');

            } else if (args[0] == 'off') {

                await maintenanceMod.set(client.user, false);
                client.user.setPresence({ activities: [{ name: 'in development...' }], status: 'dnd' });
                return message.channel.send('Succesfully set the bot in normal mod!');

            }

            return message.reply('You did not provide a valid argument for this command!');

        }

        return message.channel.send(`Maintenance Mod : ${mtncMod}`);

    },
};