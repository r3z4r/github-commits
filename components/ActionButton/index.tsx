import { useEffect, useState, useCallback } from "react";
import classes from "./actionbutton.module.css";

interface actionButtonPropsTypes {
  fetchCommits: () => void;
}

const ActionButton: React.FC<actionButtonPropsTypes> = ({ fetchCommits }) => {
  const [timer, setTimer] = useState<number>(30);

  useEffect(() => {
    if (timer === 0) {
      setTimer(30);
      fetchCommits();
    }
    const timerRef = setInterval(function () {
      setTimer((prevTime) => prevTime - 1);
    }, 1000);

    return () => {
      clearInterval(timerRef);
    };
  }, [timer]);

  return (
    <div className={classes.container}>
      <p className={classes.timer}>{timer}</p>
      <div
        className={classes.button}
        onClick={() => {
          setTimer(0);
        }}
      >
        &#x21bb;
      </div>
    </div>
  );
};

export default ActionButton;
