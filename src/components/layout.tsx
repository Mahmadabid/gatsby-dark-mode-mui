import { Paper } from '@mui/material';
import React from 'react';
import Header from './header';

const Layout = ({ children }) => {
    return (
        <Paper style={{ minHeight: '100vh' }}>
            <Header />
            {children}
        </Paper>
    )
}

export default Layout;