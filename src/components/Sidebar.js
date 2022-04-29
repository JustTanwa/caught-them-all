import { CompareArrows, Image } from '@mui/icons-material';
import {
	Avatar,
	Box,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Typography,
} from '@mui/material';
import React from 'react';

export default function Sidebar() {
	return (
		<Box
			flex={2}
			p={1}
			sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}
		>
			<Box position='fixed'>
				<Typography
					variant='h6'
					fontWeight={300}
					marginBottom={2}
					marginTop={2}
				>
					Lastest trades
				</Typography>
				<List
					sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
				>
					<ListItem sx={{ display: 'flex', flexDirection: 'column' }}>
						<Box
							display='flex'
							direction='row'
							justifyContent='space-between'
							alignItems='center'
							width={'100%'}
						>
							<Avatar>
								<Image />
							</Avatar>
							<CompareArrows fontSize='large' />
							<Avatar>
								<Image />
							</Avatar>
						</Box>
						<ListItemText primary='Trade' secondary='A traded Pokemon with B' />
					</ListItem>
					<ListItem sx={{ display: 'flex', flexDirection: 'column' }}>
						<Box
							display='flex'
							direction='row'
							justifyContent='space-between'
							alignItems='center'
							width={'100%'}
						>
							<Avatar>
								<Image />
							</Avatar>
							<CompareArrows fontSize='large' />
							<Avatar>
								<Image />
							</Avatar>
						</Box>
						<ListItemText primary='Trade' secondary='A traded Pokemon with B' />
					</ListItem>
					<ListItem sx={{ display: 'flex', flexDirection: 'column' }}>
						<Box
							display='flex'
							direction='row'
							justifyContent='space-between'
							alignItems='center'
							width={'100%'}
						>
							<Avatar>
								<Image />
							</Avatar>
							<CompareArrows fontSize='large' />
							<Avatar>
								<Image />
							</Avatar>
						</Box>
						<ListItemText primary='Trade' secondary='A traded Pokemon with B' />
					</ListItem>
					<ListItem sx={{ display: 'flex', flexDirection: 'column' }}>
						<Box
							display='flex'
							direction='row'
							justifyContent='space-between'
							alignItems='center'
							width={'100%'}
						>
							<Avatar>
								<Image />
							</Avatar>
							<CompareArrows fontSize='large' />
							<Avatar>
								<Image />
							</Avatar>
						</Box>
						<ListItemText primary='Trade' secondary='A traded Pokemon with B' />
					</ListItem>
				</List>
			</Box>
		</Box>
	);
}
