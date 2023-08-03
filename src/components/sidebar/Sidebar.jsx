import React, {useContext} from 'react'
import './sidebar.css'
import { MdDashboard } from 'react-icons/md'
import { FaUsers } from 'react-icons/fa'
import { AiFillShop } from 'react-icons/ai'
import { AiFillCreditCard } from 'react-icons/ai'
import { FaTruckMoving } from 'react-icons/fa'
import { ImStatsBars } from 'react-icons/im'
import { MdOutlineSettingsSystemDaydream } from 'react-icons/md'
import { IoLogoBuffer } from 'react-icons/io'
import { AiFillSetting } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { FiLogOut } from 'react-icons/fi'
import { MdNotifications} from 'react-icons/md'
import { Link } from 'react-router-dom'
import {DarkModeContext} from '../../context/darkModeContext'
const Sidebar = () => {
    const {dispatch} = useContext(DarkModeContext)
  return (
    <div className="sidebar">
        <div className="top">
            <Link to='/' style={{textDecoration:'none'}}>
            <span className="logo">Veeadmin</span>
            </Link>
        </div>
        <div className="center">
            <ul>
                <p className="title">Main</p>
                <li> 
                <MdDashboard className="icon" />
                <span>Dashboard</span>
                </li>
                <p className="title">Features</p>
                <Link to='/users' style={{textDecoration:'none'}}>
                <li> 
                <FaUsers className="icon" />
                <span>Users</span>
                </li>
                </Link>
                <Link to='/products' style={{textDecoration:'none'}}>
                <li> 
                <AiFillShop className="icon" />
                <span>Products</span>
                </li>
                </Link>
                <li> 
                <AiFillCreditCard className="icon" />
                <span>Orders</span>
                </li>
                <li> 
                <FaTruckMoving className="icon" />
                <span>Delivery</span>
                </li>
                <p className="title">Others</p>
                <li> 
                {/* <ImStatsBars className="icon" /> */}
                <span>Stats</span>
                </li>
                <li> 
                <MdNotifications className="icon" />
                <span>Notifiactions</span>
                </li>
                <p className="title">Service</p>
                <li> 
                <MdOutlineSettingsSystemDaydream className="icon" />
                <span>System Health</span>
                </li>
                <li> 
                {/* <IoLogoBuffer className="icon" /> */}
                <span>Logs</span>
                </li>
                <li> 
                <AiFillSetting className="icon" />
                <span>Settings</span>
                </li>
                <p className="title">Account</p>
                <li> 
                <CgProfile className="icon" />
                <span>Profile</span>
                </li>
                <li> 
                <FiLogOut className="icon" />
                <span>LogOut</span>
                </li>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption"
            onClick={()=>dispatch({type:'LIGHT'})}
            ></div>
            <div className="colorOption"
            onClick={()=>dispatch({type:'DARK'})}
            ></div>
        </div>
    </div>
  )
}

export default Sidebar