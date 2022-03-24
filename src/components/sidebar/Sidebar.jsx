import classes from './sidebar.module.scss';

import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssessmentIcon from '@mui/icons-material/Assessment';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
    return (
        <div className={classes.sidebar}>
            <div className={classes.top}>
                <span className={classes.logo}>AdminPanel</span>
            </div>
            <hr />    
            <div className={classes.center}>
                <ul>
                    <p className={classes.title}>MAIN</p>
                    <li>
                    <DashboardIcon className={classes.icon}/>
                        <span>Dashboard</span> 
                    </li>
                    <p className={classes.title}>LIST</p>
                    <li>
                        <PersonIcon className={classes.icon}/>
                        <span>Users</span>
                    </li>
                    <li>
                        <Inventory2Icon className={classes.icon}/>
                        <span>Products</span>
                    </li>
                    <li>
                        <CreditScoreIcon className={classes.icon}/>
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShippingIcon className={classes.icon}/>
                        <span>Delivery</span>
                    </li>
                    <p className={classes.title}>USEFULL</p>
                    <li>
                        <AssessmentIcon className={classes.icon}/>
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsActiveIcon className={classes.icon}/>
                        <span>Notifications</span>
                    </li>
                    <p className={classes.title}>SERVICES</p>
                    <li>
                        <SettingsSystemDaydreamIcon className={classes.icon}/>
                        <span>System Health</span>
                    </li>
                    <li>
                        <PsychologyIcon className={classes.icon}/>
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsIcon className={classes.icon}/>
                        <span>Settings</span>
                    </li>
                    <p className={classes.title}>USER</p>
                    <li>
                        <AssignmentIndIcon className={classes.icon}/>
                        <span>Profile</span>
                    </li>
                    <li>
                        <LogoutIcon className={classes.icon}/>
                        <span>Logout</span>
                    </li>
                </ul>
            </div> 
            <hr />   
            <div className={classes.btm}>
                <p className={classes.title}>CHOOSE THEME</p>
                <div className={classes.bottom}>
                    <div className={classes.colorOption}></div>
                    <div className={classes.colorOption}></div>
                    <div className={classes.colorOption}></div>
                </div>     
            </div>    
        </div>
    );
}

export default Sidebar;