import styled from '@emotion/styled';
import { Add, Search as SearchIcon } from '@mui/icons-material';
import {
	Backdrop,
	Box,
	Fab,
	Fade,
	FormControl,
	Input,
	InputAdornment,
	InputBase,
	InputLabel,
	Modal,
	TextField,
	Tooltip,
	Typography,
	Search,
	LinearProgress,
} from '@mui/material';
import React, { useState } from 'react';
import Pokecard from './Pokecard';

export default function AddPokemon() {
	const [open, setOpen] = useState(false);
	const [pokemons, setPokemons] = useState(null);
	const [searchParam, setSearchParam] = useState(null);
	const [loading, setLoading] = useState(false);

	const toggleOpen = () => {
		setOpen(!open);
	};
	const style = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: { xs: '80%', sm: 400 },
		minHeight: 280,
		bgcolor: '#fff',
		border: '2px solid #000',
		borderRadius: 5,
		boxShadow: 24,
		p: 4,
	};

	const handleChange = (e) => {
		setSearchParam(e.target.value);
	};
	const onEnter = (e) => {
		if (e.key === 'Enter') {
			fetchPokemon(searchParam);
			e.target.value = '';
		}
	};

	const fetchPokemon = async (pokemonName) => {
		if (!pokemonName || pokemonName === ' ') return;
		pokemonName = pokemonName.toLowerCase();
		setLoading(true);
		const response = await fetch(
			`https://pokeapi.co/api/v2/pokemon/${pokemonName}`
		);
		if (!response.ok && response.status >= 400) {
			console.log('Unable to find pokemon');
		} else {
			const data = await response.json();
			const { id, name, stats, sprites } = data;
			setPokemons({
				name: name[0].toUpperCase() + name.slice(1),
				id,
				sprite: sprites['front_default'],
				image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
				stats,
			});
		}

		setLoading(false);
	};

	return (
		<>
			<Tooltip title='Add a new Pokemon' onClick={toggleOpen}>
				<Fab color='primary' aria-label='add'>
					<Add />
				</Fab>
			</Tooltip>
			<Modal
				aria-labelledby='transition-modal-title'
				aria-describedby='transition-modal-description'
				open={open}
				onClose={toggleOpen}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={open}>
					<Box sx={style}>
						<Typography
							id='transition-modal-title'
							variant='h6'
							component='h2'
							fontWeight={400}
						>
							Did you catch a new Pokemon?
						</Typography>
						<FormControl fullWidth variant='standard' sx={{ mt: 2 }}>
							<InputLabel htmlFor='standard-adornment-search'>
								Search
							</InputLabel>
							<Input
								id='standard-adornment-search'
								onChange={handleChange}
								onKeyDown={onEnter}
								startAdornment={
									<InputAdornment position='start'>
										<SearchIcon />
									</InputAdornment>
								}
							/>
						</FormControl>
						{loading && (
							<Box sx={{ width: '80%', padding: '10%' }}>
								<LinearProgress />
							</Box>
						)}
						{pokemons && (
							<Box
								sx={{
									display: 'flex',
									width: '100%',
									justifyContent: 'center',
									paddingTop: 3,
								}}
							>
								<Pokecard
									name={pokemons.name}
									id={pokemons.id}
									image={pokemons.sprite}
									stats={pokemons.stats}
								/>
							</Box>
						)}
					</Box>
				</Fade>
			</Modal>
		</>
	);
}
