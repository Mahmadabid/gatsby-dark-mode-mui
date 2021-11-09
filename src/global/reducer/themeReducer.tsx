import { ThemeProvider } from "@mui/material";
import React, { createContext, useReducer } from "react";
import { darkTheme, lightTheme } from "../theme/theme";
import { stateProps, themeActionProps, themeActionTypes } from "../types/reducerTypes";

// const themeFetch = typeof window !== 'undefined' ? localStorage.getItem('preferred-theme') ? localStorage.getItem('preferred-theme') : 'light' : 'dark';

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

    const [state, dispatch] = useReducer(themeReducer, initialState);
    // const [theme, setTheme] = React.useState(0);

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

    return (
        // <ThemeProvider theme={theme === 1 ? darkTheme : state.theme === 'light' ? lightTheme : darkTheme}>
        <ThemeProvider theme={state.theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStateContext.Provider value={state}>
                <GlobalDispatchContext.Provider value={dispatch}>
                    {children}
                </GlobalDispatchContext.Provider>
            </GlobalStateContext.Provider>
        </ThemeProvider >
    );
}

export default ThemesProvider;
