"use client";

import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';

const Botright = () => {
    //States for storing URL fetched from server, and error messages
    const [videoUrl, setVideoUrl] = useState('');
    const [error, setError] = useState(null);

    //fetch the video url from the backend
    useEffect(() => {
        const fetchVideoUrl = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/video');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                console.log('Fetched video data:', data);
                if (data.url) {
                    setVideoUrl(data.url);
                } else {
                    setError('Video URL not found in response');
                }
            } catch (err) {
                console.error('Error fetching video URL:', err);
                setError('Failed to fetch video');
            }
        };

        fetchVideoUrl();
    }, []);

    return (
        <Box
            sx={{
                width: { xs: '100%', sm: '90%', md: '60%' },
                height: {xs:'35%', sm:'40%', md:'90%'},
                backgroundPosition: 'center',
            }}
        >
            {/* Conditionally render content if url fetched */}
            {error ? (
                <p style={{ color: 'red' }}>{error}</p>
            ) : videoUrl ? (
                <video
                    controls
                    style={{ width: '100%', height: '100%' }}
                >
                    <source src={videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            ) : (
                <p>Loading video...</p>
            )}
        </Box>
    );
};

export default Botright;


