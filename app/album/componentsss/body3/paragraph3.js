import React from 'react';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Paragraph3 = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: {
                    xs: 'column', // Stack vertically on small screens
                    sm: 'column',
                    md: 'row', // Side by side for larger screens
                },
                justifyContent: 'space-between',
                alignItems: {
                    xs: 'center',
                    sm: 'center',
                    md: 'flex-start',
                },
                width: '90%',
                marginTop: '2dvh',
                padding: '2dvh',
                boxSizing: 'border-box',
            }}
        >
            {/* Left Side - Title & Paragraph */}
            <Box
                sx={{
                    order: 0, // Always first (left side on large screens)
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
                        marginBottom: '1dvh',
                    }}
                >
                    A Life Dedicated to Service
                </Typography>

                {/* Paragraph */}
                <Typography
                    variant="body1"
                    sx={{
                        color: 'black',
                        fontSize: 'calc(1rem * 1.5)',
                    }}
                >
                    In 1997, God opened the door for Faheem to move to Canada. Two years later, he married his wife and settled in Vancouver, where they built a family blessed with five children and two grandchildren. Faheem’s ministry evolved as he embraced his dual calling as an evangelist and pastor. He describes himself as a “hunter of souls,” driven to share the gospel with the lost, while also shepherding the flock with compassion and care.

                    On June 30, 2024, Faheem was ordained as a Pastor with the Four Square Church. This joyous occasion was celebrated with the Riverside Community Church congregation and his family, including his beloved mother, who stood by him in full support.
                </Typography>
            </Box>

            {/* Right Side - Image */}
            <Box
                sx={{
                    order: 1, // Always second (right side on large screens)
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



