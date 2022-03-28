import classes from './featured.module.scss';
import CirculerChart from './CirculerChart';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const FeaturedChart = () => {


    return (
        <div className={classes.chart}>
            <div className={classes.top}>
                <h1 className={classes.title}>Total Revenue</h1>
                <MoreVertIcon className={classes.icon}/>
            </div>
            <div className={classes.bottom}>
                    <CirculerChart />
                <p className={classes.title}>Total sales made today</p>
                <p className={classes.amount}>$420</p>
                <p className={classes.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam laboriosam corrupti optio distinctio, ut officiis! </p>
                <div className={classes.summary}>
                    <div className={classes.item}>
                        <div className={classes.itemTitle}>Target</div>
                        <div className={`${classes.itemResult} ${classes.negative}`}>
                            <KeyboardArrowDownIcon className={classes.icon}/>
                            <div className={classes.resultAmount}>$12.4k</div>
                        </div>
                    </div>
                    <div className={classes.item}>
                        <div className={classes.itemTitle}>Last Week</div>
                        <div className={`${classes.itemResult} ${classes.negative}`}>
                            <KeyboardArrowDownIcon className={classes.icon}/>
                            <div className={classes.resultAmount}>$12.4k</div>
                        </div>
                    </div>
                    <div className={classes.item}>
                        <div className={classes.itemTitle}>Last Month</div>
                        <div className={`${classes.itemResult} ${classes.positive}`}>
                            <KeyboardArrowUpIcon className={classes.icon}/>
                            <div className={classes.resultAmount}>$12.4k</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeaturedChart;