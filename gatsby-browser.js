import ThemesProvider from "./src/global/reducer/themeReducer";
import React from 'react';
import "./src/styles/global.css";
import Layout from "./src/components/layout";

export const wrapRootElement = ({ element }) => (
    <ThemesProvider>{element}</ThemesProvider>    
)

export const wrapPageElement = ({ element }) => {
    return <Layout>{element}</Layout>
}

export const onRenderBody = ({ setPostBodyComponents }) => {
    setPostBodyComponents([
        <script
            key="gatsby-dark-mode-mui"
            dangerouslySetInnerHTML={{
                __html: `
                    window.__setTheme = (theme) => {
                        localStorage.setItem('preferred-theme', theme);
                    };
                    window.__getTheme = () => {
                        return localStorage.getItem('preferred-theme') || 'light';
                    };
                `,
            }}
        />,
    ]);
};
            