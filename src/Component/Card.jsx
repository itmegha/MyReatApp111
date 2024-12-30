import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";




function Card(props){
    return(
        <div className="card" style={{width:300}} id="a">
        <div className="card-body">
          <h4 className="card-title">{props.id}</h4>
          <h2 className="card-text">{props.name}</h2>
          <p className="card-text">{props.category}</p>
          <p className="card-text">{props.price}</p>
          <p className="card-text">{props.description}</p>
          <p>
            <Link to={`/products/${props.id}`}>ReadMore</Link>
          </p>
        </div>
      </div>
    );
}
export default Card;