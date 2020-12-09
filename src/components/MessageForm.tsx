import { TextField } from '@material-ui/core';
import React, { FC } from 'react';
import { useRecoilState } from 'recoil';
import { inputMessageAtom } from '../states/atom';

const MessageForm: FC = () => {
  const [message, setMessage] = useRecoilState(inputMessageAtom);

  const handleOnChangeText = (e: any) => {
    setMessage(e.target.value);
  };

  return <TextField label="message" type="text" variant="outlined" value={message} onChange={handleOnChangeText} />;
};

export default MessageForm;
