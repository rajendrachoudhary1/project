import { createContext, useState } from "react";
import run from '../configapi/Geminiapi'

export const Context = createContext();

const ContextProvider = (props) => {

    const [input , setInput] = useState("");
    const [recent , setRecent] = useState('');
    const [prevPrompt,setPrevprompt] =useState([]);
    const [showresult,setShowresult] =useState(false);
    const [Loading,setLoading] =useState(false);
    const [resultData,setResultData] =useState('');


    const onSent = async(prompt)=>{

        setResultData('')
        setLoading(true)
        setShowresult(true)
        // let response;
        // if(prompt !== undefined){
        //      response = await run(prompt);
        //      setRecent(prompt)
        // }
        // else{
        //     setPrevprompt(prev => [...prev,input])
        //     setRecent(input)
        //     response = await run(input)
        // }
        
       setRecent(input)
       setPrevprompt(prev => [...prev,input])
       const response = await run(input)

        let responsearray = response.split("**");
        let newResponse="";
        for(let i = 0; i<responsearray.length; i++){
            if(i === 0 || i%2 !== 1){
                newResponse += responsearray[i];
            }
            else{
                newResponse += "<b>"+ responsearray[i] + "</b>";
            }
        }
        let newResponse2 = newResponse.split("*").join("</br>")

        setResultData(newResponse2)
        setLoading(false)
        setInput("")
        // console.log("hii");
        
    }
 

    const contexValue={
         prevPrompt,
         setPrevprompt,
         onSent,
         setRecent,
         recent,
         showresult,
         Loading,
         resultData,
         input,
         setInput
    }
     
    return (
        <Context.Provider value={contexValue}>
            {props.children}
        </Context.Provider>
    )
}
export default ContextProvider