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

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      dangerouslySetInnerHTML={{
        __html: `
  (function() {
    function setTheme(theme) {
      if (theme === 'dark') {
        document.documentElement.className = 'dark';
      } else {
        document.documentElement.className = '';
      }
      window.__theme = theme;
    };
    window.__setPreferredTheme = function(theme) {
      setTheme(theme);
      try {
        localStorage.setItem('preferred-theme', theme);
      } catch (e) {}
    };
    var preferredTheme;
    try {
      preferredTheme = localStorage.getItem('preferred-theme');
    } catch (e) {}
    var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'));
  })();
  `
          .replace(/\n/g, ' ')
          .replace(/ {2}/g, ''),
      }}
    />,
  ]);
};
