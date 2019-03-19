const DISCORD = require('discord.js');//loads js commands for discord
const TOKEN = '';//connects Bot to code
const client = new DISCORD.Client();//creates client for bot

global.servers = {}

client.on('message', (msg) => {
    //Test Commands
    if (msg.content === '!hello')//says hello to user
    msg.channel.send(`Hello ${msg.author}! I'm Gary the Bot Guy, your local custom-made bot. I have a load of fun commands for you to use. Just type !help to learn more!`)

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
    
    if (msg.content === '!version') {//version
    msg.channel.send(`Version G.R.1 (Rockhopper Update 1)`)
    }

    if (msg.content === '!log') {//Update Log
        const embed = new DISCORD.RichEmbed()
        .setTitle(`What's New?`)
        .setDescription('Version G.R.1 (Rockhopper Update 1)')
        .addField('!help Reorganization', `!help has now been split into two catagories: !lore and !test. This way, it's easier to find what command your looking for, without looking at a long list.`)
        .addField('New Commands!', `!role has been split into !follow and !join. !factions, !log, !version, and many more have been added to the command list.`)
        .addField('Lore Dump', 'Many messages have been changed in order for Gary to fit better into the Mianite Server, along with an updated God List')
        .setColor('#000080')
        msg.channel.send(embed)
    }

    //Faction Roles
    if (msg.content === '!join') {
        msg.channel.send('You have to say which faction you want to join first.')
    }
    if (msg.content === '!unfollow') {
        msg.channel.send('You have to say which role you want to leave first.')
    }
    if (msg.content === '!factions') {
        const embed = new DISCORD.RichEmbed()//For joining either the Freebooters or Empire
            .setTitle('Which faction would you like to join?')
            .setDescription(`Factions determine when and what story you'll be recieving throught Season 5. When you decide to join a faction, type !join [faction name] into #bot-commands, and you'll be set. If you don't like the faction you have chosen, just type !leave [faction name] in #bot-channel to leave it. However, factions are more likely to prefer those who are "loyal" to their cause, rather than those known to flip-flop, so choose wisely!`)
            .addField('Freebooters', `The Freebooting Guild, more commonly known as the Freebooters, are a band of ex-imperial privatieers who hate the empire with every fiber of their scurvy-ridden bodies. They don't care about what religion their members follow, making it a safe harbor for followers of Dianite, Ianite, and other "non-existant" gods. If you like a life of raiding, guerella warfare, and the lawless paradise of life at sea, then the Freebooters are for you!`)
            .addField('Empire', `The Holy Zaelic Empire, more commonly known as The Empire, is the pinacle of an orderly state. Birth from the Incarnator Wars, the Empire seeks to avoid suffering by eliminating what caused them: Wizards & Minor Gods. They began to demonize the Wizards in their gospels, and use what little followers they had to worship the "true" god, Mianite. Centuries after its founding, the Empire has cemented its rule as the defenders of Humanity and Mianite. If you wish to die in the name of Our Lord and Savior, Mianite, then the Holy Zaelic Empire is for you!`)
            .setColor('#000080')
        msg.channel.send(embed)
    }
    if (msg.content === '!join Freebooters') {
        let memberRole = msg.member.guild.roles.find('name', 'Freebooter')
        msg.member.addRole(memberRole)
        const embed = new DISCORD.RichEmbed()//Freebooters role
            .setTitle('Ahoy Matey!')
            .setDescription('You have joined the Freebooters! Happy Sailings!')
            .setColor('#000080')
        msg.channel.send(embed)
    }
    if (msg.content === '!join Empire') {
        let memberRole = msg.member.guild.roles.find('name', 'Empire')
        msg.member.addRole(memberRole)
        const embed = new DISCORD.RichEmbed()//Empire role
            .setTitle('Welcome Aboard, Recruit')
            .setDescription('You have joined the Holy Zaelic Empire! Deus Vult!')
            .setColor('#000080')
        msg.channel.send(embed)
    }
    if (msg.content === '!leave Freebooters') {
        let memberRole = msg.member.guild.roles.find('name', 'Freebooters')
        msg.member.removeRole(memberRole)
        const embed = new DISCORD.RichEmbed()//Removes Freebooters role
            .setTitle('Adios Freebooters!')
            .setDescription('You have left the Freebooters!')
            .setColor('#000080')
        msg.channel.send(embed)
    }
    if (msg.content === '!leave Empire') {
        let memberRole = msg.member.guild.roles.find('name', 'Empire')
        msg.member.removeRole(memberRole)
        const embed = new DISCORD.RichEmbed()//Removes Empire role
            .setTitle('Imperial Notice')
            .setDescription('You have left, and/or been kicked out of the Holy Zaelic Empire')
            .setColor('#000080')
        msg.channel.send(embed)
    }
    //God Roles
    if (msg.content === '!gods') {
        const embed = new DISCORD.RichEmbed()//God Bios
            .setTitle('The Gods of Mianite')
            .setDescription(`Here are all the known gods of this realm. If there are more gods, then this list will be updated. For know, if you find a god on the list that you like, the type !follow [God] to follow them. If you wish to unfollow a god you're currenlty following, then type !unfollow [God] to do so. You can change gods at any time, however gods do love loyal followers. Choose Wisely!`)
            .addField('Mianite, God of the Overworld', `Miante is the only god left unscathed after the Incarnator Wars, making him the defacto ruler of gods. As God of the Overworld, he has gone out of his way to make sure such a war could never happen again. However, with the growing influence of other Gods, this peace is becoming harder to achieve.`)
            .addField('Ianite: Goddess of the End', `Ianite has been extremely weakened by the Incarnator Wars, making her presence faint in worlds that aren't her own. As God of the End, she tries to balance the eternal forces of good and evil. However, this has become extremely hard in her weakened state, leaving the door open for one force to overpower the other.`)
            .addField('Dianite: God of the Nether', `Dianite is the embodiment of Evil in the Realm of Mianite, as has been known to do commit the most inhumane crimes in this realm for his personal gain. The God of the Nether has been known to tempt victims with promises of riches and salvation, if they follow his commands, only to be left in ruins. Although most of his influence disappeared during the Incarnator Wars, Dianite still has a few agents in other worlds, waiting for his return.`)
            .addField('Zeta: Goddess of Time', `Zeta is an interesting Goddess to say the least. As the Goddess of Time, she can theoretically remake every dimension to her liking, yet there is no evidence of most of her activity. Since she has made relatively few appearances since the Incarnator Wars, Zeta can safely be classified as the most mysterious Goddess that is currently known.`)
            .addField('Orden: God of Strength & Wisdom', `Orden can safely be described as one of the most bad-ass gods we currently know. As the God of Wisdom and Strength, Orden is able to solve any problem with a calm demenour, and a can of whoop-ass. Sadly, Orden went off the grid after he lost his entire family in the Incarnator Wars, as the memory of him slowly faded from common memory.`)
            .addField('Aspen: Goddess of Life & Harvest', `Aspen is the god who was closest to be killed in the Incarnator Wars. As the Goddess of Harvest and Life, she nurtured the life the roamed the realm. Tragically, she nearly lost all of her influence and powers in the Incarnator Wars, leaving her stranded in her own temples, waiting for someone to revive her.`)
            .addField('Lyra: Goddess of the Sea & Emotions', `Lyra is the newest god that has been discovered. As the Goddess of the Sea and Emotions, it's believed that she's able to control the tide with her feelings. Although not much is known about her, there is evidence for her being more unstable than most gods currently known.`)
            .setColor('#000080')
        msg.channel.send(embed)
    }
    if (msg.content === '!follow') {
        msg.channel.send('You have to say which god you want to follow first.')
    }
    if (msg.content === '!follow Mianite') {
        let memberRole = msg.member.guild.roles.find('name', 'Mianite Follower')
        msg.member.addRole(memberRole)
        const embed = new DISCORD.RichEmbed()//Mianite role
            .setTitle('Congrats!')
            .setDescription('You have decided to follow Mianite!')
            .setColor('#000080')
        msg.channel.send(embed)
    }
    if (msg.content === '!follow Ianite') {
        let memberRole = msg.member.guild.roles.find('name', 'Ianite Follower')
        msg.member.addRole(memberRole)
        const embed = new DISCORD.RichEmbed()//Ianite role
            .setTitle('Congrats!')
            .setDescription('You have decided to follow Ianite!')
            .setColor('#000080')
        msg.channel.send(embed)
    }
    if (msg.content === '!follow Dianite') {
        let memberRole = msg.member.guild.roles.find('name', 'Ianite Follower')
        msg.member.addRole(memberRole)
        const embed = new DISCORD.RichEmbed()//Dianite role
            .setTitle('Congrats!')
            .setDescription('You have decided to follow Dianite!')
            .setColor('#000080')
        msg.channel.send(embed)
    }
    if (msg.content === '!follow Zeta') {
        let memberRole = msg.member.guild.roles.find('name', 'Zeta Follower')
        msg.member.addRole(memberRole)
        const embed = new DISCORD.RichEmbed()//Zeta role
            .setTitle('Congrats!')
            .setDescription('You have decided to follow Zeta!')
            .setColor('#000080')
        msg.channel.send(embed)
    }
    if (msg.content === '!follow Orden') {
        let memberRole = msg.member.guild.roles.find('name', 'Orden Follower')
        msg.member.addRole(memberRole)
        const embed = new DISCORD.RichEmbed()//Orden role
            .setTitle('Congrats!')
            .setDescription('You have decided to follow Orden!')
            .setColor('#000080')
        msg.channel.send(embed)
    }
    if (msg.content === '!follow Aspen') {
        let memberRole = msg.member.guild.roles.find('name', 'Aspen Follower')
        msg.member.addRole(memberRole)
        const embed = new DISCORD.RichEmbed()//Aspen role
            .setTitle('Congrats!')
            .setDescription('You have decided to follow Aspen!')
            .setColor('#000080')
        msg.channel.send(embed)
    }
    if (msg.content === '!follow Lyra') {
        let memberRole = msg.member.guild.roles.find('name', 'Lyra Follower')
        msg.member.addRole(memberRole)
        const embed = new DISCORD.RichEmbed()//Lyra role
            .setTitle('Congrats!')
            .setDescription('You have decided to follow Lyra!')
            .setColor('#000080')
        msg.channel.send(embed)
    }
    if (msg.content === '!unfollow') {
        msg.channel.send('You have to say which god you want to unfollow first.')
    }
    if (msg.content === '!unfollow Mianite') {
        let memberRole = msg.member.guild.roles.find('name', 'Mianite Follower')
        msg.member.removeRole(memberRole)
        const embed = new DISCORD.RichEmbed()//Removes Mianite role
            .setTitle('Good Luck!')
            .setDescription('You have decided to no longer follow Mianite.')
            .setColor('#000080')
        msg.channel.send(embed)
    }
    if (msg.content === '!unfollow Ianite') {
        let memberRole = msg.member.guild.roles.find('name', 'Ianite Follower')
        msg.member.removeRole(memberRole)
        const embed = new DISCORD.RichEmbed()//Removes Ianite role
            .setTitle('Good Luck!')
            .setDescription('You have decided to no longer follow Ianite.')
            .setColor('#000080')
        msg.channel.send(embed)
    }
    if (msg.content === '!unfollow Dianite') {
        let memberRole = msg.member.guild.roles.find('name', 'Ianite Follower')
        msg.member.removeRole(memberRole)
        const embed = new DISCORD.RichEmbed()//Removes Dianite role
            .setTitle('Good Luck!')
            .setDescription('You have decided to no longer follow Dianite.')
            .setColor('#000080')
        msg.channel.send(embed)
    }
    if (msg.content === '!unfollow Zeta') {
        let memberRole = msg.member.guild.roles.find('name', 'Zeta Follower')
        msg.member.removeRole(memberRole)
        const embed = new DISCORD.RichEmbed()//Removes Zeta role
            .setTitle('Good Luck!')
            .setDescription('You have decided to no longer follow Zeta.')
            .setColor('#000080')
        msg.channel.send(embed)
    }
    if (msg.content === '!unfollow Orden') {
        let memberRole = msg.member.guild.roles.find('name', 'Orden Follower')
        msg.member.removeRole(memberRole)
        const embed = new DISCORD.RichEmbed()//Removes Orden role
            .setTitle('Good Luck!')
            .setDescription('You have decided to no longer follow Orden.')
            .setColor('#000080')
        msg.channel.send(embed)
    }
    if (msg.content === '!unfollow Aspen') {
        let memberRole = msg.member.guild.roles.find('name', 'Aspen Follower')
        msg.member.removeRole(memberRole)
        const embed = new DISCORD.RichEmbed()//Removes Aspen role
            .setTitle('Good Luck!')
            .setDescription('You have decided to no longer follow Aspen.')
            .setColor('#000080')
        msg.channel.send(embed)
    }
    if (msg.content === '!unfollow Lyra') {
        let memberRole = msg.member.guild.roles.find('name', 'Lyra Follower')
        msg.member.addRole(memberRole)
        const embed = new DISCORD.RichEmbed()//Lyra role
            .setTitle('Good Luck!')
            .setDescription('You have decided to no longer follow Lyra.')
            .setColor('#000080')
        msg.channel.send(embed)
    }
    //!help Directory
    if (msg.content === '!help') {
        const embed = new DISCORD.RichEmbed()//lists all possible commands
            .setTitle('Help Directory')
            .setDescription(`This is the main page for the help directory. What kind of command are you looking for?`)
            .addField('!help', `Sends to the main help directory`)
            .addField('!test','Lists all test commands')
            .addField('!lore', `List all lore-related commands`)
            .setColor('#000080')
        msg.channel.send(embed)
    }
    if (msg.content === '!test') {
        const embed = new DISCORD.RichEmbed()
        .setTitle(`Test Commands`)
        .setDescription(`These are just some random commands used for testing. Don't mind them.`)
        .addField('!hello', 'Receive a warm greeting from Gary')
        .addField('!rickroll', 'Rick-rolls the chat')
        .addField('!fancy', 'Creates a fancy message')
        .addField('!version', `Shows Gary's Version`)
        .addField('!log', 'Lists what has changed from the previous version of Gary')
        .setColor('#000080')
        msg.channel.send(embed)
    }
    if (msg.content === '!lore'){
        const embed = new DISCORD.RichEmbed()
        .setTitle(`!lore`)
        .setDescription(`This is where all lore-related commands go. If you want to get involved in story, this is the place to be.`)
        .addField('!factions', 'List all joinable factions')
        .addField(`!join`,'Used to join a faction')
        .addField(`!leave`, 'Used to leave a faction')
        .addField('!gods', 'Lists all currently known gods')
        .addField('!follow', `Used to follow a god`)
        .addField('!unfollow', `Used to unfollow a god`)
        .setColor('#000080')
        msg.channel.send(embed)
    }
});

client.on('guildMemberAdd', function(_member) {
    _member.send('Welcome to the Realm of Mianite! If you need any help, just look into our faq channel, or type !help in the bot command channel. Hope you enjoy your stay!') //This sends a message to people who join, and gives them the proper roles
    let memberRole = _member.guild.roles.find('name', 'Newcomer!')
    let memberRole1 = _member.guild.roles.find('name', 'Players')
    _member.addRole(memberRole)
    _member.addRole(memberRole1)
});

client.on('ready', () => {
    console.log('Gary the Bot Guy is Alive!');//This is just a check to make sure the bot is active
});


client.login(TOKEN);
