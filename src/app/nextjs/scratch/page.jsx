import { Typography } from "@mui/material";
import CodeBlock from "@/app/components/CodeBlock";

const text1 = 
`@tailwind base;
@tailwind components;
@tailwind utilities;

@font-face {
  font-family: 'nothingYouCanDo';
  src: local('nothingYouCanDo'), url(./fonts/NothingYouCouldDo-Regular.woff) format('woff');
}
@font-face {
  font-family: 'geistSans';
  src: local('geistSans'), url(./fonts/GeistVF.woff) format('woff');
}
@font-face {
  font-family: 'dynapuff';
  src: local('dynapuff'), url(./fonts/DynaPuff-VariableFont.woff) format('woff');
}
nav {
  scrollbar-width: thin;
  scrollbar-color: #eaeaea transparent;
  scrollbar-gutter: stable;
}
code {
  white-space: pre !important;
}
pre {
  border: 1px solid #2e2e2e !important;
}
.token {
  text-decoration: none !important;
}`;
const text2 = 
`import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nothing: ['nothingYouCanDo'],
        dynapuff: ['dynapuff'],
      },
      colors: {
        'tahiti': '#3ab7bf',
        'midnight': '#121063',
        'primary': '#7367F0',
      },
    },
  },
  plugins: [],
};
export default config;`;
const text3 = 
`'use client';
import { createTheme, PaletteColor, SimplePaletteColorOptions } from '@mui/material/styles';
declare module "@mui/material/styles" {
  interface Palette {
    link: PaletteColor;
  }

  interface PaletteOptions {
    link: SimplePaletteColorOptions;
  }
}
const theme = createTheme({
  palette: {
    mode: 'dark',
    link: { main: "#52a8ff" },  
    background: {
      default: '#000'
    }
  },
  typography: {
    fontFamily: "geistSans",
    fontWeightRegular: 400,
    h1: {
      fontFamily: 'Papyrus',
      fontWeight: 500,
      fontSize: '5rem',
      lineHeight: 1.2,
    },
    h2: {
      fontFamily: "Brush Script MT",
      fontWeight: 300,
      fontSize: '5rem',
      lineHeight: 1.2,
    },
  },
});
export default theme;`;
const text4 = 
`import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Rightbar from "./components/Rightbar";
import theme from '@/theme';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>	          
          <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Navbar/>
            <div className="flex flex-row max-w-7xl mx-auto justify-between mt-14">
              <Menu/>
              <main className="w-full px-8 min-h-screen">
                {children}
              </main>       
              <Rightbar/>
            </div>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}`;

