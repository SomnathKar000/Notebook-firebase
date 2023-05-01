import React from "react";
import SingleNote from "./SingleNote";
import styled from "styled-components";
import { useNoteContext } from "../contexts/note-context";
import Loading from "./Loading";

const AllNotes = () => {
  const { notes, loading } = useNoteContext();

  if (loading) {
    return (
      <Wrapper>
        {Array.from({ length: 4 }).map((item, index) => (
          <Loading key={index} />
        ))}
      </Wrapper>
    );
  }
  return (
    // {loading?}
    <Wrapper>
      {notes.map((item, index) => {
        return <SingleNote key={index} note={item} index={index} />;
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
