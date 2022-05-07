import React from 'react';
import {
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from '@mui/material';
import {
	Backpack,
	Home,
	Person,
	Settings,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function Navlist() {
	return (
		<List>
			<ListItem disablePadding>
				<ListItemButton component={Link} to={'/'}>
					<ListItemIcon>
						<Home />
					</ListItemIcon>
					<ListItemText primary='Home' />
				</ListItemButton>
			</ListItem>
			<ListItem disablePadding>
				<ListItemButton component={Link} to={'collections'}>
					<ListItemIcon>
						<Backpack />
					</ListItemIcon>
					<ListItemText primary='Collections' />
				</ListItemButton>
			</ListItem>
			<ListItem disablePadding>
				<ListItemButton component={Link} to={'friends'}>
					<ListItemIcon>
						<Person />
					</ListItemIcon>
					<ListItemText primary='Friends' />
				</ListItemButton>
			</ListItem>
			<ListItem disablePadding>
				<ListItemButton component={Link} to={'settings'}>
					<ListItemIcon>
						<Settings />
					</ListItemIcon>
					<ListItemText primary='Settings' />
				</ListItemButton>
			</ListItem>
		</List>
	);
}
