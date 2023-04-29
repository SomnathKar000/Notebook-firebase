import React from "react";
import SingleNote from "./SingleNote";
import { Box } from "@mui/material";
import styled from "styled-components";

const AllNotes = () => {
  const arr = [1, 2, 3, 5, 6, 7, 8, 9];
  return (
    <Wrapper>
      {arr.map((item, index) => {
        return <SingleNote key={index} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media screen and (max-width: 1000px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;

export default AllNotes;
