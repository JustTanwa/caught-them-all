import { Box } from '@mui/material';
import React from 'react';
import Navlist from './Navlist';

export default function Sidenav() {
	return (
		<Box flex={1} p={1} sx={{ display: { xs: 'none', sm: 'block' } }}>
			<Box position='fixed'>
				<Navlist />
			</Box>
		</Box>
	);
}
