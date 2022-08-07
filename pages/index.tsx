import type { NextPage } from "next";
import Head from "next/head";
import Authenticate from "../components/Authenticate";
import { useLayoutEffect, useState } from "react";
import Commits from "./commits";
import classes from "./main.module.css";

const constants = {
  url: "https://api.github.com/repos/r3z4r/github-commits/commits",
  headers: { Accept: "application/vnd.github+json" },
};

const Home: NextPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<null | string>(null);
  const [loading, setLoading] = useState<boolean>(false);
  useLayoutEffect(() => {
    const pat = window.localStorage.getItem("personalAccessToken");
    if (pat) {
      setIsAuthenticated(JSON.parse(pat));
    }
  });
  const fetchCommits = async (pat: string) => {
    setLoading(true);
    try {
      const headers = { ...constants.headers, Authorization: pat };
      const response = await fetch(constants.url, { headers });
      if (response.ok) {
        const commits = await response.json();
        window.localStorage.setItem("personalAccessToken", JSON.stringify(pat));
        setIsAuthenticated(pat);
      } else {
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Head>
        <title>Github commits</title>
        <meta name="description" content="Git reposiitory history" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={classes.container}>
        <main className={classes.main}>
          {isAuthenticated ? (
            <Commits />
          ) : (
            <Authenticate fetchCommits={fetchCommits} />
          )}
        </main>
      </div>
    </>
  );
};

export default Home;
