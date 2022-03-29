import React from 'react';  
import classes from './home.module.scss';
import Widget from '../../components/widget/Widget';
import FeaturedChart from '../../components/charts/featured/Featured';
import NormalChart from '../../components/charts/normal/NormalChart';
import Table from '../../components/table/Table';

const Home = () => {

    return (
        <div className={classes.home}>
                <div className={classes.widgets}>
                    <Widget type='user' />
                    <Widget type='order'/>
                    <Widget type='earning'/>
                    <Widget type='balance'/>
                </div>
                <div className={classes.charts}>                    
                        <FeaturedChart />
                        <NormalChart aspect={2.3 / 1} title='Last 6 months (Revenue)'/>
                </div>
                <div className={classes.listContainer}>
                    <div className={classes.listTitle}>Latest transactions</div>
                    <Table />
                </div>
        </div>
        
    );
}

export default Home;