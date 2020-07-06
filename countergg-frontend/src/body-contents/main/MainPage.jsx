import React from 'react';
import logo from '../../logo.svg';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => createStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '80%',
        backgroundColor: 'blue',
    },
    logo: {
        width: '15em',
        height: '15em',
    },
    logoImage: {
        width: '100%',
        height: '100%',
    },
}));

const MainPage = () => {
    const styles = useStyles();
    
    return (
        <div className={styles.root}>
            <div className={styles.logo}>
                <img src={logo} alt='logo' className={styles.logoImage} />
            </div>
            <div>
                body
            </div>
        </div>
    );
}

export default MainPage;