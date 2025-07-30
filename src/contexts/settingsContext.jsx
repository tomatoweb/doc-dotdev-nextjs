'use client'
import { createContext, useState } from 'react'
import settingsConfig from '@/settingsConfig'


const SettingsContext = createContext()

console.log(settingsConfig)

export const SettingsProvider = props => {

	const [settings, setSettings] = useState(settingsConfig)

	return <SettingsContext.Provider 
		value={{
			settings, 
			setSettings
		}}
	>
		{props.children}
	</SettingsContext.Provider>
}


export default SettingsContext