import React from "react";
import { useState } from "react";
import styles from "./GamePage.module.css";
import Selector from "../Selector/Selector";
import TotalScore from "../TotalScore/TotalScore";
import DiceRoll from "../DiceRoll/DiceRoll";
import Rules from "../Rules/Rules";
import { Button, OutlineButton } from "../Button";
const GamePage = () => {
  const [score, setScore] = useState(0);
  const [selectedbox, Setselectedbox] = useState(0);
  const [error, seterror] = useState(false);
  const [current_res, set_current_res] = useState(1);
  const [rules, showrules] = useState(false);
  //   const handleError = () => {
  //     seterror((prev) => !prev);
  //   };
  const resetScore = () => {
    console.log("working");
    setScore(0);
  };
  const roll = () => {
    if (selectedbox !== 0) {
      let num = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
      console.log("Before", current_res, num);
      set_current_res(num);
      if (selectedbox === num) {
        setScore(score + 1);
      } else {
        console.log("After", selectedbox, current_res);
        setScore(score);
      }
      Setselectedbox(0);
    } else {
      seterror(true);
    }
  };
  return (
    <main className={`${styles.Maincontainer}`}>
      <div className={`${styles.top_section}`}>
        <TotalScore totalscore={score} />
        <Selector
          selected={selectedbox}
          error={error}
          Handle_error={seterror}
          setSelected={Setselectedbox}
        />
      </div>
      <div className={`${styles.Dice_comp}`}>
        <DiceRoll current={current_res} rollDice={roll} />
      </div>
      <div className={`${styles.btns}`}>
        <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
        <Button
          onClick={() => {
            // console.log(rules);
            showrules((prev) => !prev);
            // console.log(rules);
          }}
        >
          {rules ? "Hide Rules" : "Show Rules"}
        </Button>
      </div>
      <div className={`${styles.Rules}`}>{rules && <Rules />}</div>
    </main>
  );
};

export default GamePage;
