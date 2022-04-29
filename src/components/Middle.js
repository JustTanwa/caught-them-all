import styled from '@emotion/styled';
import {
	ExpandMore,
	Favorite,
	FavoriteBorder,
	MoreVert,
	Share,
} from '@mui/icons-material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Checkbox,
	IconButton,
	Typography,
} from '@mui/material';
import React from 'react';
import Progress from './Progress';
import AddPokemon from './AddPokemon';

export default function Middle() {
	const MyBox = styled(Box)({
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		gap: '1em',
		paddingTop: '1em',
	});
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
				<AddPokemon />
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
					<Card sx={{ maxWidth: '80%' }}>
						<CardMedia
							component='img'
							alt='green iguana'
							width='100%'
							image='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png'
						/>
						<CardContent>
							<Typography gutterBottom variant='h5' component='div'>
								Lizard
							</Typography>
							<Typography variant='body2' color='text.secondary'>
								Lizards are a widespread group of squamate reptiles, with over
								6,000 species, ranging across all continents except Antarctica
							</Typography>
						</CardContent>
						<CardActions>
							<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
							<Button size='small'>Share</Button>
							<Button size='small'>Learn More</Button>
						</CardActions>
					</Card>

					<Card sx={{ maxWidth: '80%' }}>
						<CardMedia
							component='img'
							alt='green iguana'
							width='90%'
							image='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png'
						/>
						<CardContent>
							<Typography gutterBottom variant='h5' component='div'>
								Lizard
							</Typography>
							<Typography variant='body2' color='text.secondary'>
								Lizards are a widespread group of squamate reptiles, with over
								6,000 species, ranging across all continents except Antarctica
							</Typography>
						</CardContent>
						<CardActions>
							<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
							<Button size='small'>Share</Button>
							<Button size='small'>Learn More</Button>
						</CardActions>
					</Card>

					<Card sx={{ maxWidth: '80%' }}>
						<CardMedia
							component='img'
							alt='green iguana'
							width='80%'
							image='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png'
						/>
						<CardContent>
							<Typography gutterBottom variant='h5' component='div'>
								Lizard
							</Typography>
							<Typography variant='body2' color='text.secondary'>
								Lizards are a widespread group of squamate reptiles, with over
								6,000 species, ranging across all continents except Antarctica
							</Typography>
						</CardContent>
						<CardActions>
							<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
							<Button size='small'>Share</Button>
							<Button size='small'>Learn More</Button>
						</CardActions>
					</Card>
				</MyBox>
			</Box>
		</>
	);
}
