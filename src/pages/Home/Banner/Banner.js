import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Button, Container, Typography } from '@mui/material';

const bannerBg = {
    backgroundImage : `url(${bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    marginTop: 60
}

const verticaleAlign = {
    display: 'flex',
    alignItems: 'center',
    height: 400
}

const Banner = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container style={bannerBg}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} sx={{ ...verticaleAlign, textAlign: 'left'}}>
                        <Box>
                            <Typography variant="h3">
                                Your New Smile <br/> Starts Here
                            </Typography>
                            <Typography variant="h6" sx={{my: 3}}>
                            Make an Appointment today Make an Appointment today Make an Appointment today Make an Appointment today Make an Appointment today
                            </Typography>
                            <Button>Get Appointment</Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} style={verticaleAlign}>
                        <img src={chair} style={{width: 350}} alt=""/>                
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Banner;