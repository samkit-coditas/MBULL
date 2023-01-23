import React from 'react';

import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton'
import Close from '@mui/icons-material/Close';

import { IToasterProps } from './toaster.types';

const Toaster = ({ open, message, onClose }: IToasterProps) => (
    <Snackbar
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        open={open}
        autoHideDuration={3000}
        onClose={onClose}
        message={message}
        action={
            <React.Fragment>
                <IconButton size="small" aria-label="close" color="inherit" onClick={onClose}>
                    <Close fontSize="small" />
                </IconButton>
            </React.Fragment>
        }
    />
);

export default Toaster;

