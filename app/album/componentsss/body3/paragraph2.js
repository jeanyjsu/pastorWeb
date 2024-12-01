import React from 'react';
import Typography from "@mui/material/Typography";
import { Box } from '@mui/material';

const Paragraph2 = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: {
                    xs: 'column',
                    sm: 'column',
                    md: 'row',
                },
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '90%',
                marginTop: '2dvh',
                padding: '2dvh',
                boxSizing: 'border-box',
            }}
        >

            {/* Paragraph */}
            <Box
                sx={{
                    order: { xs: 0, sm: 0, md: 1 },
                    width: { xs: '100%', sm: '100%', md: '55%' },
                    textAlign: { xs: 'center', sm: 'center', md: 'left' },
                    marginBottom: { xs: '2dvh', sm: '2dvh', md: 0 },
                }}
            >
                <Typography
                    variant="body1"
                    sx={{
                        color: 'black',
                        fontSize: 'calc(1rem * 1.5)',
                    }}
                >
                    After accepting Jesus, I became aware of the gaps in my education and knowledge. I realized that to serve the Lord effectively, I needed to equip myself spiritually and intellectually. Determined to dedicate my life to His service without wavering, I committed to never turning back. To enhance my understanding, I pursued further education and took advantage of every opportunity to grow. I attended short-term biblical courses and seminars whenever possible and completed a nine-month online theological education program in Pakistan. After moving to Canada, I continued my studies at Columbia Bible College from 2001 to 2003.
                </Typography>
            </Box>

            {/* Image */}
            <Box
                sx={{
                    order: { xs: 1, sm: 1, md: 0 },
                    width: { xs: '100%', sm: '100%', md: '45%' },
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <img
                    src="./pastor_study.jpg"
                    alt="pastor_to_school"
                    style={{
                        width: 'auto',
                        height: '60dvh',
                        objectFit: 'contain',
                    }}
                />
            </Box>
        </Box>
    );
};

export default Paragraph2;

