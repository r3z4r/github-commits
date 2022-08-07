import { useState } from "react";
import classes from "./authenticate.module.css";

interface authenticatePropsTypes {
  fetchCommits: (pat: string) => void;
}

const Authenticate: React.FC<authenticatePropsTypes> = ({ fetchCommits }) => {
  const [input, setInput] = useState<string>("");

  return (
    <>
      <div className={classes.container}>
        <input
          className={classes.input}
          type="textt"
          placeholder="Enter personal access token"
          onChange={(e) => setInput(e.target.value)}
        ></input>
        <button className={classes.button} onClick={() => fetchCommits(input)}>
          &rarr;
        </button>
      </div>
    </>
  );
};

export default Authenticate;
