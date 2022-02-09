import React from 'react';
import classes from '../styles/Answer.module.css';
import CheckBox from './CheckBox';

export default function Answers() {
    return (
        <div className={classes.answers}>
            <CheckBox className={classes.answer} text="Text Answer" />
        </div>
    );
}
