import Link from 'next/link';
import Github from '@geist-ui/icons/github'

export default function Navbar() {
  return (
    <div className="bg-black flex justify-evenly items-center h-16 top-0 sticky z-10" style={{ boxShadow: "inset 0 -1px 0 0 #333" }}>      
        <Link href="/" className="text-4xl font-nothing font-semibold">
            🚀 DotDev Docs
        </Link>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto">
          <ul className="flex font-light gap-12">
            <li><a href="#" className="bg-transparent text-link">Home</a></li>
            <li><a href="#" className="bg-transparent text-white>">About</a></li>
            <li><a href="#" className="bg-transparent text-white>">Services</a></li>
            <li><a href="#" className="bg-transparent text-white>">Contact</a></li>
          </ul>
        </div>
        <a href="https://github.com/tomatoweb/doc-dotdev-nextjs" title='This app repo on Github' target="_blank">
          <Github size={30} color='#3ab7bf' />
        </a>

    </div>
  );
}