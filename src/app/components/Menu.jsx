'use client'
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Collapse, Paper, Switch } from '@mui/material';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronDown, ChevronRight } from '@geist-ui/icons';
import useSidebar from '@/app/hooks/useSidebar'

const nextjsListTitle = { text: "Next.js", route: '/nextjs' };
const nextjsList = [
	{
		text: 'SSR',
		route: '/nextjs/server-side'
	},
	{
		text: 'typeof window',
		route: '/nextjs/typeof'
	},
	{
		text: 'Promise - Callback',
    route: '/nextjs/promise'
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
		text: 'useContext',
		route: '/nextjs/usecontext'
	},
	{
		text: 'Headers - Cookies',
		route: '/nextjs/headers'
	},
	{
		text: 'DOM vs HTML',
		route: '/nextjs/dom'
	},
	{
		text: 'Children Pattern',
		route: '/nextjs/children-pattern'
	},
  {
    text: 'Export Default vs. Named',
    route: '/nextjs/export-default-vs-named'
  },
	{
		text: 'Prisma',
		route: '/nextjs/prisma'
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
		text: 'Server Actions',
		route: '/nextjs/action'
	},
	{
		text: 'Suspense',
		route: '/nextjs/suspence'
	},
  {
		text: 'dynamic import',
    route: '/nextjs/dynamic'
  },
  {
    text: 'Image',
    route: '/nextjs/next-image'
  },
  {
    text: 'Code Block',
    route: '/nextjs/codeblock'
  },
  {
    text: 'Icons',
    route: '/nextjs/icons'
  },
  {
    text: 'Iconify',
    route: '/nextjs/iconify'
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
    text: 'setTimeout',
    route: '/nextjs/settimeout'
  },
  {
    text: 'Tailwind+MUI from scratch',
    route: '/nextjs/scratch'
  },
  {
    text: 'Webpack, SWC, Babel : transpile and bundle',
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
  {
    text: 'Metadata api',
    route: '/nextjs/metadata'
  },
];
const laravelListTitle = { text: "Laravel", route: '/laravel' };
const laravelList = [
  {
    text: 'Eager Loading',
    route: '/laravel/eager-loading'
  },
  {
    text: 'Components',
    route: '/laravel/components'
  },
  {
    text: 'Custom Global Function',
    route: '/laravel/custom-global-function'
  },
];
const symfonyListTitle = { text: "Symfony", route: '/symfony' };
const symfonyList = [
	{
		text: '.env',
    route: '/symfony/env'
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
		text: 'DTO',
    route: '/symfony/dto'
  },
  {
		text: 'Services',
    route: '/symfony/services'
  },
  {
		text: 'Mercure Push Hub',
    route: '/symfony/mercure'
  },
  {
    text: 'Messenger',
    route: '/symfony/messenger'
  },
	{
		text: 'Asset Mapper',
		route: '/symfony/asset-mapper'
	},
  {
		text: 'Webpack Encore',
    route: '/symfony/encore'
  },
  {
		text: 'Twig',
    route: '/symfony/twig'
  },
	{
		text: 'Tailwind',
		route: '/symfony/tailwind'
	},
  {
    text: 'Bootstrap css',
    route: '/symfony/bootstrap'
  },
  {
    text: 'KNP Paginator',
    route: '/symfony/kpnpaginator'
  },
];
const phpListTitle = { text: "PHP", route: '/php' };
const phpList = [
  {
    text: 'Constructor Promotion',
    route: '/symfony/promotion'
  },
  {
    text: 'OpenAPI - Swagger',
    route: '/symfony/openapi'
  },
  {
    text: '__DIR__',
    route: '/symfony/dir'
  },
  {
    text: 'Composer',
    route: '/symfony/composer'
  },
  {
    text: 'Bootstrap template',
    route: '/symfony/html'
  },
  {
    text: 'Curl API Merge arrays',
    route: '/symfony/merge'
  }
];
const muiListTitle = { text: "MUI", route: '/mui' };
const muiList = [
  {
    text: 'Demo',
    route: '/mui/demo'
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
const tailwindListTitle = { text: "Tailwind css", route: '/tailwind' };
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
const debianListTitle = { text: "Debian", route: '/debian' };
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
const sqlListTitle = { text: "SQL", route: '/sql' };
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
    text: 'GitLab CI/CD',
    route: '/gitlab'
  },
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
  "&:hover": { color: theme.palette.text.primary, backgroundColor: 'transparent' },
  "&.Mui-selected": {
    color: theme.palette.link.main, backgroundColor: 'transparent',
    "&:hover": { backgroundColor: 'transparent' },
  }
}));

const StyledList = styled(List)({
  "&.MuiList-root": { maxWidth: '100%' }
})

