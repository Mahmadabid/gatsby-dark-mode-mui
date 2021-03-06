import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import GitHubIcon from '@mui/icons-material/GitHub';
import { handleThemeChange } from '../theme/darkModeToggle';
import { themeContext } from '../theme/themeProvider';

export default function Header() {    

    const theme = React.useContext(themeContext);

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
                <IconButton onClick={() => {handleThemeChange(theme.theme, theme.setTheme)}} style={{ alignItems: 'right' }} color="inherit">
                    {theme.theme === 'light' ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
            </Toolbar>
        </AppBar >
    );
}
