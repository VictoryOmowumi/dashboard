import React, {useContext} from 'react'
import './navbar.css'
import { BiSearch } from 'react-icons/bi'
import { MdLanguage } from 'react-icons/md'
import { MdDarkMode } from 'react-icons/md'
import { MdFullscreenExit } from 'react-icons/md'
import { MdNotificationsNone } from 'react-icons/md'
import { MdOutlineChatBubbleOutline } from 'react-icons/md'
import { MdOutlineList } from 'react-icons/md'
import { DarkModeContext } from '../../context/darkModeContext'
const Navbar = () => {
    const {dispatch} = useContext(DarkModeContext)
  return (
    <div className="navbar">
        <div className="wrapper">
            <div className="search">
                <input type="text" placeholder="Search" />
                <BiSearch className="icon" />
            </div>
            <div className="items">
                <div className="item">
                <MdLanguage className="icon" />
                    English
                </div>
                <div className="item">
                    <MdDarkMode className="" fontSize={20}
                    color={dispatch.darkMode ? 'blue' : ''} 
                    onClick={()=>dispatch({type:'TOGGLE'})}
                    />
                </div>
                <div className="item">
                    <MdFullscreenExit className="icon" />
                </div>
                <div className="item">
                    <MdNotificationsNone className="icon" />
                    <div className="counter">
                        2
                    </div>
                </div>
                <div className="item">
                    <MdOutlineChatBubbleOutline className="icon" />
                    <div className="counter">5</div>
                </div>
                <div className="item">
                    <MdOutlineList className="icon" />
                </div>
                <div className="item">
                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt=""  className='avatar'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar