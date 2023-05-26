import Image from "next/image";
import Link from "next/link";
import { volumes } from "../../resources/lib/data.js";



export default function Towers(){
    return (
      <>
        <Link href="/volumes">← All Volumes</Link>
        <h1>
          {
            volumes.find(({ slug }) => slug === "the-two-towers")
              .title
          }
        </h1>
        <p>
          {
            volumes.find(({ slug }) => slug === "the-two-towers")
              .description
          }
        </p>
        <ul>
          {volumes
            .find(({ slug }) => slug === "the-two-towers")
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
            volumes.find(({ slug }) => slug === "the-two-towers")
              .cover
          }
          alt="the-two-towers"
          width={400}
          height={700}
        />
      </>
    );
  }