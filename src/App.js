import { Box, Stack } from '@mui/material';
import Middle from './components/Middle';
import Sidenav from './components/Sidenav';
import Sidebar from './components/Sidebar';
import Topnav from './components/Topnav';

function App() {
	return (
		<Box sx={{ background: 'red' }}>
			<Topnav />
			<Stack direction='row' spacing={2} justifyContent='center'>
				<Sidenav />
				<Middle />
				<Sidebar />
			</Stack>
		</Box>
	);
}

export default App;
