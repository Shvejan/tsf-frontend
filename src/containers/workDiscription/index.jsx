import React from "react";
import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar";
import "./stylesheet.css";
import { useParams } from "react-router-dom";
import client_data from "../../clients.json";

const clientData = client_data;

export function WorkDisc(props) {
  const { id } = useParams();
  return (
    <div>
      <Navbar />
      <div
        data-spy="scroll"
        data-target=".navbar"
        data-offset="50"
        id="body"
        bgcolor="#fcfcfc"
      >
        <div class="row outerrow">
          <div class="col-sm-3 col-xs-0 col-lg-3"></div>
          <div class="col-sm-6 col-xs-12 col-lg-6">
            <div>
              <div class="panel1" id="toppnlhead">
                <img src={clientData[id]["profPic"]} id="comprfpic" />
                <span id="projectname">
                  <strong>{clientData[id]["title"]}</strong>
                </span>
                <br />
                <span id="companyname">{clientData[id]["company"]}</span>
                <hr id="hr" />
                <label>Description</label>
                <p>{clientData[id]["disc"]}</p>
                <label>Skills Required</label>
                <ol>
                  {clientData[id]["skills"].map((s, id) => (
                    <li key={id}>{s}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
          <div class="col-sm-3 col-xs-0 col-lg-3"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