const navbar = 
`import Button from '@mui/material/Button';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="bg-black flex justify-evenly items-center h-16 top-0 sticky z-10" style={{ boxShadow: "inset 0 -1px 0 0 #333" }}>
      
        <Link href="/" className="text-4xl font-nothing font-semibold">DotDev Docs</Link>        
        <div className="items-center justify-between hidden w-full md:flex md:w-auto">
          <ul className="flex font-light gap-12">
            <li><a href="#" className="bg-transparent text-link">Home</a></li>
            <li><a href="#" className="bg-transparent text-white>">About</a></li>
            <li><a href="#" className="bg-transparent text-white>">Services</a></li>
            <li><a href="#" className="bg-transparent text-white>">Contact</a></li>
          </ul>
        </div>        
        <Button variant="contained" size='small' sx={{bgcolor: 'grey.300' ,textTransform: 'none'}}>Learn</Button>

    </div>
  );
}`;
const menu = 
`'use client'
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
const muiListTitle = { text:"MUI Material", route: '/mui'};
const muiList = [
  {
    text: 'Theme',
    route: '/mui/theme'
  },
  {
    text: 'Custom colors',
    route: '/mui/color'
  },
  {
    text: 'Custom fonts',
    route: '/mui/fonts'
  },
];
const tailwindListTitle = { text:"Tailwind", route: '/tailwind'};
const tailwindList = [
  {
    text: 'Theme',
    route: '/tailwind/theme'
  },
  {
    text: 'Custom colors',
    route: '/tailwind/color'
  },
  {
    text: 'Custom fonts',
    route: '/tailwind/fonts'
  },
];
const mainList = [
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
  width: \`calc(\${theme.spacing(7)} + 1px)\`,
  [theme.breakpoints.up('sm')]: {
    width: \`calc(\${theme.spacing(8)} + 1px)\`,
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
      color: theme.palette.link.main, backgroundColor: 'transparent', 
      "&:hover": {backgroundColor: 'transparent'},
  }
}));
export default function Menu() {
  const router = useRouter();
  const theme = useTheme();
  const [open, setOpen] = useState(true); // Drawer is shown
  const [selectedIndex, setSelectedIndex] = useState('');
  const [scratchlistOpen, setScratchListOpen] = useState(false);  
  const [muilistOpen, setMuiListOpen] = useState(false);  
  const [tailwindlistOpen, setTailwindListOpen] = useState(false);  
  return (
    <div className='w-1/4 h-[84vh] sticky top-32 hidden lg:flex'>
      <nav className='overflow-y-auto overflow-x-hidden h-[calc(100vh-200px)]'>
        <List sx={{width: 310, paddingLeft: 5}}>
          <ListItemButton onClick={()=>{ setScratchListOpen(!scratchlistOpen) }} disableRipple dense>
            <ListItemText primary={\`\${scratchListTitle.text}\`} /> {scratchlistOpen ? <ChevronDown size={16}/> : <ChevronRight size={16}/>}
          </ListItemButton>
          <Collapse in={scratchlistOpen} timeout="auto" unmountOnExit>
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
          <ListItemButton onClick={()=>{ setMuiListOpen(!muilistOpen) }} disableRipple dense>
            <ListItemText primary={\`\${muiListTitle.text}\`} /> {muilistOpen ? <ChevronDown size={16}/> : <ChevronRight size={16}/>}
          </ListItemButton>
          <Collapse in={muilistOpen} timeout="auto" unmountOnExit>
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
          <ListItemButton onClick={()=>{ setTailwindListOpen(!tailwindlistOpen) }} disableRipple dense>
            <ListItemText primary={\`\${tailwindListTitle.text}\`} /> {tailwindlistOpen ? <ChevronDown size={16}/> : <ChevronRight size={16}/>}
          </ListItemButton>
          <Collapse in={tailwindlistOpen} timeout="auto" unmountOnExit>
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
}`;
const rightbar = 
`'use client'
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
  width: \`calc(\${theme.spacing(7)} + 1px)\`,
  [theme.breakpoints.up('sm')]: {
    width: \`calc(\${theme.spacing(8)} + 1px)\`,
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
  
  return (
    <div className='w-1/4 h-[84vh] sticky top-32 hidden md:flex'>   
      <nav className='overflow-y-auto overflow-x-hidden h-[calc(100vh-200px)]'>
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
        </List>        
      </nav>
    </div>         
    
  );
}`;
const testPage = 
`import { Box, Container, Typography } from "@mui/material";

export default function Test() {
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h1" gutterBottom>
          Welcome to My Next.js App
        </Typography>
        <Typography variant="h2" gutterBottom>
          Enjoy this moment!
        </Typography>
        <Typography variant="h3" className="text-tahiti" >
          This is the default mui font geistSans and a customized h3 configured in theme.ts 
          and a tailwind custom color className text-tahiti configured in tailwind.config.ts
        </Typography>
        <Typography variant="h5" sx={{fontFamily: 'dynapuff'}}>
        this is a tailwind custom font sx= fontFamily:dynapuff configured in tailwind.config.ts
        </Typography>
        <div className="font-nothing">
          this is a tailwind custom font -nothingYouCanDo- configured in tailwind.config.ts
        </div>
        <div>
          this is the MUI default font geistSans configured in theme.ts
        </div>
        <div className="font-dynapuff">
        this is a tailwind custom font className font-dynapuff configured in tailwind.config.ts
        </div>
      </Box>
    </Container>
  );
}`;

const page = () => {
  return (
    <div>
      <Typography variant="h5" sx={{fontWeight: 600, marginBottom:4}}>Nextjs Tailwind MUI app from scratch</Typography>
      1.<CodeBlock text={"npx create-next-app@14 appName"} />
      2.<CodeBlock text={"cd appName"} />
      3.<CodeBlock text={"code ."} />
      4.<CodeBlock text={"npm install @mui/material @emotion/react @emotion/styled\nnpm install @mui/material-nextjs @emotion/cache"} />
      <Typography sx={{mb:6}}><i>note: for nextjs 15 add option --force</i></Typography>
      5.<Typography sx={{mb:4}}>Import favorite .woff fonts files from H:/DEV/FONTS to /src/app/fonts,
      or download .ttf from Google fonts and convert it in .woff</Typography>
      6.<Typography>Rewrite globals.css importing those fonts and add some {"<nav>"} scrollbar thiny css:</Typography>
      <CodeBlock text={text1} />
      7.<Typography>Rewrite tailwind.config.ts by adding custom fonts and colors:</Typography>
      <CodeBlock text={text2} />
      8.<Typography>Create a src/theme.ts with a default fontfamily geistSans, (Papyrus and Brush are browser integrated fonts), a default mode dark, also include some theme customization for {"<h1> <h2>"} etc.. if needed :</Typography>
      <CodeBlock text={text3} />
      9.<Typography>Rewrite app/layout.tsx: import the AppRouterCacheProvider and wrap all elements under the {"<body>"} with it and
      pass the theme to the ThemeProvider:</Typography>
      <CodeBlock text={text4} />
      10.<Typography sx={{mb:4}}>Create Navbar, sidebar-menu, Rightbar, Homepage and a test-page for the fonts test:</Typography>
      src/components/Navbar.tsx
      <CodeBlock text={navbar} />
      src/components/Menu.tsx
      <CodeBlock text={menu} />
      src/components/Rightbar.tsx
      <CodeBlock text={rightbar} />
      src/app/test/page.tsx
      <CodeBlock text={testPage} />
      11.<CodeBlock text={"npm run dev"} />
      12.<Typography>Install Icons</Typography>
      <CodeBlock text={"npm i @geist-ui/icons\nnpm i @mui/icons-material"} />
    </div>
  )
}
export default page