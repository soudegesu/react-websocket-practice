import { Box } from '@material-ui/core';
import React, { FC } from 'react';
import { useRecoilValue } from 'recoil';
import { recievedMessagesAtom } from '../states/atom';

const MessagesViewer: FC = () => {
  const recievedMessages = useRecoilValue(recievedMessagesAtom);

  return (
    <Box>
      {recievedMessages &&
        recievedMessages.length > 0 &&
        recievedMessages.map((data, i) => {
          return <Box key={i}>{(data as any).message}</Box>;
        })}
    </Box>
  );
};

export default MessagesViewer;
