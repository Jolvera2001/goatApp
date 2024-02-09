import '../styles/redone.css';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import RouteIcon from '@mui/icons-material/Route';
import ForumIcon from '@mui/icons-material/Forum';
import EventIcon from '@mui/icons-material/Event';
import { Grid,
    Container,
    Card,
    CardContent,
    Stack,
    Typography,
    Box,
    AppBar,
    Toolbar,
    Button,
    Drawer,
    TextField } from '@mui/material';

export default function ButtonUsage() {

    {/*   Login Stuff   */}
    const [loginData, setLoginData] = useState({
        usernameLogin: '',
        passwordLogin: '',
    });

    const handleLoginChange = (event) => {
        const { name, value } = event.target;
        setLoginData({ ...loginData, [name]: value });
    };

    // This is to submis to the login API
    const handleLoginSubmit = async (event) => {
        event.preventDefault();
        // Handle login form submission logic here

        try {
            // sending a POST request to API
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // test
                },
                body: JSON.stringify({
                    Username: loginData.usernameRegister,
                    Password: loginData.passwordRegister,
                }),
            });

            if (response.ok) {
                console.log("Logged IN!");
                console.log(response);
            } else {
                console.log('something bad happened?');
                console.log(response);
            }
        }
        catch (error) {
            console.log('Error while registering form');
        }
        console.log(loginData);
    };

    {/*   Registration Stuff   */}
    const [registerData, setRegisterData] = useState({
        usernameRegister: '',
        emailRegister: '',
        passwordRegister: '',
        firstnameRegister: '',
        lastnameRegister: '',
    });

    const handleRegisterChange = (event) => {
        const { name, value } = event.target;
        setRegisterData({ ...registerData, [name]: value });
    };

    // This is to submit to the register API
    const handleRegisterSubmit = async (event) => {
        event.preventDefault();

        try {
            // sending a POST request to API
            const response = await fetch('/User/credentials/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    Id: "",
                    Username: registerData.usernameRegister,
                    Password: registerData.passwordRegister,
                    Email: registerData.emailRegister,
                    FirstName: registerData.firstnameRegister,
                    LastName: registerData.lastnameRegister
                }),
            });

            if (response.ok) {
                console.log("REGISTERED!");
                console.log(response);
            } else {
                console.log('something bad happened?');
                console.log(response);
            }
        }
        catch (error) {
            console.log('Error while registering form');
        }
    };

    return (
        <ThemeProvider
            theme={{
                palette: {
                    primary: {
                        main: '#007FFF',
                        dark: '#0066CC',
                    },
                },
            }}
        >
            <Stack>
                <AppBar position="static" color="inherit" elevation={0} >
                    <Toolbar
                        sx={{
                            marginTop: '1%',
                            marginRight: '11%',
                            marginBottom: '1%'
                        }}>                        <Box sx={{flexGrow: 1}}></Box>
                        <Button onClick={toggleDrawer}>Login/Register</Button>
                        <Button>Contact</Button>
                    </Toolbar>
                </AppBar>
                <Stack spacing={8} direction="column" justifyContent="space-evenly" alignItems="center">
                    <Container maxWidth={false} disableGutters xs={{ width: '100%'}} mt={10}>
                        <Grid container>
                            <Grid item xs={8}>

                            </Grid>
                            <Grid item  xs={4} style={{ background: '#2A296B'}}>

                            </Grid>
                        </Grid>
                    </Container>
                    <Container>

                    </Container>
                    <Box />
                    <Box />
                    <Container maxWidth="md" className='featureShowcase'>
                        <Grid container spacing={5}>
                            <Grid item xl={4}>
                                <Card elevation={0}>
                                    <CardContent sx={{ textAlign: 'center' }}>
                                        <RouteIcon style={{ fontSize: '5rem', marginBottom: '3rem' }} mb={50} />
                                        <Typography variant="h5" component="h2">
                                            Having trouble finding your class or finding events on campus? Our map will
                                            help you traverse our campus so you can get where you need to be!
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xl={4}>
                                <Card elevation={0}>
                                    <CardContent sx={{ textAlign: 'center' }}>
                                        <ForumIcon style={{ fontSize: '5rem', marginBottom: '3rem' }}/>
                                        <Typography variant="h5" component="h2">
                                            Share events and posts with your friends, family, and the St. Edward's community
                                            to keep them in touch with what's going on at the Hilltop
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xl={4}>
                                <Card elevation={0}>
                                    <CardContent sx={{ textAlign: 'center' }}>
                                        <EventIcon style={{ fontSize: '5rem', marginBottom: '3rem' }}/>
                                        <Typography variant="h5" component="h2">
                                            Browse the events that are happening or going to happen on campus, or create your own!
                                            We'll make sure your events are seen on the map and shown for others to discover
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Container>
                </Stack>
                <Drawer
                    anchor="right"
                    open={isDrawerOpen}
                    onClose={toggleDrawer}
                    PaperProps={{
                        sx : { width: '40%'},
                    }}
                >
                    <Stack spacing={8} direction="column" justifyContent="space-evenly" alignItems="center" sx={{my: 5}}>
                        <form>
                            <Stack spacing={2}>
                                <Typography variant='h6'>Login</Typography>
                                <TextField
                                    required
                                    label="Username"
                                    name="usernameLogin"
                                    size='small'
                                    value={loginData.usernameLogin}
                                    onChange={handleLoginChange}
                                    variant="outlined">

                                </TextField>
                                <TextField
                                    required
                                    label="Password"
                                    name='passwordLogin'
                                    size='small'
                                    value={loginData.passwordLogin}
                                    onChange={handleLoginChange}
                                    variant="outlined">

                                </TextField>
                                <Button onClick={handleLoginSubmit}>Login</Button>
                            </Stack>
                        </form>
                        <form>
                            <Stack spacing={2}>
                                <Typography variant='h6'>Register</Typography>
                                <TextField
                                    required
                                    label="Username"
                                    name='usernameRegister'
                                    size='small'
                                    value={registerData.usernameRegister}
                                    onChange={handleRegisterChange}
                                    variant="outlined">

                                </TextField>
                                <TextField
                                    required
                                    label="Password"
                                    name='passwordRegister'
                                    size='small'
                                    value={registerData.passwordRegister}
                                    onChange={handleRegisterChange}
                                    variant="outlined">

                                </TextField>
                                <TextField
                                    required
                                    label="Email"
                                    name='emailRegister'
                                    size='small'
                                    value={registerData.emailRegister}
                                    onChange={handleRegisterChange}
                                    variant="outlined">

                                </TextField>
                                <Button onClick={handleRegisterSubmit}>Register</Button>
                            </Stack>
                        </form>
                    </Stack>
                </Drawer>
            </Stack>
        </ThemeProvider>
    )
}