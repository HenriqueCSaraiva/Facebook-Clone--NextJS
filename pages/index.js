import Head from "next/head";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Login from "../components/Login";
import { useAppValue } from "../StateProvider";

export default function Home() {
  const [{ user }, dispatch] = useAppValue();

  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <Head>
        <title>Facebook Clone</title>
      </Head>

      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <main className="flex">
            <Sidebar />
            <Feed />
          </main>
        </>
      )}
    </div>
  );
}
