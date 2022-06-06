import React, { useState } from 'react';
import { Typography, CssBaseline, AppBar, Toolbar, Container, Grid, Button } from '@mui/material'
import { PhotoCamera } from '@mui/icons-material'
import { makeStyles } from '@mui/styles';

const theme = createMuiTheme();

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  }
}))

const App = () => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar>
          <PhotoCamera />
          <Typography variant='h6'>Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container className={classes.container} maxWidth='sm'>
            <Typography variant='h2' align='center' color='textPrimary' fontWeight='normal' gutterBottom>Photo Album</Typography>
            <Typography variant='h5' align='center' color='textSecondary' paragraph>Hello everyone this is a paragraph with secondary formatting and i am trying my best to make it as long as possible</Typography>
            <div>
              <Grid container spacing={2} justifyContent='center'>
                <Grid item><Button variant='contained' color='primary'>See My Photos</Button></Grid>
                <Grid item><Button variant='outlined' color='primary'>Secondary action</Button></Grid>

              </Grid>
            </div>
          </Container>
        </div>
      </main>
    </React.Fragment>
  );
};

export default App;
