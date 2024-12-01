'use client';

import React from 'react';
import {Box} from "@mui/material";
import Typography from "@mui/material/Typography";
import { useTranslation } from 'react-i18next';

const NextStreamTimer = () => {
    const { t } = useTranslation('nextStreamTimer');

    return (
        <div style={{
            marginRight: '1%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
        }}>
            <Box sx={{
                height: {xs:'8%',md:'5%'},
                width: {xs:'90%',md:'50%'},
                marginTop: '1dvh',
                marginLeft: '2dvw',
            }}>
                <Typography sx={{ color: '#ffde59' }}>
                    {t('schedule')}
                </Typography>
            </Box>

            <Box
                sx={{
                    height: {xs:'20%',md:'20%'},
                    width: '90%',
                    marginTop: '1dvh',
                    marginLeft: '2dvw',
                    marginBottom: '2dvh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography
                    sx={{
                        color: '#d9d9d8',
                        fontWeight: 'bold',
                        width: '100%',
                        height: '100%',
                        textAlign: 'flex-start',
                        fontSize: 'calc(1.5rem + 1vw)',
                        lineHeight: 1,
                    }}
                >
                    {t('saturday')}
                </Typography>
            </Box>

            <Box sx={{
                height: {xs:'10%', md:'7%'},
                width: '80%',
                marginLeft: '2dvw',
                marginBottom: '1dvh',
            }}>
                <Typography
                    sx={{
                        color: '#d9d9d8',
                        width: '100%',
                        height: '100%',
                        textAlign: 'flex-start',
                        fontSize: {xs:'1rem' ,md:'calc(0.5rem + 1vw)'},
                        lineHeight: 1,
                    }}
                >
                    10:00 - 11:30
                </Typography>
            </Box>

            <Box
                sx={{
                    height: {md:'20%', lg:'25%'},
                    width: '90%',
                    marginTop: '1dvh',
                    marginLeft: '2dvw',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography
                    sx={{
                        color: '#d9d9d8',
                        fontWeight: 'bold',
                        width: '100%',
                        height: '100%',
                        textAlign: 'flex-start',
                        marginBottom: {xs:'2dvh'},
                        fontSize: {xs:'1.5rem',md:'calc(1.2rem + 1vw)'},
                        lineHeight: 1,
                    }}
                >
                    {t('firstSunday')}
                </Typography>
            </Box>

            <Box sx={{
                height: {xs:'10%', md:'7%'},
                width: '80%',
                marginLeft: '2dvw',
                marginBottom: '1dvh',
            }}>
                <Typography
                    sx={{
                        color: '#d9d9d8',
                        width: '100%',
                        height: '100%',
                        textAlign: 'flex-start',
                        fontSize: {xs:'1rem' ,md:'calc(0.5rem + 1vw)'},
                        lineHeight: 1,
                    }}
                >
                    19:00 - 20:30
                </Typography>
            </Box>
        </div>
    );
};

export default NextStreamTimer;
