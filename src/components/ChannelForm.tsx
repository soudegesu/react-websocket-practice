import { TextField } from '@material-ui/core';
import React, { FC } from 'react';
import { useRecoilState } from 'recoil';
import { channelAtom } from '../states/atom';

const ChannelForm: FC = () => {
  const [channel, setChannel] = useRecoilState(channelAtom);

  const handleOnChangeText = (e: any) => {
    setChannel(e.target.value);
  };

  return <TextField label="channel" type="text" variant="outlined" value={channel} onChange={handleOnChangeText} />;
};

export default ChannelForm;
