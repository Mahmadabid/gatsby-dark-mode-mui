import { ThemeProvider } from "@mui/material";
import React, { createContext, useReducer } from "react";
import { darkTheme, lightTheme } from "../theme/theme";
import { stateProps, themeActionProps, themeActionTypes } from "../types/reducerTypes";

// const themeFetch = typeof window !== 'undefined' ? localStorage.getItem('preferred-theme') ? localStorage.getItem('preferred-theme') : 'light' : 'light';

const initialState = {
    theme: 'light'
    // theme: themeFetch
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
    React.useEffect(() => {
        const localTheme = localStorage.getItem('preferred-theme');
        if (localTheme) {
            setTheme(localTheme);
        }
        else {
            setTheme('light');
        }
    }, []);
console.log(theme);

    // set the initialSate equal to the localStorage theme
    initialState.theme = theme

    const [state, dispatch] = useReducer(themeReducer, initialState);

    // useEffect(() => {
    //     themeFetch === 'dark' ? setTheme(1) : setTheme(0);
    //     state.theme === 'dark' ? setTheme(1) : setTheme(0);
    // } , [state.theme]);

    // To change the preferred theme
    // let theme = 'light';

    // if (typeof window !== 'undefined') {
    //     theme = localStorage.getItem('preferred-theme');        
    //     theme = theme ? theme : 'light';
    //     state.theme = theme        
    // }
console.log(2,theme);

    return (
        // <ThemeProvider theme={theme === 1 ? darkTheme : state.theme === 'light' ? lightTheme : darkTheme}>
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStateContext.Provider value={state}>
                <GlobalDispatchContext.Provider value={dispatch}>
                    {children}
                </GlobalDispatchContext.Provider>
            </GlobalStateContext.Provider>
        </ThemeProvider >
    );
}

export default ThemesProvider;
