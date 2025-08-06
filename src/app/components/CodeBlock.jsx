'use client';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CodeBlock = ()=> {

	const codeString = '(num) => num + 1';

	return (
		<div className="relative my-8">

			<SyntaxHighlighter language="javascript" style={docco}>
      {codeString}
    </SyntaxHighlighter>

		</div>
	)
}

export default CodeBlock