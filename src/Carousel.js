import React, { useEffect, useState } from 'react'
const images =[
    'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/57416/cat-sweet-kitty-animals-57416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',

];

function Carousel() {
    const [value, setvalue]= useState(0)
    useEffect(()=>{
        setInterval(()=>{
            setvalue((prev)=>{
                const index = (prev+1)%images.length
                return index
            })
        }, 3000)
    },[])

  return (
    <div>
        <img src={images[value]} style={{height:"80vh", width:"100%", transition:"height 2s",width:"2s"}} />
    </div>
  )
}

export default Carousel