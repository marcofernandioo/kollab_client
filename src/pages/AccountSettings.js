import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


import {logout} from '../api';

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

const onLogout = () => {
    console.log('logout')
    logout()
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

export default function AccountSettings () {
    const classes = useStyles();
    return (
        <div>
            <h2>General Account Settings</h2>
            <Button
                variant = "contained"
                onClick = {onLogout}
                color = "secondary"
            >
            Logout
            </Button>
        </div>
    )
}
/* This Settings page composed of:
    Change password
    Update bio
    Delete Account
    Logout?

*/