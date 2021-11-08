import { ThemeProvider } from "@mui/material";
import React, { createContext, useReducer } from "react";
import { darkTheme, lightTheme } from "../theme/theme";
import { stateProps, themeActionProps, themeActionTypes } from "../types/reducerTypes";

const initialState = {
    // theme: typeof(window) !== 'undefined' ? localStorage.getItem('preferred-theme')? localStorage.getItem('preferred-theme'): 'light' : 'light'
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

    const [state, dispatch] = useReducer(themeReducer, initialState);

    // To change the preferred theme
    let theme = 'light';

    if (typeof window !== 'undefined') {
        theme = localStorage.getItem('preferred-theme');        
        theme = theme ? theme : 'light';
        state.theme = theme        
    }

    return (
        <GlobalStateContext.Provider value={state}>
            <GlobalDispatchContext.Provider value={dispatch}>
                <ThemeProvider theme={state.theme === 'light' ? lightTheme : darkTheme}>
                    {children}
                </ThemeProvider>
            </GlobalDispatchContext.Provider>
        </GlobalStateContext.Provider>
    );
}

export default ThemesProvider;
