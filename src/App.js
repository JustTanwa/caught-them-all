import { Box, Stack } from '@mui/material';
import Middle from './components/Middle';
import Sidenav from './components/Sidenav';
import Sidebar from './components/Sidebar';
import Topnav from './components/Topnav';
import { Outlet, Route, Routes } from 'react-router-dom';
import Collections from './components/Collections';
import Friends from './components/Friends';

function App() {
	return (
		<Box>
			<Topnav />
			<Stack direction='row' spacing={2} justifyContent='center' marginTop={2}>
				<Sidenav />
				<Routes>
					<Route
						path='/'
						element={
							<>
								<Middle />
							</>
						}
					></Route>
					<Route path='collections' element={<Collections />}></Route>
					<Route path='friends' element={<Friends />}></Route>
				</Routes>
				<Sidebar />
			</Stack>
		</Box>
	);
}

export default App;
