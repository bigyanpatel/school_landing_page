import About from "@/components/About";
import Courses from "@/components/Courses";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import NoticeBoard from "@/components/Notice";
import TopHeader from "@/components/TopHeader";
import Head from "next/head";

export default function Home() {
  return <main>
    <Head>
      <title>Biju Pattnaik Degree College</title>
    </Head>
    <TopHeader />
    <Header />
    <Intro />
    <About />
    <Courses />
    <NoticeBoard />
    <Footer />
  </main>;
}
