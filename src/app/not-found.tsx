import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center p-4 space-y-4">
      <h2 className="text-4xl font-display font-bold text-[#00E599]">404 - Page Not Found</h2>
      <p className="text-gray-400 text-sm">The page you are looking for does not exist.</p>
      <Link
        href="/"
        className="bg-white text-black font-semibold text-xs px-6 py-3 rounded-full hover:bg-gray-200 transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
}
