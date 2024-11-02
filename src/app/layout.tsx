import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '@/theme';	
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Rightbar from "./components/Rightbar";

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
            <div className="flex max-w-7xl mx-auto justify-between mt-14">
              <Menu/>         
              {children}
              <Rightbar/>
            </div>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}