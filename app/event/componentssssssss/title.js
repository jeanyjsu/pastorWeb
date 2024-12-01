import React from 'react';
import Typography from '@mui/material/Typography';
import {Box} from '@mui/material';

const Title = () => {
    return(
        <Box sx={{
            width: '90dvw',
            height: '10dvh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            color: '#f4f4f4',
            fontWeight: 'bold',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)',
            borderRadius: '10px',
            marginTop: '2dvh',
            marginBottom:'2dvh',
        }}>
            <Typography sx={{
                fontSize: {xs:'3dvh',sm:'4dvh', md:'5dvh'},
                fontWeight: 'bold',
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textTransform: 'uppercase',
                letterSpacing: '2px',
            }}>
                Upcoming Events
            </Typography>
        </Box>

    );
}
export default Title;