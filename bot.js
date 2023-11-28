const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
  console.log('Бот готов к работе!');
});

client.login('Токен вашего бота');

client.on('message', message => {
  if (message.content.toLowerCase() === '!сервер') {
    message.channel.send(`Ссылка на сервер: ${message.guild.inviteURL()}`);
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === '!изменить_роль') {
    let role = message.guild.roles.cache.find(role => role.name === 'Название роли');
    if (role) {
      message.member.roles.add(role)
        .then(member => message.channel.send(`Вы успешно получили роль: ${role.name}`))
        .catch(error => console.error(error));
    } else {
      message.channel.send('Роль не найдена.');
    }
  }

  if (message.content.toLowerCase() === '!изменить_аватар') {
    // Пример URL-адреса нового аватара
    let newAvatarURL = 'https://example.com/new-avatar.jpg';

    message.client.user.setAvatar(newAvatarURL)
      .then(user => message.channel.send('Аватар успешно изменен!'))
      .catch(error => console.error(error));
  }
});
