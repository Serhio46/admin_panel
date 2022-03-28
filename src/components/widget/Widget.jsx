import classes from './widget.module.scss';
import { loadData } from '../../data/data';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Widget = ({type}) => {

    const data = loadData(type);
    const amount = 99;
    const diff = 20;

    return(
        <div className={classes.widget}>
            <div className={classes.left}>
                <span className={classes.title}>{data.title}</span>
                <span className={classes.counter}>{data.isMoney && "$"} {amount}</span>
                <span className={classes.link}>{data.link}</span>
            </div>
            <div className={classes.right}>
                <div className={`${classes.percent} ${classes.positive}`}>
                    <KeyboardArrowUpIcon />
                    {diff}%
                </div>
                {data.icon}
            </div>
        </div>
    );
}

export default Widget;