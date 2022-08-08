import type { NextPage } from "next";
import Head from "next/head";
import Authenticate from "../components/Authenticate";
import { useLayoutEffect, useState } from "react";
import Commits from "../components/Commits";
import classes from "./main.module.css";
import Loader from "../components/Loader";
import ActionButton from "../components/ActionButton";

const constants = {
  url: "https://api.github.com/repos/r3z4r/github-commits/commits",
  headers: { Accept: "application/vnd.github+json" },
};

export interface commitType {
  author: string;
  message: string;
  date: string;
}

interface resultCommitType {
  author: {
    name: string;
    date: string;
  };
  message: string;
}

const Home: NextPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<null | string>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [commits, setCommits] = useState<commitType[]>([]);
  useLayoutEffect(() => {
    const pat = window.localStorage.getItem("personalAccessToken");
    if (pat) {
      fetchCommits(JSON.parse(pat));
    }
  }, []);
  const fetchCommits = async (pat: string) => {
    if (!pat) return;
    setLoading(true);
    try {
      const headers = { ...constants.headers, Authorization: pat };
      const response = await fetch(constants.url, { headers });
      if (response.ok) {
        const result = await response.json();
        const filteredData: commitType[] = result.map(
          ({ commit }: { commit: resultCommitType }) => ({
            author: commit.author.name,
            message: commit.message,
            date: commit.author.date,
          })
        );
        if (!isAuthenticated) {
          window.localStorage.setItem(
            "personalAccessToken",
            JSON.stringify(pat)
          );
          setIsAuthenticated(pat);
        }
        setCommits(filteredData.reverse());
      } else {
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      {loading && <Loader />}
      <Head>
        <title>Github commits</title>
        <meta name="description" content="Git reposiitory history" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={classes.container}>
        <main className={classes.main}>
          {isAuthenticated ? (
            <Commits commits={commits} />
          ) : (
            <Authenticate fetchCommits={fetchCommits} />
          )}
        </main>
      </div>
      {isAuthenticated && (
        <ActionButton
          fetchCommits={() => isAuthenticated && fetchCommits(isAuthenticated)}
        />
      )}
    </>
  );
};

export default Home;
