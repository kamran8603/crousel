// import React, { useEffect, useState } from 'react'
// const slides = [
//   "https://images.pexels.com/photos/57416/cat-sweet-kitty-animals-57416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//   "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=600",
//   "https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
// ]

// function Got() {
//   const [data, setData]= useState(0)
//   const [value, setValue]= useState([])
//   function abc(){
//     fetch("https://dummyjson.com/products")
//     .then((res)=>res.json())
//     .then((resp)=>{
//       setValue(resp);
//       console.log(resp(product))
//     })
//   }



//   useEffect(()=>{
//     const out = setInterval(()=>{
//       setData((prev)=>{
//         const int = (prev + 1)%  slides.length
//         return int
//       })
//     }, 3000)
//     return ()=>clearInterval(out)
//   })

//   return (
//     <div>
//       <img src={slides[data]}  alt=''/>
//     </div>
//   )
// }

// export default Got



import React, { useEffect, useState } from 'react'
const imges=[
  "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/2071873/pexels-photo-2071873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
]
function Got() {
  const [data, setData]=useState(0)
  useEffect(()=>{
    const out = setInterval(()=>{
      setData((prev)=>{
        const pre = (prev + 1)% imges.length
        return pre
      })
    },  3000)
    return ()=>(clearInterval(out))
  },[])
  return (
    <div>
    <img src={imges[data]}  style={{width:"100%", height:"80vh"}}/>
    </div>
  )
}

export default Got