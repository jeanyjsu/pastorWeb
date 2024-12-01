import React from 'react';
import Box from '@mui/material/Box';

const BannerImg = () => {
    return (
        <Box
            sx={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '90%',
                margin: 'auto',
            }}
        >
            {/* Image */}
            <img
                src="./pastorf.png"
                alt="Pastor Instructions"
                style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'contain',
                }}
            />

            {/* Overlay */}
            <Box
                sx={{
                    width:'90%',
                    height:'20%',
                    position: 'absolute',
                    bottom: '10%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    color: '#ffde59',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)',
                    fontSize: {xs:'0.7rem', sm:'2.0rem',md:'2.5rem', lg:'3rem', xl:'4rem'},
                    textTransform: 'uppercase',
                }}
            >
                Partner with us through giving
            </Box>
        </Box>
    );
};

export default BannerImg;


