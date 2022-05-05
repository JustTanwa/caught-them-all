import { Search } from '@mui/icons-material';
import {
	Avatar,
	Box,
	FormControl,
	Input,
	InputAdornment,
	InputLabel,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Typography,
} from '@mui/material';
import React, { useState } from 'react';

export default function Friends() {
	const allFriends = [
		{
			id: 1,
			name: 'John Smith',
			img: '',
			description: 'Some form of description',
		},
		{
			id: 2,
			name: 'Jane Smith',
			img: '',
			description: 'Some form of description',
		},
		{
			id: 3,
			name: 'John John',
			img: '',
			description: 'Some form of description',
		},
		{
			id: 4,
			name: 'Jane James',
			img: '',
			description: 'Some form of description',
		},
		{
			id: 5,
			name: 'Tom Jones',
			img: '',
			description: 'Some form of description',
		},
		{
			id: 6,
			name: 'Alex Yolo',
			img: '',
			description: 'Some form of description',
		},
		{
			id: 7,
			name: 'Brian Damn',
			img: '',
			description: 'Some form of description',
		},
	];

	const [friends, setFriends] = useState(allFriends);

	const handleChange = (e) => {
		const filtered = allFriends.filter((person) =>
			person.name.toLowerCase().includes(e.target.value.toLowerCase())
		);
		setFriends(filtered);
	};
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
				Your friends
			</Typography>

			<FormControl variant='standard' sx={{ mt: 2, width: 'min(400px, 80%)' }}>
				<InputLabel htmlFor='standard-adornment-search'>Search</InputLabel>
				<Input
					id='standard-adornment-search'
					onChange={handleChange}
					startAdornment={
						<InputAdornment position='start'>
							<Search />
						</InputAdornment>
					}
				/>
			</FormControl>
			<List
				sx={{
					width: '100%',
					mt: 2,
					display: 'flex',
					flexWrap: 'wrap',
					justifyContent: { xs: 'center', sm: 'flex-start' },
				}}
			>
				{friends.map((person) => (
					<ListItem key={person.id} sx={{ flex: '0 0 300px' }}>
						<ListItemAvatar>
							<Avatar alt='profile image' src='' />
						</ListItemAvatar>
						<ListItemText
							primary={person.name}
							secondary={person.description}
						/>
					</ListItem>
				))}
			</List>
		</Box>
	);
}
