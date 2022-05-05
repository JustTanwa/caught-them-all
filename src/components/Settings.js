import { Box, Typography } from '@mui/material';
import React from 'react';

export default function Settings() {
	return (
		<Box
			p={1}
			flex={3}
			justifyContent='center'
			alignItems='center'
			display='flex'
			flexDirection={'column'}
		>
			<Typography
				variant='h6'
				component='p'
				marginBottom={2}
				marginTop={2}
				fontWeight={300}
			>
				Settings
			</Typography>{' '}
		</Box>
	);
}
