import { Alert, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Bookings from '../Bookings/Bookings';

const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodonics',
        time: '08.00 AM - 09.00 AM',
        space: 10
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '09.00 AM - 10.00 AM',
        space: 8
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '10.00 AM - 11.00 AM',
        space: 9
    },
    {
        id: 4,
        name: 'Teeth Cleaning',
        time: '10.00 AM - 11.00 AM',
        space: 9
    },
    {
        id: 5,
        name: 'Teeth Cleaning',
        time: '10.00 AM - 11.00 AM',
        space: 9
    },
    {
        id: 6,
        name: 'Teeth Cleaning',
        time: '10.00 AM - 11.00 AM',
        space: 9
    }
]

const AvailableAppointment = ({date}) => {
    const [bookingSuccess, setBookingSuccess] = useState(false);
    
    return (
        <Container>
            <Typography  sx={{ color: 'info.main', py: 4 }} variant="h4" gutterBottom component="div">
                Available Appointment on <span style={{color: 'green'}}>{date.toDateString()}</span>
            </Typography>
            {bookingSuccess && <Alert severity="success">Booking Successfully!</Alert>}
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Bookings
                        key={booking.id}
                        booking={booking}
                        date={date}
                        setBookingSuccess={setBookingSuccess}
                    ></Bookings>)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointment;