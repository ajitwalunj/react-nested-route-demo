//Icons
import MailIcon from '@mui/icons-material/Mail';
import DashboardIcon from '@mui/icons-material/Dashboard';
import StoreIcon from '@mui/icons-material/Store';

//Components
import Menu from "./views/menu1/menu";
import SubMenu from "./views/menu1/subMenu";

const Routes = [
    {
        path: '/m1',
        component: Menu,
        name: "Menu 1",
        icon: DashboardIcon,
        routes: [
            {
                path: '/m1/s1',
                name: "Menu 1 Sub Menu 1",
                component: SubMenu
            },
            {
                path: '/m1/s2',
                name: "Menu 1 Sub Menu 2",
                component: SubMenu
            },
            {
                path: '/m1/s3',
                name: "Menu 1 Sub Menu 3",
                component: SubMenu
            }
        ]
    },
    {
        path: '/m2',
        component: Menu,
        name: "Menu 2",
        icon: StoreIcon,
        routes: [
            {
                path: '/m2/s1',
                name: "Menu 2 Sub Menu 1",
                component: SubMenu
            },
            {
                path: '/m2/s2',
                name: "Menu 2 Sub Menu 2",
                component: SubMenu
            },
            {
                path: '/m2/s3',
                name: "Menu 2 Sub Menu 3",
                component: SubMenu
            }
        ]
    },
    {
        path: '/m3',
        component: Menu,
        name: "Menu 3",
        icon: MailIcon,
        routes: [
            {
                path: '/m3/s1',
                name: "Menu 3 Sub Menu 1",
                component: SubMenu
            },
            {
                path: '/m3/s2',
                name: "Menu 3 Sub Menu 2",
                component: SubMenu
            },
            {
                path: '/m3/s3',
                name: "Menu 3 Sub Menu 3",
                component: SubMenu
            }
        ]
    },
    {
        path: '/m4',
        component: Menu,
        name: "Menu 4",
        icon: MailIcon,
        routes: [
            {
                path: '/m4/s1',
                name: "Menu 4 Sub Menu 1",
                component: SubMenu
            },
            {
                path: '/m4/s2',
                name: "Menu 4 Sub Menu 2",
                component: SubMenu
            },
            {
                path: '/m4/s3',
                name: "Menu 4 Sub Menu 3",
                component: SubMenu
            }
        ]
    }
];

export default Routes;