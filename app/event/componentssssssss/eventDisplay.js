"use client";

import * as React from 'react';
import AdminView from './adminView';
import RegularView from './regularView';
import {Box} from '@mui/material';

//Shows different content based on if logged in or not
const EventsDisplay = ({ isLoggedIn, setIsLoggedIn }) => {

    return (
        <Box>
            {isLoggedIn ? (
                <AdminView setIsLoggedIn={setIsLoggedIn} />
            ) : (
                <RegularView />
            )}
        </Box>
    );
};

export default EventsDisplay;


