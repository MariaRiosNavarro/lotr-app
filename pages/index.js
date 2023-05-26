import Link from "next/link";
import { introduction } from "../resources/lib/data.js";

export default function HomePage() {
  return (
    <div>
      <Link href={"/volumes"}>Volumes</Link>
    </div>
  );
}
