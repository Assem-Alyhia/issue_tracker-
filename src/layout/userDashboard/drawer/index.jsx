import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Outlet, useLocation, Link } from 'react-router-dom';

import DashboardIcon from '@mui/icons-material/Dashboard';
import BuildIcon from '@mui/icons-material/Build';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'; // إضافة رمز السهم السفلي
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState, useEffect } from 'react';
import { ExpandLess, ExpandMore} from '@mui/icons-material';
import { Collapse} from '@mui/material';
import { logout } from '../../../api/authApi/logout';
import Cookies from 'js-cookie';
import BugReportIcon from "@mui/icons-material/BugReport";  
import VisibilityIcon from "@mui/icons-material/Visibility"; 
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import { Switch } from '@mui/material';
import ColorModeSwitch from '../../../components/ColorModeSwitch';

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
    backgroundColor: '#fff',
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': { ...openedMixin(theme), backgroundColor: '#221c64', color: '#fff', ...(Cookies.get('i18next') === 'ar' ? { left: 'auto' } : { left: '0' }) },
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': { ...closedMixin(theme), backgroundColor: '#221c64', color: '#fff', ...(Cookies.get('i18next') === 'ar' ? { left: 'auto' } : { left: '0' }) },
        }),
    })
);
const menuItems = [
    { text: 'Accounts', icon: <DashboardIcon />, url: '/user/dashboard' },
    {
        text: 'IssuePages', icon: <BugReportIcon />, url: '/user/dashboard', children: [
            { text: 'DisplayIssues', icon: <VisibilityIcon />, url: '/user/dashboard/issues' },
            { text: 'DisplyCard', icon: <ViewModuleIcon />, url: '/user/dashboard/issuescard' },
            // { text: 'page3', icon: <BuildIcon />, url: '/user/dashboard/issuescard' }
        ]
    },
];

