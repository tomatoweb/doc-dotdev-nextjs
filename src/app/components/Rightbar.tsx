'use client'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const menuList = [
	{
		text: '/posts-orm',
		route: '/posts-orm'
	},
	{
		text: '/posts-api',
		route: '/posts-api'
	},
	{
		text: '/posts-action',
		route: '/posts-action'
	},
];

export default function Menu() {
	const router = useRouter();
	const [selectedIndex, setSelectedIndex] = useState('');

	return (
		<div className='w-1/4 h-[84vh] sticky top-32 hidden lg:flex'>
			<nav className='overflow-y-auto overflow-x-hidden h-[calc(100vh-200px)]'>
				<List sx={{ width: 260 }}>
					<div className='ml-5 mb-4'>Sandbox</div>
					{menuList.map((item) => (
						<ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
							<ListItemButton
								dense
								selected={selectedIndex === item.text}
								onClick={() => {
									setSelectedIndex(item.text);
									router.push(item.route)
								}}
								sx={[{
									color: 'text.secondary',
									justifyContent: 'initial',
									"&:hover": { color: 'text.primary', backgroundColor: 'transparent' },
									"&.Mui-selected": { color: 'primary.dark', backgroundColor: 'transparent', "&:hover": { color: 'text.primary', backgroundColor: 'transparent' } }
								},
								]}
							>
								<ListItemText primary={item.text} sx={[{ fontSize: 10 }, { opacity: 1 }]}
								/>
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</nav>
		</div>

	);
}