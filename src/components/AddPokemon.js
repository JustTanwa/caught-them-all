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
} from '@mui/material';
import React, { useState } from 'react';

export default function AddPokemon() {
	const [open, setOpen] = useState(false);

	const toggleOpen = () => {
		setOpen(!open);
	};
	const style = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 400,
		height: 280,
		bgcolor: '#fff',
		border: '2px solid #000',
		borderRadius: 5,
		boxShadow: 24,
		p: 4,
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
						<FormControl fullWidth variant='standard'>
							<InputLabel htmlFor='standard-adornment-search'>
								Search
							</InputLabel>
							<Input
								id='standard-adornment-search'
								startAdornment={
									<InputAdornment position='start'>
										<SearchIcon />
									</InputAdornment>
								}
							/>
						</FormControl>
					</Box>
				</Fade>
			</Modal>
		</>
	);
}
