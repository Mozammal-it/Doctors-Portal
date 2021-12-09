import React, { useState } from 'react';
import { Alert, Button, Container, Grid, LinearProgress, TextField, Typography } from '@mui/material';
import loginImg from '../../../images/login.png'
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const {user, authError, loginUser, signInWithGoogle, isLoading} = useAuth();
    const [loginData, setLoginData] = useState({});

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(field, value, newLoginData)
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    }

    return (
        <Container>
            <Grid sx={{mt: 8}} container spacing={2}>
                <Grid item xs={12} md={6}>
                <Typography sx={{mb: 4}} variant="h5" gutterBottom component="div">Login</Typography>
                <form onSubmit={handleLoginSubmit}>
                    <TextField 
                        sx = {{width: '75%', m: 1}}
                        id="standard-basic" 
                        name="email"
                        onChange={handleOnChange}
                        label="Your Email" 
                        variant="standard" />
                    <TextField 
                        sx = {{width: '75%', m: 1}}
                        id="standard-basic" 
                        label="Your Password"
                        name="password" 
                        onChange={handleOnChange}
                        type="password"
                        variant="standard" />
                    <Button 
                        sx = {{width: '75%', m: 1, mt: 4}}
                        variant="contained"
                        type="submit"
                    >Login</Button>  
                    <NavLink 
                        style={{textDecoration : "none"}}
                        to='/register'>
                        <Button variant="text">New User? Please Register</Button>
                    </NavLink>                  
                </form>
                <div>==========================</div>
                <Button onClick={handleGoogleSignIn} variant="contained">Google Sign In</Button>
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

export default Login;