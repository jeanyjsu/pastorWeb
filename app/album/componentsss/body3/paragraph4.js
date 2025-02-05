import React from 'react';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Paragraph4 = () => {
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
            {/* Left Side - Title & Paragraphs */}
            <Box
                sx={{
                    order: { xs: 0, sm: 0, md: 1 }, // Ensures text appears first on the left
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
                    The Turkey Refugee Project
                </Typography>

                {/* First Paragraph */}
                <Typography
                    variant="body1"
                    sx={{
                        color: 'black',
                        fontSize: 'calc(1rem * 1.5)',
                        marginBottom: '2dvh', // Spacing between paragraphs
                    }}
                >
                    Faheem’s passion for outreach led him to launch the Turkey Refugee Project during his first missions trip to Istanbul. After witnessing the immense need for spiritual mentorship and legal advocacy among Farsi-speaking refugees and believers, he began hosting annual discipleship conferences in Yalova, Turkey. Since 2012, these conferences have empowered new believers to grow in their faith, with the 10th annual conference celebrated in 2022.
                </Typography>

                {/* Second Paragraph */}
                <Typography
                    variant="body1"
                    sx={{
                        color: 'black',
                        fontSize: 'calc(1rem * 1.5)',
                    }}
                >
                    Faheem has extended his ministry to Germany, advocating for refugees and persecuted Christians. Drawing on his experience presenting cases to the United Nations in Ankara, Turkey, he continues to fight for the rights of oppressed believers. His ministry seeks to bring hope, support, and justice to those facing persecution in the East.

                    Most recently, Faheem traveled to Israel, where he connected with Farsi-speaking Persian-Israelis. He discovered a significant spiritual need in this community and was offered an opportunity to minister there. However, due to ongoing conflict, these plans are currently on hold.
                </Typography>
            </Box>

            {/* Right Side - Image */}
            <Box
                sx={{
                    order: { xs: 1, sm: 1, md: 0 }, // Ensures image stays on the right
                    width: { xs: '100%', sm: '100%', md: '40%' },
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <img
                    src="./pastor_Canada.jpg"
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

export default Paragraph4;




