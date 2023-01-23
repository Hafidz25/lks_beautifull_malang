import CTA from "@/section/CTA";
import Hero from "@/section/Hero";
import Head from "next/head";
import Testimonial from "@/section/Testimonial";
import TopDestination from "@/section/TopDestination";
import TrendingTour from "@/section/TrendingTour";
import fsPromises from 'fs/promises';
import path from 'path'
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  return {
    props: objectData
  }
}

export default function Home(props) {
  const trend = props.trend;
  return (
    <div className="">
      <Head>
        <title>Beautiful Malang - Home</title>
        <link rel="icon" href="/img/logo-beautifulmalang.jpg" />
      </Head>
      <Hero />
      <TrendingTour props={trend} />
      <TopDestination />
      <Testimonial />
      <CTA />
    </div>
  )
}
