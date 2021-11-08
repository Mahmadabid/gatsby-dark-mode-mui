import { ThemeProvider } from "@mui/material";
import React, { createContext, useReducer } from "react";
import { darkTheme, lightTheme } from "../theme/theme";
import { stateProps, themeActionProps, themeActionTypes } from "../types/reducerTypes";

const initialState = {
    theme: typeof(window) !== 'undefined' ? localStorage.getItem('preferred-theme')? localStorage.getItem('preferred-theme'): 'light' : 'light'
};

const pref = matchMedia("(prefers-color-scheme: dark)")
console.log(pref);
matchMedia("(prefers-color-scheme: dark)").addEventListener("change", e => {
    console.log(e.matches);
    if (e.matches) {
        console.log('dark');
        if (typeof window !== 'undefined') {
            localStorage.setItem('preferred-theme', 'dark');
        }
    } else {
        console.log('light');
        if (typeof window !== 'undefined') {
            localStorage.setItem('preferred-theme', 'light');
        }
    }
});

console.log('init',initialState);
const theme = initialState.theme;
console.log('theme',theme);

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
console.log('state',state);

    // To change the preferred theme
    // let theme = 'light';

    // if (typeof window !== 'undefined') {
    //     theme = localStorage.getItem('preferred-theme');
    //     console.log(theme, state);
        
    //     theme = theme ? theme : 'light';
    //     state.theme = theme
    //     console.log(theme, state);
        
    // }

    console.log('theme', theme, state.theme);
    
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
