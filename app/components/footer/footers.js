"use client";

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import KeyIcon from '@mui/icons-material/Key';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';

const Footers = ({ setIsLoggedIn }) => {
    const [open, setOpen] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    //To open dialog
    const handleClickOpen = () => {
        setOpen(true);
    };

    //Close and reset
    const handleClose = () => {
        setOpen(false);
        setUsername('');
        setPassword('');
        setError('');
        setSuccess(false);
    };

    //Once submitted to match with database
    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/admin/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (response.ok) {
                setSuccess(true);
                setError('');
                console.log('Login successful! Setting isLoggedIn to true.');
                setIsLoggedIn(true);
            } else {
                setError(data.message || 'Login failed');
                setSuccess(false);
            }
        } catch (err) {
            setError('An error occurred. Please try again.');
            setSuccess(false);
        }
    };

    return (
        <Box
            sx={{
                width: '100%',
                margin: 0,
                padding: '1em 0',
                color: 'white',
                backgroundColor: '#3f4359',
                textAlign: 'center',
                paddingLeft: '1dvw',
                paddingRight: '1dvw',
            }}
        >
            <Grid container alignItems="center" justifyContent="space-between">
                {/* Left side icons */}
                <Grid item>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <a href="https://www.youtube.com/@VancouverPersianChur/videos" target="_blank" rel="noopener noreferrer">
                            <YouTubeIcon />
                        </a>
                        <a href="https://www.instagram.com/wonderful.counsellor/" target="_blank" rel="noopener noreferrer">
                            <InstagramIcon />
                        </a>
                        <a href="https://www.facebook.com/Onlie.Vancouver.persian.Church" target="_blank" rel="noopener noreferrer">
                            <FacebookIcon />
                        </a>
                        <a href="https://telegram.im/@wonderfulcounsellor?lang=ru" target="_blank" rel="noopener noreferrer">
                            <TelegramIcon />
                        </a>
                        <a href="mailto:faheemmoini@gmail.com">
                            <EmailIcon />
                        </a>
                        <a href="tel:+16045610142">
                            <PhoneAndroidIcon />
                        </a>
                    </Box>
                </Grid>

                {/* Right side icon with dialog */}
                <Grid item>
                    <KeyIcon onClick={handleClickOpen} sx={{ cursor: 'pointer' }} />
                </Grid>
            </Grid>

            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle
                    id="responsive-dialog-title"
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        p: 2,
                    }}
                >
                    Login
                    <CloseIcon
                        onClick={handleClose}
                        sx={{
                            cursor: 'pointer',
                            color: 'gray',
                            '&:hover': { color: 'black' },
                        }}
                    />
                </DialogTitle>

                <DialogContent>
                    {success && <p style={{ color: 'green', fontWeight: 'bold' }}>Login successful!</p>}
                    {error && <p style={{ color: 'red', fontWeight: 'bold' }}>{error}</p>}
                    <TextField
                        autoFocus
                        margin="dense"
                        id="username"
                        label="Username"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <TextField
                        margin="dense"
                        id="password"
                        label="Password"
                        type="password"
                        fullWidth
                        variant="outlined"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button
                        onClick={async () => {
                            await handleSubmit();
                            if (success) handleClose();
                        }}
                    >
                        Submit
                    </Button>
                </DialogActions>

            </Dialog>
        </Box>
    );
};

export default Footers;





