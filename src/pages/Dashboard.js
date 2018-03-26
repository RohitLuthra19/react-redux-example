import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';

import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List from 'material-ui/List';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import InboxIcon from 'material-ui-icons/MoveToInbox';
import DraftsIcon from 'material-ui-icons/Drafts';
import Button from 'material-ui/Button';
import ContainerComponent from './Container.component';

const drawerWidth = 240;

const styles = theme => ({
    root: {
        flexGrow: 1,
        height: '100vh',
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawerPaper: {
        position: 'relative',
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        minWidth: 0, // So the Typography noWrap works
    },
    maincontentview: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        height: '100vh',
        width: '100vw',
        margin: 0,

    },
    toolbar: theme.mixins.toolbar,
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
});

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = { item: '' };
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <AppBar position="absolute" className={classes.appBar}>
                    <Toolbar>
                        <Typography variant="title" color="inherit" className={classes.flex}>
                            Dashboard
                        </Typography>
                        <Typography variant="title" color="inherit" >
                            {this.state.email || "Rohit"}
                        </Typography>
                        {/* <Button color="inherit">{this.state.email || "ROhit"}</Button> */}
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.toolbar} />
                    <List>
                        <ListItem button onClick={(event) => this.setState({
                            item: "medicine"
                        })}>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary="Medicine" />
                        </ListItem>
                        <ListItem button onClick={(event) => this.setState({
                            item: "homecare"
                        })}>
                            <ListItemIcon>
                                <DraftsIcon />
                            </ListItemIcon>
                            <ListItemText primary="HomeCare" />
                        </ListItem>
                    </List>
                    <Divider />
                </Drawer>
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    <ContainerComponent item={this.state.item} />
                </main>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        email: state.auth.email
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onLogout: () => {
            dispatch(logout());
        }
    }
}

export default connect(mapDispatchToProps, mapDispatchToProps)(withStyles(styles)(Dashboard));