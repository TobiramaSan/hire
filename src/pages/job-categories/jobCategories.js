import React from "react";
import "./jobCategories.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Subscribe from "../../components/subscribe/subscribe";
import ManySolution from "../../components/many-solution/manySolution";

const JobCategories = () => {
  return (
    <>
      <Header />
      <ManySolution />
      <Subscribe />
      <Footer />
    </>
  );
};

export default JobCategories;
