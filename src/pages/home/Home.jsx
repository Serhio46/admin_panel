import React from 'react';  
import classes from './home.module.scss';
import Sidebar from '../../components/sidebar/Sidebar';

const Home = () => {
    return (
        <div className={classes.home}>
            <Sidebar />
            <div className={classes.container}>container</div>
        </div>
        
    );
}

export default Home;