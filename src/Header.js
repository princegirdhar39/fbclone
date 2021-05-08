import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const Header = () => {
  return (
    <div className="header">
      <div className="header_left">
        <img src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"></img>
        <div className="header_input">
          <SearchIcon style = {{padding: `10px`}} />

          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>
      <div className="header_middle">
          <div className="header_options--active">
          <HomeIcon fontSize = "large"  />

          </div>
       
          <div className="header_options">
          <FlagIcon fontSize = "large"  />

          </div>

          <div className="header_options">
       <SubscriptionsIcon fontSize = "large"  />

          </div>
          <div className="header_options">
          <StorefrontIcon fontSize = "large"  />

          </div>
          <div className="header_options">
          <SupervisedUserCircleIcon fontSize = "large"  />

          </div>
      </div>

      <div className="header_right">

          <div className="header_info" >
              <Avatar />
             <h4>Prince</h4>
               </div>
               <IconButton > 
                   <AddIcon />
               </IconButton>
               <IconButton > 
                   <ForumIcon />
               </IconButton>
               <IconButton > 
                   <NotificationsActiveIcon />
               </IconButton>
               <IconButton > 
                   <ExpandMoreIcon />
               </IconButton>
      </div>
    </div>
  );
};
export default Header;
