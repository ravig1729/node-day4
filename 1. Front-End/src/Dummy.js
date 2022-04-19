import React, {useEffect} from 'react'
import axios from 'axios';

function Dummy() {

    useEffect(()=>{
        axios.get("http://localhost:3001/").then((res)=>{
            console.log(res);
        })

        axios.post("http://localhost:3001/addUser", {name:"Aman", class: "HSC"}).then((res)=>{
            console.log(res);
        })
    })
  return (
    <div>
        <h1>Frontend + Backend</h1>
        <p>Sending data in console through backend using cors & axios.</p>
    </div>
  )
}

export default Dummy;