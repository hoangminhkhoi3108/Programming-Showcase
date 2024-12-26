import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="absolute -inset-2 rounded-lg bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-stone-600 via-slate-600 to-gray-600 opacity-50 blur-2xl"></div>
      <div className="relative flex w-full items-center justify-center border border-zinc-700 rounded-lg bg-zinc-900 p-4">
        <nav>
          <ul className="flex space-x-100 text-slate-300 font-mono">
            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/project" className="hover:text-white">
                Project
              </Link>
            </li>
            <li>
              <Link href="/changelog" className="hover:text-white">
                Changelog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}