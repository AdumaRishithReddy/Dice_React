import React from "react";
import styles from "./TotalScore.module.css";
interface Prop {
  totalscore: number;
  //   incr_score: () => void;
}
const TotalScore = ({ totalscore }: Prop) => {
  return (
    <div className={`${styles.score_container}`}>
      <h1>{totalscore}</h1>
      <p>Total Score</p>
    </div>
  );
};

export default TotalScore;
