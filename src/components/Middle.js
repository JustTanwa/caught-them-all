import styled from '@emotion/styled';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Checkbox,
	Typography,
} from '@mui/material';
import React, { useState } from 'react';
import Progress from './Progress';
import AddPokemon from './AddPokemon';

export default function Middle() {
	const [pokemons, setPokemons] = useState([]);
	const MyBox = styled(Box)({
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		gap: '1em',
		paddingTop: '1em',
	});

	const updatePokemons = (pokemon) => {
		setPokemons([pokemon, ...pokemons]);
	};
	return (
		<>
			<Box
				position='fixed'
				sx={{
					bottom: 30,
					left: { xs: '50%', sm: 50 },
					transform: { xs: 'translateX(-50%)' },
				}}
			>
				<AddPokemon update={updatePokemons} />
			</Box>

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
					Total Pokemon Caught
				</Typography>
				<MyBox position='relative' sx={{ width: '100%' }}>
					<Progress />
				</MyBox>

				<MyBox>
					<Typography variant='h6' component='p' fontWeight={300}>
						Lastest Pokemon Caught
					</Typography>
					{pokemons.map((pok, index) => (
						<Card sx={{ maxWidth: '80%' }}>
							<CardMedia
								component='img'
								alt={pok.name}
								key={index}
								width='90%'
								image={pok.image}
							/>
							<CardContent>
								<Typography gutterBottom variant='h5' component='div'>
									{`${pok.id}. ${pok.name}`}
								</Typography>
								<Typography variant='body2' color='text.secondary'>
									Lizards are a widespread group of squamate reptiles, with over
									6,000 species, ranging across all continents except Antarctica
								</Typography>
							</CardContent>
							<CardActions>
								<Checkbox
									icon={<FavoriteBorder />}
									checkedIcon={<Favorite />}
								/>
								<Button size='small'>Share</Button>
								<Button size='small'>Learn More</Button>
							</CardActions>
						</Card>
					))}
				</MyBox>
			</Box>
		</>
	);
}
