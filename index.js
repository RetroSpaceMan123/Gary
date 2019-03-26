const DISCORD = require('discord.js');//loads js commands for discord
const TOKEN = '';//connects Bot to code
const client = new DISCORD.Client();//creates client for bot

global.servers = {}

client.on('message', (msg) => {
    //Test Commands
    if (msg.content == '!hello')//says hello to user
    msg.channel.send(`Hello ${msg.author}! I'm Gary the Bot Guy, your local custom-made bot. I have a load of fun commands for you to use. Just type !help to learn more!`)

    if (msg.content == '!rickroll')//rickrolls user
    msg.channel.send(`https://www.youtube.com/watch?v=dQw4w9WgXcQ`)

    if (msg.content.includes('!fancybox')) {
        const embed = new DISCORD.RichEmbed()//test of the "Fancy" message
            .setTitle(`${msg.content}`)
            .setDescription('This FancyBox Message has been brought to you by Gary the Bot Guy, your local custom-made bot.')
            .setColor('#000080')
        msg.channel.send(embed)
    }
    
    if (msg.content == '!version') {//version
    msg.channel.send(`Version G.R.2 (Rockhopper Update 2)`)
    }

    if (msg.content == '!log') {//Update Log
        const embed = new DISCORD.RichEmbed()
        .setTitle(`What's New?`)
        .setDescription('Version G.R.2 (Rockhopper Update 2)')
        .addField('Retrofitting Gary','Gary has been retrofitted (pun intended) to reflect the end of Mianite. All commands relating to Mianite, which is all the !lore commands, have been removed from Gary. Sorry for the inconvenience.')
        .addField('!fancybox is Here','!fancy has been replaced with !fancybox, which allows you to place custom text in a fancy format. Try it out for yourself.')
        .addField('!uptime is online', 'This command will show how long Gary has been online. Although it has limited uses for the average user, it is very useful for development and testing purposes.')
        .setColor('#000080')
        msg.channel.send(embed)
    }

    if (msg.content == '!uptime') {//Uptime of Gary
        totalSeconds = (client.uptime / 1000)
        days = Math.floor(totalSeconds / 86400)
        hours = Math.floor(totalSeconds / 3600)
        totalSeconds %= 3600
        minutes = Math.floor(totalSeconds / 60)
        seconds = totalSeconds % 60
        uptime = `${days} day(s), ${hours} hour(s), ${minutes} minute(s) and ${seconds} second(s)`
        const embed = new DISCORD.RichEmbed()
            .setTitle('Gary has been alive for:')
            .setDescription(uptime)
            .setColor('#000080')
            msg.channel.send(embed)
            console.log(uptime)
    }

    //!help Directory
    if (msg.content === '!help') {
        const embed = new DISCORD.RichEmbed()
        .setTitle(`Help Directory`)
        .setDescription(`These are all of Gary's comands so far. Try one out for yourself.`)
        .addField('!hello', 'Receive a warm greeting from Gary')
        .addField('!rickroll', 'Rick-rolls the chat')
        .addField('!fancybox', 'Creates a fancy message')
        .addField('!version', `Shows Gary's Version`)
        .addField('!log', 'Lists what has changed from the previous version of Gary')
        .addField('!uptime', 'Shows how long Gary has been alive')
        .setColor('#000080')
        msg.channel.send(embed)
    }
});

client.on('guildMemberAdd', function(_member) {
    _member.send('Welcome to Hell! Enjoy your stay!') //This sends a message to people who join, and gives them the proper roles
    let memberRole = _member.guild.roles.find('name', 'memer')
    _member.addRole(memberRole)
});

client.on('ready', () => {
    console.log('Gary the Bot Guy is Alive!');//This is just a check to make sure the bot is active
});


client.login(TOKEN);
