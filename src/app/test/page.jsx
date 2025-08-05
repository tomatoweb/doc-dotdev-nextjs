'use client'
import { createTheme, Paper, Switch, ThemeProvider, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { useColorScheme } from '@mui/material'
import useSettings from "../hooks/useSettings"


const page = () => {

	const { settingsState, setSettingsState } = useSettings()
	const { mode, setMode, setColorScheme } = useColorScheme();

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

export default page