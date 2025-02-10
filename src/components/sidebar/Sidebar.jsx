
import './Sidebar.css'
import {assets} from '../../assets/assets'
import { useContext, useState } from 'react'
import { Context } from '../../context/Contextapi'

function Sidebar() {
  const [extended, setExtended] = useState(false)
  const {onSent,prevPrompt,setRecent,newchat} =useContext(Context)
  
  const loadprompt = async(prompt) => {
    setRecent(prompt)
    await onSent(prompt)
  }
  return (
    <>
        <div className='sidebar'>
            <div className='top'>
                 <img onClick={()=>setExtended(prev=>!prev)} className='menu' src={assets.menu_icon} alt="menu" />
                 <div onClick={()=>newchat()} className='new-chats'>
                    <img src={assets.plus_icon} alt="plus-icon" />
                    {!extended?<p>New Chats</p>:null}
                 </div>
                 
                 {!extended?<div className="recent">
                    <p className='recent-title'>Recent</p>
                    {prevPrompt.map((item,index)=>{
                        return(
                            <div onClick={()=>loadprompt(item)} className="recent-entry">
                            <img src={assets.message_icon} alt="" />
                            <p>{item.slice(0,15)}...</p>
    
                        </div>
                        )
                    })}
                    
                    </div>:null} 
                  
            </div>

            <div className="bottom">
                    <div className='bottom-item recent-entry'>
                        <img src={assets.question_icon} alt="" />
                        {!extended?<p>Help</p>:null} 
                    </div>
                    <div className='bottom-item recent-entry'>
                        <img src={assets.history_icon} alt="" />
                        {!extended?<p>Activity</p>:null} 
                    </div>
                    <div className='bottom-item recent-entry'>
                        <img src={assets.setting_icon} alt="" />
                        {!extended?<p>Settings</p>:null} 
                    </div>

            </div>
        </div>
    </>
  )
}

export default Sidebar
