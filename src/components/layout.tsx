import { Paper } from '@mui/material';
import React from 'react';

const Layout = ({ children }) => {
    return (
        <Paper style={{ minHeight: '100vh' }}>
            {children}
        </Paper>
    )
}

export default Layout;