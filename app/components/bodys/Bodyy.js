import React from 'react';
import Save from "@/app/components/bodys/save";
import Joinus from "@/app/components/bodys/Joinus";
import PasterName from "@/app/components/bodys/PasterName";
import Carousel from "@/app/components/bodys/carousel";
import { Box } from '@mui/material';


const Bodyy = () => {
    return (
        <Box
            sx={{
                height: '110vh',
                width: '100%',
                backgroundColor: { xs: '#2c2d2e', sm: '#2c2d2e', md: 'transparent' },
                backgroundImage: {
                    xs: 'none',
                    sm: 'none',
                    md: `url('./backgroundMain.png')`,
                },
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
            }}
        >
            {/* unfortunately there are too many moving parts where absolute positioning is the best way I can think of to position each components while maintain responsiveness.*/}
            {/* Save */}
            <Box
                sx={{
                    position: 'absolute',
                    top: { xs: '41%', sm: '27%', md: '51%', lg:'45%', xl:'45%' },
                    left: { xs: '50%', sm: '50%', md: '-41%', lg:'-37%', xl:'-41.5%' },
                    transform: {
                        xs: 'translate(-50%, -50%)',
                        sm: 'translate(-50%, -50%)',
                        md: 'translateY(-50%)',
                    },
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Save />
            </Box>

            {/* Joinus */}
            <Box
                sx={{
                    display: { xs: 'none', sm: 'none', md: 'flex' },
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    position: 'absolute',
                    top: { md: '72%', lg:'70%', xl:'70%' },
                    left: { md: '-35%', lg:'-35%', xl:'-35%' },
                }}
            >
                <Joinus />
            </Box>

            {/* PasterName */}
            <Box
                sx={{
                    position: 'absolute',
                    top: { md: '80%', lg:'80%', xl:'80%' },
                    right: { md: '0%', lg:'0%', xl:'0%' },
                    transform: 'translateY(-50%)',
                    display: { xs: 'none', sm: 'none', md: 'flex' },
                }}
            >
                <PasterName />
            </Box>

            {/* Carousel */}
            <Box
                sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                }}
            >
                <Carousel />
            </Box>
        </Box>
    );
};

export default Bodyy;















