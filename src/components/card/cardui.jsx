import React, { Component } from "react";
import "./card.css";
import { Link } from "react-router-dom";

export function CardUI(props) {
  const { data, id, type } = props;

  return (
    <div
      className=" card single-blog-area wow text-center fadeInUp"
      data-wow-delay="300ms"
    >
      <div className="overflow">
        <img src={data.profPic} className="card-img-top image" />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{data.name}</h4>
        <p className="card-text text-secondary">{data.title}</p>
        {type != 0 && (
          <Link to={type + "/" + id} className="btn btn-outline-success">
            View
          </Link>
        )}
      </div>
    </div>
  );
}
