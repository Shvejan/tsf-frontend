import React from "react";
import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar";
import { Card } from "../../components/card";
import {
  InnerPageContainer,
  PageContainer,
} from "../../components/pageContainer";

import user_data from "../../user_data.json";

import { Marginer } from "../../components/marginer";

export function SearchFreelancers(props) {
  return (
    <PageContainer>
      <Navbar />
      <InnerPageContainer>
        <Marginer direction="vertical" margin="2em" />
        <h1>Some of our best freelancers</h1>
        <Card data={user_data} num="3" type="profiles" />
        <Marginer direction="vertical" margin="5em" />
      </InnerPageContainer>
      <Footer />
    </PageContainer>
  );
}
