import React, { useEffect, useState } from "react";
function Form() {
   const data = {name:" ",email:" ",password:" "};
   const [inputData , setInputData]= useState(data);
   const [Flag ,setFlag]=useState(false)
   useEffect(()=>{
    console.log("Registered")

   },[Flag])
   function handleData(e){
    setInputData({...inputData,[e.target.name]:e.target.value})
    console.log(inputData)

   }
   function handleSubmit(e){

    e.preventDefault();
    if(!inputData.name||!inputData.email||!inputData.password){
      alert("All fields are mandatory")
    }else{
      setFlag(true)
    }
   }
  return (
   <>
   <pre> { {Flag}?<h2 className='ui-define'>HELLO {inputData.name} ,you have registered success
   
   
   fully</h2>:" "}</pre>
    <form className="container" onSubmit={handleSubmit}>
      <div className="header">
        <h1>Registration Form</h1>
      </div>
      <div>
        <input type="text" placeholder=" enter your name" name="name" value = {inputData.name} onChange={handleData}></input>
      </div>
      <div>
        <input type="text" placeholder=" enter your email" name="email" value = {inputData.email}onChange={handleData}></input>
      </div>
      <div>
        <input type="text" placeholder=" enter your password" name="password" value={inputData.password}onChange={handleData}></input>
      </div>
      <div>
        <button type="submit">submit</button>
      </div>
    </form>
    </>
  );
}
export default Form;
