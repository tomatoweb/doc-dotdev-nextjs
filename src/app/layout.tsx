import "./globals.css";
// Generated Icon CSS Imports
import '@/assets/iconify-icons/generated-icons.css';
import Providers from "@/Providers";
import Menu from "./components/Menu";
import Rightbar from "./components/Rightbar";
import { TopNav } from "./components/TopNav";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {

	return (
		<html lang="en">
			<body>
				<Providers>
					{/* <TopNav /> */}
					<div className="relative flex flex-col sm:flex-row justify-between mx-auto">
						<Menu />
						<main className="mx-6 mt-20 lg:ml-[21rem] lg:w-[70vw]">
							{children}
						</main>
						<Rightbar />
					</div>
				</Providers>
			</body>
		</html>
	);
}