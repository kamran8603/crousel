import React from "react";
import { useState } from "react";
import { Route, Routes } from "react-router";
import Home from "./Home";
import Cart from "./Cart";
import { Link } from "react-router-dom";
import Crouser from "./Crouser";
import Carousel from "./Carousel";
import Caro from "./Caro";
import Check from "./Check";
import Got from "./Got";

function App() {
  const [ccart, setCart] = useState([]);
  const handle=(products)=>{
    setCart([...ccart, products]);
  }

  const slides = [
    <img src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Slide 1" />,
    <img src="https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Slide 2" />,
    <img src="https://images.pexels.com/photos/57416/cat-sweet-kitty-animals-57416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Slide 3" />,
  ];
  return (
    <>
    <div className="" style={{backgroundColor:"brown", height: "20vh", width:"100%", display: "flex", justifyContent:"space-evenly",
  alignItems:"center", color:"white", listStyle:"none" }}>
      <Link to="/">Home</Link>
      <Link to="Cart">Add To Cart </Link>
      <Link to="Crouser">Crouser </Link>
      <Link to="Crousel">Crousel </Link>
      <Link to="Caro">Caro </Link>
      <Link to="Check">Check </Link>
    
      <Link to="Got">Got</Link>
      
      

      
    </div>
    

      <Routes>
        <Route path="/" element={<Home handle={handle} />} />
        <Route path="Cart" element={<Cart ccart={ccart} />} />
        <Route path="Crouser" element={<Crouser />} />
        <Route path="Crousel" element={<Carousel />} />
        <Route path="Caro" element={<Caro />} />
        <Route path="Check" element={<Check />} />
        <Route path="got" element={<Got /> } />
        <Route path="got" element={<Carousel /> } />
        <Route />
      </Routes>
    </>
  );
}

export default App;
