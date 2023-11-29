import React, { ReactNode } from "react";
import styled from "styled-components";
import styles from "./Selector.module.css";
interface Prop {
  selected: number;
  error: boolean;
  Handle_error: (value: boolean) => void;
  setSelected: (value: number) => void;
}
const Selector = ({ selected, error, Handle_error, setSelected }: Prop) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];
  const numberSelectorHandler = (value: number) => {
    {
      //   value === 0 ? Handle_error(): console.log('')};
      if (value === 0) {
        Handle_error(true);
      } else {
        console.log(value);
        // console.log(error);
        Handle_error(false);
        // console.log(error);
        setSelected(value);
      }
    }
  };
  return (
    <div>
      {error && <p className={`${styles.error}`}>Please Select A Guess</p>}
      <div className={`${styles.boxes}`}>
        {arrNumber.map((value, i) => (
          <Box
            isSelected={value === selected}
            key={i}
            onClick={() => numberSelectorHandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>
    </div>
  );
};

export default Selector;
const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
`;
