import { stateProps, themeActionProps } from './../types/reducerTypes';
import { createTheme } from "@mui/material";
import { themeActionTypes } from "../types/reducerTypes";

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});


// Function to save user preference along with dispatch
export const handleThemeChange = (State: stateProps, Dispatch: React.Dispatch<themeActionProps>) => {
  Dispatch(
    {
      type: themeActionTypes.CHANGE_THEME,
      payload: State.theme === 'light' ? 'dark' : 'light'
    }
  )
  if (typeof window !== 'undefined') {
    localStorage.setItem('preferred-theme', State.theme === 'light' ? 'dark' : 'light');
  }
}