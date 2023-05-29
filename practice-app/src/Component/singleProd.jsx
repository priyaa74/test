import React, { useEffect, useState } from 'react'
 import {useParams} from 'react-router-dom'
export default function IndividualProd(){
const[info,setInfo]= useState({});
const {id}= useParams();

let apiCall= async()=>{
    let response= await fetch(`https://fakestoreapi.com/products/${id}`)
    let data= await response.json();
    console.log(data);
    setInfo(data);
}

useEffect(()=>{
    apiCall();
},[id])

return(
    <div>

        <div >
            <h1>{info.category}</h1>
            <img src={info.image} alt="img" />
            <p>{info.description}</p>
        </div>
    

    </div>
)
}