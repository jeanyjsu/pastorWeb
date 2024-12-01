import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import DateRangeIcon from '@mui/icons-material/DateRange';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PlaceIcon from '@mui/icons-material/Place';

const RegularView = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch events from the backend
    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await fetch('/api/event');
                const data = await response.json();

                // Normalize today's date to midnight
                const today = new Date();
                today.setHours(0, 0, 0, 0);

                // Get events where the date is greater than or equal to today's date
                const upcomingEvents = data.filter(event => {
                    const eventDate = new Date(event.date);
                    eventDate.setHours(0, 0, 0, 0); // Normalize event date to midnight
                    return eventDate >= today;
                });

                setEvents(upcomingEvents);
            } catch (error) {
                console.error('Error fetching events:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchEvents();
    }, []);

    const formatDate = (date) => {
        return new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        }).format(new Date(date));
    };

    const [expanded, setExpanded] = useState({});

    const toggleReadMore = (id) => {
        setExpanded((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };

    return (
        <Box
            sx={{
                width: '100%',
                marginTop: 2,
                padding: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 2
            }}
        >
            {loading ? (
                <Typography>Loading...</Typography>
            ) : events.length === 0 ? (
                <Typography>No events scheduled for now</Typography>
            ) : (
                <Box
                    component="ul"
                    sx={{
                        listStyleType: 'none',
                        padding: 0,
                        margin: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 2
                    }}
                >
                    {events.map((event) => (
                        <Box
                            key={event._id}
                            component="li"
                            sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', md: 'row' },
                                padding: 2,
                                marginBottom: 2,
                                backgroundColor: '#f9f9f9',
                                borderRadius: 2,
                                boxShadow: 2,
                                width: { xs: '80%', sm:'80%', md: '100%' },
                            }}
                        >

                            {/* Event content */}
                            {/* Left */}
                            <Box sx={{ flex: 2, textAlign: 'left', paddingRight: 2 }}>
                                <Typography
                                    variant="h5"
                                    sx={{
                                        fontSize: { xs: '1.5rem', md: '2rem' },
                                        color: '#3f4359',
                                        marginBottom: 1,
                                    }}
                                >
                                    {event.title}
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: '1rem',
                                        color: '#666',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        display: '-webkit-box',
                                        WebkitBoxOrient: 'vertical',
                                        WebkitLineClamp: expanded[event._id] ? 'unset' : 1,
                                    }}
                                >
                                    {event.description}
                                </Typography>
                                <Button
                                    onClick={() => toggleReadMore(event._id)}
                                    sx={{
                                        marginTop: 1,
                                        backgroundColor: 'transparent',
                                        color: '#007BFF',
                                        textDecoration: 'underline',
                                        fontSize: '1rem',
                                        '&:hover': { textDecoration: 'none' },
                                    }}
                                >
                                    {expanded[event._id] ? 'Read Less' : 'Read More'}
                                </Button>
                            </Box>

                            {/* Divider */}
                            <Box
                                sx={{
                                    width: { xs: '100%', md: '2px' },
                                    height: { xs: '2px', md: 'auto' },
                                    backgroundColor: '#d9d9d9',
                                    marginLeft: { xs: 0, md: 2 },
                                    marginRight: { xs: 0, md: 2 },
                                    marginTop: { xs: 2, md: 0 },
                                    marginBottom: { xs: 2, md: 0 },
                                }}
                            />

                            {/* Right */}
                            <Box
                                sx={{
                                    flex: 1,
                                    textAlign: 'left',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 1,
                                }}
                            >
                                <Typography sx={{ fontSize: '1rem', color: '#5e5e5e' }}>
                                    <DateRangeIcon /> <strong>Date:</strong> {formatDate(event.date)}
                                </Typography>
                                <Typography sx={{ fontSize: '1rem', color: '#5e5e5e' }}>
                                    <AccessTimeIcon /> <strong>Time:</strong> {event.time}
                                </Typography>
                                <Typography sx={{ fontSize: '1rem', color: '#5e5e5e' }}>
                                    <PlaceIcon /> <strong>Location:</strong> {event.location}
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>
            )}
        </Box>
    );
};

export default RegularView;
