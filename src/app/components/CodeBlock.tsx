'use client';
import { CopyBlock, solarizedDark } from 'react-code-blocks';
//import { useState } from 'react';

const CodeBlock = (props: { text: string; color?: string; lang?: string }) => {
	//const [copied, setCopied] = useState(false);
	return (
		<div className="my-4 py-2">
			{/* <div className="">
				<Box sx={[{ fontSize: '0.8rem', color: 'lightGreen', marginRight: 1 }, copied ? { visibility: 'visible' } : { visibility: 'hidden' }]}>
					copied
				</Box>
				<Copy
					className='absolute top-5 right-8'
					size={17}
					color='lightgray'
					onClick={() => {
						navigator.clipboard.writeText(props.text).then(
							() => {
								setCopied(true);
							},
							() => {
								console.log("clipboard write failed");
							},
						);
					}}
				/>
			</div> */}
			<CopyBlock
				text={props.text}
				language="jsx"
				showLineNumbers={false}
				theme={solarizedDark}
			/>
		</div>
	)
}

export default CodeBlock