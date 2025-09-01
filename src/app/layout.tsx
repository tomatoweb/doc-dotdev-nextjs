import "./globals.css";
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
					<TopNav />
					<div className="flex justify-between">
						<Menu />
						<main className="mx-6 mt-20 lg:ml-[21rem] w-full lg:mr-[12rem]">
							{children}
						</main>
						<Rightbar />
					</div>
				</Providers>
			</body>
		</html>
	);
}