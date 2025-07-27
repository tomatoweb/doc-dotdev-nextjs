import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '@/theme';	
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Rightbar from "./components/Rightbar";
import { TopNav } from "./components/TopNav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

	const section = 'home';

  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>	          
          <ThemeProvider theme={theme}>
            <CssBaseline/>
						<TopNav
							section={section}
						/>
            {/* <Navbar/> */}
            <div className="flex flex-row justify-between mx-auto mt-14">
              <Menu/>
              <main className="mx-8">              
                {children}              
              </main>       
              <Rightbar/>
            </div>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}