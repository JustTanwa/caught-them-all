import { Box } from '@mui/material';
import React from 'react';

export default function Sidenav() {
	return (
		<Box
			bgcolor={'pink'}
			flex={1}
			p={1}
			sx={{ display: { xs: 'none', sm: 'block' } }}
		>
			Sidenav
		</Box>
	);
}
