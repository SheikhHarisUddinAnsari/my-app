import React from 'react'
import { Button } from '../ui/button'
import { Input } from "../ui/input"
 
type Props = {}

const Subscribe = (props: Props) => {
  return (
    <center className=' mt-60'>
    <div  className='relative'>
        
        <h1 className='text-gray-800 md:text-5xl text-3xl  font-bold '>Subscribe Our Newsletter</h1>
        <p className='text-slate-600 md:mt-9 mt-7'>Get the latest information and promo offers directly</p>
     
        <div className="xs2:flex w-full max-w-sm items-center space-x-2 mt-9">
      <Input type="email" placeholder="Enter email address" />
      <Button type="submit" className='xs2:mt-0 mt-8'>Subscribe</Button>
    </div>
    <div 
        className='xxs:text-4xl opacity-20 self-center text-center w-full  border-solid	left-auto right-auto absolute bottom-20 tracking-widest text-slate-400  font-black lg2:text-7xl xs2:text-5xl  xl:text-6xl xs:text-7xl lg1:text-9xl'
        >Newsletter</div>
      
        </div>
      
       
   
    </center>
    
  )

}

export default Subscribe