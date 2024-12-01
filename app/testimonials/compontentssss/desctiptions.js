import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import Axios
import { useTranslation } from 'react-i18next';
import {Box} from '@mui/material';

const Descriptions = ({ selectedCountry }) => {
    const [description, setDescription] = useState('');
    const { i18n } = useTranslation();
    console.log("Rendering description:", description);

    //description changes whenever selectedCountry change
    useEffect(() => {
        if (selectedCountry) {
            const apiUrl = ` https://pastor-web-backend.vercel.app/api/mission-descriptions`; // Full backend URL
            console.log(`API Call: ${apiUrl}, Country: ${selectedCountry}, Language: ${i18n.language}`);

            // Use Axios to fetch data
            axios
                .get(apiUrl, {
                    params: {
                        country: selectedCountry,
                        lng: i18n.language,
                    },
                })
                .then((response) => {
                    console.log("API Response Data:", response.data);
                    if (response.data.description) {
                        setDescription(response.data.description);
                    } else {
                        setDescription("No description available.");
                    }
                })
                .catch((error) => {
                    console.error("Error fetching description:", error);
                    setDescription("Error retrieving description.");
                });
        }
    }, [selectedCountry, i18n.language]);

    return (
        <Box sx={{textAlign: {xs: 'center', sm: 'center', md: 'left',},
        }}>
            <p>{description}</p>
        </Box>
    );
};

export default Descriptions;








