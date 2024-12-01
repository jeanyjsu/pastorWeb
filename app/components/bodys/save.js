import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTranslation } from 'react-i18next';

const Save = props => {
    const { t } = useTranslation('save');

    return (
        <Box
            sx={{
                width: { xs: '100%', sm: '100dvw', md:'40%', lg:'45%', xl:'40%' },
                minHeight: { xs: '90vh', sm: '50vh', md:'40vh', lg:'20vh', xl:'25vh' },
                height:{sm:'60vh'},
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: { xs: 'center', sm: 'flex-start' },
                backgroundColor: 'transparent',
            }}
        >
        {/* Save container */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: { xs: 'center', sm: 'center', md: 'flex-start' },
                    width: { xs: '90%', sm: '75%', md: '100%' },
                    margin: '0 auto',
                    height: { xs: '90%', sm: '75%', md: '30%' },
                }}
            >
                <Box>
                    <Typography
                        sx={{
                            color: { xs: '#f96846', sm: '#f96846', md: '#FFFFFF' },
                            fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2.0rem', lg: '2.1rem', xl: '2.2rem' },
                            textTransform: 'uppercase',
                            textAlign: { xs: 'center', sm: 'center', md: 'left' },
                            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.8)',
                        }}
                    >
                        Pastor Faheem Moini
                    </Typography>
                </Box>

                {/* "On a mission to save" */}
                <Box>
                    <Typography
                        sx={{
                            color: '#FFFFFF',
                            fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem', lg: '2.1rem', xl: '2.2rem' },
                            textTransform: 'uppercase',
                            textAlign: { xs: 'center', sm: 'center', md: 'left' },
                            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
                        }}
                    >
                        {t('mission')}
                    </Typography>
                </Box>

                {/* "Souls" */}
                <Box>
                    <Typography
                        sx={{
                            color: '#ffde59',
                            fontSize: { xs: '5rem', sm: '5rem', md: '6rem', lg: '7rem', xl: '8rem' },
                            textTransform: 'uppercase',
                            textAlign: 'center',
                            fontFamily: 'cursive',
                            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
                        }}
                    >
                        {t('soul')}
                    </Typography>
                </Box>

                {/* Description */}
                <Box>
                    <Typography
                        sx={{
                            color: '#FFFFFF',
                            fontSize: { xs: '1rem', sm: '1.2rem', md: '1rem', lg: '1.3rem', xl: '1.5rem' },
                            textAlign: { xs: 'center', sm: 'center', md: 'left' },
                        }}
                    >
                        {t('description')}
                    </Typography>
                </Box>

                {/*Image for smaller screens*/}
                <Box
                    sx={{
                        display: { xs: 'flex', sm: 'flex', md: 'none' },
                        width: '90%',
                        height: 'auto',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        flexDirection: 'column',
                        mt: 2,
                    }}
                >
                    <img
                        src="./faheemProfile.png"
                        alt="Responsive Image"
                        style={{
                            maxWidth: '100%',
                            height: 'auto',
                            marginBottom: '1dvh',
                        }}
                    />
                </Box>

            </Box>
        </Box>
    );
};

export default Save;













