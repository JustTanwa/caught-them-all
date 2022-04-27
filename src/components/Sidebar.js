import { Box } from '@mui/material';
import React from 'react';

export default function Sidebar() {
	return (
		<Box
			bgcolor={'skyblue'}
			flex={2}
			p={1}
			sx={{ display: { xs: 'none', sm: 'block' } }}
		>
			Sidebar
		</Box>
	);
}