export default function Menu() {
  const router = useRouter();
  const [selectedIndex, setSelectedIndex] = useState('');
  const [laravelListOpen, setLaravelListOpen] = useState(false);
  const [symfonyListOpen, setSymfonyListOpen] = useState(false);
  const [phpListOpen, setPhpListOpen] = useState(false);
  const [muiListOpen, setMuiListOpen] = useState(false);
  const [tailwindListOpen, setTailwindListOpen] = useState(false);
  const [nextjsListOpen, setNextjsListOpen] = useState(false);
  const [debianListOpen, setDebianListOpen] = useState(false);
  const [sqlListOpen, setSqlListOpen] = useState(false);
	const { sidebarState, setSidebarState }  = useSidebar();

	const handleSwitchAll = (checked) => {
		setLaravelListOpen(checked)
		setSymfonyListOpen(checked)
		setPhpListOpen(checked)
		setNextjsListOpen(checked)
		setMuiListOpen(checked)
		setTailwindListOpen(checked)
		setDebianListOpen(checked)
		setSqlListOpen(checked)
	}

  return (		
		<Paper 
			elevation={0} 
			sx={{boxShadow: "4px 0 4px -5px #999"}}
			className={`scrollbar z-10 rounded-lg fixed bottom-0 overflow-y-scroll lg:scroll top-16 transition-all duration-500 shadow-[red_1px_0_5px_-2px] ${sidebarState ? 'w-fit h-full ml-0' : '-ml-80 md:ml-0'}`}
		>
			<div className='flex gap-1 justify-end items-center mt-3'>
				<div className='text-sm'>Collapse</div>
				<Switch onChange={(event) => handleSwitchAll(event.target.checked)} />
			</div>
      <nav className='overflow-y-auto overflow-x-hidden my-6'>
        <StyledList sx={{ width: 310, paddingLeft: 5 }}>
          <ListItemButton component="a" onClick={() => { setLaravelListOpen(!laravelListOpen) }} disableRipple dense>
            <ListItemText primary={`${laravelListTitle.text}`} /> 
						{laravelListOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </ListItemButton>
          <Collapse in={laravelListOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {laravelList.map((item) => (
                <ListButton
                  disableRipple
                  component="div"
                  key={item.text}
                  dense
                  selected={selectedIndex === item.route}
                  onClick={() => {
                    setSelectedIndex(item.route);
                    router.push(item.route);
										setSidebarState( false )
                  }}
                  sx={[{ pl: 4, }, { justifyContent: 'initial' }]}
                >
                  <ListItemText primary={item.text} />
                </ListButton>
              ))}
            </List>
          </Collapse>

          <ListItemButton component="a" onClick={() => { setSymfonyListOpen(!symfonyListOpen) }} disableRipple dense>
            <ListItemText primary={`${symfonyListTitle.text}`} /> {symfonyListOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
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
										setSidebarState( false )
                  }}
                  sx={[{ pl: 4, }, { justifyContent: 'initial' }]}
                >
                  <ListItemText primary={item.text} />
                </ListButton>
              ))}
            </List>
          </Collapse>

          <ListItemButton component="a" onClick={() => { setPhpListOpen(!phpListOpen) }} disableRipple dense>
            <ListItemText primary={`${phpListTitle.text}`} /> {phpListOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </ListItemButton>
          <Collapse in={phpListOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {phpList.map((item) => (
                <ListButton
                  disableRipple
                  component="a"
                  key={item.text}
                  dense
                  selected={selectedIndex === item.route}
                  onClick={() => {
                    setSelectedIndex(item.route);
                    router.push(item.route)
										setSidebarState( false )
                  }}
                  sx={[{ pl: 4, }, { justifyContent: 'initial' }]}
                >
                  <ListItemText primary={item.text} />
                </ListButton>
              ))}
            </List>
          </Collapse>

          <ListItemButton onClick={() => { setNextjsListOpen(!nextjsListOpen) }} disableRipple dense>
            <ListItemText primary={`${nextjsListTitle.text}`} /> {nextjsListOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
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
										setSidebarState( false )
                  }}
                  sx={[{ pl: 4, }, { justifyContent: 'initial' }]}
                >
                  <ListItemText primary={item.text} />
                </ListButton>
              ))}
            </List>
          </Collapse>

          <ListItemButton onClick={() => { setMuiListOpen(!muiListOpen) }} disableRipple dense>
            <ListItemText primary={`${muiListTitle.text}`} /> {muiListOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
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
										setSidebarState( false )
                  }}
                  sx={[{ pl: 4, }, { justifyContent: 'initial' }]}
                >
                  <ListItemText primary={item.text} />
                </ListButton>
              ))}
            </List>
          </Collapse>

          <ListItemButton onClick={() => { setTailwindListOpen(!tailwindListOpen) }} disableRipple dense>
            <ListItemText primary={`${tailwindListTitle.text}`} /> {tailwindListOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
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
										setSidebarState( false )
                  }}
                  sx={[{ pl: 4, }, { justifyContent: 'initial' }]}
                >
                  <ListItemText primary={item.text} />
                </ListButton>
              ))}
            </List>
          </Collapse>

          <ListItemButton onClick={() => { setDebianListOpen(!debianListOpen) }} disableRipple dense>
            <ListItemText primary={`${debianListTitle.text}`} /> {debianListOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
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
										setSidebarState( false )
                  }}
                  sx={[{ pl: 4, }, { justifyContent: 'initial' }]}
                >
                  <ListItemText primary={item.text} />
                </ListButton>
              ))}
            </List>
          </Collapse>

          <ListItemButton onClick={() => { setSqlListOpen(!sqlListOpen) }} disableRipple dense>
            <ListItemText primary={`${sqlListTitle.text}`} /> {sqlListOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
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
										setSidebarState( false )
                  }}
                  sx={[{ pl: 4, }, { justifyContent: 'initial' }]}
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
									setSidebarState( false )
                }}
                sx={{ justifyContent: 'initial' }} dense
              >
                <ListItemText primary={item.text} sx={[{ fontSize: 10 }, { opacity: 1 }]}
                />
              </ListButton>
            </ListItem>
          ))}

        </StyledList>
      </nav>
    </Paper>
		
  );
}