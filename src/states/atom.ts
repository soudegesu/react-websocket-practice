import { atom } from 'recoil';

export const channelAtom = atom<string>({
  key: 'channel',
  default: '',
});
