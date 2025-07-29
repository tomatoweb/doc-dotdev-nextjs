import "./globals.css";
import Providers from "@/Providers"
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
				<Providers>
					<TopNav	section={section} />
					<div className="flex flex-col sm:flex-row justify-between mx-auto">
						<Menu />
						<main className="mx-4 lg:w-[70vw] mt-2">
							{children}
						</main>
						<Rightbar />
					</div>
				</Providers>
			</body>
		</html>
	);
}