import React from 'react'
import { prods } from '../Constants/Data'
import { useParams } from 'react-router-dom'
import Contact from './Contact';
function SeparateProducts() {
    const {id}=useParams();
    const products=prods.filter((prod)=>(
        prod.id==id

    ))
    console.log(products[0].Separateproducts[0]);
  return (
    <div className='pb-[20px] bg-gradient-to-b from-[#ffffff] to-[#dad7cd] border-b border-gray-400'>
        {
            products.map((prod,index)=>(
                <div key={index} className=''>
                 <h1 className='text-3xl lg:text-6xl text-center text-[#3a5a40] font-unbounded py-[20px]'>{prod.text}</h1>
                 <div className='grid grid-cols-3 gap-[20px] mx-[20px] justify-items-center max-sm:grid-cols-1'>
                 { prod.Separateproducts.map((sep)=>(
                     <div key={sep.id} className=' w-[350px] max-sm:w-[300px] text-[#dad7cd] bg-[#3a5a40] rounded-md p-2'>
                        <img src={sep.image} className='h-[200px] object-cover w-full rounded-md '/>
                        <h1 className='text-xl font-bold text-center font-unbounded'>{sep.name}</h1>
                        <p className='text-lg font-thin text-justify font-inter'>{sep.description}</p>
                     </div>
                 ))}</div>
                 
                </div>
            ))
        }
     
    </div>
  )
}

export default SeparateProducts
