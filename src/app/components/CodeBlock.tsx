'use client';
import { Copy } from '@geist-ui/icons';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CodeBlock = (props: { text: string; color?: string }) => {

	const codeString = '(num) => num + 1';

	return (
		<div className="relative my-8">
			<Copy
          size={17}
          color='lightgray'
          />
			{props.text}

			<SyntaxHighlighter language="javascript" style={docco}>
      {codeString}
    </SyntaxHighlighter>

		</div>
	)
}

export default CodeBlock