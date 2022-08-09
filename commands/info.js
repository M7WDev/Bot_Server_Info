const Discord = require('discord.js')
const axios = require("axios")
module.exports = {
    name: 'Bot_Info',
    description: 'Um bot criado para saber se o servidor procurado está online!',
 
    run: async (client, message, args) => { 

        let server = args[0] // Coleta o argumento seguinte ao comando /info

        if (!server) return message.reply("Digite: /info [ipdoservidor]") // Se o argumento não existir, como por exemplo deixar nulo ele mostra essa mensagem!


        if(server){
          
            var srv = 'http://mcapi.us/server/status?ip='+args[0]
            axios
        .get(srv)
        .then((res) => {
          if(res.data.online === true){ // Bot executa esse bloco caso o servidor esteja online!
            let embed_geral = new Discord.MessageEmbed()
            .setTitle("Server Info")
            .setColor("BLACK")
            .setDescription(`Status: Online \n\nJogadores na rede: ${res.data.players.now} \n\nIp: \`${args[0]}\`` );
            message.channel.send({ embeds: [embed_geral]})
           
          }else{
            return message.reply("Servidor Offline ou Inexistente")
          }

          
        })
        .catch((err) => {
          console.error('ERR:', err)
        })

        
        }
        
    
     
    }
}