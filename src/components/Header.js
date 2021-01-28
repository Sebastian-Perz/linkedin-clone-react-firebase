import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import {
  BusinessCenter,
  Chat,
  Home,
  Search,
  SupervisorAccount,
  Notifications,
} from "@material-ui/icons";
import "./Header.css";
import HeaderOption from "./HeaderOption";
import { logout } from "../features/userSlice";
import { auth } from "../firebase";
const Header = () => {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://cdn.freelogovectors.net/wp-content/uploads/2020/01/linkedin-logo.png"
          alt=""
        />
        <div className="header__search">
          <Search />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={Home} title="Home" />
        <HeaderOption Icon={SupervisorAccount} title="My Network" />
        <HeaderOption Icon={BusinessCenter} title="Jobs" />
        <HeaderOption Icon={Chat} title="Messages" />
        <HeaderOption Icon={Notifications} title="Notifications" />
        <HeaderOption
          avatar={true}
          title={user?.displayName}
          onClick={logoutOfApp}
        />
      </div>
    </div>
  );
};

export default Header;
