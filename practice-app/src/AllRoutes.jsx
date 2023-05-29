import React from 'react'
import { Routes,Route } from 'react-router-dom'
import ApiCall from './Component/fetchCall'
import IndividualProd from './Component/singleProd'



export default function AllRoutes(){
    return(
        <div>
     
            <Routes>
                <Route path='/' element={<ApiCall/>}/>
                <Route path='/products/:id' element={<IndividualProd/>}/>
            </Routes>
        </div>
    )
}