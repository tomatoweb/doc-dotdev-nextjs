'use client'

import { createContext, useState } from 'react'

const SettingsContext = createContext()

export const SettingsProvider = ({ children }) => {

	const [settingsState, setSettingsState] = useState("dark")

	return <SettingsContext.Provider value={{settingsState, setSettingsState}}>
		{children}
	</SettingsContext.Provider>
}

export default SettingsContext