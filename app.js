


const Discord = require("discord.js");
const client = new Discord.Client();


client.on('ready', () => {
 console.log('logged in as ${client.user.tag} !');
});

client.on('message', msg =>{
  if (msg.content.includes("Pudding?")){
      msg.reply(["A PIECE OF SHIT",
      "You can look for him at ",
      "https://www.instagram.com/usman._.h/"
    ])
  }
});

client.on('message', msg =>{
    if (msg.content.includes("Who is iceflame?")){
        msg.reply(["BHT ACHE INSAAN HAIN",
        "https://www.instagram.com/mriceflame1/"
      ])
    }
  });


client.on('message', msg =>{
    if(msg.author.bot){return}
    if(msg.content === '.commands'){
        msg.channel.send("I have the following commands : tobeadded")

    }
    });
    
client.on('message', msg =>{
    
if(msg.content === '.ice'){
    msg.channel.send("GOOD CHOICE MOHTARMA ")
});

client.on('message', msg =>{
    
    if(msg.content === '.aws'){
        msg.channel.send("Beta aj rana tay awais nahi bachda. Aj awais nu chuk kay lejana")
    }
    });

client.on('message', msg =>{
    
        if(msg.content === '.fu'){
            msg.channel.send("*ORAY LG GAYE")
        }
        });
client.on('message', msg =>{
    if(msg.content === '.mamba'){
        msg.channel.send("tauba tauba sara mood \n Disconnected \n han mein kidr hai han, khrab krdia")
    }
    });

client.login(process.env.BOT_TOKEN);
