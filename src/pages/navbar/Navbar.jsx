import { ShoppingBasket } from 'lucide-react';
import { User } from 'lucide-react';


const Navbar = () => {
 
  return (
    <div  className=' flex    mt-8 justify-evenly   items-center '>

     <div className=' md:hidden '>
        menubarger
     </div>

<div className=' hidden  md:flex   items-center gap-9  '>
<li className=' list-none '>
   <img className=' size-14 rounded-full border shadow-2xl ' src="public\download.jpg" alt="" />
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