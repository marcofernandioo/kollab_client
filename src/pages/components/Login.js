import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { login } from '../../api';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1, 
    }, 
    textField: {
        marginTop: '10px', 
        marginBottom: '10px'
    }, 
    button: {
        backgroundColor: '#00cccc', 
        color: '#ffffff'
    }, 
    card: {
        width: '300px'
    }
}));

export default function Login () {
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const changeEmail = (event) => {
        setEmail(event.target.value);
    }

    const changePassword = (event) => {
        setPassword(event.target.value);
    }

    const onLogin = () => {
        login(email,password)
        .then((res) => {
            if (res.data.status == 'ok') 
                window.location.href = '/home';
                // console.log(res.data);
            else alert(res.data.msg)
        })
        .catch((error) => console.log(error));
    }

    return (
        <Card variant = "outlined" className = {classes.card}>
            <CardContent>
                <Grid container direction = "column" justify = "flex-start" alignItems = "center">
                    <h3>Login</h3>
                    <TextField type = "text" label = "Email" variant  = "outlined" onChange = {changeEmail} value = {email} className = {classes.textField}/>
                    <TextField type = "password" label = "Password" variant  = "outlined"  onChange = {changePassword} value = {password} className = {classes.textField}/>
                    <Button onClick = {onLogin} variant = "contained" className = {classes.button}>Login</Button>
                    <small>Don't have an account? Sign Up <Link to = '/signup'>here</Link> </small>
                </Grid>
            </CardContent>
        </Card>
    )
}