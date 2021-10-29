import React from "react";
import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar";
import { Card } from "../../components/card";
import image1 from "../../images/client-logo/1.svg";
import image2 from "../../images/client-logo/2.png";
import image3 from "../../images/client-logo/3.png";
import image4 from "../../images/client-logo/4.png";
import image5 from "../../images/client-logo/5.jpeg";
import image6 from "../../images/client-logo/6.png";

import {
  InnerPageContainer,
  PageContainer,
} from "../../components/pageContainer";
import { Marginer } from "../../components/marginer";
import projectData from "../../clients.json";

export function findWork(props) {
  return (
    <PageContainer>
      <Navbar />
      <InnerPageContainer>
        <Marginer direction="vertical" margin="2em" />
        <h1>Available projects from our top clients</h1>
        <Marginer direction="vertical" margin="5em" />
        <Card data={projectData} type="workdisc" />

        <Marginer direction="vertical" margin="5em" />
      </InnerPageContainer>
      <Footer />
    </PageContainer>
  );
}
