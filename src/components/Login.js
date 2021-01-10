import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {login} from '../api';

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
        color: '#ffffff',
    }, 
    card: {
        width: '300px',
    }
}))

export default function Login () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const classes = useStyles();

    const onChangeEmail = (event) => {
        setEmail(event.target.value);
    }
    const onChangePassword = (event) => {
        setPassword(event.target.value);
    }

    const onLogin = () => {
        login(email, password)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }

    return (
        <Card variant = "outlined" className = {classes.card}>
            <CardContent>
                <Grid container direction = "column" justify = "flex-end" alignItems = "center">
                    <h3>User Login</h3>
                    <TextField type = "text" label = "Email" variant  = "outlined" onChange = {onChangeEmail} value = {email} className = {classes.textField}/>
                    <TextField type = "password" label = "Password" variant  = "outlined"  onChange = {onChangePassword} value = {password} className = {classes.textField}/>
                    <Button onClick = {onLogin} variant = "contained" className = {classes.button}>Login</Button>
                </Grid>
            </CardContent>
        </Card>
    )

};