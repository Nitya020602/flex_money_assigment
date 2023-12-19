import React, { useState } from 'react'
import './Admin.css'
import {useNavigate} from 'react-router-dom'
const Admin = () => {
    const [name,setName]=useState('');
    const [age,setAge] = useState('');
    const [number,setNumber] = useState('');
    const [date,setDate]=useState('');
    const [selectedOption, setSelectedOption] = useState("")  
    const navigate = useNavigate();
    const Show= async(e)=>{
        if ((name===undefined)||(name==="")||(age===undefined)||(age==="")||(number===undefined)||(number==="")||(date===undefined)||(date==="")||(selectedOption===undefined)||(selectedOption==="")){
            alert("Either of the field not selected or empty can't be enroll for class");
            return;
        }
        if ((age<18)||(age>65)){
            alert("Age below 18 or above 65 can't enroll !!")
            return
        }
        e.preventDefault();
        const result=await fetch('http://localhost:4000/create',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({name,age,number,date,selectedOption})
        });
        const data = await result.json()
        if (data.status===500){
            console.log("Error")
        }else{
            navigate('/')
        }
    }
    // Function to handle the change in radio button selection
    function onValueChange(event){
        // Updating the state with the selected radio button's value
        setSelectedOption(event.target.value)
    }
  return (
    <div className='form'>
        <h2>Admission Form</h2>
        <div className='field'>
            <label>Name:</label>
            <div className='input'>
                <input type="text" placeholder="Enter your name" onChange={e=>setName(e.target.value)}/>
            </div>
        </div>
        <div className='field'>
            <label>Age:</label>
            <div className='input'>
                <input type="number" placeholder="Enter your age" onChange={e=>setAge(e.target.value)}/>
            </div>
        </div>
        <div className='field'>
            <label>Phone:</label>
            <div className='input'>
                <input type="number" placeholder="Enter your phone number" onChange={e=>setNumber(e.target.value)}/>
            </div>
        </div>
        <div className='field'>
            <label>Payment Date:</label>
            <div className='input'>
                <input type="date" onChange={e=>setDate(e.target.value)}/>
            </div>
        </div>
        <div className='field'>
            <label>Slots</label>
            <div className='slots'>
            <label>
                <input className='slot'
                    type="radio"
                    value="6-7 AM"
                    // Checking this radio button if the selected option is "Male"
                    checked={selectedOption === "6-7 AM"}
                    onChange={onValueChange}/>
                    6-7 AM
            </label>
            <label>
                <input className='slot'
                    type="radio"
                    value="7-8 AM"
                    // Checking this radio button if the selected option is "Male"
                    checked={selectedOption === "7-8 AM"}
                    onChange={onValueChange}/>
                    7-8 AM
            </label>
            <label>
                <input className='slot'
                    type="radio"
                    value="8-9 AM"
                    // Checking this radio button if the selected option is "Male"
                    checked={selectedOption === "8-9 AM"}
                    onChange={onValueChange}/>
                    8-9 AM
            </label>
            <label>
                <input className='slot'
                    type="radio"
                    value="5-6 PM"
                    // Checking this radio button if the selected option is "Male"
                    checked={selectedOption === "5-6 PM"}
                    onChange={onValueChange}/>
                    5-6 PM
            </label>
            </div>
        </div>
        <p className='matter'>This purchase is for upcoming month fee for classes</p>
        <div className='payment'>
            <button onClick={Show}>
                Enrol !!
            </button>
        </div>
    </div>
  )
}
export default Admin;
