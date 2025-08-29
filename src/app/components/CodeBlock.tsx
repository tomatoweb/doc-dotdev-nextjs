'use client';
import { CopyBlock, solarizedDark } from 'react-code-blocks';

const CodeBlock = (props: { text: string; color?: string; lang?: string; className?: string; }) => {
	if(props.className) {console.log('iciiiiiiiiiiiii ', props.className)}
	return (
		<div className={`my-4 py-2 ${props.className}`}>
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