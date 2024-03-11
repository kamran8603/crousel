import React, { useEffect, useState } from 'react'

function Home({handle}) {
  const [data, setData]=useState([])
  const [product, setProducts]= useState([])
  function abc(){
    fetch("https://fakestoreapi.com/products/")
    .then((res)=>res.json())
    .then((resp)=>{
      setData(resp)
      console.log(resp)
    })
  }
  useEffect(()=>{
    abc()
  },[])
  return (
    <div>

      {
        data.map((items)=>(
          <div style={{border:"2px solid black",height:"90vh", width:"50%", }}>
            <img src={items.image} style={{width:"80px", border:"2px solid blue"}} alt=''/>
            <h3>{items.description}</h3>
            <h3>{items.price}</h3>
            <button onClick={() => handle(product)}>Add to Cart</button>


            </div>
        ))
      }
    </div>
  )
}

export default Home