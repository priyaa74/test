import React from 'react';
 import { useEffect , useState} from 'react';
import ProgressBar from './ProgressBar';
import { NavLink } from 'react-router-dom';




 export default function ApiCall(){
    const [data,setData]= useState([]);
    const [completed,setCompleted]= useState(0);
    const [input,setInput]= useState("")
   

    const fetchData= async()=>{
   let res= await fetch(`https://fakestoreapi.com/products`)
    let fetcheddata= await res.json();
    console.log(fetcheddata);
     setData([...fetcheddata]);
    }


    useEffect(()=>{
    setTimeout(()=>setCompleted(Math.floor(Math.random()*100)+1),2000);
    fetchData()
    },[])
   
    return( <>
        <div>
        <input type="text" placeholder='Search' onChange={event=>setInput(event.target.value)}/>
        
    </div>

       { data.length === 0 ? ( <ProgressBar bgcolor='salmon' completed={completed}/>):
        (<div style={{display:'grid', gridTemplateColumns:'repeat(4,1fr)'}}>
            {data.filter(ele=>{
                if(input===''){
                    return ele;
                }
                else if(ele.title.toLowerCase().includes(input.toLowerCase())){
                    return ele;
                }
            }).map((ele,idx)=>{
             return(
               <NavLink style={{textDecoration:"none",color:"black"}} to={`/products/${ele.id}`}> <div key={idx}> 
                <h2>{ele.category}</h2>
                <img src={ele.image} alt="prodImg" height="200px" width="300px"/>
                <h4>{ele.title}</h4>
                </div>  </NavLink>
            )})}
        </div>)}
        </>
    )
 }
        