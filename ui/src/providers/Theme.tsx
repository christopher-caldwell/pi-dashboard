import { FC } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles'
import { PaletteMode } from '@mui/material'

export const ThemeProvider: FC = ({ children }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  )
}

const themeMode: PaletteMode = 'dark'
const brandColor = '#00b8d4'
const theme = createTheme({
  palette: {
    mode: themeMode,
    primary: {
      main: brandColor
    },
    error: {
      main: 'rgb(232, 51, 51)'
    },
    success: {
      main: 'rgb(76,175,80)'
    }
  },
  typography: {
    h1: {
      // fontSize: 32,
      // margin: 0
    },
    h2: {
      // fontSize: 24,
      // margin: 0
    },
    h3: {
      // fontSize: 22,
      // margin: 0
    },
    h4: {
      // fontSize: 20,
      // margin: 0
    },
    h5: {
      // fontSize: 18,
      // margin: 0
    }
  }
})
