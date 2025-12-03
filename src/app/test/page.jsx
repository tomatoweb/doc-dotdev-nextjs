'use client'

import { useState } from "react"

const Test = () => {

		const [checked, setChecked] = useState(false)

    return (
      <main className="flex flex-col p-4 bg-slate-900 h-screen">    
        
				
				<form className="flex flex-col gap-4 max-w-md mx-auto">
				
					
					<GUICheckbox checked={checked} onCheck={setChecked} />

					<button
						disabled={!checked}
						type="button" 
						className={` ${checked ? "" : "opacity-45"} transition-all duration-700 rounded border border-zinc-500 bg-slate-600`}>
							submit
					</button>
					
				</form>

			

      </main>
    )
}

const GUICheckbox = ({checked, onCheck}) => {
	return (
	<label>
		<input 
		type="checkbox" 
		checked={checked} 
		onChange={e => onCheck(e.target.checked)}
		className="mx-2" />
		
		accept
	</label>
	)
}

export default Test