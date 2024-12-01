import React from 'react';
import { Box } from '@mui/material';

const Left = () => {
    return (
        <Box
            sx={{
                width: '100%',
                height: '100%',
                backgroundImage: `url('./faheemProfile.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                marginLeft: { xs: '0', sm: '0', md: '2dvw' },
            }}
        />
    );
};

export default Left;
