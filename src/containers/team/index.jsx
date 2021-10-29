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

const user_data = [
  {
    name: "Dr.Ameet Chawan",
    title: "",
    profPic: "/images/team/ameet.jpeg",
  },
  {
    name: "M Shvejan Shashank",
    title: "",
    profPic: "/images/team/Shvejan.png",
  },
  {
    name: "Anil Mamidi",
    title: "",
    profPic: "/images/team/2.png",
  },
];

export function Team(props) {
  return (
    <PageContainer>
      <Navbar />
      <InnerPageContainer>
        <Marginer direction="vertical" margin="2em" />
        <h1>Our Team</h1>
        {/* <Marginer direction="vertical" margin="1em" /> */}
        <Card data={user_data} num="4" type={0} />
        <Marginer direction="vertical" margin="5em" />
      </InnerPageContainer>
      <Footer />
    </PageContainer>
  );
}
