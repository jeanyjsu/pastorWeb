"use client";

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {Box} from '@mui/material';

// Style Menu
const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color: '#374151',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity,
                ),
            },
        },
    },
}));

// Dropdown list
export default function Dropdown({ selectedCountry, setSelectedCountry }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const { t, i18n } = useTranslation('dropdown');

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (country) => {
        if (country) {
            console.log("Selected country:", selectedCountry);
            setSelectedCountry(country);
        }
        setAnchorEl(null);
    };

    const countries = [
        { key: "Germany", label: t("Germany") },
        { key: "Indonesia", label: t("Indonesia") },
        { key: "Turkey", label: t("Turkey") },
    ];

    return (
        <Box sx={{
            height: '10dvh',
            width: {xs:'100%',md:'20dvw'},
            marginTop: '5dvh',
            marginRight: '2dvw',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>

            <Button
                id="demo-customized-button"
                aria-controls={open ? 'demo-customized-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                variant="contained"
                disableElevation
                onClick={handleClick}
                sx={{
                    backgroundColor: '#ffde59',
                    fontWeight: 'bold',
                    fontSize: {xs:'1.8 rem', sm:'2rem', md:'calc(1.5dvw + 3dvh)'},
                    color: '#2c2d2e',
                    '&:hover': {
                        backgroundColor: '#f96846',
                        color: '#ffde59',
                    },
                    width: {xs:'90%', md:'100%'},
                    height: '100%',
                }}
            >
                {t(selectedCountry)}
            </Button>
            <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={() => handleClose()}
            >
                {countries.map((country) => (
                    <MenuItem
                        key={country.key}
                        onClick={() => handleClose(country.key)}
                        disableRipple
                    >
                        {country.label}
                    </MenuItem>
                ))}
            </StyledMenu>
        </Box>
    );
}

