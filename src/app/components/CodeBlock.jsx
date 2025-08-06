'use client';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CodeBlock = props => {

	return (
		<div className="relative my-8">

			<SyntaxHighlighter language="javascript" style={docco}>
      {props.tex}
    </SyntaxHighlighter>

		</div>
	)
}

export default CodeBlock