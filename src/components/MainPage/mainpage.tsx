import React from "react";
import styles from "./mainpage.module.css";
interface Prop {
  toggle: () => void;
}
const mainpage = ({ toggle }: Prop) => {
  return (
    <>
      <section className={`${styles.section}`}>
        <div className={`${styles.image_section}`}>
          <img src="../public/dices 1.png" alt="dice" />
        </div>
        <div className={`${styles.dice_content}`}>
          <h1>DICE GAME</h1>
          <div
            className={`${styles.Buttons}`}
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <button onClick={toggle}>Play Now</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default mainpage;
