import React, {useState} from 'react';
import {getTasks} from '../api';

export default function AllTasks () {
    const [tasks, setTasks] = useState([]);
    getTasks()
        .then((res) => {
            // console.log(res.data.tasks)
            if (res.data.status === 'ok') setTasks(res.data.tasks);
            else console.log(res.data.msg);
        })
        .catch((err) => {
            console.log(err);
        })
    return (
        
        <div>
            <h1>All Tasks</h1>
            {
                tasks.map((task) => {
                    return (
                        <>
                            <h2>{task.title}</h2>
                            <span>by. {task.doBy}</span>
                            <p>{task.description}</p>
                        </>
                    )
                })
            }
        </div>
    )
}