import Image from "next/image";
import Link from "next/link";
import { volumes } from "../../resources/lib/data.js";


export default function Fellowship() {
  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <h1>
        {
          volumes.find(({ slug }) => slug === "the-fellowship-of-the-ring")
            .title
        }
      </h1>
      <p>
        {
          volumes.find(({ slug }) => slug === "the-fellowship-of-the-ring")
            .description
        }
      </p>
      <ul>
        {volumes
          .find(({ slug }) => slug === "the-fellowship-of-the-ring")
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
          volumes.find(({ slug }) => slug === "the-fellowship-of-the-ring")
            .cover
        }
        alt="the-fellowship-of-the-ring"
        width={400}
        height={700}
      />
    </>
  );
}









