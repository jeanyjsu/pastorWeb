'use client';

import './i18n';
import React, { useEffect, useState } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

//Wraps entire app with the i18n
const AppWrapper = ({ children }) => {
    const [isMounted, setIsMounted] = useState(false);

    // Ensure the wrapper only renders on the client
    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

export default AppWrapper;
