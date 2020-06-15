const Discord = require("discord.js")
const { Client, RichEmbed } = require('discord.js');

module.exports = {
    run: async (client, message, args) => {

 if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('você não tem permissão para usar esse comando!')
 
let mensagem = args.join(" ")
let servidores = client.guilds.size
let usuarios = client.users.size
 
client.users.forEach((f) => {f.send(`${f}, ${mensagem} `)},
message.channel.send(`**${message.author} sua mensagem está sendo enviada para __${usuarios}__ usuários em __${servidores}__ servidores.**`)
)},

conf: {},

help: {
  name: 'divbot',
  category: 'Ajuda',
  description: 'Divulga seu Server',
  usage: 'divbot'
}
}


