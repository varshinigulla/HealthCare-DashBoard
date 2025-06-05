import { MdDashboardCustomize } from "react-icons/md";
import { PiArrowsDownUpFill } from "react-icons/pi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { CgAddR } from "react-icons/cg";
import { FcStatistics } from "react-icons/fc";
import { BsChatDots } from "react-icons/bs";
import { MdCall } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";

export const general = [
    {
        id:1,
        icon:<MdDashboardCustomize />,
        title:"Dashboard",
    },
    {
        id:2,
        icon:<PiArrowsDownUpFill />,
        title:"History",
    },
    {
        id:3,
        icon:<FaRegCalendarAlt />,
        title:"Calendar",
    },
    {
        id:4,
        icon:<CgAddR />,
        title:"Appointments",
    },
    {
        id:5,
        icon:<FcStatistics />,
        title:"Statistics",
    }
];
export const tools = [
    {
        id:6,
        icon:<BsChatDots />,
        title:"Chat",
    },
    {
        id:7,
        icon:<MdCall />,
        title:"Support",
    }
];
export const setting =[
    {
        id:8,
        icon:<IoSettingsOutline />,
        title:"Setting",
    }
];