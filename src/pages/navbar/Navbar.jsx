import { ShoppingBasket } from 'lucide-react';
import { User } from 'lucide-react';
import Hamburger from 'hamburger-react';
import { useState } from 'react';

const Navbar = () => {
  const[open,Isopen]=useState(false)
 
  return (
    <div  className=' flex    mt-8 justify-evenly   items-center '>

     <div className=' md:hidden '>
     <Hamburger size={30} toggled={open} toggle={Isopen}/>

     {open && <div className='   md:flex  text-center   fixed   top-4  left-0   w-screen h-screen  p-4  text-black  bg-white    '>
    <Hamburger size={30} toggled={open} toggle={Isopen}/>
<li className='  text-[#FF6B00] list-none  my-8 '> خانه </li>
<li className='  hover:text-[#FF6B00]  cursor-pointer  my-8     list-none '>  خرید </li>
<li className=' hover:text-[#FF6B00]  cursor-pointer     my-8   list-none '>  اپلیکیشن </li>
<li className=' hover:text-[#FF6B00]  cursor-pointer    my-8    list-none '>درباره ما</li>



</div> }

     </div>

<div className=' hidden  md:flex   items-center gap-9  '>
<li className=' list-none '>
   <img className=' size-14 rounded-full border shadow-2xl ' src="public\logo.png" alt="" />
</li>
<li className='  text-[#FF6B00] list-none '> خانه </li>
<li className='  hover:text-[#FF6B00]  cursor-pointer    list-none '>  خرید </li>
<li className=' hover:text-[#FF6B00]  cursor-pointer      list-none '>  اپلیکیشن </li>
<li className=' hover:text-[#FF6B00]  cursor-pointer      list-none '>درباره ما</li>



</div>
<div className=' flex gap-4 ' >
<ShoppingBasket />

<User/>

</div>

    </div>
  )
}

export default Navbar