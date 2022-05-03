import { Box, Stack } from '@mui/material';
import Middle from './components/Middle';
import Sidenav from './components/Sidenav';
import Sidebar from './components/Sidebar';
import Topnav from './components/Topnav';
import { Outlet, Route, Routes } from 'react-router-dom';
import Collections from './components/Collections';

function App() {
	return (
		<Box>
			<Topnav />
			<Routes>
				<Route
					path='/'
					element={
						<Stack
							direction='row'
							spacing={2}
							justifyContent='center'
							marginTop={2}
						>
							<Sidenav />
							<Outlet />
							<Middle />
							<Sidebar />
						</Stack>
					}
				></Route>
				<Route path='collections' element={<Collections />}></Route>
			</Routes>
		</Box>
	);
}

export default App;
