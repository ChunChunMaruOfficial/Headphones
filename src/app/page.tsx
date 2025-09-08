"use client";

import First from "./components/first/first"
import Second from "./components/second/second";
import Third from "./components/third/third";
import Idealsound from "./components/idealsound/idealsound";
import Fourth from "./components/fourth/fourth";
import Comments from "./components/comments/comments";

export default function Home() {

  return (
    <div>
      <First />
      <Second />
      <Third />
      <Idealsound />
      {/* <Comments /> */}
      <Fourth />
    </div>
  );
}
