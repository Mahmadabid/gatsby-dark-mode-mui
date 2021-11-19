# Dark Mode with Reactjs, Gatsbyjs, Material-UI(MUI) and Typescript

[Demo](https://gatsby-dark-mode-mui.netlify.app/)

## How To Use
```terminal
$ git clone git@github.com:Mahmadabid/gatsby-dark-mode-mui.git
$ cd gatsby-dark-mode-mui

# develop
$ npm run develop
or
$ yarn develop

# build
$ npm run build
or 
$ yarn build
```

# Toggle color mode
```jsx
import { Button } from "@mui/material";
import React from "react";
import { handleThemeChange } from "../theme/darkModeToggle";
import { themeContext } from "../theme/themeProvider";

const HomePage = () => {

    const theme = React.useContext(themeContext);

    return (
        <div>
            <p>Enjoy {theme.theme} theme</p>
            <Button variant="contained" color="primary" onClick={() => {handleThemeChange(theme.theme, theme.setTheme)}}>Toogle Theme</Button>
        </div>
    );
}

export default HomePage;
}
```
