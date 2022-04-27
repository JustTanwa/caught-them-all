import {
	Box,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from '@mui/material';
import {
	Backpack,
	Bolt,
	Home,
	Person,
	Settings,
	Star,
} from '@mui/icons-material';
import React from 'react';

export default function Sidenav() {
	return (
		<Box
			bgcolor={'pink'}
			flex={1}
			p={1}
			sx={{ display: { xs: 'none', sm: 'block' } }}
		>
			<List>
				<ListItem disablePadding>
					<ListItemButton component='a' href='/'>
						<ListItemIcon>
							<Home />
						</ListItemIcon>
						<ListItemText primary='Home' />
					</ListItemButton>
				</ListItem>
				<ListItem disablePadding>
					<ListItemButton>
						<ListItemIcon>
							<Backpack />
						</ListItemIcon>
						<ListItemText primary='Collections' />
					</ListItemButton>
				</ListItem>
				<ListItem disablePadding>
					<ListItemButton>
						<ListItemIcon>
							<Person />
						</ListItemIcon>
						<ListItemText primary='Friends' />
					</ListItemButton>
				</ListItem>
				<ListItem disablePadding>
					<ListItemButton>
						<ListItemIcon>
							<Star />
						</ListItemIcon>
						<ListItemText primary='Wishlist' />
					</ListItemButton>
				</ListItem>
				<ListItem disablePadding>
					<ListItemButton>
						<ListItemIcon>
							<Bolt />
						</ListItemIcon>
						<ListItemText primary='Activities' />
					</ListItemButton>
				</ListItem>
				<ListItem disablePadding>
					<ListItemButton>
						<ListItemIcon>
							<Settings />
						</ListItemIcon>
						<ListItemText primary='Settings' />
					</ListItemButton>
				</ListItem>
			</List>
		</Box>
	);
}
