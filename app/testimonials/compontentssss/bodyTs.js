"use client";

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import MissionIn from "@/app/testimonials/compontentssss/missionIn";
import Dropdown from "@/app/testimonials/compontentssss/dropdown";
import Descriptions from "@/app/testimonials/compontentssss/desctiptions";
import MissionImg from "@/app/testimonials/compontentssss/missionImg";
import {Box} from "@mui/material";

const BodyTs = () => {
    const [selectedCountry, setSelectedCountry] = useState("Turkey"); // Default country
    console.log("Updated selected country:", selectedCountry);
    const { i18n } = useTranslation();

    return (
        <div style={{
            height: '105dvh',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            boxSizing: 'border-box',
            margin: '0',
            padding: '0',
            overflow: 'hidden',
        }}>
            {/* Background */}
            <div style={{
                content: '""',
                backgroundImage: `url('./backgroundMain.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                opacity: 0.2,
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
            }}></div>
            {/* MissionIn and Dropdown */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '100%',
                    marginBottom: '1rem',
                    boxSizing: 'border-box',
                    marginRight: {xs:'7dvw', md:'0'},
                }}
            >
                <Box
                    sx={{
                        width: {xs: '100%', sm: '70%', md: 'auto',},
                    }}
                >
                    <MissionIn />
                </Box>
                <Box
                    sx={{
                        width: {xs: '45%', sm: '30%', md: '50%',},
                    }}
                >
                    <Dropdown
                        selectedCountry={selectedCountry}
                        setSelectedCountry={setSelectedCountry}
                        // Pass the selected language
                        language={i18n.language}
                    />
                </Box>
            </Box>


            {/* Descriptions */}
            <div style={{ width: '90%' }}>
                <Descriptions selectedCountry={selectedCountry} />
            </div>

            {/* MissionImg */}
            <Box
                sx={{
                    width: '90%',
                    height: { xs: '60%', md: '65%' },
                    marginBottom: '2dvh',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Box
                    sx={{
                        width: '100%',
                        height: '100%',
                        overflowY: 'auto',
                    }}
                >
                    <MissionImg selectedCountry={selectedCountry} />
                </Box>
            </Box>
        </div>
    );
};

export default BodyTs;
