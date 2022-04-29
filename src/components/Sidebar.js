import { Box, Typography } from '@mui/material';
import React from 'react';

export default function Sidebar() {
	return (
		<Box
			flex={2}
			p={1}
			sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}
		>
			<Box position='fixed'>
				<Typography
					variant='h6'
					fontWeight={300}
					marginBottom={2}
					marginTop={2}
				>
					Lastest trades
				</Typography>
			</Box>
		</Box>
	);
}
