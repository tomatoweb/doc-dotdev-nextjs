'use client';
import { CopyBlock, solarizedDark } from 'react-code-blocks';

const CodeBlock = (props: { text: string; color?: string; lang?: string; className?: string; }) => {

	const twClass = props.className ? props.className : ''
	const language = props.lang ? props.lang : 'jsx' //  \node_modules\react-code-blocks\src\utils\normalizedLanguage.ts
	
	return (
		<div className={`my-4 py-2 ${twClass}`}>
			<CopyBlock
				text={props.text}
				language={language}
				showLineNumbers={false}
				theme={solarizedDark}
			/>
		</div>
	)
}

export default CodeBlock