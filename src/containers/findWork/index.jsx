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
const projectData = [
  {
    name: "Accenture",
    photo: image1,
    desc: "We are looking for a professional freelancer to build an E-Commerce website",
    type: "Apply",
  },
  {
    name: "Amazon",
    photo: image2,
    type: "Apply",
    desc: "Need a Machine Learning expert for data analytics project",
  },
  {
    name: "Infosys",
    type: "Apply",
    photo: image3,
    desc: "We are looking for a web developer to build a beautiful and responsive website",
  },
  {
    name: "Swiggy",
    type: "Apply",
    photo: image4,
    desc: "Android app developer needed to increase the performance of our existing app",
  },
  {
    name: "TCS",
    photo: image5,
    type: "Apply",
    desc: "We need a creative logo designer to design the logo of our new product!",
  },
  {
    name: "Uber",
    type: "Apply",
    photo: image6,
    desc: "An IOS app developer needed optimize our app with the latest IOS updates",
  },
];
export function findWork(props) {
  return (
    <PageContainer>
      <Navbar />
      <InnerPageContainer>
        <Marginer direction="vertical" margin="2em" />
        <h1>Available projects from our top clients</h1>
        <Marginer direction="vertical" margin="5em" />
        <Card data={projectData} />

        <Marginer direction="vertical" margin="5em" />
      </InnerPageContainer>
      <Footer />
    </PageContainer>
  );
}
