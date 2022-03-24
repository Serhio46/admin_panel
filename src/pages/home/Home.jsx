import React from 'react';  
import classes from './home.module.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar'

const Home = () => {
    return (
        <div className={classes.home}>
            <Sidebar />
            <div className={classes.container}>
                <Navbar />
                container
            </div>
        </div>
        
    );
}

export default Home;