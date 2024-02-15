import '../styles/redone.css';
import bgImg from '../assets/HW-St.-Edwards-Baseball-20-1200x750.jpg'
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

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
            const response = await fetch('/User/credentials/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    Username: loginData.usernameLogin,
                    Password: loginData.passwordLogin,
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
    
    {/*   Registration Stuff   */ }
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

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
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
            <Container maxWidth={false} className='imgContainer' disableGutters xs={{ width: '100%' }} mt={10}>
        <Grid container justifyContent="center">
            <Grid item xs={3}></Grid>
            <Grid item xs={9} style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box
                    sx={{
                        position: 'absolute',
                        left: '-7.5%', // Adjust the left position as needed
                        top: '4%',
                        background: '#223c75',
                        color: '#fff',
                        padding: 2,
                        zIndex: 1, // Place the box above the image
                    }}
                    maxWidth="sm"
                >
                    <Stack spacing={4}>
                        <Typography variant='h2' sx={{ fontSize: '55.2px', padding: '10px'}}>Welcome To Goatplaces!</Typography>
                        <Typography variant='h5' sx={{ padding: '10px', m: 5, }}>
                            GOat Places is a simple and fast way to share campus experiences with friends. 
                            Whether you want to create them or simply let others know, sign up today to start!
                        </Typography>
                        <Button 
                            variant="contained"
                            onClick={toggleDrawer} 
                            size="large" 
                            sx={{
                                backgroundColor: '#bcc922', 
                                color: '#223c75', 
                                borderRadius: '0px', 
                                left: '27%', 
                                width: '45%', 
                                height: '45px'
                                }}
                        >
                            Join Today!
                        </Button>
                        <Box />
                    </Stack>
                    </Box>
                    <img
                    className='landingImg'
                    src={bgImg}
                    alt="Image"
                    style={{ width: '60%', borderRadius: '5px' }} // Adjust the width and margin
                        />
                    </Grid>
                </Grid>
                </Container>
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
                                requied
                                label="Username"
                                name="usernameLogin"
                                size='small'
                                value={loginData.usernameLogin}
                                onChange={handleLoginChange}
                                variant="filled">

                            </TextField>
                            <TextField
                                required
                                label="Password"
                                name='passwordLogin'
                                size='small'
                                value={loginData.passwordLogin}
                                onChange={handleLoginChange}
                                variant="filled">

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
                                variant="filled">

                            </TextField>
                            <TextField
                                required
                                label="Password"
                                name='passwordRegister'
                                size='small'
                                value={registerData.passwordRegister}
                                onChange={handleRegisterChange}
                                variant="filled">

                            </TextField>
                            <TextField
                                required
                                label="Email"
                                name='emailRegister'
                                size='small'
                                value={registerData.emailRegister}
                                onChange={handleRegisterChange}
                                variant="filled">

                            </TextField>
                            <TextField
                                required
                                label="FirstName"
                                name='firstnameRegister'
                                size='small'
                                value={registerData.firstnameRegister}
                                onChange={handleRegisterChange}
                                variant="outlined">

                            </TextField>
                            <TextField
                                required
                                label="LastName"
                                name='lastnameRegister'
                                size='small'
                                value={registerData.lastnameRegister}
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