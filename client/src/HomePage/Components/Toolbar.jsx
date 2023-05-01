import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AppBar from "@mui/material/AppBar";
import { func } from "prop-types";
import UFCGloves from '../../Images/UFC-gloves.jpeg';
import { Link } from 'react-router-dom';
import './Toolbar.css';

const styles = {
    AppBar : {
        position: 'fixed',
    },
    Container: {
        maxWidth: 'xl',
    },
    Link : {
        textDecoration: 'none',
    }
}

const ToolBar = ({ setPage = () => {} }) => {
    const pages = ['Latest News', 'UFC', 'Boxing', 'Kickboxing', 'BJJ'];
    const settings = ['Profile', 'Logout'];

    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = (e,d) => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const getUrl = (page) => {
        if(page === 'Latest News') return '/news';
    };

    return (
        <div className="app-navbar-container">
            <a className="page-logo" href="/">
                <h1 className="logo-wrapper">LOGO</h1>
            </a>
            <nav className="category-list">
                <ol className="molecule nav-list">
                    <li className="list-item">
                        <a href="/ufcnews">UFC</a>
                    </li>
                    <li className="list-item">
                        <a href="/ufcnews">MUAY THAI</a>
                    </li>
                    <li className="list-item">
                        <a href="/ufcnews">BOXING</a>
                    </li>
                    <li className="list-item">
                        <a href="/ufcnews">BJJ</a>
                    </li>
                    <li className="list-item">
                        <a href="/ufcnews">WRESTLING</a>
                    </li>
                </ol>
            </nav>
        </div>
    //     <AppBar styles={styles.AppBar} color='error'>
    //     <Container styles={styles.Container}>
    //         <Toolbar disableGutters>
    //             <Typography
    //                 variant="h6"
    //                 noWrap
    //                 component="a"
    //                 href="/"
    //                 sx={{
    //                     mr: 2,
    //                     display: { xs: 'none', md: 'flex' },
    //                     fontFamily: 'monospace',
    //                     fontWeight: 700,
    //                     letterSpacing: '.3rem',
    //                     color: 'inherit',
    //                     textDecoration: 'none',
    //                 }}
    //             >
    //                 UFC
    //             </Typography>
    //
    //             <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
    //                 <IconButton
    //                     size="large"
    //                     aria-label="account of current user"
    //                     aria-controls="menu-appbar"
    //                     aria-haspopup="true"
    //                     onClick={handleOpenNavMenu}
    //                     color="inherit"
    //                 >
    //                     <MenuIcon />
    //                 </IconButton>
    //                 <Menu
    //                     id="menu-appbar"
    //                     anchorEl={anchorElNav}
    //                     anchorOrigin={{
    //                         vertical: 'bottom',
    //                         horizontal: 'left',
    //                     }}
    //                     keepMounted
    //                     transformOrigin={{
    //                         vertical: 'top',
    //                         horizontal: 'left',
    //                     }}
    //                     open={Boolean(anchorElNav)}
    //                     onClose={handleCloseNavMenu}
    //                     sx={{
    //                         display: { xs: 'block', md: 'none' },
    //                     }}
    //                 >
    //                     {pages.map((page) => (
    //                         <MenuItem key={page} onClick={handleCloseNavMenu}>
    //                             <Typography textAlign="center">{page}</Typography>
    //                         </MenuItem>
    //                     ))}
    //                 </Menu>
    //             </Box>
    //             <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
    //                 {pages.map((page) => (
    //                     <Button
    //                         key={page}
    //                         onClick={handleCloseNavMenu}
    //                         sx={{ my: 2, color: 'white', display: 'block' }}
    //                     >
    //                         {<Link to={getUrl(page)} style={{ textDecoration: 'none', color: 'white' }}>{page}</Link>}
    //                     </Button>
    //                 ))}
    //             </Box>
    //
    //             <Box sx={{ flexGrow: 0 }}>
    //                 <Tooltip title="Open settings">
    //                     <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
    //                         <Avatar alt="Remy Sharp" src={UFCGloves} />
    //                     </IconButton>
    //                 </Tooltip>
    //                 <Menu
    //                     sx={{ mt: '45px' }}
    //                     id="menu-appbar"
    //                     anchorEl={anchorElUser}
    //                     anchorOrigin={{
    //                         vertical: 'top',
    //                         horizontal: 'right',
    //                     }}
    //                     keepMounted
    //                     transformOrigin={{
    //                         vertical: 'top',
    //                         horizontal: 'right',
    //                     }}
    //                     open={Boolean(anchorElUser)}
    //                     onClose={handleCloseUserMenu}
    //                 >
    //                     {settings.map((setting) => (
    //                         <MenuItem key={setting} onClick={handleCloseUserMenu}>
    //                             <Typography textAlign="center">{setting}</Typography>
    //                         </MenuItem>
    //                     ))}
    //                 </Menu>
    //             </Box>
    //         </Toolbar>
    //     </Container>
    // </AppBar>
    )
};

ToolBar.propTypes = {
    setPage: func,
};

export default ToolBar;