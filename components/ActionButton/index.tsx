import { useEffect, useState } from "react";
import classes from "./actionbutton.module.css";

const ActionButton: React.FC = () => {
  const [timer, setTimer] = useState<number>(30);

  const delay = (t: number) => {
    return new Promise((resolve) => setTimeout(resolve, t));
  };

  useEffect(() => {
    if (timer === 0) {
      setTimer(30);
    } else {
      const decreaseAfterOneSeconde = async () => {
        await delay(1000);
        setTimer((prevTime) => prevTime - 1);
      };
      decreaseAfterOneSeconde();
    }
  }, [timer]);

  return (
    <div className={classes.container}>
      <p className={classes.timer}>{timer}</p>
      <div className={classes.button}>&#x21bb;</div>
    </div>
  );
};

export default ActionButton;
