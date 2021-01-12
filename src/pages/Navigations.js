import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import LibraryBooksOutlinedIcon from '@material-ui/icons/LibraryBooksOutlined';
import GroupOutlinedIcon from '@material-ui/icons/GroupOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import Avatar from '@material-ui/core/Avatar';

import {Switch, Route} from 'react-router-dom';
import TaskTable from './components/TaskTable';
import AddTask from './AddTask';
import EditTask from './EditTask';
import AllTasks from './AllTasks';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
},
menuButton: {
    marginRight: theme.spacing(2),
},
title: {
    flexGrow: 1,
},
appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
    }),
},
appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
    }),
},
menuButton: {
    marginRight: 36,
},
hide: {
    display: 'none',
},
drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
},
drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
    }),
},
drawerClose: {
    transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
    width: theme.spacing(9) + 1,
    },
},
toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
},
content: {
    flexGrow: 1,
    padding: theme.spacing(3),
},
avatar: {
    color: '#ffffff',
    backgroundColor: '#F54406',
},
main: {
    marginLeft: '100px', 
    marginTop: '100px'
}, 
profile: {
    toolbar: {
    display: 'block',
    alignItems: 'left',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, ),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
},
}
  }));


export default function Base (props) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
  
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open,
              })}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Kollab
            </Typography>
            
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          <div className = {classes.profile}>
            {/* <IconButton color="inherit">
              <Avatar className={classes.avatar}>MF</Avatar>
            </IconButton>
            <Typography variant="h6" noWrap>
              Marc F
            </Typography> */}
          </div>
          <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
            <ListItem button onClick = {() => window.location.href = '/home/tasks'}>
              <ListItemIcon ><LibraryBooksOutlinedIcon /></ListItemIcon>
              <ListItemText primary = {"Tasks"}/>
            </ListItem>
            <ListItem button onClick = {() => window.location.href = '/home/teams'}>
              <ListItemIcon ><GroupOutlinedIcon /></ListItemIcon>
              <ListItemText primary = {"Teams"}/>
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button onClick = {() => window.location.href = '/settings'}>
              <ListItemIcon ><SettingsOutlinedIcon /></ListItemIcon>
              <ListItemText primary = {"Settings"}/>
            </ListItem>
          </List>
        </Drawer>
        <main className={classes.main}>
          <Switch>
              <Route path = "/home/tasks" component = {TaskTable}/>
              <Route path = "/home/addtask" component = {AddTask} />
              <Route path = "/home/edit/:id" component = {EditTask} />
          </Switch>
        </main>
        
      </div>
    )
}