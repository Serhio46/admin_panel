import classes from './navbar.module.scss';

import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import LanguageIcon from '@mui/icons-material/Language';
import NightlightRoundTwoToneIcon from '@mui/icons-material/NightlightRoundTwoTone';
import FullscreenExitTwoToneIcon from '@mui/icons-material/FullscreenExitTwoTone';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ListIcon from '@mui/icons-material/List';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';

const Navbar = () => {
    return (
        <div className={classes.navbar}>
            <div className={classes.wrapper}>
                <div className={classes.search}>
                    <input type="text" placeholder='Search...' />
                    <SearchTwoToneIcon />
                </div>
                <div className={classes.icons}>
                    <div className={classes.iconsItem}>
                        <LanguageIcon />
                        English
                    </div>
                    <div className={classes.iconsItem}>
                        <NightlightRoundTwoToneIcon />
                    </div>
                    <div className={classes.iconsItem}>
                        <FullscreenExitTwoToneIcon />
                    </div>
                    <div className={classes.iconsItem}>
                         <Badge badgeContent={3} color="error">
                            <NotificationsNoneIcon />
                         </Badge>
                    </div>
                    <div className={classes.iconsItem}>
                        <Badge badgeContent={2} color="error">
                            <ChatBubbleOutlineIcon />
                        </Badge>
                    </div>
                    <div className={classes.iconsItem}>
                        <ListIcon />
                    </div>
                    <Avatar className={classes.avatar}/>
                </div>
            </div>    
        </div>
    );
}

export default Navbar;