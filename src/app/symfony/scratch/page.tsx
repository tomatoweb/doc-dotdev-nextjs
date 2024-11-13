import { Typography } from "@mui/material";
import CodeBlock from "@/app/components/CodeBlock";

const text1 = 
`@tailwind base;
@tailwind components;
@tailwind utilities;`;
const text2 = 
`{# templates/base.html.twig #}

{% block stylesheets %}
    <link rel="stylesheet" href="{{ asset('styles/app.css') }}">
{% endblock %}`;
const text3 = 
`let tailwindcss = require("tailwindcss")

module.exports = {
  plugins: [
    tailwindcss('./tailwind.config.js'),
    require('postcss-import'),
    require('autoprefixer')
  ]
}`;
const text4 = 
`.enablePostCssLoader((options) => {
  options.postcssOptions = {
    config: './postcss.config.js'
  }
})`;
const text5 = 
`/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/**/*.{vue,js,ts,jsx,tsx}",
    "./templates/**/*.{html,twig}",
    "./node_modules/flowbite/**/*.js" // set up the path to the flowbite package 
  ],
  theme: {
    extend: {},
  },
  plugins: [],
})`;
const text6 = 
`{% extends 'base.html.twig' %}

{% block title %}Hello HomeController!{% endblock %}

{% block body %}
  <h1 class="bg-blue-500 text-2xl text-center font-bold">Woohoooo.</h1>
{% endblock %}`;
const text7 = 
`.bg-blue-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(59 130 246 / var(--tw-bg-opacity));
}

.text-center {
  text-align: center;
}

.text-2xl {
  font-size: 1.5rem;
  line-height: 2rem;
}

.font-bold {
  font-weight: 700;
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
      color: theme.palette.link, backgroundColor: 'transparent', 
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
      <Typography variant="h5" sx={{fontWeight: 600, marginBottom:4}}>Symfony 7 with Tailwind from scratch</Typography>
      with symfony.exe
      <CodeBlock text={"symfony new symfony7-tailwind --webapp"} />
      without symfony.exe
      <CodeBlock text={"composer create-project symfony/skeleton:\"7.1.*\" symfony7-tailwind\ncd symfony7-tailwind\ncomposer require webapp"} />     
      Tailwind Installation:
      Install the bundle, dependencies and compile assets to public/build.
      Install and init Tailwind
      <CodeBlock text={"composer require symfonycasts/tailwind-bundle\nnpm install\nnpm run dev\nnpm install -D tailwindcss postcss-loader purgecss-webpack-plugin path\nnpx tailwindcss init -p"} />     
      Modify postcss.config.js like this :
      <CodeBlock text={text3} />
      In webpack.config.js add :  
      <CodeBlock text={text4} />
      Modify assets/styles/app.css this :
      <CodeBlock text={text1} />     
      Modify tailwind.config.js like this :
      <CodeBlock text={text5} />
      In CLI 
      <CodeBlock text={"npx tailwindcss -i ./assets/styles/app.css -o ./public/build/app.css --watch"} />  
      In a second CLI Create a Controller :
      <CodeBlock text={"php bin/console make:controller Home"} />  
      Serve :
      <CodeBlock text={"php -S localhost:8000 -t public"} />  
      In templates/home/index.html.twig use Tailwind
      <CodeBlock text={text6} />
      Check that the 4 new used TW classes have been added in public/build/app.css and refresh browser
      <CodeBlock text={text7} />
    </div>
  )
}
export default page