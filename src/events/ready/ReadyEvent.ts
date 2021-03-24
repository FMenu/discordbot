import BaseEvent from '../../utils/structures/BaseEvent';
import DiscordClient from '../../client/client';

export default class ReadyEvent extends BaseEvent {
  constructor() {
    super('ready');
  }
  async run (client: DiscordClient) {
    console.log(`${client.user?.username}#${client.user?.discriminator} (${client.user?.id}) has logged in.`);
    client.user?.setPresence({
      status: 'idle',
      activity: {
        name: 'the FMenu server | fm$help for commands',
        type: 'WATCHING',
        url: 'https://twitch.tv/portaalgaming'
      }
    })
  }
}