import React, { Component } from "react";
import image1 from "../../images/marvin-meyer-SYTO3xs06fU-unsplash.jpg";
import { CardUI } from "./cardui.jsx";

export function Card(props) {
  const { data } = props;

  return (
    <div className="container-fluid d-flex justify-content-center p-5">
      <div className="row">
        {data.map(function (f, i) {
          return (
            <div className="col-md-3 p-3" key={i}>
              <CardUI data={f} id={i} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
