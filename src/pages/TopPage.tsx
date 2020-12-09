import { AppBar, Box, Container, createStyles, makeStyles } from '@material-ui/core';
import React, { FC } from 'react';
import ChannelForm from '../components/ChannelForm';
import StartButton from '../components/StartButton';

const appBarHeight = 40;

const useStyles = makeStyles(() =>
  createStyles({
    appBar: {
      height: appBarHeight,
    },
    container: {
      marginTop: appBarHeight,
      paddingTop: 10,
    },
    formBox: {
      padding: 8,
    },
  }),
);

const TopPage: FC = () => {
  const classes = useStyles();

  return (
    <>
      <Box>
        <AppBar className={classes.appBar}>Websocket + React Example</AppBar>
      </Box>
      <Container className={classes.container}>
        <Box>
          <Box className={classes.formBox}>
            <ChannelForm />
          </Box>
          <Box className={classes.formBox}>
            <StartButton />
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default TopPage;
