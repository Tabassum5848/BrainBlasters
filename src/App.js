import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import brainImage from './brainImage.png'; // Adjust the path as needed
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blue } from '@mui/material/colors';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        {/* Left grid */}
        <Grid item xs={12} md={7} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', backgroundColor: '#6ED3FF' }}>
          <Typography component="h1" variant="h1" align="center" mt={8} mb={5} color={'white'} sx={{ fontFamily: 'Montagu Slab'}}>
            Brain Blasters
          </Typography>
          <img src={brainImage} alt="Brain" style={{ width: '450px', height: '300px', top: '-1295px', left: '-11003px' }} />
          <Typography variant="h5" align="center" mt={2} color={'white'} sx={{ fontFamily: 'Montagu Slab'}}>
            Think you're up for the challenge? Let's find out!
          </Typography>
        </Grid>
        {/* Right grid */}
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
         >
            <Typography component="h1" variant="h4" sx={{ fontFamily: 'Montagu Slab', color: '#6ED3FF', fontWeight: 'bold' }}>
              Login
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2, mx: 'auto', backgroundColor: '#6ED3FF' }}
              >
                Login
              </Button>
              <Grid container spacing={1}>
                
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
