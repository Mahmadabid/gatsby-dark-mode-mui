import { stateProps, themeActionProps } from './../types/reducerTypes';
import { themeActionTypes } from "../types/reducerTypes";

// type for prefferd theme and theme
declare global {
    interface Window {
        __setPreferredTheme: (theme: string) => void;
        __theme: string;
    }
}

// Function to save user preference along with dispatch
export const handleThemeChange = (State: stateProps, Dispatch: React.Dispatch<themeActionProps>) => {
    Dispatch(
        {
            type: themeActionTypes.CHANGE_THEME,
            payload: State.theme === 'light' ? 'dark' : 'light'
        }
    )
    if (typeof window !== 'undefined') {
        window.__setPreferredTheme(document.documentElement.className === '' ? 'dark' : 'light');
    }
}
