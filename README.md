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
import { GlobalStateContext, GlobalDispatchContext } from "../global/reducer/themeReducer";
import { handleThemeChange } from "../global/theme/theme";

const HomePage = () => {

    const ThemeState = React.useContext(GlobalStateContext);
    const ThemeDispatch = React.useContext(GlobalDispatchContext);

    return (
        <div>
            <p>{ThemeState.theme}</p>
            <Button variant="contained" color="primary" onClick={() => {handleThemeChange(ThemeState, ThemeDispatch)}}>Toogle Theme</Button>
        </div>
    );
}

export default HomePage;
}
```
