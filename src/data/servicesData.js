import { BiCodeAlt, BiUser } from "react-icons/bi";
import { BsLaptop, BsShieldLock } from "react-icons/bs";
import { FaDesktop, FaDatabase, FaBug, FaChartLine, FaRocket } from "react-icons/fa";
import { AiOutlineCloud, AiOutlineApi } from "react-icons/ai";

export const servicesData = [
    {
        id: 1,
        title: 'Web Development',
        icon: <BiCodeAlt />
    },
    {
        id: 2,
        title: 'Frontend Development',
        icon: <BsLaptop />
    },
    {
        id: 3,
        title: 'Backend Development',
        icon: <FaDatabase />
    },
    {
        id: 4,
        title: 'API Integration',
        icon: <AiOutlineApi />
    },
    {
        id: 5,
        title: 'Cloud Services',
        icon: <AiOutlineCloud />
    },
    {
        id: 6,
        title: 'Website Optimization',
        icon: <FaChartLine />
    },
    {
        id: 7,
        title: 'Security & Performance',
        icon: <BsShieldLock />
    },
    {
        id: 8,
        title: 'Bug Fixing',
        icon: <FaBug />
    },
    {
        id: 9,
        title: 'Responsive Design',
        icon: <FaDesktop />  // Changed to a desktop icon for responsiveness
    },
    {
        id: 10,
        title: 'User Experience Design',
        icon: <BiUser />
    },
    {
        id: 11,
        title: 'Technical Support',
        icon: <FaRocket />
    },
]
