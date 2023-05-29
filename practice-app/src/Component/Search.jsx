import React, { useState } from 'react'

export default function SearchBar(){
    const [input,setInput]= useState("")
    return(
        <div>
            <input type="text" placeholder='Search' onChange={event=>setInput(event.target.value)}/>
            
        </div>
    )
}