import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { capitalise } from '../utilities.js';

export default function Pokecard({ name, id, stats, image, ...rest }) {
	return (
		<Card sx={{ maxWidth: '80%', width: '300px' }} {...rest}>
			<CardMedia component='img' alt='pokemon' width='100%' image={image} />
			<CardContent>
				<Typography gutterBottom variant='p' component='div'>
					{`${id}. ${name}`}
				</Typography>
				<Typography variant='body2' color='text.secondary' component='div'>
					{stats.map((stat, index) => (
						<Typography
							key={index}
							variant='p'
							component='p'
							sx={{ marginTop: '2px' }}
						>
							{capitalise(stat.stat.name) + ': ' + stat['base_stat']}
						</Typography>
					))}
				</Typography>
			</CardContent>
		</Card>
	);
}
