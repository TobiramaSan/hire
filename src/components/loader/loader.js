import React from "react";
import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";

const LoaderStyle = styled.div`
  width: 100%;
  margin: 0px auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loader = () => {
  return (
    <LoaderStyle>
      <ThreeDots color="#0A65CC" height="100" width="100" />
    </LoaderStyle>
  );
};

export default Loader;
