const Discord = require('discord.js')

module.exports = {

  run: async (client, message, args) => {
    const embed = new Discord.RichEmbed()
      .setAuthor(`Me adicione em seu servidor`)
      .setColor(message.member ? message.member.displayColor : global.CLIENT_DEFAULT_COLOR)
      .setDescription('**Clique** [**AQUI**](https://discord.com/oauth2/authorize?client_id=722081597079420979&scope=bot&permissions=268435518)')

    message.channel.send(embed)
  },


  conf: {},

  get help () {
    return {
      name: 'invite',
      description: 'Mostra o convite da victória.',
      usage: 'invite',
      category: 'Info'
    }
  }
}
