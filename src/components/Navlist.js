import React from 'react';
import {
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	useTheme,
} from '@mui/material';
import { Backpack, Home, Person, Settings } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function Navlist() {
	const theme = useTheme();
	console.log(theme);
	return (
		<List>
			<ListItem disablePadding>
				<ListItemButton component={Link} to={'/'}>
					<ListItemIcon>
						<Home />
					</ListItemIcon>
					<ListItemText
						primary='Home'
						sx={{ color: theme.palette.text.primary }}
					/>
				</ListItemButton>
			</ListItem>
			<ListItem disablePadding>
				<ListItemButton component={Link} to={'collections'}>
					<ListItemIcon>
						<Backpack />
					</ListItemIcon>
					<ListItemText
						primary='Collections'
						sx={{ color: theme.palette.text.primary }}
					/>
				</ListItemButton>
			</ListItem>
			<ListItem disablePadding>
				<ListItemButton component={Link} to={'friends'}>
					<ListItemIcon>
						<Person />
					</ListItemIcon>
					<ListItemText
						primary='Friends'
						sx={{ color: theme.palette.text.primary }}
					/>
				</ListItemButton>
			</ListItem>
			<ListItem disablePadding>
				<ListItemButton component={Link} to={'settings'}>
					<ListItemIcon>
						<Settings />
					</ListItemIcon>
					<ListItemText
						primary='Settings'
						sx={{ color: theme.palette.text.primary }}
					/>
				</ListItemButton>
			</ListItem>
		</List>
	);
}
