import React, { Component } from "react";
import "./card.css";
import { Link } from "react-router-dom";

export function CardUI(props) {
  const { data, id, type } = props;

  return (
    <div className="wrapper">
      <div className="flipper">
        <div className="card-front">
          <div className="card animated animatedFadeInUp fadeInUp text-center">
            <div className="overflow">
              <img src={data.profPic} className="card-img-top image" />
            </div>
            <div className="card-body text-dark">
              <h6 className="card-title">{data.name}</h6>
              <p className="card-text text-secondary">{data.title}</p>
              {type != 0 && (
                <a href={data.resume} className="btn btn-outline-success">
                  View
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="card-back">
          <div className="card animated animatedFadeInUp fadeInUp text-center">
            <div className="overflow">
              <img src={data.profPic} className="card-img-top image" />
            </div>
            <div className="card-body text-dark">
              <h6 className="card-title">{data.name}</h6>
              <p className="card-text text-secondary">{data.title}</p>
              {type != 0 && (
                <a href={data.resume} className="btn btn-outline-success">
                  View
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
