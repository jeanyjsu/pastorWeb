'use client';

import React from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import BannerHovers from "@/app/media/componentsssss/bannerHovers";
import { useTranslation } from 'react-i18next';

const OtherSocials = () => {
    const { t } = useTranslation('otherSocials');

    const bannners = [
        {
            link: 'https://www.youtube.com/@VancouverPersianChur',
            imageUrl: './pastoryt.png',
            text: 'YouTube',
            backgroundColor: '#FF0000',
            reversed: false,
            gradient: false,
        },
        {
            link: 'https://www.facebook.com/Onlie.Vancouver.persian.Church',
            imageUrl: './pastorf.png',
            text: 'Facebook',
            backgroundColor: '#1877F2',
            reversed: true,
            gradient: false,
        },
        {
            link: 'https://www.instagram.com/wonderful.counsellor/',
            imageUrl: './pastorIns.png',
            text: 'Instagram',
            backgroundColor: '#1877F2',
            reversed: false,
            gradient: true,
        },
    ];

    return (
        <div
            style={{
                marginLeft: '1%',
                height: '100%',
                backgroundColor: '#3f4359',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
            }}
        >

            {/* Header Text */}
            <Box
                sx={{
                    marginBottom: '1dvh',
                    height: '10%',
                    width: '90%',
                }}
            >
                <Typography
                    sx={{
                        color: 'white',
                        fontWeight: 'bold',
                        width: '100%',
                        height: '100%',
                        textAlign: 'left',
                        fontSize: {xs:'calc(1.5rem + 1vw)', lg:'2rem'},
                        lineHeight: 1,
                    }}
                >
                    {t('header')}
                </Typography>
            </Box>

            {/* Render BannerHovers */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '95%',
                    height: '95%',
                    alignItems: 'center',
                    justifiedContent: 'center',
                    marginTop:{xs:'10dvh',md:'0'},
                }}
            >
                {bannners.map((box, index) => (
                    <BannerHovers
                        key={index}
                        link={box.link}
                        imageUrl={box.imageUrl}
                        text={box.text}
                        backgroundColor={box.backgroundColor}
                        reversed={box.reversed}
                        gradient={box.gradient}
                    />
                ))}
            </Box>
        </div>
    );
};

export default OtherSocials;
