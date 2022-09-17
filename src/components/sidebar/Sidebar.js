import { ExpandMoreOutlined } from "@mui/icons-material";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow.js";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";
import PeopleIcon from "@mui/icons-material/People";
import ChatIcon from "@mui/icons-material/Chat";
import StorefrontIcon from "@mui/icons-material/Storefront";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import { useSelector } from "react-redux";

const Sidebar = () => {  
  const { user } = useSelector((state) => state.user);
  console.log(user.displayName);
  return (
    <div className="sidebar">
      <SidebarRow
        src={user.photoURL}
        title={user.displayName}
      />
      <SidebarRow Icon={LocalHospitalIcon} title="Covid-19 Information Center" />
      <SidebarRow Icon={EmojiFlagsIcon} title={ "Pages" }/>
      <SidebarRow Icon={PeopleIcon} title={ "Friends" }/>
      <SidebarRow Icon={ChatIcon} title={ "Messenger" }/>
      <SidebarRow Icon={StorefrontIcon} title={ "Marketplace" }/>
      <SidebarRow Icon={VideoLibraryIcon} title={ "Videos" }/>
      <SidebarRow Icon={ExpandMoreOutlined} title={ "Marketplace" }/>
    </div>
  )
}

export default Sidebar;
