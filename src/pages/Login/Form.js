import React from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(2),

        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '300px',
        },
        '& .MuiButtonBase-root': {
            margin: theme.spacing(2),
        },
    },
}));

const Form = ({ handleSubmit,id,password,onChangeValue }) => {
    const classes = useStyles();
    // create state variables for each input

    return (
        <form className={classes.root} onSubmit={handleSubmit}>
            <TextField
                label="Id"
                variant="filled"
                name="userId"
                required
                value={id}
                onChange={e => onChangeValue(e)}
            />
            <TextField
                label="Password"
                variant="filled"
                type="password"
                name="userPassword"
                required
                value={password}
                onChange={e => onChangeValue(e)}
            />
            <div>
                <Button type="submit" variant="contained" color="primary">
                    Login
                </Button>
            </div>
        </form>
    );
};

export default Form;