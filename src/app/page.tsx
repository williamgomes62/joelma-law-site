// import 'tailwindcss/tailwind.css';
import Home from "./pages/Home";
import Head from 'next/head';

export default function App() {
  return (
    <>
      <Head>
        <meta name="theme-color" content="rgb(31 41 55)" />
      </Head>
      <Home />
    </>
  );
}
