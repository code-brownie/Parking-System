import React, { useState } from 'react'
import photo from '../Assets/hero1.png';
import {Link,useNavigate} from "react-router-dom"; 
import { createUserWithEmailAndPassword,updateProfile } from 'firebase/auth';
import { auth } from './../firebase';
export default function Signup() {
    const nav=useNavigate();
    const[values,setValues] = useState({
        name:"",
        email:"",
        pass:"",
        username:""
    });
    const [errorMsg,setErrorMsg]=useState("");
    const [submitButtonDisabled,setSubmitButtonDisabled] = useState(false);
    const handleSubmission=()=>{
        if(!values.name || !values.email || !values.pass || !values.username)
        {
        setErrorMsg("Fill all fields");
        return;
        }
        setErrorMsg("");
        setSubmitButtonDisabled(true);
        createUserWithEmailAndPassword(auth,values.email,values.pass)
        .then(async(res) => {
             setSubmitButtonDisabled(false);
             const user = res.user;
            await updateProfile(user,{
                displayName:values.name,
             })
             nav("/location")
        })
        .catch((err)=> {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
    });
    };
  return (
    <div>
      <body className='bg-blue-200 w-full h-screen flex'>
    <div className='w-[50vw] h-[100vh] flex items-center justify-center'>
    <div className='box-border h-[680px] w-[390px] p-4 rounded-2xl flex flex-col gap-6'>
        <div className='text-center'>
         <h1 className="text-3xl mt-1 text-blue-800 font-bold">Signup</h1>
        </div>
        <div className='flex gap-2 mt-1 bg-white rounded-xl h-12 p-2'>
       <img src="https://img.icons8.com/?size=40&id=44517&format=png" alt="name" className="w-8 h-8 rounded-xl"/>
        <input type="text" placeholder='Name' required  onChange={(event)=>setValues((prev)=>({...prev,name:event.target.value}))} className='w-80 h-4 rounded-xl  p-4 border-none outline-none'/>
        </div>
        <div className='flex gap-2 mt-1 bg-white rounded-xl h-12 p-2'>
       <img src="https://img.icons8.com/?size=48&id=q2xuZq1BZd4P&format=png" alt="name" className="w-8 h-8 rounded-xl ml-2"/>
        <input type="text" placeholder='Username' onChange={(event)=>setValues((prev)=>({...prev,username:event.target.value}))} required className='w-80 h-4 rounded-xl  p-4 border-none outline-none'/>
        </div>
        <div className='flex gap-2 mt-1 bg-white rounded-xl h-12 p-2'>
       <img src="https://img.icons8.com/?size=40&id=42058&format=png" alt="name" className="w-8 h-8 rounded-xl ml-2"/>
        <input type="email" placeholder='Email' onChange={(event)=>setValues((prev)=>({...prev,email:event.target.value}))} required className='w-80 h-4 rounded-xl  p-4 border-none outline-none'/>
        </div>
        <div className='flex gap-1 mt-1 bg-white rounded-xl h-12 p-2'>
       <img src="https://img.icons8.com/?size=40&id=40348&format=png" alt="name" className="w-8 h-8 rounded-xl ml-2"/>
        <input type="password" placeholder='Password'onChange={(event)=>setValues((prev)=>({...prev,pass:event.target.value}))} required className='w-80 h-4 rounded-xl  p-4 border-none outline-none'/>
        </div>
        <div>
            Already have an account?<span className="text-blue-800"><Link to="/login"> Login</Link></span>
        </div>
        <b className="text-red-700 m-0">{errorMsg}</b>
        <button onClick={handleSubmission} disabled={submitButtonDisabled}className="relative cursor-pointer px-6 py-1 text-xl font-semibold text-white border-2 border-blue-800 bg-blue-800 rounded-full transition-transform duration-300 ease-in-out overflow-hidden group w-40 h-12">Register
       </button> 
        </div>
        </div>
        <div className='w-[800px] h-[500px] flex items-center justify-center mt-16'>
           <img src={photo} alt="picture" className='w-[700px] h-[500px] '/>
        </div>
    </body>
    </div>
  )
}