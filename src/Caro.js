import React, { useEffect, useState } from 'react'
const images =[
    'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/57416/cat-sweet-kitty-animals-57416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',

]
function Caro() {
    const [value, setValue]= useState(0)

    useEffect(()=>{
      const ti =   setInterval(()=>{
            setValue((prev)=>{
              const ind =   (prev + 1) % images.length;
              return ind
              console.log(ind)
            })
        }, 3000)
        return ()=>clearInterval(ti)
    },[])
  return (
    <div>
        <img src={images[value]}/>
    </div>
  )
}

export default Caro