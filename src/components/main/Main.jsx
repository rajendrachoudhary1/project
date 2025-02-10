
import './Main.css'
import {assets} from '../../assets/assets'
import { Context } from '../../context/Contextapi'
import { useContext } from 'react'

function Main() {
         const {onSent,recent,showresult,Loading,resultData,setInput,input}=useContext(Context);


  return (
    <>
    <div  className='main'>
        <div className='nav'>
          <p>Gemini</p>
          <img src={assets.user_icon} alt="" />
       </div>

       <div className='main-container'>
           
         
         {!showresult ? <>
          <div className='main-text'>
            <p><span>Hello, dev.</span></p>
            <p>how can I help you today?</p>
          </div>
           
          <div className='card-main'>
            <div className='card'>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam facilis perspiciatis asperiores?</p>
                <img src={assets.bulb_icon} alt="" />
            </div>
            <div className='card'>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam facilis perspiciatis asperiores?</p>
                <img src={assets.compass_icon} alt="" />
            </div>
            <div className='card'>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam facilis perspiciatis asperiores?</p>
                <img src={assets.history_icon} alt="" />
            </div>
            <div className='card'>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam facilis perspiciatis asperiores?</p>
                <img src={assets.gallery_icon} alt="" />
            </div>
          </div>
         
         </> : <div className='result'> 
                  <div className='result-title'>
                     <img src={assets.user_icon} alt="" />
                     <p>{recent}</p>
                 </div>
                 <div className="result-data">
                   <img src={assets.gemini_icon} alt="" />
                   {Loading?
                  <div className='loader'>
                    <hr/>
                    <hr/>
                    <hr/>
                  </div>:
                   <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                  }
                  
                 </div>
         </div> }
          

          <div className="main-bottom">
            <div className="search-box">
                <input onChange={(e)=> setInput(e.target.value)}  value={input} type="text" placeholder='Enter a prompt here' />
                <div className='search-icon'>
                    <img src={assets.gallery_icon} alt="" />
                    <img src={assets.mic_icon} alt="" />
                    <img onClick={onSent} src={assets.send_icon} alt="" />
                </div>
            </div>
            <p className='bottom-info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, incidunt.</p>
          </div>
       </div>
    </div>
       
    </>
  )
}

export default Main
