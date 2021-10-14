import React from "react";
import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar";
import { Card } from "../../components/card";
import {
  InnerPageContainer,
  PageContainer,
} from "../../components/pageContainer";

import image1 from "../../images/freelancer-pics/Shvejan.jpg";
import image2 from "../../images/freelancer-pics/2.jpg";
import image3 from "../../images/freelancer-pics/3.png";
import image4 from "../../images/freelancer-pics/4.png";
import image5 from "../../images/freelancer-pics/5.png";
import image6 from "../../images/freelancer-pics/6.png";

import { Marginer } from "../../components/marginer";

const freelancersData = [
  {
    name: "Shvejan Shashank",
    photo: image1,
    desc: "I'm a web and app developer and a machine learning expert",
    type: "View Profile",
  },
  {
    name: "Anil Mamidi",
    photo: image2,
    type: "View Profile",
    desc: "I love creating beautiful and responsive websites!",
  },
  {
    name: "M Shvejan Shashank",
    photo: image3,
    type: "View Profile",
    desc: "I'm a web and app developer and a machine learning expert",
  },
  {
    name: "Shvejan Shashank",
    photo: image4,
    type: "View Profile",
    desc: "I'm a web and app developer and a machine learning expert",
  },
  {
    name: "Anil Mamidi",
    photo: image5,
    type: "View Profile",
    desc: "I love creating beautiful and responsive websites!",
  },
  {
    name: "M Shvejan Shashank",
    photo: image6,
    type: "View Profile",
    desc: "I'm a web and app developer and a machine learning expert",
  },
];

export function SearchFreelancers(props) {
  return (
    <PageContainer>
      <Navbar />
      <InnerPageContainer>
        <Marginer direction="vertical" margin="2em" />
        <h1>Some of our best freelancers</h1>
        <Marginer direction="vertical" margin="5em" />
        <Card data={freelancersData} />
        <Marginer direction="vertical" margin="5em" />
      </InnerPageContainer>
      <Footer />
    </PageContainer>
  );
}
