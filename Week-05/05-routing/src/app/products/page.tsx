import Link from "next/link";

export default function ProductList() {
    return (
          <div>
            <h1>Product List</h1>
            <ul>
              <li>
                    <Link href='/products/1'><h3>Product 1</h3></Link>
              </li>
              <li>
                    <Link href='/products/3'><h3>Product 2</h3></Link>
              </li>
              <li>
                    <Link href='/products/3'><h3>Product 3</h3></Link>
              </li>
            </ul>
          </div>
    );
  }