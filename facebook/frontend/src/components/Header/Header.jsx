import React from 'react';
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import { Avatar, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChatIcon from '@mui/icons-material/Chat';

const Header =()=>{
    return(
        <div className='header'>
            <div className='header-left'>
                <img alt='facebook-logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/900px-Facebook_f_logo_%282019%29.svg.png?20200820101156'/>
                <div className='header-input'>
                    <SearchIcon/>
                     <input placeholder='search facebook' type="text"/>
                </div>
                    
                   
                    
                   
                    
                   
                
            </div>
            <div className='header-middle'>
                <div className='header-option header-option--active'>
                   <HomeIcon fontSize='large'/> 
                </div>
                <div className='header-option '>
                     <FlagIcon fontSize='large'/>
                </div>
                <div className='header-option'>
                    <SubscriptionsIcon fontSize='large'/>
                </div>
                <div className='header-option'>
                     <StorefrontOutlinedIcon  fontSize='large'/>
                </div>
                <div className='header-option'>
                    <SupervisedUserCircleIcon  fontSize='large'/>
                </div>
            </div>
            <div className='header-right'>
                <div className='header-info'>
                    <Avatar/>
                    <h4>khushu sodhi</h4>
                </div>
                <IconButton>
                    <AddIcon/>
                </IconButton>
                <IconButton>
                    <ChatIcon/>
                </IconButton>
                <IconButton>
                    <NotificationsIcon/>
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon/>
                </IconButton>
            </div>
        </div>
    );
}
export default Header;
