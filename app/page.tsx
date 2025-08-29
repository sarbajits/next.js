import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Starting</h1>
      <Link href="/profile" className="text-amber-400">Profile</Link>
    </div>

  );
}
