import { atom } from 'recoil';
import { Socket } from 'socket.io-client';

export const channelAtom = atom<string>({
  key: 'channel',
  default: 'test',
});

export const endpointAtom = atom<string>({
  key: 'ednpoint',
  default: process.env['REACT_APP_WEBSOCKET_ENDPOINT'] as string,
});

export const inputMessageAtom = atom<string>({
  key: 'inputMessage',
  default: '',
});

export const recievedMessagesAtom = atom<string[]>({
  key: 'recievedMessages',
  default: [],
});

export const socketClientAtom = atom<typeof Socket | undefined>({
  key: 'socketClient',
  default: undefined,
  dangerouslyAllowMutability: true,
});
