import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { SidebarProvider } from "./contexts/sidebarContext"
import { SettingsProvider } from "./contexts/settingsContext"
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '@/theme';

const Providers = props => {

	const { children } = props

	return (
		<ThemeProvider theme={theme}>
			<AppRouterCacheProvider>
				<CssBaseline />
					<SettingsProvider>		
						<SidebarProvider>							
						{children}				
							</SidebarProvider>		
					</SettingsProvider>
			</AppRouterCacheProvider>
		</ThemeProvider>
	)
}

export default Providers