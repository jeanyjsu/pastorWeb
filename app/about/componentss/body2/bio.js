'use client';

import React from 'react';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useTranslation } from 'react-i18next';


const Bio = () => {
    const { t } = useTranslation('bio');

    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
            }}
        >
            {/* Name */}
            <Box
                sx={{
                    width: 'fit-content',
                    position: 'relative',
                    marginTop: {xs: '1rem', sm: '1rem', md: '2rem'},
                    textAlign: {xs: 'center', sm: 'center', md: 'left'},
                }}>
                <Typography
                    sx={{
                        textTransform: 'uppercase',
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                        color: '#FFFFFF',
                        position: 'relative',
                        zIndex: 1,
                        display: 'inline-block',
                    }}>
                    {t('name')}
                </Typography>

                {/* Orange underline effect */}
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: '5px',
                        left: 0,
                        width: '100%',
                        height: '8px',
                        backgroundColor: '#f96846',
                        borderRadius: '4px',
                        zIndex: 0,
                    }}
                />
            </Box>

            {/* Biography */}
            <div style={{
                marginTop: {sx:'0dvw', sm:'0dvw',md:'1rem', },
                marginLeft: {sx:'0dvw', sm:'0dvw',md:'2rem', },
                width: '95%',
                height: '81%',
                position: 'relative',
                overflowY: 'auto',
            }}>
                {['bio1', 'bio2', 'bio3', 'bio4', 'bio5'].map((key, index) => (
                    <Typography
                        key={index}
                        sx={{
                            fontSize: '1rem',
                            color: '#FFFFFF',
                            marginTop: index === 0 ? '0' : '1rem',
                            lineHeight: '1.6',
                            extAlign: {
                                xs: 'center',
                                sm: 'center',
                                md: 'left',
                            },
                        }}>
                        {t(key)}
                    </Typography>
                ))}

                {/* Two logos */}
                <Box sx={{ display: 'flex', gap: 2, marginTop: '1rem' }}>
                    <a href="https://www.wonderfulcounselorministries.com/" target="_blank" rel="noopener noreferrer">
                        <Box
                            component="img"
                            src="/logo.png"
                            alt="Image 1"
                            sx={{
                                width: { xs: '22dvw', sm: '22dvw', md: '10dvw' },
                                height: 'auto',
                                borderRadius: '8px',
                            }}
                        />
                    </a>
                    <a href="https://rside.ca/" target="_blank" rel="noopener noreferrer">
                        <Box
                            component="img"
                            src="/logoChurch.png"
                            alt="Image 2"
                            sx={{
                                width: { xs: '40dvw', sm: '32dvw', md: '20dvw' },
                                height: 'auto',
                                borderRadius: '8px',
                            }}
                        />
                    </a>
                </Box>
            </div>
        </div>
    );
};

export default Bio;



