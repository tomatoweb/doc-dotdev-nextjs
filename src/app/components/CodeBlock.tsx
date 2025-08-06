'use client';
import { Copy } from '@geist-ui/icons';

const CodeBlock = (props: { text: string; color?: string }) => {

	const codeString = '(num) => num + 1';

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