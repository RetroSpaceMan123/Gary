const DISCORD = require('discord.js');//loads js commands for discord
const TOKEN = '';//connects Bot to code
const client = new DISCORD.Client();//creates client for bot

global.servers = {}

client.on('message', (msg) => {
    //Test Commands
    if (msg.content === '!hello')//says hello to user
    msg.channel.send(`Hello ${msg.author}! I'm Gary the Bot Guy, and I'm ALIVE!!!`)

    if (msg.content === '!rickroll')//rickrolls user
    msg.channel.send(`https://www.youtube.com/watch?v=dQw4w9WgXcQ`)

    if (msg.content === '!fancy') {
        const embed = new DISCORD.RichEmbed()//test of the "Fancy" message
            .setTitle('This is a Fancy Message')
            .setDescription('This is a Fancy Description Box')
            .addField('Wow, Look at This!', `It's even FANCIER now!`)
            .addField('With Different Titles and Descriptions', 'What can possibly go wrong?')
            .setColor('#000080')
        msg.channel.send(embed)
    }
    //Roles
    if (msg.content === '!role') {
        const embed = new DISCORD.RichEmbed()//this is for sharing what roles can be assigned
            .setTitle('Which Role do you Want?')
            .setDescription('Freebooters, Empire, Mianite Follower, Dianite Follower, Ianite Follower, Zeta Follower, Orden Follower, Aspen Follower, Lyra Follower')
            .setColor('#000080')
        msg.channel.send(embed)
    }
    if (msg.content === '!role Freebooters') {
        let memberRole = msg.member.guild.roles.find('name', 'Freebooter')
        msg.member.addRole(memberRole)
        const embed = new DISCORD.RichEmbed()//Freebooters role
            .setTitle('Congrats!')
            .setDescription('You have joined the Freebooters!')
            .setColor('#000080')
        msg.channel.send(embed)
    }
    if (msg.content === '!role Empire') {
        let memberRole = msg.member.guild.roles.find('name', 'Empire')
        msg.member.addRole(memberRole)
        const embed = new DISCORD.RichEmbed()//Empire role
            .setTitle('Congrats!')
            .setDescription('You have joined the Holy Zaelic Empire!')
            .setColor('#000080')
        msg.channel.send(embed)
    }
    if (msg.content === '!role Mianite Follower') {
        let memberRole = msg.member.guild.roles.find('name', 'Mianite Follower')
        msg.member.addRole(memberRole)
        const embed = new DISCORD.RichEmbed()//Mianite role
            .setTitle('Congrats!')
            .setDescription('You have decided to follow Mianite!')
            .setColor('#000080')
        msg.channel.send(embed)
    }
    if (msg.content === '!role Ianite Follower') {
        let memberRole = msg.member.guild.roles.find('name', 'Ianite Follower')
        msg.member.addRole(memberRole)
        const embed = new DISCORD.RichEmbed()//Ianite role
            .setTitle('Congrats!')
            .setDescription('You have decided to follow Ianite!')
            .setColor('#000080')
        msg.channel.send(embed)
    }
    if (msg.content === '!role Dianite Follower') {
        let memberRole = msg.member.guild.roles.find('name', 'Ianite Follower')
        msg.member.addRole(memberRole)
        const embed = new DISCORD.RichEmbed()//Dianite role
            .setTitle('Congrats!')
            .setDescription('You have decided to follow Dianite!')
            .setColor('#000080')
        msg.channel.send(embed)
    }
    if (msg.content === '!role Zeta Follower') {
        let memberRole = msg.member.guild.roles.find('name', 'Zeta Follower')
        msg.member.addRole(memberRole)
        const embed = new DISCORD.RichEmbed()//Zeta role
            .setTitle('Congrats!')
            .setDescription('You have decided to follow Zeta!')
            .setColor('#000080')
        msg.channel.send(embed)
    }
    if (msg.content === '!role Orden Follower') {
        let memberRole = msg.member.guild.roles.find('name', 'Orden Follower')
        msg.member.addRole(memberRole)
        const embed = new DISCORD.RichEmbed()//Orden role
            .setTitle('Congrats!')
            .setDescription('You have decided to follow Orden!')
            .setColor('#000080')
        msg.channel.send(embed)
    }
    if (msg.content === '!role Aspen Follower') {
        let memberRole = msg.member.guild.roles.find('name', 'Aspen Follower')
        msg.member.addRole(memberRole)
        const embed = new DISCORD.RichEmbed()//Aspen role
            .setTitle('Congrats!')
            .setDescription('You have decided to follow Aspen!')
            .setColor('#000080')
        msg.channel.send(embed)
    }
    if (msg.content === '!role Lyra Follower') {
        let memberRole = msg.member.guild.roles.find('name', 'Lyra Follower')
        msg.member.addRole(memberRole)
        const embed = new DISCORD.RichEmbed()//Lyra role
            .setTitle('Congrats!')
            .setDescription('You have decided to follow Lyra!')
            .setColor('#000080')
        msg.channel.send(embed)
    }
    if (msg.content === '!unrole') {
        msg.channel.send('You have to say which role you want gone first.')
    }
    if (msg.content === '!unrole Freebooters') {
        let memberRole = msg.member.guild.roles.find('name', 'Freebooters')
        msg.member.removeRole(memberRole)
        const embed = new DISCORD.RichEmbed()//Removes Freebooters role
            .setTitle('Congrats!')
            .setDescription('You have left the Freebooters!')
            .setColor('#000080')
        msg.channel.send(embed)
    }
    if (msg.content === '!unrole Empire') {
        let memberRole = msg.member.guild.roles.find('name', 'Empire')
        msg.member.removeRole(memberRole)
        const embed = new DISCORD.RichEmbed()//Removes Empire role
            .setTitle('Congrats!')
            .setDescription('You have left the Holy Zaelic Empire!')
            .setColor('#000080')
        msg.channel.send(embed)
    }
    if (msg.content === '!unrole Mianite Follower') {
        let memberRole = msg.member.guild.roles.find('name', 'Mianite Follower')
        msg.member.removeRole(memberRole)
        const embed = new DISCORD.RichEmbed()//Removes Mianite role
            .setTitle('Congrats!')
            .setDescription('You have decided to no longer follow Mianite!')
            .setColor('#000080')
        msg.channel.send(embed)
    }
    if (msg.content === '!unrole Ianite Follower') {
        let memberRole = msg.member.guild.roles.find('name', 'Ianite Follower')
        msg.member.removeRole(memberRole)
        const embed = new DISCORD.RichEmbed()//Removes Ianite role
            .setTitle('Congrats!')
            .setDescription('You have decided to no longer follow Ianite!')
            .setColor('#000080')
        msg.channel.send(embed)
    }
    if (msg.content === '!unrole Dianite Follower') {
        let memberRole = msg.member.guild.roles.find('name', 'Ianite Follower')
        msg.member.removeRole(memberRole)
        const embed = new DISCORD.RichEmbed()//Removes Dianite role
            .setTitle('Congrats!')
            .setDescription('You have decided to no longer follow Dianite!')
            .setColor('#000080')
        msg.channel.send(embed)
    }
    if (msg.content === '!unrole Zeta Follower') {
        let memberRole = msg.member.guild.roles.find('name', 'Zeta Follower')
        msg.member.removeRole(memberRole)
        const embed = new DISCORD.RichEmbed()//Removes Zeta role
            .setTitle('Congrats!')
            .setDescription('You have decided to no longer follow Zeta!')
            .setColor('#000080')
        msg.channel.send(embed)
    }
    if (msg.content === '!unrole Orden Follower') {
        let memberRole = msg.member.guild.roles.find('name', 'Orden Follower')
        msg.member.removeRole(memberRole)
        const embed = new DISCORD.RichEmbed()//Removes Orden role
            .setTitle('Congrats!')
            .setDescription('You have decided to no longer follow Orden!')
            .setColor('#000080')
        msg.channel.send(embed)
    }
    if (msg.content === '!unrole Aspen Follower') {
        let memberRole = msg.member.guild.roles.find('name', 'Aspen Follower')
        msg.member.removeRole(memberRole)
        const embed = new DISCORD.RichEmbed()//Removes Aspen role
            .setTitle('Congrats!')
            .setDescription('You have decided to no longer follow Aspen!')
            .setColor('#000080')
        msg.channel.send(embed)
    }
    if (msg.content === '!unrole Lyra Follower') {
        let memberRole = msg.member.guild.roles.find('name', 'Lyra Follower')
        msg.member.addRole(memberRole)
        const embed = new DISCORD.RichEmbed()//Lyra role
            .setTitle('Congrats!')
            .setDescription('You have decided to no longer follow Lyra!')
            .setColor('#000080')
        msg.channel.send(embed)
    }
    //Gods List
    if (msg.content === '!gods') {
        const embed = new DISCORD.RichEmbed()//lists all possible commands
            .setTitle('List of all Known Gods')
            .setDescription('This is a list of all known Gods. There might be more, but we only care for the ones that we know exist.')
            .addField('Mianite', 'God of the Overworld')
            .addField('Ianite', 'Goddess of the End')
            .addField('Dianite', 'God of the Nether')
            .addField('Zeta','Goddess of Time')
            .addField('Orden', 'God of Strength & Wisdom')
            .addField('Aspen', 'Goddess of Life & Harvest')
            .addField('Lyra', 'Goddess of the Sea & Emotions')
            .setColor('#000080')
        msg.channel.send(embed)
    }
    //List of All Commands
    if (msg.content === '!help') {
        const embed = new DISCORD.RichEmbed()//lists all possible commands
            .setTitle('List of Commands')
            .setDescription('This is a list of all possible commands. Try one out for yourself!')
            .addField('!help', `Creates a list of all possible commands`)
            .addField('!hello', 'Receive a warm greeting from Gary')
            .addField('!rickroll', 'Rick-rolls the chat')
            .addField('!fancy', 'Creates a fancy message')
            .addField('!role', 'Creates a list of roles that you can join')
            .addField('!unrole', 'Removes the role specified')
            .addField('!gods', 'Lists all of the Gods that are currently known')
            .setColor('#000080')
        msg.channel.send(embed)
    }

});

client.on('guildMemberAdd', function(_member) {
    _member.send('Welcome to the Realm of Mianite!') //This sends a message to people who join, and gives them the proper roles
    let memberRole = _member.guild.roles.find('name', 'Newcomer!')
    let memberRole1 = _member.guild.roles.find('name', 'Players')
    _member.addRole(memberRole)
    _member.addRole(memberRole1)
});

client.on('ready', () => {
    console.log('Gary the Bot Guy is Alive!');//This is just a check to make sure the bot is active
});


client.login(TOKEN);
