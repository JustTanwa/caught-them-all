import { CatchingPokemon, Mail, Notifications } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import {
	AppBar,
	Avatar,
	Badge,
	Box,
	IconButton,
	MenuItem,
	styled,
	Toolbar,
	Typography,
} from '@mui/material';
import React, { useState } from 'react';
import Menu from '@mui/material/Menu';

export default function Topnav() {
	const [open, setOpen] = useState(false);
	const openMenu = () => {
		setOpen(true);
	};
	const closeMenu = () => {
		setOpen(false);
	};
	const MyToolBar = styled(Toolbar)({
		display: 'flex',
		justifyContent: 'space-between',
	});

	const Icons = styled(Box)(({ theme }) => ({
		width: '20%',
		display: 'none',
		justifyContent: 'center',
		alignItems: 'center',
		gap: 20,
		[theme.breakpoints.up('sm')]: {
			display: 'flex',
		},
	}));

	const AvatarBox = styled(Box)(({ theme }) => ({
		display: 'flex',
		alignItems: 'center',
		[theme.breakpoints.up('sm')]: {
			display: 'none',
		},
	}));

	const MyIconButton = styled(IconButton)(({ theme }) => ({
		visibility: 'visible',
		[theme.breakpoints.up('sm')]: {
			visibility: 'hidden',
		},
	}));
	return (
		<AppBar position='sticky'>
			<MyToolBar>
				<MyIconButton
					size='large'
					edge='start'
					color='inherit'
					aria-label='menu'
					sx={{ mr: 2 }}
				>
					<MenuIcon />
				</MyIconButton>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
					}}
				>
					<CatchingPokemon fontSize='large' />
					<Typography variant='h6' component={'h1'}>
						Caught Them All
					</Typography>
				</Box>
				<Icons>
					<Badge badgeContent={4} color='secondary'>
						<Mail color='#000' />
					</Badge>
					<Badge badgeContent={2} color='secondary'>
						<Notifications color='#000' />
					</Badge>
					<Avatar sx={{ width: 30, height: 30 }} onClick={openMenu}></Avatar>
				</Icons>
				<AvatarBox onClick={openMenu}>
					<Avatar sx={{ width: 30, height: 30 }}></Avatar>
				</AvatarBox>
				<Menu
					id='positioned-menu'
					aria-labelledby='positioned-button'
					open={open}
					onClose={closeMenu}
					anchorOrigin={{
						vertical: 'top',
						horizontal: 'right',
					}}
					transformOrigin={{
						vertical: 'top',
						horizontal: 'right',
					}}
				>
					<MenuItem onClick={closeMenu}>Profile</MenuItem>
					<MenuItem onClick={closeMenu}>My account</MenuItem>
					<MenuItem onClick={closeMenu}>Logout</MenuItem>
				</Menu>
			</MyToolBar>
		</AppBar>
	);
}
