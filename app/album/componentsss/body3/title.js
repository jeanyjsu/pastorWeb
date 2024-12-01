import React from 'react';
import Typography from "@mui/material/Typography";
import { Box } from '@mui/material';

const Ttitle = () => {
    return (
        <Box
            sx={{
                marginTop: '1dvh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Typography
                sx={{
                    textTransform: 'uppercase',
                    color: '#f96846',
                    fontSize: {xs:'1.3rem', sm:'2rem',md:'calc(2.5rem * 1.5)'},
                    textAlign: 'center',
                    width: '100%',
                    height: '100%',
                }}
            >
                Personal Testimony and Ministry Calling
            </Typography>
        </Box>
    );
}

export default Ttitle;
