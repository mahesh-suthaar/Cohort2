import { useState } from "react"
let graceCount = 0;

export default function App (){

  let [marks,setmarks] = useState([12,76,32,45,36,24,75])

  let handleclick=()=>{
    if(graceCount===1){
      alert('Grace marks are awarded only once.')
      }
    else{
      alert('Students whose marks are below the minimum passing marks will be awarded 5 grace marks.');
      let gracedMarks=marks.map((elem)=>{
      if(elem<33){
        return elem+5
      }
      else {return elem}
      })
    
      setmarks(gracedMarks)
      graceCount++
    }

  }

   return(
    <div>
      {marks.map((elem,idx)=>{
        return <h1 key={idx}> Student {idx+1}, Marks = {elem} {elem<33?'(Fail)':'(Pass)'}</h1>
      })}
      <button onClick={handleclick}>Give grace marks</button>
    </div>
   )
}