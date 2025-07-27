import Link from 'next/link';
import Github from '@geist-ui/icons/github'
import LightIcon from './Icon/LightIcon';
import DarkIcon from './Icon/DarkIcon';
import GithubIcon from './Icon/GithubIcon';

export default function Navbar() {
  return (
    <div className="bg-black flex justify-evenly items-center h-16 top-0 sticky z-10" style={{ boxShadow: "inset 0 -1px 0 0 #333" }}>      
        <Link href="/" className="text-4xl font-nothing font-semibold">
            🚀 DotDev Docs
        </Link>
        <div className="items-center justify-center hidden w-full md:flex md:w-auto">
          <ul className="flex font-light gap-12">
            <li><a href="#" className="bg-transparent text-link">Home</a></li>
            <li><a href="#" className="bg-transparent text-white>">About</a></li>
            <li><a href="#" className="bg-transparent text-white>">Services</a></li>
            <li><a href="#" className="bg-transparent text-white>">Contact</a></li>
          </ul>
        </div>
				<div className='flex justify-between gap-4'>
					{/* {LightIcon} */}
					<LightIcon color='white' />					
					<DarkIcon className="relative top-[2px]" color='white' />					
        	<a
						className='relative top-[2px]' 
						href="https://github.com/tomatoweb/doc-dotdev-nextjs" 
						title='This app repo on Github' 
						target="_blank"
					>
          	<GithubIcon width={35} height={35} color='white' />
        	</a>
				</div>
    </div>
					

  );
}