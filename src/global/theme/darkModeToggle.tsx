import { stateProps, themeActionProps } from './../types/reducerTypes';
import { themeActionTypes } from "../types/reducerTypes";

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

export const handleThemeChangeByClass = () => {
    if (typeof window === 'undefined') {
        // Never server-side render this, since we can't determine
        // the correct initial state until we get to the client.
        return null;
    }
    
}