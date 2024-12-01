import React from 'react';
import Box from "@mui/material/Box";

const ImageGroup = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                width: '90%',
                marginTop: '2dvh',
                padding: '2dvh',
                boxSizing: 'border-box',
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    marginBottom: '1dvh',
                }}
            >
                <img
                    src="./pastor_group.jpg"
                    alt="Example"
                    style={{
                        height: 'auto',
                        objectFit: 'contain',
                    }}

                    sx={{
                        width: { xs: '40%', sm: '50%', md: '70%' },
                        maxWidth: '100%',
                    }}
                />
            </Box>
        </Box>
    );
};

export default ImageGroup;

