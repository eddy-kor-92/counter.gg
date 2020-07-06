import React from 'react'
import { Typography } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import './HeaderMenu.scss';

const useStyles = makeStyles(theme => createStyles({
    root: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: '1em',
        marginRight: '1em',
        height: '100%',
        '&:hover': {
            cursor: 'pointer',
            borderBottom: '3px solid',
            borderColor: 'white',
            color: 'white',
        }
    }
}));

const HeaderMenu = (props) => {
    const { name, onClick } = props;
    const styles = useStyles();

    return (
        <div className={styles.root} onClick={onClick}>
            <Typography>{name}</Typography>
        </div>
    );
}

export default HeaderMenu;