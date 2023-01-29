import React from 'react'
import './single.css'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Chart from '../../components/chart/Chart'
import Table from '../../components/table/Table'
const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
      <Navbar />
      <div className="top">
        <div className="left">
        <div className="editButton">Edit</div>
          <h1 className="title">User Information</h1>
          <div className="item">
            <img src="https://images.pexels.com/photos/4355346/pexels-photo-4355346.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="itemImg" />
            <div className="details">
              <h2 className="itemTitle">Marie Anderson</h2>

              <div className="detailItem">
                <span className="itemKey">Email:</span>
                <span className="itemValue">marieanderson@gmail.com</span>
              </div>

              <div className="detailItem">
                <span className="itemKey">Phone:</span>
                <span className="itemValue">+1 123 456 7658</span>
              </div>

              <div className="detailItem">
                <span className="itemKey">Address:</span>
                <span className="itemValue">Wall Street, New York City</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Country:</span>
                <span className="itemValue">USA</span>
              </div>
              
              

            </div>

          </div>
        </div>
        <div className="right"> 
          <Chart aspect={3/1} title="Transactions (Last year)"/>
        </div>
      </div>
      <div className="bottom">
        <h1 className="title">Last Transactions</h1>
          <Table />
        </div>
      </div>
    </div>
  )
}

export default Single