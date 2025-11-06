import CodeBlock from '@/app/components/CodeBlock';
const page = () => {

	const text = `<div className={\`w-1/5 bg-gray-400 h-12 py-2 \${!product.stocked ? 'text-red-600' : ''}\`}>{product.stocked ? 'ok' : 'out'}</div>`;

	return (
		<div className='overflow-x-auto text-sm'>	

			<CodeBlock text={text} />
		</div>
	)
}

export default page