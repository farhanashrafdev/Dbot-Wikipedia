const Discord = require("discord.js");
const client = new Discord.Client();


client.on('ready', () => {
 console.log('logged in as ${client.user.tag} !');
});

client.on('message', msg =>{
  if (msg.content.includes("pudding?")){
      msg.reply(["Tauba Tauba sara mood khrab krdia",
      "You can look for him at ",
      "https://www.instagram.com/usman._.h/"
    ])
  }
});

client.on('message', msg =>{
    if (msg.content.includes("iceflame?")){
        msg.reply(["M.A Mohtarma nice choice ","you can look him at "
        "https://www.instagram.com/mriceflame1/","mriceflame.ml","github.com/mriceflame"
      ])
    }
  });



client.on('message', msg =>{
    if (msg.content.includes("commands?")){
       msg.reply(["I have the following commands : \n iceflame? \n pudding? \n .aws \n ice \n use any :D" 
      ])
    }
    });
    
client.on('message', msg =>{
 
if(msg.content === 'ice'){
    msg.channel.send("Dheeraj rakhie Abu arhe hain")
}
});

client.on('message', msg =>{
    
    if(msg.content === 'awais'){
        msg.channel.send("Rana Sahb check krao ")
    }
    });

client.on('message', msg =>{
    
        if(msg.content === '.fu'){
            msg.channel.send("*ORAY LG GAYE")
        }
        });
client.on('message', msg =>{
    if(msg.content === 'mamba'){
        msg.channel.send("tauba tauba sara mood \n Disconnected \n han mein kidr hai han, khrab krdia")
    }
    });

client.login(process.env.BOT_TOKEN);
