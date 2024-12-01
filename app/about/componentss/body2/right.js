import React from 'react';
import Bio from "@/app/about/componentss/body2/bio";
import { Box } from '@mui/material';

const Right = () => {
    return (
        <Box sx={{
            width: '100%',
            height: {xs:'50%', sm:'50%', md:'100%'},
            backgroundColor: '#3f4359',
            marginRight: {sx:'0dvw', sm:'0dvw',md:'2dvw', }}}>
            <Bio/>
        </Box>
    );
}
export default Right;