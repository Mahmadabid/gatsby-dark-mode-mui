import { ThemeProvider } from "@mui/material";
import React, { createContext, useReducer } from "react";
import { darkTheme, lightTheme } from "../theme/theme";
import { stateProps, actionProps, themeActionTypes } from "../types/reducerTypes";

const initialState = {
    theme: "light"
};

const themeReducer = (state: stateProps, action: actionProps) => {
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
export const GlobalDispatchContext = createContext<React.Dispatch<actionProps>>(() => { });

const ThemesProvider = ({ children }) => {

    const [state, dispatch] = useReducer(themeReducer, initialState);

    const theme = localStorage.getItem('preferred-theme');

    return (
        <GlobalStateContext.Provider value={state}>
            <GlobalDispatchContext.Provider value={dispatch}>
                <ThemeProvider theme={theme === 'light'? lightTheme: darkTheme}>
                    {children}
                </ThemeProvider>
            </GlobalDispatchContext.Provider>
        </GlobalStateContext.Provider>
    );
}

export default ThemesProvider;