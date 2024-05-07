import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import AutoTopUpSwitch from './AutoTopUpSwitch';
import CreditSlider from './CreditSlider';
import { AutoTopUpSettingContext, AutoTopUpSettingContextType } from '../context/AutoTopUpSettingsContext';

const AutoTopUpSettings: React.FC = () => {
    const { autoTopUp } = useContext(AutoTopUpSettingContext) as AutoTopUpSettingContextType;

    return (
        <Box width={'900px'} marginTop={20} padding={5} display={'flex'} flexDirection={'column'} alignItems={'start'} justifyContent={'start'} gap={0.5} border={1} borderColor={'theme.palette.background.grey'} borderRadius={4}>
            <AutoTopUpSwitch />
            {
                autoTopUp
                &&
                <CreditSlider />
            }
        </Box >
    )
}

export default AutoTopUpSettings;
