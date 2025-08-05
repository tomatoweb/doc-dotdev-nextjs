import { KBarAnimator, KBarPortal, KBarPositioner, KBarProvider, KBarResults, KBarSearch, useKBar, useMatches } from "kbar"
import cn from 'classnames';
import { IconButton, useColorScheme } from "@mui/material";
import { useCookie, useMedia } from 'react-use'
import { IconSearch } from '@/app/components/Icon/IconSearch';
import data from '@/data/searchData'
import AppleIcon from '@mui/icons-material/Apple';


/* You can open Kbar using Toggle button.

const { query } = useKBar();
<button onClick={query.toggle}>Toggle</button>

But, The following error outputs 
Unhandled Runtime Error : TypeError: undefined is not an object (evaluating ‘query.toggle’)
※ Its because the component that calls useKBar must be rendered in KBarProvider 
	in others words, the query object from useKBar() must be hooked in the component that toggle the KBar query 
*/
const ComponentWithUseKBar = props => {
	// Props
	const { children, className, tag, triggerClick = false } = props
	const { query } = useKBar()
	const Tag = tag || 'div' // customizable component
	return (
		<Tag className={className} {...(triggerClick && { onClick: query.toggle })}> {/* if triggerClick is passed, onClick="{query.toggle}" */}
			{children}
		</Tag>
	)
}



const Search = () => {

	const { mode, setMode, setColorScheme } = useColorScheme();
	const systemModeDark = useMedia('(prefers-color-scheme: dark)', false)
	const light = (mode === 'light' || !systemModeDark)	

	return (
		<KBarProvider actions={data}>

			<ComponentWithUseKBar	triggerClick className='flex-1 cursor-pointer'>
				<div className="items-center justify-center w-full md:flex 3xl:w-auto 3xl:shrink-0 3xl:justify-center">
					<button
						type="button"
						className={cn(
							'flex 3xl:w-[56rem] 3xl:mx-0 relative ps-4 pe-1 py-1 h-10 outline-none betterhover:hover:bg-opacity-80 pointer items-center text-start w-full text-gray-30 rounded-full align-middle text-base',
							{ 'bg-gray-600': !light, 'bg-gray-300': light }
						)}>
						<IconSearch className="align-middle me-3 text-gray-30 shrink-0 group-betterhover:hover:text-gray-70" />
						Search
						<span className="hidden ms-auto sm:flex item-center gap-2 me-4">
							<div data-platform="mac">⌘</div>
							<div data-platform="win">
								Ctrl
							</div>
							<div>K</div>
						</span>
					</button>
				</div>
			</ComponentWithUseKBar>

			<KBarPortal>
				<KBarPositioner className="bg-black/50 backdrop-blur-sm z-50">
					<KBarAnimator className="bg-white rounded-xl flex flex-col gap-4 w-[35rem] overflow-hidden">
						<KBarSearch className="w-full outline-none px-6 py-4 text-black" />
							<SearchResults />
					</KBarAnimator>
				</KBarPositioner>
			</KBarPortal>

		</KBarProvider>
	)
}

const SearchResults = () => {

	const {results} = useMatches()

	return (
		<KBarResults 
			items={results}
			onRender={({item, active}) => 
				typeof item === 'string' ? (
					// Section header
					<div className="text-sm uppercase px-4 text-neutral-500 font-bold">
						{item}
					</div>
				) : (
					// action
					<div className={`text-black flex px-8 ${active ? "bg-[#eeeeee]" : "bg-tranparent"}`}>
						<i className={`text-black flex px-8 ${item.icon}`} />
						{item.name}
					</div>
				)
			} 
		/> 
	)

}

export default Search