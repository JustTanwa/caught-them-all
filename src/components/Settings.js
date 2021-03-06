import { Brightness4, Brightness7 } from '@mui/icons-material';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import React from 'react';

export default function Settings({ changeTheme, darkTheme }) {
	const theme = useTheme();
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
				sx={{ color: theme.palette.text.primary }}
			>
				Settings
			</Typography>
			<Box
				sx={{
					display: 'flex',
					width: '100%',
					alignItems: 'center',
					justifyContent: 'space-around',
					bgcolor: 'background.default',
					color: 'text.primary',
					borderRadius: 1,
					p: 3,
				}}
			>
				<Typography variant='p'>Toggle light and dark mode</Typography>
				<IconButton sx={{ ml: 1 }} color='inherit' onClick={changeTheme}>
					{darkTheme? <Brightness7 />:<Brightness4 />}
				</IconButton>
			</Box>
		</Box>
	);
}
