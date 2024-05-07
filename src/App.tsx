import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import AutoTopUpSettings from './components/AutoTopUpSettings';

function App() {
    return (
        <Box minHeight={'100vh'} display={'flex'} justifyContent={'start'} alignItems={'start'}>
            <Container>
                <AutoTopUpSettings />
            </Container>
        </Box>

    );
}

export default App;
