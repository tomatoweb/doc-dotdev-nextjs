'use client';
import { Copy } from '@geist-ui/icons';
import { Box } from '@mui/material';
const CodeBlock = (props: { text: string; color?: string }) => {
	return (
		<div className="relative my-8">
			<Copy
          size={17}
          color='lightgray'
          />
			{props.text}
		</div>
	)
}

export default CodeBlock