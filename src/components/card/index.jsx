import React, { Component } from "react";
import image1 from "../../images/marvin-meyer-SYTO3xs06fU-unsplash.jpg";
import { CardUI } from "./cardui.jsx";

export function Card(props) {
  const { data, type, num } = props;

  return (
    <div className="container-fluid d-flex justify-content-center p-5 ">
      <div className="row ">
        {data.map(function (f, i) {
          return (
            <div className={"col-md-" + num + " p-5"} key={i}>
              <CardUI data={f} id={i} type={type} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