export default function MiniDrawer() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    // const [selectedItem, setSelectedItem] = React.useState(null);
    const [anchorEl, setAnchorEl] = useState(null);
    const location = useLocation();

    const hideDrawerRoutes = ['/user/dashboard/myOffers', '/some-other-route'];
    const shouldHideDrawer = hideDrawerRoutes.includes(location.pathname);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
        setExpandedItems({});
    };

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleProfileMenuClose = () => {
        setAnchorEl(null);
    };

    const [expandedItems, setExpandedItems] = useState({});
    const toggleReports = (index) => {
        setExpandedItems((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };



    const handleLogout = async () => {
        try {
            await logout();
            handleProfileMenuClose();
            window.location.href = '/login';
        } catch (error) {
            console.error("Logout Error:", error);
        }
    };


    // const [userData, setUserData] = useState({
    //     userFirstName: '',
    //     userLastName: '',
    //     userImage: '',
    // });

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const userResponse = await profile.getProfileData();
    //             const user = userResponse.data.message;
    //             console.log(user.message)
    //             setUserData({
    //                 userFirstName: user.userFirstName || '',
    //                 userLastName: user.userLastName || '',
    //                 userImage: user.userImage || '',
    //             });
    //         } catch (error) {
    //             console.error("Error fetching user data:", error);
    //         }
    //     };

    //     fetchData();
    // }, []);



    return (
        <Box sx={{
            display: 'flex',
            position: 'relative'
        }}>
            <CssBaseline />
            {!shouldHideDrawer && (
                <>
                    <AppBar position="fixed" open={open}
                        sx={{marginRight: "0", left: 'auto', right: '0'      }}>

                        <Toolbar>

                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={handleDrawerOpen}
                                edge="start"
                                sx={{
                                    backgroundColor: '#221c64',
                                     marginRight: 5, 

                                    ...(open && { display: 'none' }),
                                }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" noWrap component="div" sx={{ color: '#000' }}>
                            </Typography>

                            {/* <IconButton onClick={handleProfileMenuOpen} sx={{ marginLeft: "auto"   }}>

                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Avatar src={'/userDashboard/Profile/Profile.png'} />
                                    <Typography sx={{ marginLeft: 1, color: '#000' }}>  Aasem Al_Yhia </Typography>
                                    <ExpandMoreIcon sx={{ color: '#000', marginLeft: 1 }} />
                                
                                </Box>
                               
                            </IconButton> */}
                            <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
                            <IconButton 

                            >
                            
                            <ColorModeSwitch/>
                            </IconButton>
                             
                            </div>
                             
                          

                            <Menu
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleProfileMenuClose}
                                sx={{ ...(Cookies.get('i18next') === 'ar' ? { width: '100%' } : { width: '12rem' }) }}
                            >
                                <MenuItem onClick={handleProfileMenuClose} sx={{ width: '12rem', opacity: '.7' }}>
                                    <Link to="/user/dashboard/profile" style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <AccountCircleIcon sx={{ mr: 1, fontSize: '1.2rem' }} />
                                        {'Profile'}
                                    </Link>
                                </MenuItem>
                                <hr style={{ width: '85%', margin: 'auto', opacity: '.6', border: '1.2px solid #ccc' }} />
                                <MenuItem sx={{ width: '12rem', opacity: '.7' }}>

                                    <div className="headerFaq-language" style={{ marginLeft: "0" , width: "75%" }}>
                                        <div className="headerFaq-dropdown" >
                                            <select
                                                className="headerFaq-dropdownButton"
                                                style={{ color:"#000" , background:'none' , width:'100%'}}
                                            >
                                                <option value="en" style={{ color:"#000"  }}>English</option>
                                                <option value="ar" style={{ color:"#000" }}>العربية</option>
                                            </select>
                                        </div>
                                    </div>
                                    
                                </MenuItem>
                                <hr style={{ width: '85%', margin: 'auto', opacity: '.6', border: '1.2px solid #ccc' }} />

                                <MenuItem onClick={handleLogout} sx={{ width: '12rem', opacity: '.7' }}>
                                    <ExitToAppIcon sx={{ mr: 1, fontSize: '1.2rem' }} />
                                    {'Logout'}
                                </MenuItem>
                            </Menu>

                        </Toolbar>

                    </AppBar>

                    <Drawer variant="permanent" open={open} sx={{ position: 'relative !important' }}>
                    <DrawerHeader>
                    <IconButton 
    onClick={handleProfileMenuOpen} 
     sx={{ 
      justifyContent: "flex-start", 
        padding: 2 
   }}
>
    <Box 
        sx={{ 
            display: 'flex', 
            flexDirection: "column", 
            alignItems: 'center', 
            gap: 1 ,
            marginTop:1,
            marginRight:1
        }}
    >
        <Avatar 
            src={'/images/favicon.png'}  
            sx={{ 
                width: 50, 
                height: 50, 
                border: "3px solid #fff", 
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)"
            }} 
        />
         <Typography sx={{ color: '#fff', fontSize: 16, fontWeight: "bold" }}>Issues Tracker</Typography>
         {/* <ExpandMoreIcon sx={{ color: '#fff' }} />  */}
    </Box>
</IconButton>
    <IconButton onClick={handleDrawerClose} sx={{ color: '#fff' }}>
        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
    </IconButton>
                        </DrawerHeader>
                        <Divider />
                        <List>
                            {menuItems.map((item, index) => (
                                <React.Fragment key={index}>
                                    {item.children ? (
                                        <>
                                            <ListItemButton onClick={() => toggleReports(index)} sx={{ width: '85%', margin: 'auto ' }}>
                                                <ListItemIcon sx={{ color: '#fff', minWidth: '3rem', '& svg': { fontSize: '1.2rem' } }}>
                                                    {item.icon}
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={item.text}
                                                    primaryTypographyProps={{
                                                        fontSize: '0.85rem',
                                                        fontWeight: '700',
                                                        minWidth: "none",
                                                    }}
                                                />
                                                {expandedItems[index] ? <ExpandLess /> : <ExpandMore />}
                                            </ListItemButton>
                                            <Collapse in={expandedItems[index]} timeout="auto" unmountOnExit>
                                                <List component="div" disablePadding>
                                                    {item.children.map((child, childIndex) => (
                                                        <ListItemButton
                                                            key={childIndex}
                                                            component={Link}
                                                            to={child.url}
                                                            sx={{ pl: 5, textAlign: 'center' }}
                                                        >
                                                            <ListItemIcon sx={{ color: '#fff', minWidth: '1rem', '& svg': { fontSize: '1rem', marginRight: '.5rem' } }}>
                                                                {child.icon}
                                                            </ListItemIcon>
                                                            <ListItemText
                                                                primary={child.text} // هنا يجب أن يكون child.text بدلاً من item.text
                                                                primaryTypographyProps={{
                                                                    fontSize: '0.75rem',
                                                                    width: 'max-content',
                                                                    fontWeight: '700',                                                                    
                                                                }}
                                                            />
                                                        </ListItemButton>
                                                    ))}
                                                </List>
                                            </Collapse>
                                        </>
                                    ) : (
                                        <ListItem disablePadding sx={{ display: 'block' }}>
                                            <Link
                                                to={item.url}
                                                style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}
                                            >
                                                <ListItemButton
                                                    sx={{
                                                        width: '90%',
                                                        margin: 'auto',
                                                        minHeight: 30,
                                                        justifyContent: open ? 'initial' : 'center',
                                                        px: 2.5,
                                                        borderRadius: '8px',
                                                        backgroundColor: expandedItems[index] ? '#635bff' : 'transparent',
                                                        '&:hover': {
                                                            backgroundColor: '#635bff',
                                                        },
                                                    }}
                                                >
                                                    <ListItemIcon
                                                        sx={{
                                                            minWidth: 0,
                                                            justifyContent: 'center',
                                                            color: '#fff',
                                                            mr: open ? 3 : 'auto',
                                                            '& svg': { fontSize: '1.2rem' },
                                                        }}
                                                    >
                                                        {item.icon}
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primary={item.text}
                                                        primaryTypographyProps={{
                                                            fontSize: '0.85rem',
                                                            fontWeight: '700',
                                                        }}
                                                        sx={{
                                                            opacity: open ? 1 : 0,
                                                            
                                                        }}
                                                    />
                                                </ListItemButton>
                                            </Link>
                                        </ListItem>
                                    )}
                                </React.Fragment>
                            ))}
                        </List>
                    </Drawer>
                </>
            )}
            <Box component="main" sx={{ flexGrow: 1 }}>
                {!shouldHideDrawer && <DrawerHeader />}
                <Outlet />
            </Box>
        </Box>
    );
}
