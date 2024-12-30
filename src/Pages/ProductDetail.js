import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useApi from "../hooks/useApi";

function ProductDetail(){
    const params = useParams();
    console.log(params);
    
    const{product:prod,loading} =  useApi(`http://localhost:3000/products/${params.pid}`);
    const navigate = useNavigate();
    return(
        <div>
        
        {prod &&(
            <>
            <p>Product Detail  {loading}</p>
            <h2>{prod.id}</h2>
            <h3>{prod.name}</h3>
            <p>{prod.category}</p>
            <h4>{prod.price}</h4>
            <button className="btn btn-success" onClick={()=>setTimeout(()=>{
                    navigate(`/product`)
            },2000)
            }>GoBack</button>
            </>
        )}
        </div>
       );
}
export default ProductDetail;