import Head from "next/head";
import HomePage from "./home";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Gofiber.dev</title>
        <meta name="description" content="Gofiber.dev" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomePage />
    </div>
  );
}
