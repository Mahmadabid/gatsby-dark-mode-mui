import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { GlobalDispatchContext, GlobalStateContext } from '../global/reducer/themeReducer';
import GitHubIcon from '@mui/icons-material/GitHub';
import { handleThemeChange } from '../global/theme/theme';

export default function Header() {

    const ThemeState = React.useContext(GlobalStateContext);
    const ThemeDispatch = React.useContext(GlobalDispatchContext);

    // To get the theme preference from local storage
    let theme = 'light';

    if (typeof window !== 'undefined') {
        theme = localStorage.getItem('preferred-theme');
        theme = theme ? theme : 'light';
    }

    return (
        <AppBar position="static">
            <Toolbar style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }} variant="dense">
                <a style={{textDecoration: 'none', color: 'white'}} href="https://github.com/Mahmadabid/gatsby-dark-mode-mui">
                    <IconButton color="inherit" >
                        <GitHubIcon style={{fontSize: '2rem'}} />
                    </IconButton>
                </a>
                <Typography variant="h6" color="inherit" component="div">
                    Dark Mode
                </Typography>
                <IconButton onClick={() => {handleThemeChange(ThemeState, ThemeDispatch)}} style={{ alignItems: 'right' }} color="inherit">
                    {theme === 'light' ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
            </Toolbar>
        </AppBar >
    );
}