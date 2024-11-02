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


const scratchList = [
  {
    text: 'NextJS + Tailwind + MUI',
    route: '/next'
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
    text: 'Others',
    route: '/others'
  },
];
const menuList = [
  {
    text: 'Javascript',
    route: '/javascript'
  },
  {
    text: 'NextJS',
    route: '/nextjs'
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
    route: '/lmysql'
  },
  {
    text: 'Prisma',
    route: '/prisma'
  },
  {
    text: 'MUI',
    route: '/mui'
  },
  {
    text: 'Tailwind',
    route: '/tailwind'
  },
];
const scratch = "App create from scratch";

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

export default function Menu() {
  const theme = useTheme();
  const [open, setOpen] = useState(true); // Drawer is shown
  const [selectedIndex, setSelectedIndex] = useState('');
  const [listOpen, setListOpen] = useState(false); // list item
  
  return (
    <div className='w-1/4 h-[85vh] sticky top-32'>   
      <nav className='overflow-y-auto h-[calc(100vh-260px)]'>
        <List sx={{width: 260 }}>
          {menuList.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton	dense selected={selectedIndex === item.text} onClick={() => setSelectedIndex(item.text)}
                sx={[{
                    color: 'text.secondary',
                    "&:hover": {color: 'text.primary', backgroundColor: 'transparent'},
                    "&.Mui-selected": {color: 'primary.dark', backgroundColor: 'transparent', "&:hover": {color: 'text.primary', backgroundColor: 'transparent'}}
                    },
                    open ? { justifyContent: 'initial' } : { justifyContent: 'center' }
                ]}
              >
                  <ListItemText primary={item.text} sx={[ {fontSize: 10} , open ? {opacity: 1} : {opacity: 0}]}
              />
              </ListItemButton>
          </ListItem>
          ))}
          <ListItemButton dense selected={selectedIndex === scratch} onClick={() => {setListOpen(!listOpen)}}
            sx={{
              color: 'text.secondary',
              backgroundColor: 'transparent',
              "&:hover": {color: 'text.primary', backgroundColor: 'transparent'}
            }}>
            <ListItemText primary={`${scratch}`} />
            {listOpen ? <KeyboardArrowDown /> : <KeyboardArrowRight />}
          </ListItemButton>
          <Collapse in={listOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {scratchList.map((item) => (
                <ListItemButton  
                  component="a"
                  to={`${item.route}`}             
                  key={item.text} 
                  dense 
                  selected={selectedIndex === item.text} 
                  onClick={() => setSelectedIndex(item.text)}
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
        <List sx={{width: 260 }}>
          {menuList.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton	dense selected={selectedIndex === item.text} onClick={() => setSelectedIndex(item.text)}
                sx={[{
                    color: 'text.secondary',
                    "&:hover": {color: 'text.primary', backgroundColor: 'transparent'},
                    "&.Mui-selected": {color: 'primary.dark', backgroundColor: 'transparent', "&:hover": {color: 'text.primary', backgroundColor: 'transparent'}}
                    },
                    open ? { justifyContent: 'initial' } : { justifyContent: 'center' }
                ]}
              >
                  <ListItemText primary={item.text} sx={[ {fontSize: 10} , open ? {opacity: 1} : {opacity: 0}]}
              />
              </ListItemButton>
          </ListItem>
          ))}
          <ListItemButton dense selected={selectedIndex === scratch} onClick={() => {setListOpen(!listOpen)}}
            sx={{
              color: 'text.secondary',
              backgroundColor: 'transparent',
              "&:hover": {color: 'text.primary', backgroundColor: 'transparent'}
            }}>
            <ListItemText primary={`${scratch}`} />
            {listOpen ? <KeyboardArrowDown /> : <KeyboardArrowRight />}
          </ListItemButton>
          <Collapse in={listOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {scratchList.map((item) => (
                <ListItemButton  
                  component="a"
                  to={`${item.route}`}             
                  key={item.text} 
                  dense 
                  selected={selectedIndex === item.text} 
                  onClick={() => setSelectedIndex(item.text)}
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
        <List sx={{width: 260 }}>
          {menuList.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton	dense selected={selectedIndex === item.text} onClick={() => setSelectedIndex(item.text)}
                sx={[{
                    color: 'text.secondary',
                    "&:hover": {color: 'text.primary', backgroundColor: 'transparent'},
                    "&.Mui-selected": {color: 'primary.dark', backgroundColor: 'transparent', "&:hover": {color: 'text.primary', backgroundColor: 'transparent'}}
                    },
                    open ? { justifyContent: 'initial' } : { justifyContent: 'center' }
                ]}
              >
                  <ListItemText primary={item.text} sx={[ {fontSize: 10} , open ? {opacity: 1} : {opacity: 0}]}
              />
              </ListItemButton>
          </ListItem>
          ))}
          <ListItemButton dense selected={selectedIndex === scratch} onClick={() => {setListOpen(!listOpen)}}
            sx={{
              color: 'text.secondary',
              backgroundColor: 'transparent',
              "&:hover": {color: 'text.primary', backgroundColor: 'transparent'}
            }}>
            <ListItemText primary={`${scratch}`} />
            {listOpen ? <KeyboardArrowDown /> : <KeyboardArrowRight />}
          </ListItemButton>
          <Collapse in={listOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {scratchList.map((item) => (
                <ListItemButton  
                  component="a"
                  to={`${item.route}`}             
                  key={item.text} 
                  dense 
                  selected={selectedIndex === item.text} 
                  onClick={() => setSelectedIndex(item.text)}
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