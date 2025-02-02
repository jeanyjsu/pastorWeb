"use client";

import React, { useState, useEffect } from 'react';
import Livestream from "@/app/media/componentsssss/livestream";
import NextStreamTimer from "@/app/media/componentsssss/nextStreamTimer";
import OtherSocials from "@/app/media/componentsssss/otherSocials";
import OtherWeb from "@/app/media/componentsssss/otherWeb";
import Box from '@mui/material/Box';

const BodyMd = () => {
    const [currentVancouverTime, setCurrentVancouverTime] = useState(new Date());

    // Function to get the current Vancouver time
    const getVancouverTime = () => {
        const timeZone = 'America/Vancouver';
        const currentDate = new Date();
        const vancouverDate = new Intl.DateTimeFormat('en-US', {
            timeZone,
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
        }).format(currentDate);

        return new Date(vancouverDate);
    };

    // Update the Vancouver time every minute
    useEffect(() => {
        setCurrentVancouverTime(getVancouverTime());

        const timer = setInterval(() => {
            setCurrentVancouverTime(getVancouverTime());
        }, 60000);

        return () => clearInterval(timer);
    }, []);

    // determine content based on Vancouver time and the date
    const renderContent = () => {
        const day = currentVancouverTime.getDay();
        const hour = currentVancouverTime.getHours();
        const minute = currentVancouverTime.getMinutes();
        const date = currentVancouverTime.getDate();

        const isFirstSunday = day === 0 && date <= 7;

        if (day === 6 && hour >= 10 && hour < 12 || (isFirstSunday && hour >= 19 && (hour < 20 || (hour === 20 && minute <= 30)))) {
            //  Show Livestream and NextStreamTimer within schedule
            return (
        <>
            <Livestream />
            <Box
                sx={{
                    border: '2px solid #ff99cc',
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'column', md: 'row' },
                    justifyContent: 'space-between',
                    width: '95%',
                    marginTop: '2%',
                    minHeight: {xs:'55dvh',md:'50dvh'},//<---changed this from height to minHeight
                }}
            >
                {/* NextStreamTimer Section */}
                <Box
                    sx={{
                        flex: '1',
                        height: { xs: '50%', sm: '50%', md: '100%' },
                    }}
                >
                    <NextStreamTimer />
                </Box>

                {/* OtherSocials Section */}
                <Box
                    sx={{
                        flex: '2',
                        height: { xs: '50%', sm: '50%', md: '100%' },
                    }}
                >
                    <OtherSocials />
                </Box>
            </Box>
        </>
    );

        } else {

            // Outside of schedule
            return (
                <>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', sm: 'column', md: 'row' },
                            justifyContent: { xs: 'center', sm: 'center', md: 'flex-end' },
                            alignItems: 'center',
                            width: '90%',
                            height: '90dvh',
                            backgroundColor: '#2f2a2b',
                            padding: { xs: '0', sm: '0', md: '2%' },
                            overflow: 'visible',
                        }}>
                        <Box
                            sx={{
                                display: { xs: 'none', sm: 'none', md: 'flex' },
                                width: '40%',
                                height: '100%',
                                justifyContent: 'flex-end',
                                alignItems: 'center',
                                position: 'relative',
                                zIndex: 10,
                                backgroundImage:'url(./theRealNotStreamPic.JPG)',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                transform: 'scaleX(-1)',
                            }}
                        />

                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                width: { xs: '98%', sm: '98%', md: '65%' },
                                height: '80dvh',
                            }}>


                            {/* Box for NextStreamTimer */}
                            <Box
                                sx={{
                                    width: '100%',
                                    height: '50%',
                                    marginBottom: '1rem',
                                }}
                            >
                                <NextStreamTimer />
                            </Box>


                            {/* Box for OtherSocials */}
                            <Box
                                sx={{
                                    width: '100%',
                                    height: '50%',
                                }}
                            >
                                <OtherSocials />
                            </Box>
                        </Box>
                    </Box>
                    <div style={{
                        display: 'flex',
                        width: '90%',
                        height: '50dvh',
                    }}>
                    <OtherWeb/>
                    </div>
                </>
            );
        }
    };

    return (
        <div style={{
            width: '100%',
            minHeight: '150dvh',//<--- this to minHeight from height
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            boxSizing: 'border-box',
            margin: '0',
            padding: '0',
            overflow: 'hidden'
        }}>
            {/* Background Layer */}
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
                zIndex: -1
            }}></div>

            {/* Render content based on Vancouver time */}
            {renderContent()}
        </div>
    );
}

export default BodyMd;

