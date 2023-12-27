import About from "@/components/About";
import Courses from "@/components/Courses";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import TopHeader from "@/components/TopHeader";

export default function Home() {
  return <main>
    <TopHeader />
    <Header />
    <Intro />
    <About />
    <Courses />
  </main>;
}
