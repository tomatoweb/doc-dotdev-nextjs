import SidebarContext from "@/contexts/sidebarContext"
import { useContext } from "react"


const useSidebar = () => {

	const context = useContext(SidebarContext)

	if (context === undefined) {
    //TODO: set better error message
    throw new Error('useVerticalNav must be used within a VerticalNavProvider')
  }

	return context
}

export default useSidebar