import React from "react";
import Data from "./Data";
import "./card.css";
import {AiFillStar, AiOutlineStar} from "react-icons/ai"
const card = () =>{
    return (
        <div className="mainContainer">
            {
                Data.map(({id, image,title,model,price}) =>{
                    return (
                      <div key={id} className="box">
                        <div className="card">
                          <div className="image">
                            <img src={image} alt="" />
                          </div>
                          <div className="desc">
                            <h1>{title}</h1>
                            <p>{model}</p>
                            <span>${price}</span>
                          </div>
                          <div className="star">
                            <AiFillStar className="icon"/>
                            <AiFillStar className="icon"/>
                            <AiFillStar className="icon"/>
                            <AiOutlineStar className="icon"/>
                            <AiOutlineStar className="icon"/>
                          </div>
                        </div>
                        <button className="btn">Add To Cart</button>
                      </div>
                    );
                })
            }
        </div>
    )
}

export default card;