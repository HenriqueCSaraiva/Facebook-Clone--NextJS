import Head from "next/head";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Login from "../components/Login";
import { useAppValue } from "../StateProvider";
import Widgets from "../components/Widgets";
import { db } from "../firebase";

export default function Home({posts}) {
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
            <Feed posts={posts}/>
            <Widgets />
          </main>
        </>
      )}
    </div>
  );
}