'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { useTranslation } from 'react-i18next';

const Joinus = () => {
    const { t } = useTranslation('joinus');

    return(
        <div>
            <Link
                href="/media"
                underline="none"
                sx={{ display: 'block' }}
            >
                <Box
                    sx={{
                        height: '8dvh',
                        width: '30dvw',
                        borderRadius: '0% 46% 46% 0%',
                        backgroundColor: '#f96846',
                        display: 'flex',
                        alignItems: 'center',
                        justifiedContent:'center',
                        transition:'all 0.3s ease',
                        '&:hover': {
                            width: '31dvw',
                            backgroundColor: '#ffde59'
                        },
                        cursor: 'pointer',
                    }}>
                    <Typography
                        sx={{
                            color: '#FFFFFF',
                            fontSize: '2rem',
                            fontWeight: 'bold',
                            textTransform: 'uppercase',
                            textAlign: 'center',
                            width: '100%'
                        }}
                    >
                        {t('joinUs')}
                    </Typography>
                </Box>
            </Link>

        </div>
    );
}

export default Joinus;