import {Box, Button, Container, Grid, Stack, Typography} from "@mui/material";
import {useState} from "react";

export const HeroSection = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
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
                        src='src/assets/HW-St.-Edwards-Baseball-20-1200x750.jpg'
                        alt="Image"
                        style={{ width: '60%', borderRadius: '5px' }} // Adjust the width and margin
                    />
                </Grid>
            </Grid>
        </Container>
    )
}