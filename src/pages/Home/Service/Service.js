import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

const Service = (props) => {
    const {name, description, img} = props.service;
    return (
        <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
            <CardContent>
                <CardMedia
                    component="img"
                    style= {{width: 'auto', height: '80px', margin: '0 auto'}}
                    image={img}
                    alt="green iguana"
                />
                <Typography 
                    variant="h5" 
                    component="div"
                    style={{padding: '20px 0'}}
                    >
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default Service;