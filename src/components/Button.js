import React from 'react';
import classes from '../styles/Button.module.css';

export default function Button({ children, className, ...rest }) {
    return (
        <button className={`${classes.button} ${className}`}>{children}</button>
    );
}
