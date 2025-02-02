import React from 'react';
import Box from '@mui/material/Box';

const OtherWeb = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                height: '100%',
                alignItems: 'center',
            }}
        >
            {/* Top Row: Podcast */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    width: '100%',
                    height: { xs: '100vh', md: '50vh' },
                }}
            >
                {/* First Section */}
                <Box
                    sx={{
                        flex: 1,
                        backgroundImage: `url('./joinPodcast.png')`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundColor: '#000000',
                        height: '100%',
                    }}
                />
                {/* Second Section */}
                <Box
                    sx={{
                        flex: 2,
                        backgroundImage: `url('./podcastBG.png')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%',
                    }}
                >
                    <a
                        href="https://www.youtube.com/watch?v=vTAat2BRGQo"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-block',
                            padding: '10px 20px',
                            backgroundColor: '#b74e1a',
                            color: '#fff',
                            textDecoration: 'none',
                            fontSize: '16px',
                            fontWeight: 'bold',
                            borderRadius: '5px',
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                            transition: 'background-color 0.3s ease',
                            textAlign: 'center',
                        }}
                        onMouseEnter={(e) => (e.target.style.backgroundColor = '#a04316')}
                        onMouseLeave={(e) => (e.target.style.backgroundColor = '#b74e1a')}
                    >
                        Listen Here
                    </a>
                </Box>
            </Box>


            {/* Bottom Row: Avaye Mehr */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    width: '100%',
                    height: { xs: '100vh', md: '50vh' },
                }}
            >
                {/* First Section */}
                <Box
                    sx={{
                        flex: 1,
                        backgroundImage: `url('./Logo_x.png')`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundColor: '#3f4359',
                        height: '100%',
                    }}
                />
                {/* Second Section */}
                <Box
                    sx={{
                        flex: 2,
                        backgroundImage: `url('./purplebackground.png')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'top',
                        backgroundRepeat: 'no-repeat',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%',
                    }}
                >
                    <a
                        href="https://avayemehr.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-block',
                            padding: '10px 20px',
                            backgroundColor: '#a027d1',
                            color: '#fff',
                            textDecoration: 'none',
                            fontSize: '16px',
                            fontWeight: 'bold',
                            borderRadius: '5px',
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                            transition: 'background-color 0.3s ease',
                            textAlign: 'center',
                        }}
                        onMouseEnter={(e) => (e.target.style.backgroundColor = '#ab49d4')}
                        onMouseLeave={(e) => (e.target.style.backgroundColor = '#a027d1')}
                    >
                        Visit Avaye Mehr
                    </a>
                </Box>
            </Box>
        </Box>
    );
};

export default OtherWeb;



