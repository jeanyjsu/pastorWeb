import React from 'react';
import Typography from "@mui/material/Typography";
import { useTranslation } from 'react-i18next';
import {Box} from '@mui/material';

const MissionIn = () => {
    const { t } = useTranslation('missionIn');

    return(
        <Box sx={{
            height:'10dvh',
            width:{xs:'90%', md:'100%', lg:'100%'},
            display:'flex',
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center',
            margin:'0 auto'}}>

            <Typography sx={{
                textTransform: 'uppercase',
                color: '#FFFFFF',
                fontSize: {xs:'1.6rem',sm:'3.5rem', md:'2.5rem', lg:'calc(2dvw + 3dvh)', xl:'calc(2dvw + 1dvh)'},
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