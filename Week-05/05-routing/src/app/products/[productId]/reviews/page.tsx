import Link from "next/link";

type Props = {
    params: {
          productId: string
    }
  }

export default function ReviewList({ params }: Props) {
    return (
          <div>
            <h1>Review List Product {params.productId}</h1>
            <ul>
              <li>
                    <Link href={`/products/${params.productId}/reviews/1`}><h3>Review 1</h3></Link>
              </li>
              <li>
                    <Link href={`/products/${params.productId}/reviews/2`}><h3>Review 2</h3></Link>
              </li>
              <li>
                    <Link href={`/products/${params.productId}/reviews/3`}><h3>Review 3</h3></Link>
              </li>
            </ul>
          </div>
    );
  }