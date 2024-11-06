'use client'
import { styled  } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Collapse, useTheme } from '@mui/material';
import { useState } from 'react';
import { KeyboardArrowDown, KeyboardArrowRight, Opacity} from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import { ChevronDown, ChevronRight } from '@geist-ui/icons';


const scratchListTitle = { text:"Create from scratch", route: '/scratch'};
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
const muiListTitle = { text:"MUI", route: '/mui'};
const muiList = [
  {
    text: 'Theme',
    route: '/mui/theme'
  },
  {
    text: 'sx versus styled',
    route: '/mui/versus'
  },
  {
    text: 'Custom colors',
    route: '/mui/color'
  },
  {
    text: 'Custom fonts',
    route: '/mui/fonts'
  },
  {
    text: 'MUI X Tree View',
    route: '/mui/xtreeview'
  },
];
const tailwindListTitle = { text:"Tailwind", route: '/tailwind'};
const tailwindList = [
  {
    text: 'Custom colors',
    route: '/tailwind/color'
  },
  {
    text: 'Custom fonts',
    route: '/tailwind/fonts'
  },
];
const nextjsListTitle = { text:"NextJS", route: '/nextjs'};
const nextjsList = [
  {
    text: 'Deploy a NextJS app on Linux',
    route: '/nextjs/deploy'
  },
  {
    text: 'SyntaxHighlighter CodeBlock',
    route: '/nextjs/syntax'
  },
  {
    text: 'Thiny Scrollbar',
    route: '/nextjs/scrollbar'
  },
];
const debianListTitle = { text:"Debian 11", route: '/debian'};
const debianList = [
  {
    text: 'Reinstall from scratch',
    route: '/debian/reinstall'
  },
  {
    text: 'Add a subdomain',
    route: '/debian/subdomain'
  },
];
const sqliteListTitle = { text:"SQLite", route: '/sqlite'};
const sqliteList = [
  {
    text: 'Install and use',
    route: '/sqlite/install'
  },
];
const mainList = [
  {
    text: 'Versioning',
    route: '/versioning'
  },
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
    text: 'Code Block',
    route: '/codeblock'
  },
  {
    text: 'Scrollbar thiny',
    route: '/scrollbar'
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
    text: 'Cmder',
    route: '/cmder'
  },
  {
    text: 'Mysql',
    route: '/mysql'
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
    text: 'Cmder',
    route: '/cmder'
  },
  {
    text: 'Mysql',
    route: '/mysql'
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
  "&.Mui-selected": {
      color: theme.palette.link, backgroundColor: 'transparent', 
      "&:hover": {backgroundColor: 'transparent'},
  }
}));

