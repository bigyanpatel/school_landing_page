import About from "@/components/About";
import Courses from "@/components/Courses";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import NoticeBoard from "@/components/Notice";
import TopHeader from "@/components/TopHeader";
import { createClient } from "contentful";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY
  });

  const res = await client.getEntries({ content_type: 'notice' });

  return {
    props: {
      notices: res.items
    }
  }
}

export default function Home({ notices }) {
  return <main>
    <TopHeader />
    <Header />
    <Intro />
    <About />
    <Courses />
    <NoticeBoard notices={notices} />
    <Footer />
  </main>;
}
