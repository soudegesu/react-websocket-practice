import { useCallback } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import socketIOClient from 'socket.io-client';
import { MessageData, recievedMessagesAtom, socketClientAtom } from '../states/atom';

interface Props {
  endpoint: string;
  channel: string;
}

export enum MessageEvent {
  MESSAGE = 'message',
}

export default function useChat({ endpoint, channel }: Props) {
  const [socket, setSocket] = useRecoilState(socketClientAtom);
  const setRecievedMessages = useSetRecoilState(recievedMessagesAtom);

  const connect = useCallback(() => {
    const socket = socketIOClient(endpoint, {
      query: { channel },
      reconnection: true,
    });
    socket.on(MessageEvent.MESSAGE, (message: MessageData) => {
      setRecievedMessages((prev) => [...prev, message]);
    });
    socket.connect();

    setSocket(socket);
  }, []);

  const disconnect = useCallback(() => {
    if (socket) socket.disconnect();
  }, []);

  return { connect, disconnect, connected: socket?.connected };
}
