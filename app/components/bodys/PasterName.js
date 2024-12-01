'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { useTranslation } from 'react-i18next';

const PasterName = () => {
    const { t } = useTranslation('name');

    return (
        <Link
            href="/about"
            underline="none"
            sx={{
                position: 'absolute',
                right: '0',
                bottom: '2%',
                display: 'block',
                width: '40dvw',
                height: '15dvh',
            }}
        >
            <Box
                sx={{
                    height: '100%',
                    width: '100%',
                    borderRadius: '50% 0 0 50%',
                    backgroundColor: '#737373',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'transform 0.3s ease',
                    transformOrigin: 'right',
                    '&:hover': {
                        transform: 'scaleX(1.05)',
                        backgroundColor: '#ffde59',
                    },
                    cursor: 'pointer',
                }}
            >
                <Typography
                    sx={{
                        color: '#FFFFFF',
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                        textAlign: 'center'
                    }}
                >
                    {t('name')}
                </Typography>
            </Box>
        </Link>
    );
}

export default PasterName;




