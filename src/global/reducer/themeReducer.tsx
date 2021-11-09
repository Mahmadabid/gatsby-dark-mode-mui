import { ThemeProvider } from "@mui/material";
import React, { createContext, useEffect, useReducer } from "react";
import { darkTheme, lightTheme } from "../theme/theme";
import { stateProps, themeActionProps, themeActionTypes } from "../types/reducerTypes";

const initialState = {
    theme: 'light'
};

const themeReducer = (state: stateProps, action: themeActionProps) => {
    switch (action.type) {
        case themeActionTypes.CHANGE_THEME:
            return {
                ...state,
                theme: action.payload
            }
        default:
            return state;
    }
}

export const GlobalStateContext = createContext(initialState);
export const GlobalDispatchContext = createContext<React.Dispatch<themeActionProps>>(() => { });

const ThemesProvider = ({ children }) => {

    const [theme, setTheme] = React.useState('light');
    const [switched, setSwitch] = React.useState(true);

    // Fetch localStorage and set it to theme
    React.useEffect(() => {
        const localTheme = localStorage.getItem('preferred-theme');
        if (localTheme) {
            setTheme(localTheme);
        }
        else {
            setTheme('light');
        }
        setSwitch(false);
    }, []);

    // set the initialSate equal to the localStorage theme
    initialState.theme = theme
    
    const [state, dispatch] = useReducer(themeReducer, initialState);

    return (
        <ThemeProvider theme={switched ? theme === 'light' ? lightTheme : darkTheme : state.theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStateContext.Provider value={state}>
                <GlobalDispatchContext.Provider value={dispatch}>
                    {children}
                </GlobalDispatchContext.Provider>
            </GlobalStateContext.Provider>
        </ThemeProvider >
    );
}

export default ThemesProvider;
