'use client'
import { styled  } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Collapse, useTheme } from '@mui/material';
import { useState } from 'react';
import { KeyboardArrowDown, KeyboardArrowRight} from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import { ChevronDown, ChevronRight } from '@geist-ui/icons';


const menuListTop = [
  {
    text: 'NextJS',
    route: '/nextjs'
  },
  {
    text: 'React',
    route: '/react'
  },
  {
    text: 'Tailwind',
    route: '/tailwind'
  },
  {
    text: 'MUI',
    route: '/mui'
  },
  {
    text: 'Prisma',
    route: '/prisma'
  },
  {
    text: 'Javascript',
    route: '/javascript'
  },
  {
    text: 'PHP',
    route: '/php'
  },
  {
    text: 'Laravel',
    route: '/laravel'
  },
  {
    text: 'Symfony',
    route: '/symfony'
  },
  {
    text: 'Mysql',
    route: '/mysql'
  },
];
const scratchListTitle = "Create from scratch";
const scratchList = [
  {
    text: 'NextJS + Tailwind + MUI',
    route: '/scratch/next'
  },
  {
    text: 'Laravel',
    route: '/scratch/laravel'
  },
  {
    text: 'Symfony',
    route: '/scratch/symfony'
  },
];

const openedMixin = (theme) => ({
  width: 240,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    width: 240,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    variants: [
      {
        props: ({ open }) => open,
        style: {
          ...openedMixin(theme),
          '& .MuiDrawer-paper': openedMixin(theme),
        },
      },
      {
        props: ({ open }) => !open,
        style: {
          ...closedMixin(theme),
          '& .MuiDrawer-paper': closedMixin(theme),
        },
      },
    ],
  }),
);

const ListButton = styled(ListItemButton)(({ theme }) => ({
  color: theme.palette.text.secondary,
  backgroundColor: 'transparent',
  "&:hover": {color: theme.palette.text.primary, backgroundColor: 'transparent'},
  "&.Mui-selected": {color: theme.palette.link, backgroundColor: 'transparent', "&:hover": {color: theme.palette.text.primary, backgroundColor: 'transparent'}}
}));

export default function Menu() {
  const router = useRouter();
  const theme = useTheme();
  const [open, setOpen] = useState(true); // Drawer is shown
  const [selectedIndex, setSelectedIndex] = useState('');
  const [selectedSubmenuIndex, setSelectedSubmenuIndex] = useState('');
  const [scratchlistOpen, setScratchListOpen] = useState(false);

  const handleClic = () => {
    setScratchListOpen(!(scratchlistOpen && selectedIndex !== scratchListTitle) ? !scratchlistOpen : scratchlistOpen)
  }
  

  return (
    <div className='w-1/4 h-[85vh] sticky'>
      <nav className='overflow-y-auto overflow-x-hidden h-[calc(100vh-200px)]'>
        <List sx={{width: 310, paddingLeft: 5}}>

          {menuListTop.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
              <ListButton	selected={selectedIndex === item.text} onClick={() => setSelectedIndex(item.text)}
                sx={open ? { justifyContent: 'initial' } : { justifyContent: 'center' }} dense
              >
                <ListItemText primary={item.text} sx={[ {fontSize: 10} , open ? {opacity: 1} : {opacity: 0}]}
              />
              </ListButton>
          </ListItem>
          ))}

          <ListButton selected={selectedIndex === scratchListTitle} onClick={()=>{ handleClic(); setSelectedIndex(scratchListTitle) }} dense>
            <ListItemText primary={`${scratchListTitle}`} /> {scratchlistOpen ? <ChevronDown size={16}/> : <ChevronRight size={16}/>}
          </ListButton>

          <Collapse in={scratchlistOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {scratchList.map((item) => (
                <ListItemButton
                  component="a"
                  key={item.text}
                  dense
                  selected={selectedIndex === item.text}
                  onClick={() => {
                    setSelectedIndex(item.text);
                    router.push(item.route)
                  }}
                  sx={[{
                    pl: 4,
                    color: 'text.secondary',
                    "&:hover": {color: 'text.primary', backgroundColor: 'transparent'},
                    "&.Mui-selected": {color: 'primary.dark', backgroundColor: 'transparent', "&:hover": {color: 'text.primary', backgroundColor: 'transparent'}}
                    },
                    open ? { justifyContent: 'initial' } : { justifyContent: 'center' }
                  ]}
                >
                    <ListItemText primary={item.text} />
                </ListItemButton>
              ))}
            </List>
          </Collapse>

        </List>
      </nav>
    </div>
  );
}