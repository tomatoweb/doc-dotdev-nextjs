'use client';
import { Copy } from '@geist-ui/icons';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

const CodeBlock = (props: { text: string; color?: string }) => {
	return (
		<div className="relative my-8">
			<Copy
          size={17}
          color='lightgray'
          />
			{props.text}

			<SyntaxHighlighter>
        {props.text}
      </SyntaxHighlighter>

		</div>
	)
}

export default CodeBlock