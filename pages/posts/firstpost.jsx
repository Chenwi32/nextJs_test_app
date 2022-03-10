import Link from "next/link";
/* import Profile from "../Profile"; */
import Head from "next/head";
import EmblaCarousel from "../EmblaCarousel";
import Layout from "../../components/Layout";

const firstpost= () => {
    return (
      <div className="container">
        <Layout>
          <Head>
        <title>CE Next.Js App Post</title>
      </Head>
        <h1>firstpost</h1>
        <EmblaCarousel/>
      {/* <Profile /> */}
      <Link href="/">&larr; Back to home</Link>
        </Layout>
      
    </div>
  );
};



export default firstpost;
