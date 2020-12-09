import { Button } from '@material-ui/core';
import React, { FC } from 'react';
import { useRecoilValue } from 'recoil';
import { inputMessageAtom, socketClientAtom } from '../states/atom';
import { MessageEvent } from '../hooks/useChat';

const PostMessageButton: FC = () => {
  const message = useRecoilValue(inputMessageAtom);
  const socket = useRecoilValue(socketClientAtom);

  const handleOnClick = () => {
    if (socket) {
      socket.emit(MessageEvent.MESSAGE, {
        message,
      });
    }
  };

  return (
    <Button onClick={handleOnClick} variant="contained" color="primary">
      Post
    </Button>
  );
};

export default PostMessageButton;
