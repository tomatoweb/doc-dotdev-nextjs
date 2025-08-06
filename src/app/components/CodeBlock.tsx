'use client';
import { Copy } from '@geist-ui/icons';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeBlock = (props: { text: string; color?: string }) => {
	return (
		<div className="relative my-8">
			<Copy
          size={17}
          color='lightgray'
          />
			{props.text}
			<SyntaxHighlighter
        className="codeblock"
        language="jsx"
        style={atomDark}
        wrapLongLines
        customStyle={{
            backgroundColor: "#0a0a0a",
            opacity: "1",
            marginTop: "-2rem",
            paddingTop: "1.7rem"
        }}
        codeTagProps={{
            style: {
                color: props.color || 'white',
            },
        }}>
        {props.text}
      </SyntaxHighlighter>
		</div>
	)
}

export default CodeBlock