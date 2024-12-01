import React from 'react';
import { Box } from '@mui/material';
import Buttons from "@/app/donate/componentssssss/buttons";

const Quotes = () => {
    return (
        <Box
            sx={{
                width: '90%',
                height: 'auto',
                margin: 'auto',
                padding: '5dvh 2%',
                backgroundColor: '#d9d9d9',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
            }}
        >
            {/* Quote */}
            <Box
                sx={{
                    width: '90%',
                    textAlign: 'center',
                    marginTop: '2vh',
                    marginBottom: { xs: '2dvh', md: '3dvh' },
                }}
            >
                <p style={{ color: '#737373', fontSize: '1rem', margin: 0 }}>
                    "Remember this—a farmer who plants only a few seeds will get a small crop. But the one who plants
                    generously will get a generous crop. You must each decide in your heart how much to give. And don’t
                    give reluctantly or in response to pressure. For God loves a person who gives cheerfully. And God
                    will generously provide all you need. Then you will always have everything you need and plenty left over
                    to share with others."
                </p>
                <p style={{ color: '#737373', fontSize: '1.2rem', marginBottom: '2dvh' }}>
                    - 2 Corinthians 9:6-8
                </p>
            </Box>

            {/* "Generosity" */}
            <Box
                sx={{
                    width: '90%',
                    textAlign: 'center',
                    marginBottom: {xs:'2dvh', sm:'3dvh',md:'5dvh'},
                }}
            >
                <p style={{ color: '#737373', fontSize: '1rem' }}>
                    One of the great ways you can help our ministry is through your generosity. We are currently seeking
                    funds to expand our team and finance our work. If you are interested in donating to our ministry, please
                    do so through one of the methods below.
                </p>
            </Box>

            {/* Button */}
            <Box
                sx={{
                    width: { xs: '100%', sm: '100%' },
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: { xs: '2vh', md: '3vh' },
                }}
            >
                <Buttons />
            </Box>
        </Box>
    );
};

export default Quotes;

