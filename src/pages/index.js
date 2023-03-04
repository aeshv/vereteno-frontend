import Head from "next/head";
import Image from "next/image";
import { useSelector } from "react-redux";
import { checkIsAuth } from "@/redux/features/auth/authSlice";
import Header from "@/components/features/header/Header";
import Card from "@/components/shared/card/Card";

export default function Home() {
  const isAuth = useSelector(checkIsAuth);
  return (
    <>
      <Head>
        <title>VERETENO HATS</title>
        <meta
          name="description"
          content="Купить шапки, шляпы, восьмиклинки быстро и просто"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="class">asdas</h1>
        <Card/>
      </main>
    </>
  );
}
