import React, {useState, useEffect} from 'react';
import MUIDataTable from 'mui-datatables';
import Button from '@material-ui/core/Button'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

import {Link} from 'react-router-dom';
import {getTasks} from '../../api';

import DeleteTaskDialog from './DeleteTaskDialog';

export default function TaskTable() {
    const [errDialog, setErrDialog] = React.useState(false);
    const [tasks, setTasks] = useState([]);
    const columns = [
        {
            name: 'title',
            label: 'Task',
            // options: {sort: true}
        },
        // {
        //     name: 'description',
        //     label: 'Description',
        //     // options: {sort: true}
        // }, 
        {
            name: 'createDate',
            label: 'Created Date',
            // options: {sort: true}
        },
        {
            name: 'status',
            label: 'Status',
            // options: {sort: true}
        },
        {
            name: 'deadline',
            label: 'Deadline',
            // options: {sort: true}
        }, 
        {
            name: '_id', 
            label: ' ', 
            options: {
                filter: false, 
                sort: false, 
                customBodyRender: (id) => {
                    return (
                        <div>
                            <Tooltip title = "Edit Task">
                                <IconButton>
                                    <EditIcon onClick = {() => onEditTask(id)} />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title = "Delete Task">
                                <IconButton>
                                    <DeleteIcon onClick = {() => setErrDialog(true)} />
                                </IconButton>
                            </Tooltip>
                            <DeleteTaskDialog open = {errDialog} id = {id}/>
                            
                        </div>
                    )
                }
            }
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

    useEffect(() => {
        return (
            <DeleteTaskDialog />
        )
    }, [errDialog])

    const onEditTask = (id) => {
        // console.log("Edit: ", id);
        window.location.href = '/home/edit/'+id;
    }

    const onDeleteTask = () => {
        setErrDialog(true);
    }

    

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