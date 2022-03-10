import Link from "next/link";
import Profile from "../Profile";
import Head from "next/head";
import EmblaCarousel from "../EmblaCarousel";

const firstpost= () => {
    return (
    <div className="container">
      <Head>
        <title>CE Next.Js App Post</title>
      </Head>
        <h1>firstpost</h1>
        <EmblaCarousel/>
      {/* <Profile /> */}
      <Link href="/">&larr; Back to home</Link>
    </div>
  );
};



export default firstpost;
