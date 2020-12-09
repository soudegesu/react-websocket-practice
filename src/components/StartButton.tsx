import { Button } from '@material-ui/core';
import React, { FC } from 'react';
import { useRecoilValue } from 'recoil';
import { channelAtom, endpointAtom } from '../states/atom';
import useChat from '../hooks/useChat';

const StartButton: FC = () => {
  const endpoint = useRecoilValue(endpointAtom);
  const channel = useRecoilValue(channelAtom);

  const { connect, disconnect, connected } = useChat({ endpoint, channel });

  const handleOnClick = () => {
    connect();
  };

  const handleOnDisconnect = () => {
    disconnect();
  };

  return connected ? (
    <Button onClick={handleOnDisconnect} variant="contained" color="primary">
      Stop
    </Button>
  ) : (
    <Button onClick={handleOnClick} variant="contained" color="primary">
      Start
    </Button>
  );
};

export default StartButton;
