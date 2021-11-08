import { ThemeProvider } from "@mui/material";
import React from "react";
import { darkTheme, lightTheme } from "../theme/theme";

const ThemesProvider = ({ children }) => {

    let theme = 'light';

    if (typeof window !== 'undefined') {
        theme = localStorage.getItem('preferred-theme');
    }
    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            {children}
        </ThemeProvider>
    );
}

export default ThemesProvider;