import React from 'react';
import Ttitle from "@/app/album/componentsss/body3/title";
import Paragraph1 from "@/app/album/componentsss/body3/paragraph1";
import Paragraph2 from "@/app/album/componentsss/body3/paragraph2";
import Paragraph3 from "@/app/album/componentsss/body3/paragraph3";
import Paragraph4 from "@/app/album/componentsss/body3/paragraph4";
import ImageGroup from "@/app/album/componentsss/body3/imageGroup";

const BodyAL = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            minHeight: '100vh',
            alignItems: 'center',
            position: 'relative',
            boxSizing: 'border-box',
            margin: '0',
            padding: '0',
            overflowY: 'auto',
        }}>
            {/* Background */}
            <div style={{
                content: '""',
                backgroundImage: `url('./backgroundMain.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                opacity: 0.2,
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
            }}></div>

            {/* Image div */}
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '90%',
            }}>
                <img
                    src="./pastorIns.png"
                    alt="Pastor Instructions"
                    style={{
                        width: '100%',
                        height: 'auto',
                        objectFit: 'contain',
                    }}
                />
            </div>

            {/* Title and paragraph */}
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                width: '90%',
                padding: '2dvh',
                backgroundColor: '#d9d9d9',
                zIndex: 1,
            }}>
                <Ttitle />
                <Paragraph1 />
                <Paragraph2 />
                <Paragraph3 />
                <Paragraph4 />
                <ImageGroup />
            </div>
        </div>
    );
};

export default BodyAL;






