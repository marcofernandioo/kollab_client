import React, {useState, useEffect} from 'react';
import MUIDataTable from 'mui-datatables';
import {getTasks} from '../api';

export default function TaskTable () {
    const [tasks, setTasks] = useState([]);
    const columns = [
        {
            name: 'title', 
            label: 'Title', 
            options: {
                sort: true, 
            }
        },
        {
            name: 'description', 
            label: 'Description', 
            options: {
                // filter: true, 
                sort: true, 
                // customBodyRender: (value) => {
                //     return value && (<div> {value.name} </div>)
                // }
            }
        },
        {
            name: 'status', 
            label: 'Status', 
            options: {
                filter: true, 
                sort: true, 
            }
        }, 
        {
            name: 'deadline', 
            label: 'Deadline',
            options: {
                filter: true, 
                sort: true, 
            }
        }, 
        // {
        //     name: 'produced', 
        //     label: 'Company', 
        //     options: {
        //         filter: true, 
        //         sort: true, 
        //     }
        // }
    ];
    const options = {
        filterType: 'checkbox',
    }

    useEffect(() => {
        getTasks()
        .then((res) => {
            if (res.data.status === 'ok') {
                setTasks(res.data.data);
            } else {
                console.log(res.data.msg);
            }
        })
        .catch((err) => {
            console.log(err);
        })
    }, );

    return (
        <>
            <h1>^</h1>
            <MUIDataTable
                title = {"Product List"}
                data = {tasks}
                columns = {columns}
                options = {options}
            />
        </>
    )
}