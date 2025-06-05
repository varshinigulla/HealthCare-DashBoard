import "./Header.css"
import { IoSearchSharp } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";
import { IoIosAdd } from "react-icons/io";


export const Header = () => {
    return (
        <div className="app-header">
            <div className="logo">
                <span className="logo-health">Health</span>
                <span className="logo-care">care</span>
            </div>

            <div className="search-bar">
                <IoSearchSharp className="search-icon" />
                <input type="text" placeholder="Search" />
                <IoNotifications className="notification"/>
            </div>

            <div className="icons">
                <img src={`${process.env.PUBLIC_URL}/Assests/user.webp`} alt="user" className="user" />
                <IoIosAdd className="add-button" />
            </div>
        </div>
    )
}