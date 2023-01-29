import React, {useState} from 'react'
import './new.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import { MdDriveFolderUpload } from 'react-icons/md'
const New = ({inputs, title, buttonText}) => {

   const [file, setFile] = useState("")
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />

        <div className="top">
          <h1 className="title">{title}</h1>
        </div>

        <div className="bottom">
            <div className="left">
              <img src={
                file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              } alt="" />
              <form>
              <label htmlFor="file">
                <MdDriveFolderUpload className='icon' />
                Add Image
              </label>
              <input type="file" name="" id="file" style={{display:'none'}}
                 onChange={(e) => setFile(e.target.files[0])}
              />
              </form>

            </div>
            <div className="right">
                <form action="">
                  {/* <div className="formInput">
                    <label htmlFor="file">
                     Image: <MdDriveFolderUpload className='icon' />
                    </label>
                    <input type="file" id="file" style={{display:'none'}} 
                    onChange={(e) => setFile(e.target.files[0])}
                    />
                  </div> */}
                    {
                      inputs.map(input => (
                        <div className="formInput" key={input.id}>
                          <label htmlFor={input.label}>{input.label}</label>
                          <input type={input.type} id={input.label} placeholder={input.placeholder} />
                        </div>
                      ))

                    }
                <button className=''>{buttonText}</button>
                </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default New