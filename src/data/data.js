import classes from '../components/widget/widget.module.scss'

import PersonIcon from '@mui/icons-material/Person';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';

export const loadData = (type) => {
    switch(type) {
        case 'user': 
        return {
            title: 'USERS',
            isMoney: false,
            link: 'See all users',
            icon: <PersonIcon className={classes.icon} style={{color: 'crimson', backgroundColor: "rgba(255,0,0,0.2)"}}/>
        };
        case 'order': 
        return {
            title: 'ORDERS',
            isMoney: false,
            link: 'View all orders',
            icon: <LocalGroceryStoreOutlinedIcon className={classes.icon} style={{color: 'goldenrod', backgroundColor: "rgba(218, 165, 32, 0.2)"}}/>
        };
        case 'earning': 
        return {
            title: 'EARNING',
            isMoney: true,
            link: 'View net earnings',
            icon: <MonetizationOnOutlinedIcon className={classes.icon} style={{color: 'green', backgroundColor: "rgba(0, 128, 0, 0.2)"}}/>
        };
        case 'balance': 
        return {
            title: 'BALANCE',
            isMoney: true,
            link: 'See details',
            icon: <AccountBalanceWalletOutlinedIcon className={classes.icon} style={{color: 'purple', backgroundColor: "rgba(128,0,128, 0.2)"}}/>
        };
        default:
            break;
    }
}