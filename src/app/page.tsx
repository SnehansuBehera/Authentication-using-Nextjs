
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-[100vh] flex flex-col items-center justify-center gap-4">
      <Link className="p-4 rounded-md border-2 border-gray-400" href='/signup'>Sign Up</Link>
      <Link className="p-4 rounded-md border-2 border-gray-400" href='/profile'>Profile</Link>
    </div>

  );
}
