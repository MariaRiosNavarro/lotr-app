import Link from "next/link";
import Image from "next/image";

export default function Book({ volume }) {
  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{volume.title}</h1>
      <p>{volume.description}</p>
      <ul>
        {volume.books.map((book) => (
          <li key={ordinal}>
            {book.ordinal}: {book.title}
          </li>
        ))}
      </ul>
      <Image src={volume.cover} alt="movie cover" width={140} height={230} />
    </>
  );
}
