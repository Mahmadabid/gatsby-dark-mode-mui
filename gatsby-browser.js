import ThemesProvider from "./src/global/reducer/themeReducer";
import React from 'react';
import "./src/styles/global.css";

export const wrapRootElement = ({ element }) => (
    <ThemesProvider>{element}</ThemesProvider>    
)