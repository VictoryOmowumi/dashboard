import React from 'react'
import './featured.css'
import { MdOutlineMoreVert } from 'react-icons/md'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import {MdKeyboardArrowDown, MdKeyboardArrowUp} from 'react-icons/md'
const Featured = () => {

    const percentage = 76

  return (
    <div className='featured'>
        <div className="top">
            <h1 className="title">Total Revenue</h1>
            <MdOutlineMoreVert fontSize={21} />
        </div>
        <div className="bottom">
            <div className="featuredChart" styles={{ background:'red'}}>
                <CircularProgressbar value={percentage} text={`${percentage}%`} strokeWidth={5} counterClockwise={true} 
                 styles={buildStyles({
                    pathColor: '#044BD9',
                    textColor: '#044BD9',
                    trailColor: '#91BBF2C7',
                    backgroundColor: '#3e98c7',
                })}
                 />
            </div>
            <p className="title">Total daily sales</p>
            <p className="amount">$420</p>
            <p className="desc"> Previous transaction processing. Last payments not included.</p>

            <div className="summary">
                <div className="item">
                    <div className="itemTitle">Target</div>
                    <div className="itemResult negative">
                        <MdKeyboardArrowDown fontSize={"small"} />
                        <div className="resultAmount">$12.4k</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Last Week</div>
                    <div className="itemResult positive">
                        <MdKeyboardArrowUp fontSize={"small"} />
                        <div className="resultAmount">$12.4k</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle ">Last Month</div>
                    <div className="itemResult positive">
                        <MdKeyboardArrowUp fontSize={"small"} />
                        <div className="resultAmount">$12.4k</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured