import React, { useState } from 'react';
import { Alert, Button, Container, Grid, LinearProgress, TextField, Typography } from '@mui/material';
import loginImg from '../../../images/login.png'
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const history = useHistory()
    const [loginData, setLoginData] = useState({});
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const {user, authError, registerUser, isLoading} = useAuth();

    const handleLoginSubmit = e => {
        if(loginData.password !== loginData.password2){
            alert('password not mathch');
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, history)
        e.preventDefault();
    }
    return (
        <Container>
            <Grid sx={{mt: 8}} container spacing={2}>
                <Grid item xs={12} md={6}>
                <Typography sx={{mb: 4}} variant="h5" gutterBottom component="div">Register</Typography>
                {!isLoading && <form onSubmit={handleLoginSubmit}>
                    <TextField 
                        sx = {{width: '75%', m: 1}}
                        id="standard-basic" 
                        name="name"
                        type="text"
                        onBlur={handleOnBlur}
                        label="Your Name" 
                        variant="standard" />
                    <TextField 
                        sx = {{width: '75%', m: 1}}
                        id="standard-basic" 
                        name="email"
                        type="email"
                        onBlur={handleOnBlur}
                        label="Your Email" 
                        variant="standard" />
                    <TextField 
                        sx = {{width: '75%', m: 1}}
                        id="standard-basic" 
                        label="Your Password"
                        name="password" 
                        onBlur={handleOnBlur}
                        type="password"
                        variant="standard" />
                    <TextField 
                        sx = {{width: '75%', m: 1}}
                        id="standard-basic" 
                        label="Your Password 2nd time"
                        name="password2" 
                        onBlur={handleOnBlur}
                        type="password"
                        variant="standard" />
                    <Button 
                        sx = {{width: '75%', m: 1, mt: 4}}
                        variant="contained"
                        type="submit"
                    >Register</Button>  
                    <NavLink 
                        style={{textDecoration : "none"}}
                        to='/login'>
                        <Button variant="text">Aready Register? Please Login</Button>
                    </NavLink>                  
                </form>}
                {isLoading && <LinearProgress />}
                {user?.email && <Alert severity="success">User created successfully</Alert>}                
                {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{width: '100%'}} src={loginImg} alt=""/>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;