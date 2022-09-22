import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SearchIcon from '@mui/icons-material/Search';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PersonIcon from '@mui/icons-material/Person';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import Collapse from '@mui/material/Collapse';
import QuizIcon from '@mui/icons-material/Quiz';
import '../styles/navbar.css';
import { Link } from 'react-router-dom';


const drawerWidth = 240;

export const Navbar = () => {
    const [open, setOpen] = React.useState(true);
    const handleClick = () => {
        setOpen(!open);
      };
    return <div>
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <div style={{ position: 'relative', marginTop: '40px' }}>
                    <SearchIcon className='navbar-searchIcon' />
                    <form className='navbar-form'>
                        {/* <img className='navbar-searchIcon' src={SearchIcon} alt='' /> */}
                        <input type='text' placeholder='Search' />
                    </form>
                </div>
                <h2 className='navbar-heading'>Library</h2>
                <Toolbar />
                <Divider />
                <List>
                    <Link to='/' className='link-decoration'>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <DashboardIcon className='navbar-icon d-icon1' />
                                </ListItemIcon>
                                <ListItemText className='navbar-icon-text' primary='Dashboard' />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                    <Link to='/books' className='link-decoration'>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <MenuBookIcon className='navbar-icon d-icon2' />
                                </ListItemIcon>
                                <ListItemText className='navbar-icon-text' primary='Books' />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                    <Link to="/author" className='link-decoration'>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <PersonIcon className='navbar-icon d-icon3' />
                                </ListItemIcon>
                                <ListItemText className='navbar-icon-text' primary='Author' />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                    <Link to="/member" className='link-decoration'>
                    
                    <ListItemButton onClick={handleClick}>
                        <ListItemIcon>
                        <PersonIcon className='navbar-icon d-icon3' />
                        </ListItemIcon>
                        <ListItemText primary="Member" />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>

                    <Link to="/activemember" className='link-decoration'>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                            <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary="Active member" />
                            
                        </ListItemButton>
                        </List>
                    </Collapse>

                    <Link to="/addmember" className='link-decoration'>

                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                            <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary="Add Member" />
                            
                        </ListItemButton>
                        </List>
                    </Collapse>

                    <Link to="/memberlist" className='link-decoration'>

                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                            <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary="Member List" />
                            
                        </ListItemButton>
                        </List>
                    </Collapse>
                       
                    <Link to="/expiredmember" className='link-decoration'>
                        
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                            <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary="Expired Membership" />
                            
                        </ListItemButton>
                        </List>
                    </Collapse>

                    </Link>
                   </Link>
                   </Link>

                    </Link>
                    <Link to="/category" className='link-decoration'>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TrackChangesIcon className='navbar-icon d-icon4' />
                                </ListItemIcon>
                                <ListItemText className='navbar-icon-text' primary='Category' />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                    <Link to='/issueBook' className='link-decoration'>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <QuizIcon className='navbar-icon d-icon5' />
                                </ListItemIcon>
                                <ListItemText className='navbar-icon-text' primary='Issue Books' />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                    <Link to='/demo' className='link-decoration'>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <QuizIcon className='navbar-icon d-icon5' />
                                </ListItemIcon>
                                <ListItemText className='navbar-icon-text' primary='Demo' />
                            </ListItemButton>
                        </ListItem>
                    </Link>

                    <Link to='/genre' className='link-decoration'>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <QuizIcon className='navbar-icon d-icon5' />
                                </ListItemIcon>
                                <ListItemText className='navbar-icon-text' primary='Genre' />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                    </Link>

                </List>
               
            </Drawer>

        </Box>
        {/* <Category/> */}
    </div>
}