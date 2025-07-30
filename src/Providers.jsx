import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { SidebarProvider } from "./contexts/sidebarContext"
import { SettingsProvider } from "./contexts/settingsContext"
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '@/theme';

const Providers = props => {

	const { children } = props

	return (
		<SidebarProvider>
			<SettingsProvider>
				<ThemeProvider theme={theme}>
					<AppRouterCacheProvider>
						<CssBaseline />
						{children}
					</AppRouterCacheProvider>
				</ThemeProvider>
			</SettingsProvider>
		</SidebarProvider>
	)
}

export default Providers