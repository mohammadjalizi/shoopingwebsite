
import  './Product.css'


const dataImage=[

    {
        title:"لباس زمستانی مدل ۱۹۶۰",
        subtitle:"برند گوچی",
         image:"public/the best/productimage/1.png",
         price:"۲۱۳.۰۰۰ تومان",
        
        
        },
        {
            title:"لباس زمستانی مدل ۱۹۶۰",
            subtitle:"برند گوچی",
             image:"public/the best/productimage/2.png",
             price:"۲۱۳.۰۰۰ تومان",
            
            
            },
{
    title:"لباس زمستانی مدل ۱۹۶۰",
    subtitle:"برند گوچی",
      image:"public/the best/productimage/1.png",
      price:"۲۱۳.۰۰۰ تومان",
    
    
    },
    {
        title:"لباس زمستانی مدل ۱۹۶۰",
        subtitle:"برند گوچی",
      image:"public/the best/productimage/2.png",
      price:"۲۱۳.۰۰۰ تومان",
        
        
        },
        {
          title:"لباس زمستانی مدل ۱۹۶۰",
          subtitle:"برند گوچی",
       image:"public/the best/productimage/1.png",
       price:"۲۱۳.۰۰۰ تومان",
          
          
          },
          {
              title:"لباس زمستانی مدل ۱۹۶۰",
              subtitle:"برند گوچی",
              image:"public/the best/productimage/2.png",
              price:"۲۱۳.۰۰۰ تومان",
              
              
              },
  {
      title:"لباس زمستانی مدل ۱۹۶۰",
      subtitle:"برند گوچی",
      image:"public/the best/productimage/1.png",
      price:"۲۱۳.۰۰۰ تومان",
      
      
      },
      {
          title:"لباس زمستانی مدل ۱۹۶۰",
          subtitle:"برند گوچی",
       image:"public/the best/productimage/2.png",
       price:"۲۱۳.۰۰۰ تومان",
          
          
          },
          {
            title:"لباس زمستانی مدل ۱۹۶۰",
            subtitle:"برند گوچی",
         image:"public/the best/productimage/2.png",
         price:"۲۱۳.۰۰۰ تومان",
            
            
            },

]
const Product = () => {
  return (
    <div className="  ">
        

        <div className='  w-[60%] m-auto  mt-8 '>  

<h1> زمستانه </h1>

</div>
<div className=' my-5  h-full   gap-9 flex-wrap flex m-auto w-[60%] justify-between '>
{dataImage.map((item)=>{

return  (

<>
<div className=' flex   gap-5 flex-col items-center '>


<img className='  photo1   h-[16rem]  '  src={item.image} alt="" />
<p>{item.title}</p>
<h1>{item.subtitle}</h1>
<div className=' flex justify-between items-center  w-[12rem] flex-wrap  '>

  <p>{item.price}</p>
  <img className=' cursor-pointer '  src="public\the best\productimage\Group 65.svg" alt="" />
</div>
</div>

</>

)

})}

</div>

    </div>
    

    
  )
}

export default Product