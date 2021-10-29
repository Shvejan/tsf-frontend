import React from "react";
import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar";
import { Card } from "../../components/card";
import {
  InnerPageContainer,
  PageContainer,
} from "../../components/pageContainer";
import { slide as Menu } from "react-burger-menu";
import { Marginer } from "../../components/marginer";
import "./stylesheet.css";
export function About(props) {
  return (
    <PageContainer>
      <Navbar />
      <InnerPageContainer>
        <Marginer direction="vertical" margin="2em" />
        <h1>About Us</h1>
        {/* <Marginer direction="vertical" margin="1em" /> */}
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
              <div class="panel1" id="toppnlhead">
                <h3 class="visionlbl">
                  <strong>Vision</strong>
                </h3>
                <p>
                  Our vision is to become one of the best platforms which
                  creates more working opportunities and gets more flexibility
                  in connecting with the right talent with prominent skills.
                </p>
                <h3 class="missionlbl">
                  <strong>Mission</strong>
                </h3>
                <p>
                  Techsavvy Freelancers' mission is to outperform in the process
                  of helping students find better work opportunities and make
                  the platform available to all.
                </p>
              </div>
            </div>
            <div class="col-sm-3 col-xs-0 col-lg-3"></div>
          </div>
        </div>
        <Marginer direction="vertical" margin="5em" />
      </InnerPageContainer>
      <Footer />
    </PageContainer>
  );
}
