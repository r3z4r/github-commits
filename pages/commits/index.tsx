import type { NextPage } from "next";
import classes from "./commits.module.css";

const Commits: NextPage = () => {
  return (
    <div className={classes.container}>
      <main className={classes.main}>
        <div className={classes.grid}></div>
      </main>
    </div>
  );
};

export default Commits;
