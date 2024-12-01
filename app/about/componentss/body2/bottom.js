import React from 'react';
import Botleft from "@/app/about/componentss/body2/botleft";
import Botright from "@/app/about/componentss/body2/botright";
import { Box } from '@mui/material';

const Bottom = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: {
                    xs: 'column',
                    sm: 'column',
                    md: 'row',
                    lg: 'row',
                    xl: 'row',
                },
                width: '100%',
                height: '100%',
                justifyContent: {
                    xs: 'center',
                    sm: 'center',
                    md: 'space-between',
                    lg: 'space-between',
                    xl: 'space-between',
                },
                alignItems: {
                    xs: 'center',
                    sm: 'center',
                    md: 'flex-start',
                    lg: 'flex-start',
                    xl: 'flex-start',
                },
                paddingLeft: {xs:'0', sm: '0',md:'2dvw'},
                paddingTop: {xs:'0', sm:'0',md:'2dvh'},
                paddingRight: {xs:'0', sm:'0',md:'2dvw'},
            }}
        >
            <Botleft />
            <Botright />
        </Box>
    );
};

export default Bottom;

