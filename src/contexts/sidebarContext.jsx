'use client'

import { createContext, useState } from 'react'

const SidebarContext = createContext()

export const SidebarProvider = ({ children }) => {

	const [sidebarState, setSidebarState] = useState(false)

	return <SidebarContext.Provider value={{sidebarState, setSidebarState}}>
		{children}
	</SidebarContext.Provider>
}

export default SidebarContext
