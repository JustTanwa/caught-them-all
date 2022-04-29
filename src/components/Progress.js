import { Box, CircularProgress, Typography } from '@mui/material';
import React from 'react';

export default function Progress() {
	return (
		<>
			<CircularProgress
				variant='determinate'
				value={70}
				text={'70%'}
				strokeWidth={2}
				style={{ width: '80%', height: 'auto' }}
			/>
			<Box
				sx={{
					top: 0,
					left: 0,
					bottom: 0,
					right: 0,
					position: 'absolute',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Typography
					variant='caption'
					component='div'
					color='text.secondary'
					fontSize='3em'
				>
					{`${Math.round(70)}%`}
				</Typography>
			</Box>
		</>
	);
}
