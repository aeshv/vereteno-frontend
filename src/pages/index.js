import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.scss";
import { useSelector } from "react-redux";
import { checkIsAuth } from "@/redux/features/auth/authSlice";

export default function Home() {
  const isAuth = useSelector(checkIsAuth);
  return (
    <>
      <Head>
        <title>VERETENO HATS</title>
        <meta name="description" content="Купить шапки, шляпы, восьмиклинки быстро и просто" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className="class">asdas</h1>
      </main>
    </>
  );
}
