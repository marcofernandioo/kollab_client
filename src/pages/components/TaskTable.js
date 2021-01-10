import React, {useState, useEffect} from 'react';
import MUIDataTable from 'mui-datatables';
import Button from '@material-ui/core/Button'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';



import {Link} from 'react-router-dom';
import {getTasks} from '../../api';



export default function TaskTable() {
    const [tasks, setTasks] = useState([]);
    const columns = [
        {
            name: 'title',
            label: 'Task',
            options: {sort: true}
        },
        {
            name: 'description',
            label: 'Description',
            options: {sort: true}
        }, 
        {
            name: 'createDate',
            label: 'Created',
            options: {sort: true}
        },
        {
            name: 'doBy',
            label: 'Assigned To',
            options: {sort: true}
        }
    ];

    const options = {
        filterType: 'checkbox'
    }

    useEffect (() => {
        getTasks()
        .then((res) => {
            if (res.data.status == 'ok') setTasks(res.data.tasks); 
            else alert(res.data.msg);
        })
        .catch((err) => alert(err))
    }, [])


    return (
        <>
            <Button 
                style = {{marginBottom: '10px'}}
                variant = "contained" 
                color = "primary"
                component = {Link}
                to = "/home/addtask"
            >
                Add a Task
            </Button>

            <MUIDataTable 
                title = {"Tasks"}
                data = {tasks}
                columns = {columns}  
                options = {options}
            />
        </>
    )
}