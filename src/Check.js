import React, { useEffect, useState } from 'react'
const images = [
    "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/57416/cat-sweet-kitty-animals-57416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
];

export default function Check() {
    const [value, setValue]= useState(0)
    useEffect(()=>{
        const viral = setInterval(()=>{
            setValue((prev)=>{
                const data = (prev +1) % images.length
                return data
                console.log(data)
            })
        }, 3000)
        return ()=>clearInterval(viral)
    },[])
  return (
    <div>
   
      <img style={{height:"100vh",width:"100%"}} src={images[value]} alt='no images' />
    </div>

  )
}
