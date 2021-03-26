const Discord = require("discord.js");
const client = new Discord.Client();


client.on('ready', () => {
 console.log('logged in as ${client.user.tag} !');
});

client.on('message', msg =>{
   if(msg.author.bot){return}
  if (msg.content.includes("Who is Pudding?")){
      msg.reply(["Intehai koi Kanjr Admi hai",
      "You can look for him at ",
      "https://www.instagram.com/usman._.h/"
    ])
  }
});

client.on('message', msg =>{
   if(msg.author.bot){return}
    if (msg.content.includes("Who is iceflame?")){
        msg.reply(["BHT HE SHAREEF OR MASOOM BACHA HAI ","you can look him at",
        "https://www.instagram.com/mriceflame1/"
      ])
    }
  });

client.on('message', msg =>{
    
if(msg.content === 'e!phcomment'){
    msg.channel.send(" <@527429958470205451> ISKO dekhein ")
}
})

client.on('message', msg =>{
    
if(msg.content === '.abu'){
    msg.channel.send(" <@495663537759453184> ko aj bhi lgta hai k bache paryaan dekr jati hain ,chla sbka baap banne,KHASI KAHI KA")
}
})

client.on('message', msg =>{
   if(msg.author.bot){return}
  if (msg.content.includes("hello")){
      msg.reply(["Hello ."
    
    ])
  }
});

client.on('message', msg =>{
  if(msg.author.bot){return}
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
  if(msg.author.bot){return}
    msg.channel.send("Nice Choice Mohtarma")
}
});

client.on('message', msg =>{
     if(msg.author.bot){return}
    if(msg.content === '.kuti'){
        msg.channel.send("RANA SAHAB CHECK KRO KHANZEEL NO", "Aj rana nhi Bachada" )
    }
    });

client.on('message', msg =>{
     if(msg.author.bot){return}
        if(msg.content === '.fu'){
            msg.channel.send("*oray Lg gaye")
        }
        });

client.on('message', msg =>{
     if(msg.author.bot){return}
        if(msg.content === 'who is mia malkova'){
            msg.channel.send("Puddings Crush")
        }
        });

client.on('message', msg =>{
     if(msg.author.bot){return}
        if(msg.content === '.mamba'){
            msg.channel.send("tauba tauba sara mo... \n Disconnected \n han mein kidr tha , ..od khrab krdia")
        }
        });


client.login(process.env.BOT_TOKEN);
