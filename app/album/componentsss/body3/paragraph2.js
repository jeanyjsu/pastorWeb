import React from 'react';
import Typography from "@mui/material/Typography";
import { Box } from '@mui/material';

const Paragraph2 = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'column', md: 'row' },
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '90%',
                marginTop: '2dvh',
                padding: '2dvh',
                boxSizing: 'border-box',
            }}
        >
            {/* Paragraph & Title Box */}
            <Box
                sx={{
                    order: { xs: 0, sm: 0, md: 1 },
                    width: { xs: '100%', sm: '100%', md: '55%' },
                    textAlign: { xs: 'center', sm: 'center', md: 'left' },
                    marginBottom: { xs: '2dvh', sm: '2dvh', md: 0 },
                }}
            >
                {/* Title */}
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 'bold',
                        color: '#ff5733',
                        fontSize: { xs: '1.8rem', sm: '2rem', md: '2.2rem' },
                        marginBottom: '1dvh', // Space between title and paragraph
                    }}
                >
                    A Journey of Growth and Preparation
                </Typography>

                {/* Paragraph */}
                <Typography
                    variant="body1"
                    sx={{
                        color: 'black',
                        fontSize: 'calc(1rem * 1.5)',
                    }}
                >
                    After accepting Jesus as his Lord and Savior, Faheem recognized the need to grow spiritually and intellectually to serve the Lord effectively. With determination, he pursued theological education and took every opportunity to deepen his understanding of the Word of God. He completed a nine-month online theological program in Pakistan before moving to Canada, where he continued his studies at Columbia Bible College from 2001 to 2003.

                    In 2017, feeling called to further his ministry, Faheem began a Master’s program in theology. However, financial challenges and family priorities required him to step back after completing two courses. Trusting in God’s plan, he chose to prioritize his family, believing that his calling as a father and husband was as important as his pastoral ministry.
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


