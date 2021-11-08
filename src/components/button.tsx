import { Button } from "@mui/material";
import React from "react";
import { GlobalStateContext, GlobalDispatchContext } from "../global/reducer/themeReducer";
import { handleThemeChange } from "../global/theme/theme";

const ThemeButton = () => {

    const ThemeState = React.useContext(GlobalStateContext);
    const ThemeDispatch = React.useContext(GlobalDispatchContext);

    return (
        <Button variant="contained" color="primary" onClick={() => {handleThemeChange(ThemeState, ThemeDispatch)}}>Toogle Theme</Button>
    );
}

export default ThemeButton;