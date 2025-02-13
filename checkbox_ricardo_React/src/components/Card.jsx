import React from "react";

function Card(props) {
  return (
    <div>
      <div className="card" style={{ width: "25rem" }}>
        <img src="https://placehold.co/600x400" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
            {props.description}
          </p>
          <a href="#" className="btn btn-primary">
            {props.buttonText}
          </a>
        </div>
      </div>
    </div>
  );
}


export default Card;
