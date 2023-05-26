import Image from "next/image";
import Link from "next/link";
import { volumes } from "../../resources/lib/data.js";

export default function KingReturn() {
  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <h1>
        {volumes.find(({ slug }) => slug === "the-return-of-the-king").title}
      </h1>
      <p>
        {
          volumes.find(({ slug }) => slug === "the-return-of-the-king")
            .description
        }
      </p>
      <ul>
        {volumes
          .find(({ slug }) => slug === "the-return-of-the-king")
          .books.map((book) => (
            <li key={book.ordinal}>
              <p>
                {book.ordinal} : {book.title}
              </p>
            </li>
          ))}
      </ul>
      <Image
        src={
          volumes.find(({ slug }) => slug === "the-return-of-the-king").cover
        }
        alt="the-return-of-the-king"
        width={400}
        height={700}
      />
    </>
  );
}
