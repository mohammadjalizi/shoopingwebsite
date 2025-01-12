import { Mail } from 'lucide-react';
import { Phone } from 'lucide-react';

const Footer = () => {
  return (
    <div>
        

        <div className=" flex flex-col    mt-11  rounded-3xl p-2   text-center bg-[#FCFF59] w-[70%] m-auto ">
<h1 className=" mt-5 mb-5 ">عضویت در خبرنامه برای اخبار مربوط به تخفیف‌ها و فشن</h1>

<div className=" flex   w-[70%] m-auto ">

<input className="  w-[100%] p-2 m-auto rounded-2xl mt-4  " type="text" name="" placeholder="ایمیل خود را وارد کنید" id="" />
<img src="public\buttpn-enter.png" alt="" />
</div>

        </div>

<div className=" mt-9 flex justify-between w-[70%] m-auto flex-wrap  ">

{/* start end footer */}

<div className=" flex  gap-16 items-center justify-center flex-wrap ">
<div className='  '>
<h1>منو</h1>
<ul className=' my-4  gap-7 ' >

  <li className=' cursor-pointer hover:scale-95 hover:text-orange-' >خانه</li>
  <li className=' cursor-pointer hover:scale-95 hover:text-orange-' >خرید</li>
  <li className=' cursor-pointer hover:scale-95 hover:text-orange-' >درباره ما</li>
  <li className=' cursor-pointer hover:scale-95 hover:text-orange-' >تماس با ما  </li>
</ul>

</div>
<div>
  <h1>دسته‌بندی</h1>
  <ul className=' my-4 ' >

  <li className=' cursor-pointer hover:scale-95 hover:text-orange-600'>کودک</li>
  <li className=' cursor-pointer hover:scale-95 hover:text-orange-600'>بانوان</li>
  <li className=' cursor-pointer hover:scale-95 hover:text-orange-600'>  آقایان</li>
  <li className=' cursor-pointer hover:scale-95 hover:text-orange-600'>لوازم آرایشی  </li>
  <li className=' cursor-pointer hover:scale-95 hover:text-orange-600'>متفرقه</li>
</ul>
</div>
<div>  
   <h1>فنی</h1> 
   <ul className=' my-4 ' >

  <li className=' cursor-pointer hover:scale-95 hover:text-orange-600' >شکایات و نظرات</li>
  <li className=' cursor-pointer hover:scale-95 hover:text-orange-600' >پرسش و پاسخ</li>
  <li className=' cursor-pointer hover:scale-95 hover:text-orange-600' >همکاری با ما</li>
  <li className=' cursor-pointer hover:scale-95 hover:text-orange-600' >شغل‌ها  </li>
</ul>
  
  </div>
</div>

<div className='  w-full rounded-xl   md:w-[40%]  border-dotted border-4  border-orange-300  p-6'>

  <h1 className=' text-3xl  '>جهت ارتباط با ما </h1>
  <ul className=' my-4 ' >
    <li className=' flex ga-2 m-4  '>

      <Phone/>
      09339509470</li>
    <li className=' flex gap-2 m-4 '>
 <Mail/>
       devmohammad53@gmail.com
        </li>
    <li></li>
    <li></li>
  </ul>
</div>


</div>

    </div>
  )
}

export default Footer