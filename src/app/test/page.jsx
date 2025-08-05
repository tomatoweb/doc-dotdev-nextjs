'use client'
import { Paper, Switch, Typography } from "@mui/material"
import { useColorScheme } from '@mui/material'
import useSettings from "../hooks/useSettings"


const Page = () => {

	const { settingsState, setSettingsState } = useSettings()
	const { setColorScheme } = useColorScheme();

	return (		
			<Paper elevation={0} sx={{height: '100vh', borderColor: 'gray'}}>
			<Switch onClick={
				() => {
					setSettingsState(settingsState === "light" ? "dark" : "light")
					setColorScheme(settingsState)
				}}>					
				</Switch>
				<div>
					<Typography>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. In magni, pariatur facilis quibusdam numquam repellendus ullam sapiente quod impedit labore aliquam soluta ipsum dicta non modi temporibus sit! Tenetur, nemo.
					</Typography>
				</div>
			</Paper>		
	)
}

export default Page