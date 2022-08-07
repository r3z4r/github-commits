import type { NextPage } from "next";
import Head from "next/head";
import Authenticate from "../components/Authenticate";
import { useLayoutEffect, useState } from "react";
import Commits from "./commits";

const Home: NextPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  // useLayoutEffect(()=>{

  // })
  return (
    <>
      <Head>
        <title>Github commits</title>
        <meta name="description" content="Git reposiitory history" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isAuthenticated ? <Commits /> : <Authenticate />}
    </>
  );
};

export default Home;
