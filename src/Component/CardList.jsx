import React, {useState } from "react";
import Card from "./Card";
import useApi from "../hooks/useApi";


function CardList(){
    // const[product,setProduct] = useState([]); 
     const[url,setUrl] = useState('http://localhost:3000/products');
    
     const {product:prod,loading} = useApi(url);
         console.log(loading);
    return (
        <>
        <header>
            <div id="btn1">
                <button className="btn btn-success" onClick={()=>{setUrl('http://localhost:3000/products')}}>All</button>
                <button className="btn btn-danger" onClick={()=>{setUrl('http://localhost:3000/products?category=mobile')}}>Mobile</button>
                <button className="btn btn-warning" onClick={()=>{setUrl('http://localhost:3000/products?category=tv')}}>TV</button>
           
                {loading && 'Loading...'}
            </div>
           
            
        </header>    
          <main>
          
          {
           
           prod && prod.map((p,ind)=>{
            return <Card {...p} key={ind}/>
          })}
          </main>
        </>
    );

}
export default CardList;