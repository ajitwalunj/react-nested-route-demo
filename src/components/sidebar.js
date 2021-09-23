import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import { withStyles } from '@mui/styles';
import { Link, useLocation } from 'react-router-dom';
import Routes from '../route';

const styles = {
    root: {
        display: 'flex',
        flexDirection: 'row',
        width: '250px',
        height: '100%'
    },
    topHorizontalLine: {
        margin: '10px',
        borderTop: '2px solid #323538'
    },
    menuIconColumn: {
        width: '30%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#010040',
        marginLeft: '5px'
    },
    iconContainer: {
        alignItems: 'center',
        height: '50px',
        display: 'flex',
        justifyContent: 'center',
        '&:hover': {
            backgroundColor: "white",
        }
    },
    icon: { color: 'white' },
    selectStyleLine: {
        backgroundColor: '#e86f00',
        width: '4px',
        height: '50px',
        position: 'absolute',
        left: 5
    },
    menuTextItemColumn: {
        marginTop: '22x',
        width: '70%',
        display: 'flex',
        flexDirection: 'column'
    },
    menuHeading: {
        marginTop: '22px',
        alignItems: 'center',
        height: '50px',
        display: 'flex',
        justifyContent: 'left',
        paddingLeft: '10px',
        backgroundColor: 'rgba(234, 120, 34, 0.15)',
        color: '#e86f00',
        fontWeight: 'bold'
    },
    subMenuContainer: {
        display: 'flex',
        flexDirection: 'column'
    },
    subMenu: {
        alignItems: 'center',
        height: '40px',
        display: 'flex',
        justifyContent: 'left',
        paddingLeft: '10px',
        textDecoration: 'none'
    }
};

function Sidebar(props) {
    const classes = props.classes;
    const activeMenu = useLocation().pathname;
    const activeMenuRoute = Routes?.filter(route => activeMenu.includes(route?.path))[0];
    const subMenu = activeMenuRoute?.routes;
    const activeMenuName = activeMenuRoute?.name;

    return (
        <Drawer
            variant="permanent"
            open
        >
            <div className={classes.root}>
                <div className={classes.menuIconColumn}>
                    <div className={classes.topHorizontalLine} />
                    {
                        Routes.map((route, i) => (
                            <Link
                                to={route.path}
                                key={i}
                                className={classes.iconContainer}
                                style={{ backgroundColor: activeMenu.includes(route?.path) ? 'rgba(234, 120, 34, 0.15)' : 'transparent' }}
                            >
                                {activeMenu.includes(route.path) && <div className={classes.selectStyleLine} />}
                                <route.icon className={classes.icon} />
                            </Link>
                        ))
                    }
                </div>
                <div className={classes.menuTextItemColumn}>
                    <div className={classes.menuHeading}>
                        {activeMenuName}
                    </div>
                    <div className={classes.subMenuContainer}>
                        {subMenu?.map((route, i) => (
                            <Link
                                key={i}
                                to={route.path}
                                className={classes.subMenu}
                            >
                                {route.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </Drawer>
    );
};

export default withStyles(styles)(Sidebar);


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: 250,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }),
);