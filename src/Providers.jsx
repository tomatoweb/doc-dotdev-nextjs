import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { SidebarProvider } from "./contexts/sidebarContext"
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '@/theme';

const Providers = props => {

	const { children } = props

	return (
		<AppRouterCacheProvider>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<SidebarProvider>
					{children}
				</SidebarProvider>
			</ThemeProvider>
		</AppRouterCacheProvider>
	)
}

export default Providers