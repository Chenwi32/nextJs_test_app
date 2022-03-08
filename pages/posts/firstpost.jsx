import React from "react";
import Link from "next/link";
import Profile from "../Profile";
import Head from "next/head";

function firstpost() {
  return (
    <div className="container">
      <Head>
        <title>CE Next.Js App Post</title>
      </Head>
      <h1>firstpost</h1>
      <Profile />
      <Link href="/">&larr; Back to home</Link>
    </div>
  );
}

export default firstpost;
