import React from "react";
import styles from "./DiceRoll.module.css";
interface Prop {
  current: number;
  rollDice: () => void;
}
const DiceRoll = ({ current, rollDice }: Prop) => {
  return (
    <div className={`${styles.rolldice_cont}`} onClick={rollDice}>
      {/* DiceRoll{" "} */}
      <div className={`${styles.dice_img}`}>
        {current === 1 ? (
          <img src="../public/dice_1.png" alt="Dice1" />
        ) : current === 2 ? (
          <img src="../public/dice_2.png" alt="Dice2" />
        ) : current === 3 ? (
          <img src="../public/dice_3.png" alt="Dice3" />
        ) : current === 4 ? (
          <img src="../public/dice_4.png" alt="Dice4" />
        ) : current === 5 ? (
          <img src="../public/dice_5.png" alt="Dice5" />
        ) : current === 6 ? (
          <img src="../public/dice_6.png" alt="Dice6" />
        ) : null}
      </div>
      <p>Click On Dice To Roll</p>
    </div>
  );
};

export default DiceRoll;
