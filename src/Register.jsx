import React, { useState } from 'react';

function Register() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");
  const [submit, setSubmit] = useState([]);

  const handleClick=(e)=>{
    e.preventDefault()
    const contact={
      name,
      phone,
      mail,
    }
    setSubmit([...submit, contact])
  }
  return (
    <>
      <div className="w-full bg-slate-100 text-center">
        <h1 className='text-2xl font-semibold py-3'>Contact Register</h1>
        <div className="w-full flex items-center justify-around mt-5">
        <div className="w-[30%] bg-gray-300 rounded-lg flex flex-col justify-center items-center gap-10 py-7">
          <h1 className='text-2xl font-semibold'>Enter Your Info Below</h1>
          <div className="w-[80%] bg-white p-4 rounded-lg">
            <input type="text" placeholder='Your Name' className='outline-none bg-transparent  w-full' onChange={(e)=>setName(e.target.value)}/>
          </div>
          <div className="w-[80%] bg-white p-4 rounded-lg">
          <input type="number" placeholder='Add Number' className='outline-none bg-transparent w-full' onChange={(e)=>setPhone(e.target.value)}/>
          </div>
          <div className="w-[80%] bg-white p-4 rounded-lg">
          <input type="email" placeholder='Your Email' className='outline-none bg-transparent w-full ' onChange={(e)=>setMail(e.target.value)}/>
          </div>
          <button className="bg-blue-950 text-white font-semibold p-3 rounded-lg" onClick={handleClick}>Register</button>
        </div>
        <div className="w-[60%] bg-slate-300 rounded-lg h-[30%] flex flex-col items-center gap-7 py-7">
          <div className="l">
            <h1 className="text-2xl font-semibold">Name</h1>
            <hr />
            <p className="">Khuch Be</p>
          </div>
          <div className="l">
            <h1 className="text-2xl font-semibold">Phone Number</h1>
            <hr />
            <p className="">1234567</p>
          </div>
          <div className="l">
            <h1 className="text-2xl font-semibold">Email</h1>
            <hr />
            <p className="">abc@gmail.com</p>
          </div>
          <button className='bg-red-400 text-white font-semibold p-3 rounded-lg'>Delete</button>
        </div>
        </div>
      </div>


       <div>
        { submit.map((cont)=>{
            const {name,phone,mail}=cont
            return(
             <>
                <div>{name}</div>
                <div>{phone}</div>
                <div>{mail}</div>
             </>   
            )
        })}
       </div>


    </>
  )
}

export default Register