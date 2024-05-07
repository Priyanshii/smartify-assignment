import React, { useContext } from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { CustomSwitch } from '../styles/CustomSwitch';
import { AutoTopUpSettingContext, AutoTopUpSettingContextType } from '../context/AutoTopUpSettingsContext';

const AutoTopUpSwitch: React.FC = () => {
    const { autoTopUp, toggleAutoTopUp } = useContext(AutoTopUpSettingContext) as AutoTopUpSettingContextType;

    return (
        <Grid container display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'start'} gap={'16px'}>
            <Typography variant='h5' color={'text.dark'}>
                Setup Auto Top-up
            </Typography>
            <CustomSwitch
                checked={autoTopUp}
                onChange={(event) => { toggleAutoTopUp(event.target.checked) }}
            />
        </Grid>
    )
}

export default AutoTopUpSwitch;
