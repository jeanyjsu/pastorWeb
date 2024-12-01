import React from 'react';
import Left from "@/app/about/componentss/body2/left";
import Right from "@/app/about/componentss/body2/right";
import Bottom from "@/app/about/componentss/body2/bottom";
import { Box } from '@mui/material';

const BodyAb = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                height: '150dvh',
                alignItems: 'center',
                boxSizing: 'border-box',
                backgroundColor: '#2c2d2e',
                margin: 0,
                padding: 0,
            }}
        >
            {/* Top left right */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: {
                        xs: 'column', // Stack Right above Left for small screens
                        sm: 'column',
                        md: 'row-reverse', // Place side by side for medium screens and larger
                        lg: 'row-reverse',
                        xl: 'row-reverse',
                    },
                    width: '100%',
                    height: '60%',
                    justifyContent: {
                        xs: 'center',
                        sm: 'center',
                        md: 'space-between',
                        lg: 'space-between',
                        xl: 'space-between',
                    },
                    alignItems: {
                        xs: 'center',
                        sm: 'center',
                        md: 'flex-start',
                        lg: 'flex-start',
                        xl: 'flex-start',
                    },
                }}
            >
                <Right />
                <Left />
            </Box>

            {/* Bottom left right */}
            <Box
                sx={{
                    width: '100%',
                    height: '40%',
                    display: 'flex',
                    justifyContent: {
                        xs: 'center',
                        sm: 'center',
                        md: 'space-between',
                    },
                    alignItems: 'center',
                    flexDirection: {
                        xs: 'column',
                        sm: 'column',
                        md: 'row',
                    },
                    marginTop: '0',
                }}
            >
                <Bottom />
            </Box>
        </Box>
    );
};

export default BodyAb;


