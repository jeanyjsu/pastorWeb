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
                    After serving the Lord in various capacities as a missionary, God opened the door for me to move to Canada in 1997. Two years later, in 1999, I met my beautiful wife, and we were married that same year before settling in Vancouver. Together, we have been blessed with five wonderful children and two precious grandchildren, who continually inspire me to walk in faith and obedience.
                    I believe God has gifted me as an evangelist, calling me to be a "hunter of souls." Over time, He has also shaped my heart to embrace a pastoral calling, equipping me to shepherd His people with compassion and care. Serving Jesus Christ is not just a job—it is a divine calling and the purpose of my life.
                </Typography>
            </Box>

            {/* Image */}
            <Box
                sx={{
                    order: { xs: 1, sm: 1, md: 0 },
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



