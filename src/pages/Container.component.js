import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import MedicineOrderComponent from './MedicineOrder.component'
import HomecareOrderComponent from './HomecareOrder.component'

const styles = theme => ({
    root: {
        flexGrow: 1,
        height: '100vh',
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
    }
});

class ContainerComponent extends Component {

    render() {
        const { classes } = this.props;
        var showView;
        if(this.props.item === "medicine"){
            showView = <MedicineOrderComponent/>
        }
        else if(this.props.item === "homecare"){
            showView = <HomecareOrderComponent/>
        }
        return (
            <div className={classes.root}>
                {showView}
            </div>
        );
    }
}


export default withStyles(styles)(ContainerComponent);