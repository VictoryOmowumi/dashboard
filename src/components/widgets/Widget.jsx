import React from 'react'
import './widget.css'
import { MdKeyboardArrowUp } from 'react-icons/md'
import {MdOutlinePerson} from 'react-icons/md'
import {MdShoppingCart} from 'react-icons/md'
import {MdOutlineMonetizationOn} from 'react-icons/md'
import {MdAccountBalanceWallet} from 'react-icons/md'
const Widget = ({type}) => {

    let data;
    // temporary
    const amount = 195;
    const diff = 20;
    switch (type) {
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link:"See all users",
                icon: <MdOutlinePerson className="icon" style={{backgroundColor:"rgba(255,0,0,0.2)", color:"crimson"}} />,
            };
            break;
        case "order":
            data = {
                title: "ORDERS",
                isMoney: false,
                link:"View all orders",
                icon: <MdShoppingCart className="icon" style={{backgroundColor:"rgba(218,165,32,0.2)", color:"goldenrod"}} />,
            };
            break;
        case "earnings":
            data = {
                title: "EARNINGS",
                isMoney: true,
                link:"View net earning",
                icon: <MdOutlineMonetizationOn className="icon" style={{backgroundColor:"rgba(0,128,0,0.2)", color:"green"}} />,
            };
            break;
        case "balance":
            data = {
                title: "BALANCE",
                isMoney: true,
                link:"See details",
                icon: <MdAccountBalanceWallet className="icon"  style={{backgroundColor:"rgba(128,0,128,0.2)", color:"purple"}} />,
            };
            break;
            default:
                break;
    }
           

  return (
    <div className="widget">
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMoney && "$"} {amount}</span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage positive">
            <MdKeyboardArrowUp className="" />
            {diff}%</div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widget