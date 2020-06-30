const Discord = require("discord.js")
module.exports = {
  run: async (client, message) => {


    let timedOut = false
  
    const { channel, author } = message
  
    const isFromAuthor = m => m.author.id == author.id
  
    const options = {
      max: 1,
      time: 60 * 1000
    }
  
    await channel.send('Agora digite a mensagem que quer enviar no embed.')
    const firstColl = await channel.awaitMessages(isFromAuthor, options)
  
    if (firstColl.size > 0) {
      const title = firstColl.first().content

        const Embed = new Discord.MessageEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL())
        .setDescription(title)
        .setFooter("© Larissa v$")
        .setTimestamp()

        message.guild.members.forEach(member => {
          if (member.id !== client.user.id && !member.user.bot) member.send(Embed).catch(() => {});
        });

      } else timedOut = true

    if (timedOut)
    channel.send('Comando cancelado, demorou demais.')

},
  
    conf: {},

  help: {
    name: "avisoembed",
    category: "Ajuda",
    description: "Divulga seu Server",
    usage: "avisoembed"
  }
}
