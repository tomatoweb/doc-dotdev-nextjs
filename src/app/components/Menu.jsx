'use client'
import { styled  } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Collapse } from '@mui/material';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronDown, ChevronRight } from '@geist-ui/icons';

const nextjsListTitle = { text:"Next.js", route: '/nextjs'};
const nextjsList = [
  {
    text: 'Server Actions',
    route: '/nextjs/action'
  },
  {
    text: 'ORM',
    route: '/nextjs/getbyorm'
  },
  {
    text: 'API',
    route: '/nextjs/getbyapi'
  },
  {
    text: 'useState',
    route: '/nextjs/usestate'
  },
  {
    text: 'useEffect',
    route: '/nextjs/useeffect'
  },
  {
    text: 'useRef',
    route: '/nextjs/useref'
  },
  {
    text: 'useMemo',
    route: '/nextjs/usememo'
  },
  {
    text: 'SSR',
    route: '/nextjs/server-side'
  },
  {
    text: 'Children Pattern',
    route: '/nextjs/children-pattern'
  },
  {
    text: 'Image',
    route: '/nextjs/next-image'
  },
  {
    text: 'Form',
    route: '/nextjs/form-old-way'
  },
  {
    text: 'setInterval',
    route: '/nextjs/setinterval'
  },
  {
    text: 'Prisma',
    route: '/nextjs/prisma'
  },
  {
    text: 'Tailwind+MUI from scratch',
    route: '/nextjs/scratch'
  },
  {
    text: 'SWC/Webpack Compile Bundle',
    route: '/nextjs/swc'
  },
  {
    text: 'Deploy Next on Linux',
    route: '/nextjs/deploy'
  },
  {
    text: 'Deploy React on Linux',
    route: '/nextjs/deploy-react'
  },
  {
    text: 'SyntaxHighlighter CodeBlock',
    route: '/nextjs/syntax'
  },
  {
    text: 'Thiny Scrollbar',
    route: '/nextjs/scrollbar'
  },
  {
    text: 'SVG config',
    route: '/nextjs/svgcolor'
  },
  {
    text: 'TSX props typing',
    route: '/nextjs/optionaltsx'
  },
  {
    text: 'JWT',
    route: '/nextjs/jwt'
  },
  {
    text: 'map - find',
    route: '/nextjs/map-find'
  },
];
const symfonyListTitle = { text:"Symfony", route: '/symfony'};
const symfonyList = [
  {
    text: 'Symfony + Tailwind',
    route: '/symfony/scratch'
  },
  {
    text: 'Constructor Promotion',
    route: '/symfony/promotion'
  },
  {
    text: 'Service API',
    route: '/symfony/api'
  },
  {
    text: 'Doctrine',
    route: '/symfony/doctrine'
  },
  {
    text: 'Doctrine n+1 fix',
    route: '/symfony/doctrinefix'
  },
  {
    text: 'Push Data Mercure',
    route: '/symfony/mercure'
  },
  {
    text: '__DIR__',
    route: '/symfony/dir'
  },
  {
    text: 'Webpack Encore',
    route: '/symfony/encore'
  },
  {
    text: 'Asset Mapper',
    route: '/symfony/asset-mapper'
  },
  {
    text: 'Twig',
    route: '/symfony/twig'
  },
  {
    text: 'Bootstrap css',
    route: '/symfony/bootstrap'
  },
  {
    text: 'Composer',
    route: '/symfony/composer'
  },
  {
    text: 'KPN Paginator',
    route: '/symfony/kpnpaginator'
  },
];
const muiListTitle = { text:"MUI", route: '/mui'};
const muiList = [
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
    text: 'Draggable Scroll',
    route: '/mui/draggable'
  },
  {
    text: 'MUI X Tree View',
    route: '/mui/xtreeview'
  },
  {
    text: 'Theme',
    route: '/mui/theme'
  },
];
const tailwindListTitle = { text:"Tailwind css", route: '/tailwind'};
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
const debianListTitle = { text:"Debian", route: '/debian'};
const debianList = [
  {
    text: 'Reinstall from scratch',
    route: '/debian/reinstall'
  },
  {
    text: 'Subdomain',
    route: '/debian/subdomain'
  },
];
const sqlListTitle = { text:"SQL", route: '/sql'};
const sqlList = [
  {
    text: 'SQLite',
    route: '/sql/sqlite'
  },
  {
    text: 'MySQL',
    route: '/sql/mysql'
  },
];
const mainList = [
  {
    text: 'Versioning',
    route: '/versioning'
  },
  {
    text: 'Emoji',
    route: '/emoji'
  },
  {
    text: 'Scss - Sass',
    route: '/sass'
  },
];
const ListButton = styled(ListItemButton)(({ theme }) => ({
  color: theme.palette.text.secondary,
  backgroundColor: 'transparent',
  "&:hover": {color: theme.palette.text.primary, backgroundColor: 'transparent'},
  "&.Mui-selected": {
      color: theme.palette.link.main, backgroundColor: 'transparent', 
      "&:hover": {backgroundColor: 'transparent'},
  }
}));

const StyledList = styled(List)({
  "&.MuiList-root": { maxWidth: '100%' }
})

export default function Menu() {
  const router = useRouter();
  const [selectedIndex, setSelectedIndex] = useState('');
  const [symfonyListOpen, setSymfonyListOpen] = useState(false);  
  const [muiListOpen, setMuiListOpen] = useState(false);  
  const [tailwindListOpen, setTailwindListOpen] = useState(false);  
  const [nextjsListOpen, setNextjsListOpen] = useState(false);  
  const [debianListOpen, setDebianListOpen] = useState(false);  
  const [sqlListOpen, setSqlListOpen] = useState(false);  

  return (
    <div className='w-1/4 h-[84vh] sticky top-32 hidden lg:flex'>
      <nav className='overflow-y-auto overflow-x-hidden h-[calc(100vh-200px)]'>
        <StyledList sx={{width: 310, paddingLeft: 5}}>

          <ListItemButton component="a" onClick={()=>{ setSymfonyListOpen(!symfonyListOpen) }} disableRipple dense>
            <ListItemText primary={`${symfonyListTitle.text}`} /> {symfonyListOpen ? <ChevronDown size={16}/> : <ChevronRight size={16}/>}
          </ListItemButton>
          <Collapse in={symfonyListOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {symfonyList.map((item) => (
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
                  sx={[{pl: 4,}, { justifyContent: 'initial' }]}
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
            <List component="div" className='max-w-full'>
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
                  sx={[{pl: 4,}, { justifyContent: 'initial' }]}
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
                  sx={[{pl: 4,}, { justifyContent: 'initial' }]}
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
                  sx={[{pl: 4,}, { justifyContent: 'initial' }]}
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
                  sx={[{pl: 4,}, { justifyContent: 'initial' }]}
                >
                  <ListItemText primary={item.text} />
                </ListButton>
              ))}
            </List>
          </Collapse>

          <ListItemButton onClick={()=>{ setSqlListOpen(!sqlListOpen) }} disableRipple dense>
            <ListItemText primary={`${sqlListTitle.text}`} /> {sqlListOpen ? <ChevronDown size={16}/> : <ChevronRight size={16}/>}
          </ListItemButton>
          <Collapse in={sqlListOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {sqlList.map((item) => (
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
                  sx={[{pl: 4,}, { justifyContent: 'initial' }]}
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
                sx={{ justifyContent: 'initial' }} dense
              >
                <ListItemText primary={item.text} sx={[ {fontSize: 10} , {opacity: 1}]}
              />
              </ListButton>
          </ListItem>
          ))}

        </StyledList>
      </nav>
    </div>
  );
}