import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'
import { Button, Typography } from '@mui/material';

const appointmentBanner = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45, 58, 74, 0.8',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 120,
    backgroundPosition: 'left top'
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} sx={{
          disflay: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          textAlign: 'left'
        }}>
          <Grid item xs={12} md={5}>
            <img style={{width: '400px', marginTop: -100, display: 'block'}} src={doctor} alt="" />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6">
                Appointment
            </Typography>
            <Typography sx={{my: 3}} style={{color: 'white'}} variant="h4">
                Make an Appointment today
            </Typography>
            <Typography variant="h4" style={{fontSize: '15px', fontWeight: 'normal', color: 'white'}}>
                Make an Appointment today Make an Appointment today Make an Appointment today Make an Appointment today Make an Appointment today
            </Typography>
            <Button sx={{my: 2}} variant="contained">Learn more</Button>
          </Grid>
        </Grid>
      </Box>
    );
};

export default AppointmentBanner;