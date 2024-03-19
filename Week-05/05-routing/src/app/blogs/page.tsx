import Link from "next/link";

export default function Blog() {
    return (
      <div>
          <h1>Blog</h1>
          <ul>
            <li>
                  <Link href='/blogs/first'><h3>Blog First</h3></Link>
            </li>
            <li>
                  <Link href='/blogs/second'><h3>Blog Second</h3></Link>
            </li>
            <li>
                  <Link href='/blogs/third'><h3>Blog Third</h3></Link>
            </li>
          </ul>
      </div>
    );
  }