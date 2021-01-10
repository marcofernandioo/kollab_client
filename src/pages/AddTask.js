import 'date-fns';
import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import addTask from '../api';

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
}))

export default function AddTask() {
    const classes = useStyles();
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [deadline, setDeadline] = useState(new Date(''));

    return (
        <div>
            <Card>
                <CardContent>
                    <Grid>
                        <h2>Add Task</h2>
                        <div className = {classes.rowContainer}>
                            <div className = {classes.columnName}>Title</div>
                            <div className = {classes.columnData}> 
                                <TextField 
                                    type = "text" 
                                    variant = "outlined" 
                                    fullWidth 
                                    className = {classes.textField} 
                                    onChange = {(e) => setTitle(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className = {classes.rowContainer}>
                            <div className = {classes.columnName}> Description</div>
                            <div className = {classes.columnData}> 
                                <TextField 
                                    type = "text" 
                                    variant = "outlined" 
                                    fullWidth 
                                    className = {classes.textField} 
                                    onChange = {(e) => setDesc(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className = {classes.rowContainer}>
                            <div className = {classes.columnName}> Deadline</div>
                            <div className = {classes.columnData}> 
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <Grid container justify="space-around">
                                    <KeyboardDatePicker
                                        disableToolbar
                                        variant="inline"
                                        format="MM/dd/yyyy"
                                        margin="normal"
                                        id="date-picker-inline"
                                        value={deadline}
                                        onChange={(e) => setDeadline(e)}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                </Grid>
                            </MuiPickersUtilsProvider>
                            </div>
                        </div>
                        <Button
                            variant = "contained"
                            onClick = {() => console.log(deadline, desc, title)}
                        >
                            Create
                        </Button>

                    </Grid>
                </CardContent>
            </Card>
        </div>
    )
}