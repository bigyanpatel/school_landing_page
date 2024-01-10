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
      <meta
        name="description"
        content="Established in 1991 - 1992, Biju Pattnaik Degree College has been dedicated to providing accessible, affordable, and high-quality higher education. Named in honor of the visionary leader Shri Biju Pattnaik, our institution upholds his values of integrity, leadership, and social responsibility."
        key="desc"
      />
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
