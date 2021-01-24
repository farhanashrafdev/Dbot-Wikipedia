const Discord = require("discord.js");
const client = new Discord.Client();


client.on('ready', () => {
 console.log('logged in as ${client.user.tag} !');
});

client.on('message', msg =>{
  if (msg.content.includes("Who is Pudding?")){
      msg.reply(["Intehai koi Kanjr Admi hai",
      "You can look for him at ",
      "https://www.instagram.com/usman._.h/"
    ])
  }
});

client.on('message', msg =>{
    if (msg.content.includes("Who is iceflame?")){
        msg.reply(["BHT HE SHAREEF OR MASOOM BACHA HAI ","you can look him at",
        "https://www.instagram.com/mriceflame1/"
      ])
    }
  });

client.on('message', msg =>{
  if (msg.content.includes("hello")){
      msg.reply(["Hello Baby Gurl.",
      "Are you Lost?",
    ])
  }
});

client.on('message', msg =>{
  if (msg.content.includes("no")){
      msg.reply(["Then why are you out of kitchen"])
  }
});

client.on('message', msg =>{
    if(msg.author.bot){return}
    if(msg.content === '.commands'){
        msg.channel.send("I have the following commands : \n .ice \n .mamba \n .kuti \n \n hello \n no \n NO \n .fu use any :D")

    }
    });
    
client.on('message', msg =>{
    
if(msg.content === '.ice'){
    msg.channel.send("Nice Choice Mohtarma")
}
});

client.on('message', msg =>{
    
    if(msg.content === '.kuti'){
        msg.channel.send("RANA SAHAB CHECK KRO", "Aj rana nhi Bachada" )
    }
    });

client.on('message', msg =>{
    
        if(msg.content === '.fu'){
            msg.channel.send("Loray Lg gaye")
        }
        });
client.on('message', msg =>{
    if(msg.content === '.mamba'){
       msg.channel.send("tauba tauba sara mo... \n Disconnected \n han mein kidr tha , ..od khrab krdia")
    }
    });

client.login(process.env.BOT_TOKEN);
