import SettingsContext from "@/contexts/settingsContext"
import { useContext } from "react"


const useSettings = () => {

	const context = useContext(SettingsContext)

	if (context === undefined) {
    throw new Error('useSettings must be used within a SettingsProvider')
  }

	return context
}

export default useSettings