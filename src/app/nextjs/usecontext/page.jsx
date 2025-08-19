'use client'
import React from 'react'
import CodeBlock from '@/app/components/CodeBlock'
import { Typography } from '@mui/material';

const page = () => {

const text0 = `// src/contexts/settingsContext.jsx
'use client'
import { createContext, useState } from 'react'
import settingsConfig from '@/settingsConfig'

const SettingsContext = createContext()

export const SettingsProvider = props => {

	const [settings, setSettings] = useState(settingsConfig)

	return ( 
		<SettingsContext.Provider value={{ settings, setSettings }}>
			{props.children}
	  </SettingsContext.Provider>
	)
}

export default SettingsContext

// src/settingsContext.jsx
 // Default settings
const settingsConfig = {
	mode: 'dark',
	version: '19.0.1'
	// cookies, session, preferences, etc
}

export default settingsConfig


// src/hooks/useSettings.ts
import SettingsContext from "@/contexts/settingsContext"
import { useContext } from "react"


const useSettings = () => {

	const context = useContext(SettingsContext)

	if (context === undefined) {
    throw new Error('useSettings must be used within a SettingsProvider')
  }

	return context
}

export default useSettings`;

  const text1 = `import { NextAuthProvider } from '@/contexts/nextAuthProvider'
import ThemeProvider from '@/components/theme'
import { getMode, getDemoName, getSettingsFromCookie, getSystemMode } from '@/utils/serverHelpers'
import { SettingsProvider } from '@/contexts/settingsContext'
import { VerticalNavProvider } from '@/contexts/verticalNavContext'

const Providers = props => {

    const { children } = props

    
    const settingsCookie = getSettingsFromCookie()
    const demoName = getDemoName()
    const mode = getMode()    
    const systemMode = getSystemMode()
    
    return (    
        <NextAuthProvider basePath={process.env.NEXTAUTH_BASEPATH}>
            <VerticalNavProvider>    
                <SettingsProvider settingsCookie={settingsCookie} mode={mode}>
                    <ThemeProvider systemMode={'dark'}>
                    {children}
                    </ThemeProvider>
                </SettingsProvider>
            </VerticalNavProvider>
        </NextAuthProvider>
    )
}

export default Providers`;

  const text2 = `// src/app/(blank-layout)/layout.jsx
import { getSystemMode } from "@/utils/serverHelpers"
import BlankLayout from "@/components/layouts/BlankLayout"
import Providers from "@/components/Providers"

const layout = ({children, params}) => {
    const systemMode = getSystemMode()
    return (
        <Providers>
            <BlankLayout systemMode={systemMode}>
                {children}
            </BlankLayout>
        </Providers>
    )
}

export default layout`;

  const text3 = `import useSettings from '@/app/hooks/useSettings';
const { settings} = useSettings()
<div>{settings.version}</div>`;

  return (
    <main>
      <Typography variant='h6' component="div" sx={{marginBottom: '2rem'}}>
        useContext - make a state global 
      </Typography>
      <Typography variant='body2' component="div">
        first, create a context provider and its hook
      </Typography>
      <CodeBlock text={text0} />
			<Typography variant='body2' component="div">
        Add it to your providers
      </Typography>
      <CodeBlock text={text1} />
			<Typography variant='body2' component="div">
        Add your providers in your layout
      </Typography>
      <CodeBlock text={text2} />      
			<Typography variant='body2' component="div">
        Your context value is now available anywhere in the children tree
      </Typography>
      <CodeBlock text={text3} />      
    </main>
  )
}

export default page