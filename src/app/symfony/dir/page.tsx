import { Typography } from "@mui/material";
import CodeBlock from "@/app/components/CodeBlock";
import Image from "next/image";

const text = 
`project
├── inc
│   ├── file1.php
│   └── file2.php
└── index.php

If we do include "inc/file1.php" from index.php it will work. 

However, from file1.php to include file2.php we must do an 
include relative to index.php and not from file1.php

So, include "file2.php" from file1.php will not work.
__DIR__ fixes this, so from file1.php we can do this:

include __DIR__ . "/file2.php";

__DIR est le dossier de file1 par rapport à index.php`;

const page = () => {
  return (
    <div>
      <Typography variant="h6" sx={{fontWeight: 500, marginBottom:4}}>
        🚀 Use magic constant __DIR__ to get your current file directory
      </Typography>
      <Typography variant="body1" sx={{fontWeight: 500, marginBottom:4}}>
      {`It has been in PHP only since version 5.3, and it's the same as using dirname(__FILE__)`}
      </Typography>
      <Typography variant="body1" sx={{fontWeight: 500, marginBottom:4, color:"coral"}}>
      {`Current Working Directory VS. Current Script (file) Directory`}
      </Typography>
      <Image
        width={0}
        height={0}
        sizes="100vw"
        style={{width: '100%', height: 'auto'}} 
        className="h-auto rounded-lg" 
        src="/dir0.png" 
        alt=""
      />
      <Typography variant="body1" sx={{fontWeight: 500, marginTop: 4}}>
      If we browse
      </Typography>
      <Typography variant="body1" sx={{fontWeight: 500, color: 'greenyellow'}}>
       http://127.0.0.1:8000/inc/file1.php  
      </Typography>
      <Typography variant="body1" sx={{fontWeight: 500}}>
      it works fine because the current file (script) is file1.php and the CWD is /inc
      </Typography>
      <Typography variant="body1" sx={{fontWeight: 500}}>
      file2.php will be included.
      </Typography>
      <Typography variant="body1" sx={{fontWeight: 500}}>
      But if we browse 
      </Typography>
      <Typography variant="body1" sx={{fontWeight: 500, color: 'greenyellow'}}>
       http://127.0.0.1:8000 
      </Typography>
      <Typography variant="body1" sx={{fontWeight: 500}}>
      the current file (script) is index.php and the CWD is the root /, thus the path ../shop/file2.php is wrong.
      We included file1, so the current script is file1 BUT the current working directory (getcwd()) is still the one from index.php 
      </Typography>
      <Typography variant="body1" sx={{fontWeight: 500, marginBottom:4}}>
      To fix this, we add __DIR__ to this path, __DIR__ is the directory (/inc) from the current file (aka script) (/inc/file1.php)
      </Typography>
      <Image
        width={0}
        height={0}
        sizes="100vw"
        style={{width: '100%', height: 'auto'}} 
        className="h-auto rounded-lg" 
        src="/dir1.png" 
        alt=""
      />
      <Typography variant="h6" sx={{fontWeight: 500, marginBottom:4}}>
      In most cases it is used to include another file from an included file
      </Typography>
      <CodeBlock text={text} />
    </div>
  )
}
export default page