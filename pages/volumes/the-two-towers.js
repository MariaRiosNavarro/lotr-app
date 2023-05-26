import Image from "next/image";
import Link from "next/link";
import { volumes } from "../../resources/lib/data.js";
import Book from "@/components/Book/Book.js";

export default function Towers() {
  const volume = volumes.find(
    ({ slug }) => slug === "the-two-towers"
  );
  return <Book volume={volume} />;
}
