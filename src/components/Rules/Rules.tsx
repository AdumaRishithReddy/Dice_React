import React from "react";
import styled from "styled-components";
const Rules = () => {
  return (
    <RuleSet>
      <h1>How to play dice game</h1>
      <p>Select any number</p>
      <p>Click on dice image</p>
      <p>
        after click on dice if selected number is equal to dice number you will
        get same point as dice{" "}
      </p>
      <p>if you get wrong guess then 2 point will be dedcuted </p>
    </RuleSet>
  );
};

export default Rules;

const RuleSet = styled.div`
  background-color: #fbf1f1;
`;
