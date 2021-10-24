import React, { Component } from "react";
import image1 from "../../images/marvin-meyer-SYTO3xs06fU-unsplash.jpg";
import "./card.css";
import { Link } from "react-router-dom";

export function CardUI(props) {
  const { data, id } = props;

  return (
    <div className="card text-center">
      <div className="overflow">
        <img src={data.photo} alt="asd asdasf" className="card-img-top image" />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{data.name}</h4>
        <p className="card-text text-secondary">{data.desc}</p>
        <Link to={"profiles/" + id} className="btn btn-outline-success">
          {data.type}
        </Link>
      </div>
    </div>
  );
}
