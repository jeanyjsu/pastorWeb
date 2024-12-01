import React from 'react';
import Typography from "@mui/material/Typography";
import { useTranslation } from 'react-i18next';
import {Box} from '@mui/material';

const MissionIn = () => {
    const { t } = useTranslation('missionIn');

    return(
        <Box sx={{
            height:'10dvh',
            width:{xs:'90%', md:'20dvw', lg:'30dvw'},
            marginTop:'5dvh',
            marginLeft:'2dvw',
            marginRight:'1dvw',
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',}}>

            <Typography sx={{
                textTransform: 'uppercase',
                color: '#FFFFFF',
                fontSize: {xs:'1.6rem',sm:'3.5rem', md:'2rem', lg:'calc(2dvw + 3dvh)'},
                maxFontSize: '3rem',
                minFontSize: '1.5rem',
                textAlign:'center',
                width:'100%'}}>

                {t('missionin')}
            </Typography>
        </Box>
    );
}
export default MissionIn;