import React from 'react';
import Typography from "@mui/material/Typography";
import { Box } from '@mui/material';

const Paragraph1 = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: {
                    xs: 'column', // Stack vertically for xs and sm
                    sm: 'column',
                    md: 'row',    // Keep items side by side for md and larger
                },
                justifyContent: 'space-between',
                alignItems: {
                    xs: 'center',
                    sm: 'center',
                    md: 'flex-start',
                    lg:'flex-start',
                },
                width: '90%',
                marginTop: '2dvh',
                padding: '2dvh',
                boxSizing: 'border-box',
            }}
        >

            {/* Paragraph */}
            <Box
                sx={{
                    width: { xs: '100%', sm: '100%', md: '40%' },
                    textAlign: { xs: 'center', sm: 'center', md: 'left' },
                }}
            >
                <Typography
                    variant="body1"
                    sx={{
                        color: 'black',
                        fontSize: 'calc(1rem * 1.5)',
                    }}
                >
                    I was born and raised in a Muslim family in Iran. At the age of 13, I left home, and by 17, I had fled the country, seeking refuge in Pakistan. It was there, at the age of 20, that I encountered Jesus Christ through the ministry of the Operation Mobilization (OM) team. Accepting Jesus as my Lord and Savior marked the beginning of a profound transformation in my life, one that continues to shape and inspire me to this day.
                </Typography>
            </Box>

            {/* Image */}
            <Box
                sx={{
                    width: { xs: '100%', sm: '100%', md: '50%' },
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: { xs: '2dvh', sm: '2dvh', md: '25dvh', lg:'10dvh', xl:'1dvh' },
                }}
            >
                <img
                    src="./pastoryt.png"
                    alt="Example"
                    style={{
                        width: '100%',
                        height: 'auto',
                        objectFit: 'contain',
                    }}
                />
            </Box>
        </Box>
    );
};

export default Paragraph1;

