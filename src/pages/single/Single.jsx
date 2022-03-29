import React from 'react';  
import classes from './single.module.scss';
import NormalChart from '../../components/charts/normal/NormalChart';
import Table from '../../components/table/Table';

import Avatar from '@mui/material/Avatar';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { Tab } from '@mui/material';

const Single = () => {
    return (
        <div className={classes.single}>
            <div className={classes.top}>
                <div className={classes.left}>
                    <div className={classes.editBtn}>Edit<EditOutlinedIcon className={classes.edit}/></div>
                    <h1 className={classes.title}>Information</h1>
                    <div className={classes.item}>
                        <Avatar className={classes.avatar}/>
                        <div className={classes.details}>
                            <h2 className={classes.itemTitle}>Jane Doe</h2>
                            <div className={classes.detailItem}>
                                <span className={classes.itemKey}>Email:</span>
                                <span className={classes.itemValue}>janedoe@gmail.com</span>
                            </div>
                            <div className={classes.detailItem}>
                                <span className={classes.itemKey}>Phone:</span>
                                <span className={classes.itemValue}>+375291111111</span>
                            </div>
                            <div className={classes.detailItem}>
                                <span className={classes.itemKey}>Adress:</span>
                                <span className={classes.itemValue}>Minsk, Lenina str., 1</span>
                            </div>
                            <div className={classes.detailItem}>
                                <span className={classes.itemKey}>Country:</span>
                                <span className={classes.itemValue}>Belarus</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.right}>
                    <NormalChart aspect={5/1} title='User Spending(Last 6 Months)'/>
                </div>
            </div>
            <div className={classes.bottom}>
                <h2 className={classes.title}>Last purchases</h2>
                <Table />
            </div>
        </div>
    );
}

export default Single;