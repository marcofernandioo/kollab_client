import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { register } from '../../api';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
    columnData: {
        width: '600px'
    }, 
    columnName: {
        width: '200px'
    },
    rowContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',   
        width: '100%'
    }, 
    grid: {
        marginLeft: '20px'
    }, 
    myCard: {
        width: '100%',  
    }, 
    myButton: {
        backgroundColor: '#00cccc', 
        color: '#ffffff'
    }, 
    textField: {
        marginTop: '10px',   
        marginBottom: '10px'
    }, 
    root: {
        flexDirection: 'column',   
        justifyContent: 'flex-start', 
        alignItems: 'flex-start', 
        height: '100vh', 
        width: '900px', 
        marginLeft: '80px', 
        marginTop: '80px'
    }
}));

export default function SignUp () {
    const classes = useStyles();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');

    const verifyPassword = (pass1, pass2) => {
        return pass1 == pass2;
    }

    const onRegister = () => {
        if (verifyPassword(password, confPassword)) {
            register(name, email, password)
            .then(
                (res) => {
                    if (res.data.status === 'ok') {
                        window.location.href = '/';
                        alert(res.data.msg)
                    }
                    else alert(res.data.msg)
                }
            )
            .catch(
                (err) => console.log(err)
            );
        }
        else alert('Password fields must match')
        
    }

    return (
        <div>
            <Card>
                <CardContent>
                    <Grid>
                        <h3>Join the cult!</h3>
                        <div className = {classes.rowContainer}>
                            <div className = {classes.columnName}>Full Name</div>
                            <div className = {classes.columnData}> 
                                <TextField
                                    required
                                    type = "text" 
                                    variant = "outlined" 
                                    fullWidth 
                                    className = {classes.textField} 
                                    onChange = {(e) => setName(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className = {classes.rowContainer}>
                            <div className = {classes.columnName}>Email</div>
                            <div className = {classes.columnData}> 
                                <TextField 
                                    required
                                    type = "text" 
                                    variant = "outlined" 
                                    fullWidth 
                                    className = {classes.textField} 
                                    onChange = {(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className = {classes.rowContainer}>
                            <div className = {classes.columnName}>Password</div>
                            <div className = {classes.columnData}> 
                                <TextField 
                                    required
                                    type = "password" 
                                    variant = "outlined" 
                                    fullWidth 
                                    className = {classes.textField} 
                                    onChange = {(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className = {classes.rowContainer}>
                            <div className = {classes.columnName}>Confirm Password</div>
                            <div className = {classes.columnData}> 
                                <TextField 
                                    required
                                    type = "password" 
                                    variant = "outlined" 
                                    fullWidth 
                                    className = {classes.textField} 
                                    onChange = {(e) => setConfPassword(e.target.value)}
                                />
                            </div>
                        </div>
                        <Button
                            variant = "contained"
                            onClick = {() => window.location.href = '/'}
                            style = {{marginRight: '10px'}}
                        >
                            Go Back
                        </Button>
                        <Button
                            variant = "contained"
                            color = "primary"
                            onClick = {onRegister}
                        >
                            Register
                        </Button>
                    </Grid>
                </CardContent>
            </Card>
        </div>
    )
}