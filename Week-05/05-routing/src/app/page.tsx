import Link from "next/link";

export default function Home() {
    return (
      <div>
        <h1>Welcome to Home</h1>
        <ul>
          <li>
            <Link href='/profile'><h3>Profile</h3></Link>
          </li>
          <li>
            <Link href='/about'><h3>About</h3></Link>
          </li>
          <li>
            <Link href='/blogs'><h3>Blogs</h3></Link>
          </li>
          <li>
            <Link href='/products'><h3>Products</h3></Link>
          </li>
        </ul>
      </div>
    )
  }