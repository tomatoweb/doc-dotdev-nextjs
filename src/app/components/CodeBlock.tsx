'use client';
import { Copy } from '@geist-ui/icons';
import { Box } from '@mui/material';
import { useState } from 'react';

const CodeBlock = (props: { text: string; color?: string; lang?: string }) => {
  const [copied, setCopied] = useState(false);
  return (
    <div className="relative my-4">
      <div className="flex justify-end cursor-pointer mr-4">
        <Box sx={[{fontSize: '0.8rem', color: 'lightGreen', marginRight: 1}, copied ? { visibility: 'visible' } : { visibility: 'hidden'}]}>
          copied
        </Box>
        <Copy
					className='absolute top-5 right-8'
          size={17}
          color='lightgray'
          onClick={() => {
            navigator.clipboard.writeText(props.text).then(
              () => {
                setCopied(true);
              },
              () => {
                console.log("clipboard write failed");
              },
            );
          }}
          />
      </div>
      <div
        className="codeblock bg-slate-800 mx-4 -mt-2 py-4 px-5 overflow-x-auto rounded-md">
					<pre className=''>
        {props.text}

					</pre>
      </div>
    </div>
  )
}

export default CodeBlock