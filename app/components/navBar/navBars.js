'use client';

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';


const pages = ['home', 'about', 'donate', 'media', 'album', 'event'];

const NavBars = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElLang, setAnchorElLang] = React.useState(null);
    const [anchorElAbout, setAnchorElAbout] = React.useState(null); // Anchor for About submenu
    const [mobileSubMenuOpen, setMobileSubMenuOpen] = React.useState(false);


    const { t, i18n } = useTranslation('navBar');

    // Handle open/close for the main menu
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    // Handle open/close for About submenu
    const handleOpenAboutMenu = (event) => {
        setAnchorElAbout(event.currentTarget);
    };

    const handleCloseAboutMenu = () => {
        setAnchorElAbout(null);
    };

    /* Handle open/close for Language dropdown
    const handleOpenLangMenu = (event) => {
        setAnchorElLang(event.currentTarget);
    };

    const handleCloseLangMenu = (lang) => {
        if (lang) {
            i18n.changeLanguage(lang);
            localStorage.setItem('language', lang);
        }
        setAnchorElLang(null);
    };*/

    return (
        <AppBar position="static" sx={{ backgroundColor: '#2c2d2e', width: '100%', mx: 'auto' }}>
            <Toolbar sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                {/* Mobile Menu Icon */}
                <Box sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 1, justifyContent: 'flex-start' }}>
                    <IconButton
                        size="large"
                        aria-label="menu"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        BackdropProps={{
                            style: { display: 'none' }, // Prevent the backdrop from being rendered
                        }}
                    >
                        {pages.map((page) =>
                            page === 'about' ? (
                                <>
                                    {/* Main "About" MenuItem */}
                                    <MenuItem
                                        onClick={() => setMobileSubMenuOpen((prev) => !prev)} // Toggle submenu
                                    >
                                        <Typography sx={{ textAlign: 'center' }}>{t('about')}</Typography>
                                    </MenuItem>

                                    {/* Submenu Items */}
                                    {mobileSubMenuOpen && (
                                        <Box sx={{ pl: 4 }}> {/* Indented for clarity */}
                                            <MenuItem onClick={handleCloseNavMenu}>
                                                <Link href="/about" passHref>
                                                    <Typography sx={{ textAlign: 'center' }}>{t('bio')}</Typography>
                                                </Link>
                                            </MenuItem>
                                            <MenuItem onClick={handleCloseNavMenu}>
                                                <Link href="/testimonials" passHref>
                                                    <Typography sx={{ textAlign: 'center' }}>{t('testimonials')}</Typography>
                                                </Link>
                                            </MenuItem>
                                        </Box>
                                    )}
                                </>
                            ) : (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Link href={page === 'home' ? '/' : `/${page.toLowerCase()}`} passHref>
                                        <Typography sx={{ textAlign: 'center' }}>{t(page)}</Typography>
                                    </Link>
                                </MenuItem>
                            )
                        )}
            </Menu>
                </Box>

                {/* Desktop Menu */}
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', width: '100%' }}>
                    {pages.map((page) => (
                        <Box key={page} sx={{ position: 'relative' }}>
                            <Link href={page === 'home' ? '/' : `/${page.toLowerCase()}`} passHref legacyBehavior>
                                <Button
                                    component="a"
                                    onClick={handleCloseNavMenu}
                                    onMouseEnter={page === 'about' ? handleOpenAboutMenu : undefined}
                                    sx={{
                                        my: 2,
                                        color: 'white',
                                        display: 'block',
                                        mx: 1,
                                        '&:hover': { backgroundColor: '#3b3c3d' },
                                    }}
                                >
                                    {t(page)}
                                </Button>
                            </Link>

                            {/* Submenu for About */}
                            {page === 'about' && (
                                <Menu
                                    id="about-submenu"
                                    anchorEl={anchorElAbout}
                                    open={Boolean(anchorElAbout)}
                                    onClose={handleCloseAboutMenu}
                                    MenuListProps={{ onMouseLeave: handleCloseAboutMenu }}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    sx={{
                                        '& .MuiMenuItem-root': {
                                            padding: '10px 20px',
                                        },
                                    }}
                                >
                                    <MenuItem onClick={handleCloseAboutMenu}>
                                        <Link href="/about" passHref>
                                            <Typography>{t('bio')}</Typography>
                                        </Link>
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseAboutMenu}>
                                        <Link href="/testimonials" passHref>
                                            <Typography>{t('testimonials')}</Typography>
                                        </Link>
                                    </MenuItem>
                                </Menu>
                            )}
                        </Box>
                    ))}
                </Box>

                {/* Language Dropdown - Pastor Faheem no longer wants this functionality, but I already submitted the requirement report. Hence why I only comment out this.
                <Box>
                    <Button
                        onClick={handleOpenLangMenu}
                        sx={{ color: 'white', '&:hover': { backgroundColor: '#3b3c3d' } }}>
                        {t('language')}
                    </Button>
                    <Menu
                        id="lang-menu"
                        anchorEl={anchorElLang}
                        open={Boolean(anchorElLang)}
                        onClose={handleCloseLangMenu}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }} >
                        <MenuItem onClick={() => handleCloseLangMenu('en')}>English</MenuItem>
                        <MenuItem onClick={() => handleCloseLangMenu('fa')}>فارسی</MenuItem>
                    </Menu>
                </Box>*/}
            </Toolbar>
        </AppBar>
    );
};

export default NavBars;









