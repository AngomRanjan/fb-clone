import "./Header.css"
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import AppsIcon from '@mui/icons-material/Apps';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar, IconButton } from "@mui/material";
import { useSelector } from "react-redux";

const Header = () => {
  // const [{ user }, dispatch] = useStateValue();
  const { user } = useSelector((state) => state.user);
  return (
    <div className="header">
      <div className="header__left">
        <img
        src="https://upload.wikimedia.org/wikipedia/commons/c/c2/Facebook_icon_192.png"
        alt="" />
        <div className="header__input">
          <SearchIcon />
          <input placeholder="Search Facebook" type="text" />
        </div>
      </div>

      <div className="header__center">
        <div className="header__option header__option--active">
          <HomeIcon fontSize="large" />
        </div>
        <div className="header__option">
          <FlagIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SubscriptionsOutlinedIcon fontSize="large" />
        </div>
        <div className="header__option">
          <StorefrontOutlinedIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SupervisedUserCircleIcon fontSize="large" />
        </div>
      </div>

      <div className="header__right">
        <IconButton className="header__rightIcon">
          <AppsIcon />
        </IconButton>
        <IconButton className="header__rightIcon">
          <ForumIcon />
        </IconButton>
        <IconButton className="header__rightIcon">
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton className="header__rightIcon">
          <ExpandMoreIcon />
        </IconButton>
        <div className="header__info">
          <Avatar src={user.photoURL}/>
          {/* <h4>{user.displayName}</h4> */}
        </div>
      </div>
    </div>
  )
}

export default Header;