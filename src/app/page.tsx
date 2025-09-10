"use client";

import First from "./components/first/first"
import Second from "./components/second/second";
import Third from "./components/third/third";
import Idealsound from "./components/idealsound/idealsound";
import Fourth from "./components/fourth/fourth";
import Comments from "./components/comments/comments";
import { useEffect, useState } from "react";

export default function Home() {
    const [ismobile, setismobile] = useState<boolean>(false)


    useEffect(() => {
        if (window.innerWidth <= 768) {
            setismobile(true)

        } else {
            setismobile(false)

        }
    }, [])
  return (
    <div>
      <First ismobile={ismobile} />
      <Second ismobile={ismobile} />
      <Third ismobile={ismobile}/>
      <Idealsound ismobile={ismobile} />
      <Comments ismobile={ismobile}/>
      <Fourth />
    </div>
  );
}
