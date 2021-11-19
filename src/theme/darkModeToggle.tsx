import { useCallback } from "react";

// type for prefferd theme and theme
declare global {
    interface Window {
        __setPreferredTheme: (theme: string) => void;
        __theme: string;
    }
}

// Value for theme
const themeVal = () => {
    if (typeof window === 'undefined') {
        return null;
    }

    const value = window.__theme;

    return value;
}

export const themeValue = themeVal();

// Function to save user preference along with dispatch
export const handleThemeChange = (theme: string , themeDispatch: (theme: string) => void) => {
    if (typeof window === 'undefined') {
        return null;
    }

        window.__setPreferredTheme(theme === 'light'? 'dark' : 'light');
        themeDispatch(theme === 'light'? 'dark' : 'light');
        
    return null;
}
