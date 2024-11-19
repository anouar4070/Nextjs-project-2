// http://localhost:3000/news

import { Fragment } from "react";
import Link from "next/link";

function NewsPage() {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs">NextJS</Link>
        </li>
        <li>something else</li>
      </ul>
    </Fragment>
  );
}
export default NewsPage;
