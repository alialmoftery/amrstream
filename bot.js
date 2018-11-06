const Discord = require('discord.js');
const client = new Discord.Client();


console.log("Welcome Again !");
 

          const devs = ['200644160179535872' , '447112216123277335' , '' , ''];
          const adminprefix = "_";
          client.on('message', message => {
              var argresult = message.content.split(` `).slice(1).join(' ');
                if (!devs.includes(message.author.id)) return;

            if (message.content.startsWith(adminprefix + 'st')) {
              client.user.setGame(argresult, "https://www.twitch.tv/ حب بلا حدود");
                message.channel.sendMessage(`**✅   ${argresult}**`)
            }
            });


             
client.login(process.env.BOT_TOKEN);
