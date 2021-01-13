import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import {useParams} from 'react-router-dom';

import {deleteTask} from '../../api';


export default function DeleteTaskDialog(props) {
    const [open, setOpen] = React.useState(true);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleClose = () => {
        setOpen(false);
    };

    const onConfirmDelete = () => {
        const id = props.id;
        deleteTask(id)
        .then((res) => {
            // if (res.data.status == 'ok') { 
            //     // window.href.location = '/home/tasks'; 
            //     console.log('task deleted');
            // }
            // else alert(res.data.msg);
            alert(`Task with id: ${id} has been deleted`);
            // alert("task deleted!");
        })
        .catch((err) => alert(err));
    }

    return (
        <div>
        <Dialog
            fullScreen={fullScreen}
            open={props.open}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
        >
            <DialogTitle id="responsive-dialog-title">{" Are you sure you want to delete this task?"}</DialogTitle>
            <DialogContent>
            <DialogContentText>
                Deleted tasks cannot be recovered by all means.
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button autoFocus onClick={() => window.location.href = '/home/tasks'} color="primary">
                NO
            </Button>
            <Button onClick={onConfirmDelete} color="primary" autoFocus>
                YES
            </Button>
            </DialogActions>
        </Dialog>
        </div>
    );
}
