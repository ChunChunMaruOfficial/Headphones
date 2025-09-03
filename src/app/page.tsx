"use client";

import First from "./components/first/first"
import Second from "./components/second/second";
import Third from "./components/third/third";
import Idealsound from "./components/idealsound/idealsound";
import Footer from "./components/footer/footer";
import Comments from "./components/comments/comments";

export default function Home() {

  return (
    <div>
      <First />
      <Second />
      <Third />
      <Idealsound />
      <Comments />
      <Footer />
    </div>
  );
}
