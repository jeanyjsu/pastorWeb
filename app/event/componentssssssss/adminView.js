"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import DateRangeIcon from '@mui/icons-material/DateRange';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PlaceIcon from '@mui/icons-material/Place';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const AdminView = ({ setIsLoggedIn }) => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editingEventId, setEditingEventId] = useState(null);
    const [editFormData, setEditFormData] = useState({});
    const [isAddingEvent, setIsAddingEvent] = useState(false); // Track add event state
    const [newEventData, setNewEventData] = useState({
        title: '',
        date: new Date(),
        time: '',
        description: '',
        location: '',
    });
    const formRef = useRef(null);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/event');
                const data = await response.json();

                // Normalize today's date to midnight
                const today = new Date();
                today.setHours(0, 0, 0, 0);

                // Filter events where the date is greater than or equal to today's date
                const upcomingEvents = data.filter(event => {
                    const eventDate = new Date(event.date);
                    eventDate.setHours(0, 0, 0, 0);
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

    //Logout and shows alert
    const handleLogout = () => {
        setIsLoggedIn(false);
        alert('You have been logged out.');
    };

    //Delete event using its ID
    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/api/event/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setEvents(events.filter(event => event._id !== id));
                alert('Event deleted successfully!');
            } else {
                const errorData = await response.json();
                console.error('Error Response:', errorData);
                alert(`Failed to delete event: ${errorData.message || 'Unknown error'}`);
            }
        } catch (error) {
            console.error('Error deleting event:', error);
            alert('Error deleting event.');
        }
    };

    //For editing pre-existing event
    const handleEdit = (id) => {
        setEditingEventId(id);
        const eventToEdit = events.find(event => event._id === id);
        setEditFormData({
            title: eventToEdit.title,
            description: eventToEdit.description,
            date: new Date(eventToEdit.date),
            time: eventToEdit.time,
            location: eventToEdit.location,
        });
    };

    //Cancel the edit
    const handleCancelEdit = () => {
        setEditingEventId(null);
        setEditFormData({});
    };

    //Save the edited version
    const handleSaveEdit = async () => {
        const { title, date, time, description, location } = editFormData;
        if (!title || !date || !time || !description || !location) {
            alert('Please fill out all fields before saving.');
            return;
        }

        try {
            const response = await fetch(`http://localhost:5000/api/event/${editingEventId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(editFormData),
            });

            if (response.ok) {
                const updatedEvent = await response.json();
                setEvents((prevEvents) =>
                    prevEvents.map((event) =>
                        event._id === editingEventId ? updatedEvent : event
                    )
                );
                alert('Event updated successfully!');
                setEditingEventId(null);
                setEditFormData({});
            } else {
                alert('Failed to update event.');
            }
        } catch (error) {
            console.error('Error updating event:', error);
            alert('Error updating event.');
        }
    };

    //Updates the form
    const handleInputChange = (field, value) => {
        setEditFormData(prev => ({
            ...prev,
            [field]: value,
        }));
    };

    //Add event
    const handleAddEvent = () => {
        setIsAddingEvent(!isAddingEvent);
        if (formRef.current) {
            formRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    //Update the add form
    const handleNewEventChange = (field, value) => {
        setNewEventData(prev => ({ ...prev, [field]: value }));
    };

    //Add the new event to server
    const handleNewEventSubmit = async () => {
        const { title, date, time, description, location } = newEventData;
        if (!title || !date || !time || !description || !location) {
            alert('Please fill out all fields before submitting.');
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/api/event', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newEventData),
            });

            if (response.ok) {
                const createdEvent = await response.json();
                setEvents((prevEvents) => [...prevEvents, createdEvent]);
                alert('Event added successfully!');
                setIsAddingEvent(false);
                setNewEventData({
                    title: '',
                    date: new Date(),
                    time: '',
                    description: '',
                    location: '',
                });
            } else {
                alert('Failed to add event.');
            }
        } catch (error) {
            console.error('Error adding event:', error);
            alert('Error adding event.');
        }
    };


    // Convert date to a Date object
    const formatDate = (date) => {
        return new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        }).format(new Date(date));
    };

    return (
        <Box
            sx={{
                margin: '0 auto',
                width: '80dvw',
                boxSizing: 'border-box',
            }}>
            {/* Welcome message */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '8dvh',
                    right: '9dvw',
                    padding: '10px 20px',
                    fontSize: { xs: '0.9rem', sm: '1rem', md: '1.2rem' },
                    color: '#479f4d',
                }}>
                Welcome back, Pastor Faheem
            </Box>

            {/* Logout */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                }}>
                <Button
                    onClick={handleLogout}
                    sx={{
                        padding: { xs: '0.5dvh 1dvw', sm: '0.7dvh 1.2dvw' },
                        backgroundColor: '#ff0000',
                        color: 'white',
                        borderRadius: '8px',
                        fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
                        cursor: 'pointer',
                        transition: 'background-color 0.3s ease',
                        '&:hover': {
                            backgroundColor: '#cc0000',
                        },
                    }}>
                    Logout
                </Button>
            </Box>

            {/* Add event section */}
            {isAddingEvent && (
                <div
                    ref={formRef}
                    style={{
                        padding: '1.5dvw',
                        border: '1px solid #7fff00',
                        borderRadius: '8px',
                        backgroundColor: '#f9f9f9',
                        marginBottom: '2dvh',
                    }}>
                    <form style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                        <input
                            type="text"
                            placeholder="Title"
                            value={newEventData.title}
                            onChange={(e) => handleNewEventChange('title', e.target.value)}
                            style={{
                                padding: '1%',
                                border: '1px solid #ccc',
                                borderRadius: '4px',
                                color: '#5e5e5e',
                            }}
                        />
                        <DatePicker
                            selected={newEventData.date}
                            onChange={(date) => handleNewEventChange('date', date)}
                            style={{
                                padding: '1%',
                                border: '1px solid #ccc',
                                borderRadius: '4px',
                            }}
                        />
                        <input
                            type="text"
                            placeholder="Time"
                            value={newEventData.time}
                            onChange={(e) => handleNewEventChange('time', e.target.value)}
                            style={{
                                padding: '1%',
                                border: '1px solid #ccc',
                                borderRadius: '4px',
                                color: '#5e5e5e',
                            }}
                        />
                        <textarea
                            placeholder="Description"
                            value={newEventData.description}
                            onChange={(e) => handleNewEventChange('description', e.target.value)}
                            style={{
                                padding: '1%',
                                border: '1px solid #ccc',
                                borderRadius: '4px',
                                color: '#5e5e5e',
                            }}
                        />
                        <input
                            type="text"
                            placeholder="Location"
                            value={newEventData.location}
                            onChange={(e) => handleNewEventChange('location', e.target.value)}
                            style={{
                                padding: '1%',
                                border: '1px solid #ccc',
                                borderRadius: '4px',
                                color: '#5e5e5e',
                            }}
                        />
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                gap: '10px',
                                marginTop: '1dvh',
                            }}>
                            <button
                                type="button"
                                onClick={handleNewEventSubmit}
                                style={{
                                    padding: '1dvh 1.5dvw',
                                    backgroundColor: '#479f4d',
                                    border: 'none',
                                    borderRadius: '8px',
                                    color: 'white',
                                    fontSize: '1rem',
                                    cursor: 'pointer',
                                }}>
                                Submit
                            </button>
                            <button
                                type="button"
                                onClick={handleAddEvent}
                                style={{
                                    padding: '1dvh 1.5dvw',
                                    backgroundColor: '#c8340c',
                                    border: 'none',
                                    borderRadius: '8px',
                                    color: 'white',
                                    fontSize: '1rem',
                                    cursor: 'pointer',
                                }}>
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {/* Add event - event display section */}
            {loading ? (
                <p style={{color: '#3f4359'}}>Loading...</p>
            ) : events.length === 0 ? (
                <p style={{color: '#3f4359'}}>No events scheduled for now</p>
            ) : (
                <ul style={{
                    listStyleType: 'none',
                    padding: 0,
                    margin: 0,
                    width: '100%',
                    boxSizing: 'border-box',
                }}>
                    {events.map((event) => (
                        <li
                            key={event._id}
                            style={{
                                width: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                padding: '20px',
                                marginBottom: '20px',
                                backgroundColor: '#f9f9f9',
                                borderRadius: '8px',
                                position: 'relative',
                                boxSizing: 'border-box',
                                overflow: 'hidden',
                            }}>
                            {editingEventId === event._id ? (
                                <form style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '10px',
                                    justifyContent: 'center',
                                    alignItems: 'stretch',
                                    width: '100%',
                                }}>
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        width: '100%',
                                        boxSizing: 'border-box',
                                    }}>
                                        <label
                                            htmlFor="title"
                                            style={{
                                                marginBottom: '5px',
                                                fontWeight: 'bold',
                                                color: '#2c2d2e',
                                            }}>
                                            Title:
                                        </label>
                                        <input
                                            id="title"
                                            type="text"
                                            value={editFormData.title}
                                            onChange={(e) => handleInputChange('title', e.target.value)}
                                            style={{
                                                width: '100%',
                                                padding: '10px',
                                                border: '1px solid #ccc',
                                                borderRadius: '4px',
                                                fontSize: '1rem',
                                                color: '#2c2d2e',
                                                boxSizing: 'border-box',
                                            }}
                                        />
                                    </div>

                                    <div style={{display: 'flex', flexDirection: 'column'}}>
                                        <label
                                            htmlFor="description"
                                            style={{
                                                marginBottom: '5px',
                                                fontWeight: 'bold',
                                                color: '#2c2d2e',
                                            }}>
                                            Description:
                                        </label>
                                        <textarea
                                            id="description"
                                            value={editFormData.description}
                                            onChange={(e) => handleInputChange('description', e.target.value)}
                                            style={{
                                                padding: '10px',
                                                border: '1px solid #ccc',
                                                borderRadius: '4px',
                                                fontSize: '1rem',
                                                minHeight: '80px',
                                                color: '#2c2d2e',
                                            }}
                                        />
                                    </div>

                                    <div style={{display: 'flex', flexDirection: 'column'}}>
                                        <label
                                            htmlFor="date"
                                            style={{
                                                marginBottom: '5px',
                                                fontWeight: 'bold',
                                                color: '#2c2d2e',
                                            }}>
                                            Date:
                                        </label>
                                        <DatePicker
                                            id="date"
                                            selected={editFormData.date}
                                            onChange={(date) => handleInputChange('date', date)}
                                            style={{
                                                padding: '10px',
                                                border: '1px solid #ccc',
                                                borderRadius: '4px',
                                                fontSize: '1rem',
                                                color: '#2c2d2e',
                                            }}
                                        />
                                    </div>

                                    <div style={{display: 'flex', flexDirection: 'column'}}>
                                        <label
                                            htmlFor="time"
                                            style={{
                                                marginBottom: '5px',
                                                fontWeight: 'bold',
                                                color: '#2c2d2e',
                                            }}>
                                            Time:
                                        </label>
                                        <input
                                            id="time"
                                            type="text"
                                            value={editFormData.time}
                                            onChange={(e) => handleInputChange('time', e.target.value)}
                                            style={{
                                                padding: '10px',
                                                border: '1px solid #ccc',
                                                borderRadius: '4px',
                                                fontSize: '1rem',
                                                color: '#2c2d2e',
                                            }}
                                        />
                                    </div>

                                    <div style={{display: 'flex', flexDirection: 'column'}}>
                                        <label
                                            htmlFor="location"
                                            style={{
                                                marginBottom: '5px',
                                                fontWeight: 'bold',
                                                color: '#2c2d2e',
                                            }}>
                                            Location:
                                        </label>
                                        <input
                                            id="location"
                                            type="text"
                                            value={editFormData.location}
                                            onChange={(e) => handleInputChange('location', e.target.value)}
                                            style={{
                                                padding: '10px',
                                                border: '1px solid #ccc',
                                                borderRadius: '4px',
                                                fontSize: '1rem',
                                                color: '#2c2d2e',
                                            }}
                                        />
                                    </div>

                                    <div style={{
                                        display: 'flex',
                                        gap: '10px',
                                        marginTop: '10px',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <button
                                            type="button"
                                            onClick={handleSaveEdit}
                                            style={{
                                                padding: '10px 15px',
                                                backgroundColor: '#479f4d',
                                                border: 'none',
                                                borderRadius: '4px',
                                                color: '#2c2d2e',
                                                cursor: 'pointer',
                                                fontWeight: 'bold',
                                            }}>
                                            Save
                                        </button>
                                        <button
                                            type="button"
                                            onClick={handleCancelEdit}
                                            style={{
                                                padding: '10px 15px',
                                                backgroundColor: '#c8340c',
                                                border: 'none',
                                                borderRadius: '4px',
                                                color: '#2c2d2e',
                                                cursor: 'pointer',
                                                fontWeight: 'bold',
                                            }}>
                                            Cancel
                                        </button>
                                    </div>
                                </form>
                            ) : (
                                <>
                                    {/* Display */}
                                    <div style={{flex: 1}}>
                                        <h1
                                            style={{
                                                color: '#3f4359',
                                                fontSize: '2rem',
                                                textTransform: 'uppercase',
                                            }}>
                                            {event.title}
                                        </h1>
                                        <p
                                            style={{
                                                color: '#5e5e5e',
                                                marginBottom: '2dvh',
                                            }}>
                                            {event.description}
                                        </p>
                                        <p
                                            style={{
                                                fontSize: '1rem',
                                                color: '#5e5e5e',
                                                margin: 0,
                                            }}>
                                            <DateRangeIcon/> <strong>Date:</strong> {formatDate(event.date)}
                                        </p>
                                        <p
                                            style={{
                                                fontSize: '1rem',
                                                color: '#5e5e5e',
                                                margin: 0,
                                            }}>
                                            <AccessTimeIcon/> <strong>Time:</strong> {event.time}
                                        </p>
                                        <p
                                            style={{
                                                fontSize: '1rem',
                                                color: '#5e5e5e',
                                                margin: 0,
                                            }}>
                                            <PlaceIcon/> <strong>Location:</strong> {event.location}
                                        </p>
                                    </div>

                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            top: '10px',
                                            right: '10px',
                                            display: 'flex',
                                            gap: '10px',
                                        }}>

                                        {/* Edit Button */}
                                        <Box
                                            sx={{
                                                display: { xs: 'none', sm: 'none', md: 'flex' },
                                            }}>
                                            <Button
                                                onClick={() => handleEdit(event._id)}
                                                sx={{
                                                    backgroundColor: '#ffa500',
                                                    color: 'white',
                                                    borderRadius: '8px',
                                                    padding: '5px 10px',
                                                    fontSize: '0.9rem',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '5px',
                                                    transition: 'background-color 0.3s ease',
                                                    '&:hover': {
                                                        backgroundColor: '#ff8c00',
                                                    },
                                                }}
                                                startIcon={<EditIcon />}>
                                                Edit
                                            </Button>
                                        </Box>

                                        <IconButton
                                            onClick={() => handleEdit(event._id)}
                                            sx={{
                                                display: { xs: 'flex', sm: 'flex', md: 'none' },
                                                backgroundColor: '#ffa500',
                                                color: 'white',
                                                borderRadius: '50%',
                                                padding: '6px',
                                                transition: 'background-color 0.3s ease',
                                                '&:hover': {
                                                    backgroundColor: '#ff8c00',
                                                },
                                            }}
                                        >
                                            <EditIcon sx={{ fontSize: '20px' }} />
                                        </IconButton>

                                        {/* Delete Button */}
                                        <Box
                                            sx={{
                                                display: { xs: 'none', sm: 'none', md: 'flex' },
                                            }}>
                                            <Button
                                                onClick={() => handleDelete(event._id)}
                                                sx={{
                                                    backgroundColor: '#ff0000',
                                                    color: 'white',
                                                    borderRadius: '8px',
                                                    padding: '5px 10px',
                                                    fontSize: '0.9rem',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '5px',
                                                    transition: 'background-color 0.3s ease',
                                                    '&:hover': {
                                                        backgroundColor: '#cc0000',
                                                    },
                                                }}
                                                startIcon={<DeleteIcon />}>
                                                Delete
                                            </Button>
                                        </Box>

                                        <IconButton
                                            onClick={() => handleDelete(event._id)}
                                            sx={{
                                                display: { xs: 'flex', sm: 'flex', md: 'none' },
                                                backgroundColor: '#ff0000',
                                                color: 'white',
                                                borderRadius: '50%',
                                                padding: '6px',
                                                transition: 'background-color 0.3s ease',
                                                '&:hover': {
                                                    backgroundColor: '#cc0000',
                                                },
                                            }}>
                                            <DeleteIcon sx={{ fontSize: '20px' }} />
                                        </IconButton>
                                    </Box>
                                </>
                            )}
                        </li>
                    ))}
                </ul>
            )}

            <div style={{marginBottom: '20px', textAlign: 'center'}}>
                <button
                    onClick={handleAddEvent}
                    style={{
                        padding: '1dvh 1.5dvw',
                        backgroundColor: isAddingEvent ? '#c8340c' : '#479f4d',
                        border: 'none',
                        color: 'white',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontSize: '1rem',
                    }}>
                    {isAddingEvent ? 'Cancel' : 'Add Event'}
                </button>
            </div>
        </Box>
    );
};

export default AdminView;

