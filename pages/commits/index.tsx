import type { NextPage } from "next";
import { commitType } from "..";
import { Card } from "../../components/Card/Card";
import classes from "./commits.module.css";

const Commits: NextPage<{ commits: commitType[] }> = ({ commits }) => {
  return (
    <div className={classes.grid}>
      {commits.map((commit: commitType) => (
        <Card
          key={commit.date}
          title={commit.message}
          date={new Date(commit.date)}
          user={commit.author}
        />
      ))}
    </div>
  );
};

export default Commits;
