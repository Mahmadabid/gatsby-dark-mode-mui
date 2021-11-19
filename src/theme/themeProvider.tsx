import { ThemeProvider } from "@mui/material";
import React, { createContext } from "react";
import { themeValue } from "./darkModeToggle";
import { darkTheme, lightTheme } from "./theme";

interface themeType {
    theme: string;
    setTheme: (theme: string) => void;
}

export const themeContext = createContext<themeType>({
    theme: 'light',
    setTheme: () => null
});

const ThemesProvider = ({ children }) => {
    if (typeof window === 'undefined') {
        // Never server-side render this, since we can't determine
        // the correct initial state until we get to the client.
        // Alternatively, use a loading placeholder here.
        return null;
    }

    const [theme, setTheme] = React.useState(themeValue);

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <themeContext.Provider value={{theme, setTheme}} >
                {children}
            </themeContext.Provider>
        </ThemeProvider>
    );
}

export default ThemesProvider;
