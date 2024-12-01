import React from 'react';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Paragraph3 = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'column', md: 'row' },
                justifyContent: { xs: 'center', sm: 'center', md: 'space-between' },
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
                    width: { xs: '100%', sm: '100%', md: '55%' },
                    textAlign: { xs: 'center', sm: 'center', md: 'left' },
                }}
            >
                <Typography
                    variant="body1"
                    sx={{
                        color: 'black',
                        fontSize: 'calc(1rem * 1.5)',
                    }}
                >
                    In 2017, after years of serving the Lord as a pastor, I felt a strong calling to pursue a Master’s degree to deepen my ministry. I enrolled in seminary with great hope, but after completing just two courses, I had to withdraw due to financial challenges and personal circumstances. During that time, I realized that my family needed my attention and care more than my academic pursuits. Trusting in God’s plan, I chose to prioritize my family, knowing that this, too, was part of my calling.
                </Typography>
            </Box>

            {/* Image */}
            <Box
                sx={{
                    width: { xs: '100%', sm: '100%', md: '40%' },
                    display: 'flex',
                    justifyContent: 'center',
                    mt: { xs: 2, sm: 2, md: 0 },
                }}
            >
                <img
                    src="./pastor_work.jpg"
                    alt="pastor_at_work"
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

export default Paragraph3;

