'use client';

const CodeBlock = (props: { text: string; color?: string }) => {
	return (
		<div className="relative my-8">
			{props.text}
		</div>
	)
}

export default CodeBlock