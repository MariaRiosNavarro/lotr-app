import Image from "next/image";
import Link from "next/link";
import { volumes } from "../../resources/lib/data.js";
import Book from "@/components/Book/Book.js";

export default function Fellowship() {
  const volume = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );
  return <Book volume={volume} />;
}
