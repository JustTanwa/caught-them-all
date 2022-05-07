import { Box, createTheme, Stack } from '@mui/material';
import Middle from './components/Middle';
import Sidenav from './components/Sidenav';
import Sidebar from './components/Sidebar';
import Topnav from './components/Topnav';
import { Route, Routes } from 'react-router-dom';
import Collections from './components/Collections';
import Friends from './components/Friends';
import Settings from './components/Settings';
import React, { useState } from 'react';
import { ThemeProvider } from '@emotion/react';

function App() {
	const [darkTheme, setDarkTheme] = useState(false);
	const theme = darkTheme
		? createTheme({
				palette: {
					mode: 'dark',
				},
		  })
		: createTheme({
				palette: {
					primary: {
						main: '#f00',
						light: '#ff9a9a',
					},
					secondary: {
						main: '#ffffff',
					},
					third: {
						main: '#000000',
					},
				},
		  });

	return (
		<ThemeProvider theme={theme}>
			<Box sx={{backgroundColor: theme.palette.background.default, minHeight: "100vh"}}>
				<Topnav />
				<Stack
					direction='row'
					spacing={2}
					justifyContent='center'
					marginTop={2}
				>
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
						<Route
							path='settings'
							element={
								<Settings changeTheme={() => setDarkTheme(!darkTheme)} />
							}
						></Route>
					</Routes>
					<Sidebar />
				</Stack>
			</Box>
		</ThemeProvider>
	);
}

export default App;
