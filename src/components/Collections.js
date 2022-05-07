import { Box, Grid, Typography, useTheme } from '@mui/material';
import React from 'react';
import Pokecard from './Pokecard';
import useLocalStorage from '../hooks/useLocalStorage';

export default function Collections() {
	const [pokemons, setPokemons] = useLocalStorage('pokemons');
	const theme = useTheme();
	return (
		<>
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
					Your collection
				</Typography>
				<Grid item xs={12}>
					<Grid container justifyContent='center' spacing={2}>
						{pokemons.map((pokemon) => (
							<Grid
								key={pokemon.name}
								item
								display='flex'
								justifyContent='center'
								sx={{ width: 300 }}
							>
								<Pokecard
									name={pokemon.name}
									id={pokemon.id}
									image={pokemon.sprite}
									stats={pokemon.stats}
								/>
							</Grid>
						))}
					</Grid>
				</Grid>
			</Box>
		</>
	);
}
