
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-[100vh] flex items-center justify-center">
      <Link className="p-4 rounded-md border-2 border-gray-400" href='/signup'>Sign Up</Link>
    </div>

  );
}
