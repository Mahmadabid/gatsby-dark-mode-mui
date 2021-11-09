import { ThemeProvider } from "@mui/material";
import React, { createContext, useEffect, useReducer } from "react";
import { darkTheme, lightTheme } from "../theme/theme";
import { stateProps, themeActionProps, themeActionTypes } from "../types/reducerTypes";

const initialState = {
    // theme: 'light'
    theme: typeof window !== 'undefined' ? localStorage.getItem('preferred-theme') ? localStorage.getItem('preferred-theme') : 'light' : 'light'
};
console.log('init', initialState.theme);

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
    const [theme, setTheme] = React.useState(typeof window !== 'undefined' ? localStorage.getItem('preferred-theme') ? localStorage.getItem('preferred-theme') : 'light' : 'light');
    console.log('theme', theme);
    
    useEffect(() => {
        setTheme(state.theme);
        console.log('updated',theme);
        
    },[state.theme]);

    // To change the preferred theme
    // let theme = 'light';

    // if (typeof window !== 'undefined') {
    //     theme = localStorage.getItem('preferred-theme');        
    //     theme = theme ? theme : 'light';
    //     state.theme = theme        
    // }

    return (
        <GlobalStateContext.Provider value={state}>
            <GlobalDispatchContext.Provider value={dispatch}>
                <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
                    {console.log('TP', theme)})
                    }
                    {children}
                </ThemeProvider>
            </GlobalDispatchContext.Provider>
        </GlobalStateContext.Provider>
    );
}

export default ThemesProvider;
