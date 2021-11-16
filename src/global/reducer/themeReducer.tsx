import { ThemeProvider } from "@mui/material";
import React, { createContext, useEffect, useReducer } from "react";
import { darkTheme, lightTheme } from "../theme/theme";
import { stateProps, themeActionProps, themeActionTypes } from "../types/reducerTypes";

const initialState = {
    theme: 'light'
};

if (typeof window !== 'undefined') {
    initialState.theme = document.documentElement.className === '' ? 'light' : 'dark';
}

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
    if (typeof window === 'undefined') {
        // Never server-side render this, since we can't determine
        // the correct initial state until we get to the client.
        // Alternatively, use a loading placeholder here.
        return null;
    }

    const [state, dispatch] = useReducer(themeReducer, initialState);

    return (
        <ThemeProvider theme={document.documentElement.className === '' ? lightTheme : darkTheme}>
            <GlobalStateContext.Provider value={state}>
                <GlobalDispatchContext.Provider value={dispatch}>
                    {children}
                </GlobalDispatchContext.Provider>
            </GlobalStateContext.Provider>
        </ThemeProvider>
    );
}

export default ThemesProvider;
