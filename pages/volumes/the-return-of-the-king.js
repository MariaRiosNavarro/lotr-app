import Image from "next/image";
import Link from "next/link";
import { volumes } from "../../resources/lib/data.js";
import Book from "@/components/Book/Book.js";

export default function KingReturn() {
  const volume = volumes.find(({ slug }) => slug === "the-return-of-the-king");
  return <Book volume={volume} />;
}
