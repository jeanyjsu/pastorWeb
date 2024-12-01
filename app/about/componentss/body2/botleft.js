'use client';

import React from 'react';
import Typography from "@mui/material/Typography";
import { Box } from '@mui/material'; // Import Box
import { useTranslation } from 'react-i18next';

const Botleft = () => {
    const { t } = useTranslation('botleft');

    return (
        <Box
            sx={{
                width: { xs: '95%', sm: '90%', md: '38%' },
                height: {xs:'60%', sm:'50%',md:'60%'},
                backgroundPosition: 'center',
            }}
        >
            {/* Bible verses */}
            <Typography
                sx={{
                    fontSize: {xs:'1.2rem', sm:'1.5rem', md:'1.5 rem'},
                    color: '#f96846',
                    lineHeight: '1.6',
                    textAlign: { xs: 'center', sm: 'center', md: 'left' },
                }}
            >
                {t('verseText')}
            </Typography>

            {/* Reference */}
            <Typography
                sx={{
                    fontSize: {xs:'2rem', sm:'1.7rem', md:'2rem'},
                    color: '#ffde59',
                    lineHeight: '1.6',
                    marginTop: '2rem',
                    textAlign: { xs: 'center', sm: 'center', md: 'left' },
                }}
            >
                {t('verseReference')}
            </Typography>
        </Box>
    );
};

export default Botleft;