export default function Menu() {
  const router = useRouter();
  const theme = useTheme();
  const [open, setOpen] = useState(true); // Drawer is shown
  const [selectedIndex, setSelectedIndex] = useState('');
  const [scratchListOpen, setScratchListOpen] = useState(false);  
  const [muiListOpen, setMuiListOpen] = useState(false);  
  const [tailwindListOpen, setTailwindListOpen] = useState(false);  
  const [nextjsListOpen, setNextjsListOpen] = useState(false);  
  const [debianListOpen, setDebianListOpen] = useState(false);  
  const [sqliteListOpen, setSqliteListOpen] = useState(false);  

  return (
    <div className='w-1/4 h-[84vh] sticky top-32 hidden lg:flex'>
      <nav className='overflow-y-auto overflow-x-hidden h-[calc(100vh-200px)]'>
        <List sx={{width: 310, paddingLeft: 5}}>

          <ListItemButton onClick={()=>{ setScratchListOpen(!scratchListOpen) }} disableRipple dense>
            <ListItemText primary={`${scratchListTitle.text}`} /> {scratchListOpen ? <ChevronDown size={16}/> : <ChevronRight size={16}/>}
          </ListItemButton>
          <Collapse in={scratchListOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {scratchList.map((item) => (
                <ListButton
                  disableRipple
                  component="a"
                  key={item.text}
                  dense
                  selected={selectedIndex === item.route}
                  onClick={() => {
                    setSelectedIndex(item.route);
                    router.push(item.route)
                  }}
                  sx={[{pl: 4,}, open ? { justifyContent: 'initial' } : { justifyContent: 'center' }]}
                >
                  <ListItemText primary={item.text} />
                </ListButton>
              ))}
            </List>
          </Collapse>

          <ListItemButton onClick={()=>{ setMuiListOpen(!muiListOpen) }} disableRipple dense>
            <ListItemText primary={`${muiListTitle.text}`} /> {muiListOpen ? <ChevronDown size={16}/> : <ChevronRight size={16}/>}
          </ListItemButton>
          <Collapse in={muiListOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {muiList.map((item) => (
                <ListButton
                  disableRipple
                  component="a"
                  key={item.text}
                  dense
                  selected={selectedIndex === item.route}
                  onClick={() => {
                    setSelectedIndex(item.route);
                    router.push(item.route)
                  }}
                  sx={[{pl: 4,}, open ? { justifyContent: 'initial' } : { justifyContent: 'center' }]}
                >
                  <ListItemText primary={item.text} />
                </ListButton>
              ))}
            </List>
          </Collapse>

          <ListItemButton onClick={()=>{ setTailwindListOpen(!tailwindListOpen) }} disableRipple dense>
            <ListItemText primary={`${tailwindListTitle.text}`} /> {tailwindListOpen ? <ChevronDown size={16}/> : <ChevronRight size={16}/>}
          </ListItemButton>
          <Collapse in={tailwindListOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {tailwindList.map((item) => (
                <ListButton
                  disableRipple
                  component="a"
                  key={item.text}
                  dense
                  selected={selectedIndex === item.route}
                  onClick={() => {
                    setSelectedIndex(item.route);
                    router.push(item.route)
                  }}
                  sx={[{pl: 4,}, open ? { justifyContent: 'initial' } : { justifyContent: 'center' }]}
                >
                  <ListItemText primary={item.text} />
                </ListButton>
              ))}
            </List>
          </Collapse>

          <ListItemButton onClick={()=>{ setNextjsListOpen(!nextjsListOpen) }} disableRipple dense>
            <ListItemText primary={`${nextjsListTitle.text}`} /> {nextjsListOpen ? <ChevronDown size={16}/> : <ChevronRight size={16}/>}
          </ListItemButton>
          <Collapse in={nextjsListOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {nextjsList.map((item) => (
                <ListButton
                  disableRipple
                  component="a"
                  key={item.text}
                  dense
                  selected={selectedIndex === item.route}
                  onClick={() => {
                    setSelectedIndex(item.route);
                    router.push(item.route)
                  }}
                  sx={[{pl: 4,}, open ? { justifyContent: 'initial' } : { justifyContent: 'center' }]}
                >
                  <ListItemText primary={item.text} />
                </ListButton>
              ))}
            </List>
          </Collapse>

          <ListItemButton onClick={()=>{ setDebianListOpen(!debianListOpen) }} disableRipple dense>
            <ListItemText primary={`${debianListTitle.text}`} /> {debianListOpen ? <ChevronDown size={16}/> : <ChevronRight size={16}/>}
          </ListItemButton>
          <Collapse in={debianListOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {debianList.map((item) => (
                <ListButton
                  disableRipple
                  component="a"
                  key={item.text}
                  dense
                  selected={selectedIndex === item.route}
                  onClick={() => {
                    setSelectedIndex(item.route);
                    router.push(item.route)
                  }}
                  sx={[{pl: 4,}, open ? { justifyContent: 'initial' } : { justifyContent: 'center' }]}
                >
                  <ListItemText primary={item.text} />
                </ListButton>
              ))}
            </List>
          </Collapse>

          <ListItemButton onClick={()=>{ setSqliteListOpen(!sqliteListOpen) }} disableRipple dense>
            <ListItemText primary={`${sqliteListTitle.text}`} /> {sqliteListOpen ? <ChevronDown size={16}/> : <ChevronRight size={16}/>}
          </ListItemButton>
          <Collapse in={sqliteListOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {sqliteList.map((item) => (
                <ListButton
                  disableRipple
                  component="a"
                  key={item.text}
                  dense
                  selected={selectedIndex === item.route}
                  onClick={() => {
                    setSelectedIndex(item.route);
                    router.push(item.route)
                  }}
                  sx={[{pl: 4,}, open ? { justifyContent: 'initial' } : { justifyContent: 'center' }]}
                >
                  <ListItemText primary={item.text} />
                </ListButton>
              ))}
            </List>
          </Collapse>





          {mainList.map((item, index) => (
          <ListItem key={item.text + index} disablePadding sx={{ display: 'block' }}>
              <ListButton
                disableRipple
                selected={selectedIndex === (item.route)} 
                onClick={() => {
                  setSelectedIndex(item.route)
                  router.push(item.route)
                }}
                sx={open ? { justifyContent: 'initial' } : { justifyContent: 'center' }} dense
              >
                <ListItemText primary={item.text} sx={[ {fontSize: 10} , open ? {opacity: 1} : {opacity: 0}]}
              />
              </ListButton>
          </ListItem>
          ))}


        </List>
      </nav>
    </div>
  );
}