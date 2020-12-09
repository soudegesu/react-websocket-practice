import { Button } from '@material-ui/core';
import React, { FC } from 'react';

const StartButton: FC = () => {
  const handleOnClick = () => {};

  return (
    <Button onClick={handleOnClick} variant="contained" color="primary">
      Start
    </Button>
  );
};

export default StartButton;
