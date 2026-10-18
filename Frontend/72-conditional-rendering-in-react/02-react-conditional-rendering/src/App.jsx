import React from 'react'
import Card from './components/Card';

const App = () => {

  const people = [
  { name: "Aarav Sharma", gender: "male", pincode: "302001" },
  { name: "Dixit Patel", gender: "male", pincode: "380001" },
  { name: "Rohi Verma", gender: "female", pincode: "110001" },
  { name: "Ananya Singh", gender: "female", pincode: "226001" },
  { name: "Kiran Mehta", gender: "female", pincode: "400001" },
  { name: "Ishvar Gupta", gender: "male", pincode: "560001" },
  { name: "Vihaan Joshi", gender: "male", pincode: "411001" },
  { name: "Meera Nair", gender: "female", pincode: "682001" },
  { name: "Arjun Reddy", gender: "male", pincode: "500001" },
  { name: "Sanjay Iyer", gender: "male", pincode: "600001" },
  { name: "Aditi Rathore", gender: "female", pincode: "342001" },
  { name: "Priyansh Chauhan", gender: "male", pincode: "313001" },
  { name: "Kiran Malhotra", gender: "female", pincode: "160017" },
  { name: "Navin Kapoor", gender: "male", pincode: "700001" },
  { name: "Yamini Suthar", gender: "female", pincode: "305001" },
  ];

  return (
    <div className='min-h-screen py-3 px-6 flex gap-3 justify-center flex-wrap overflow-auto bg-black'>
      {people.map((elem,idx)=>{
       return <Card key={idx} props={elem}/>
      })}
    </div>
  )
}

export default App
