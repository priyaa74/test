import React, { useEffect,useState } from 'react';


export default function ProgressBar(){
    // const {bgcolor,completed}= props;
    const[completed,setCompleted]= useState(0);

    useEffect(()=>{
      setInterval(()=>
        setCompleted(Math.floor(Math.random()*100)+1),800)
    },[])

    const bigDiv={
    height:'20px',
    width:'80%',
    backgroundColor:'#e0e0de',
    borderRadius: '50px',
    margin:' 50px auto'
    }

  const fillers = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: "salmon",
    borderRadius: 'inherit',
    textAlign: 'right',
    transition: 'width 1s ease-in-out'
  }

  const labels = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold'
  }

    return(
        <div style={bigDiv}>
        <div style={fillers}>
        <span style={labels}>{`${completed}%`}</span>
        </div>
        </div>
    )
};