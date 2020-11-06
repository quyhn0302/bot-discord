require('dotenv').config();
const Discord  = require('discord.js');
const client  = new Discord.Client();
const prefix = process.env.PREFIX

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  if(!message.member.hasPermission('ADMINISTRATOR')) return;
  const args = message.content.slice(prefix.length).trim().split(' ');
  const command = args.shift().toLowerCase();
  const mess = new Discord.MessageEmbed()
        .setTitle('WARNING')
        .setColor('#FFFF00')
        .setDescription('Use: /pm [id] [message]');

  if (command === 'pm') {
    if(args[0] == null || args[1] == null || args[0].length != 18){
      return message.channel.send(mess);
    }else{
      var newMess = '';
      for(var i=1; i<args.length; i++){
        newMess = newMess +' '+ args[i].toString();
      }
      return client.users.cache.get(args[0]).send(newMess);
    }
  }
})

client.login(process.env.DISCORD_BOT_TOKEN);