

import './Heder.css'


const dataImage=[

    {
        title:"لباس زمستانی مدل ۱۹۶۰",
        subtitle:"برند گوچی",
        image:"public/the best/2580923c6c5bfe1861535b0718d88e37-removebg-preview 1.png"
        
        
        },
        {
            title:"لباس زمستانی مدل ۱۹۶۰",
            subtitle:"برند گوچی",
            image:"public/the best/2.png"
            
            
            },
{
    title:"لباس زمستانی مدل ۱۹۶۰",
    subtitle:"برند گوچی",
    image:"public/the best/2580923c6c5bfe1861535b0718d88e37-removebg-preview 1.png"
    
    
    },
    {
        title:"لباس زمستانی مدل ۱۹۶۰",
        subtitle:"برند گوچی",
        image:"public/the best/2.png"
        
        
        },
        {
          title:"لباس زمستانی مدل ۱۹۶۰",
          subtitle:"برند گوچی",
          image:"public/the best/2580923c6c5bfe1861535b0718d88e37-removebg-preview 1.png"
          
          
          },
          {
              title:"لباس زمستانی مدل ۱۹۶۰",
              subtitle:"برند گوچی",
              image:"public/the best/2.png"
              
              
              },
  {
      title:"لباس زمستانی مدل ۱۹۶۰",
      subtitle:"برند گوچی",
      image:"public/the best/2580923c6c5bfe1861535b0718d88e37-removebg-preview 1.png"
      
      
      },
      {
          title:"لباس زمستانی مدل ۱۹۶۰",
          subtitle:"برند گوچی",
          image:"public/the best/2.png"
          
          
          },

]
const Header3 = () => {
  return (

    <div>


  
    <div className=' flex-wrap   mt-5   flex w-[70%] m-auto justify-between  items-center  '>
        <div> 
        <img src="public\the best\banner.png" alt="" />
      </div>
        <div> 
          
             </div>




    </div>

    {/* the best with moon */}

    <div>

<div className=' text-center mt-8 '>  

<h1>بهترین‌های این هفته</h1>

</div>
<div className=' my-5 h-[25rem]   gap-9 flex-wrap flex m-auto w-[60%] justify-between '>
{dataImage.map((item)=>{

return  (

<>
<div className=' flex   gap-5 flex-col items-center '>


<img className='  photo   h-[16rem]  '  src={item.image} alt="" />
<p>{item.title}</p>
<h1>{item.subtitle}</h1>
</div>

</>

)

})}

</div>

    </div>



    </div>
  )
}

export default Header3