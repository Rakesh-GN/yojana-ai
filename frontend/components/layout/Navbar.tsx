import { Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <nav className="container flex items-center justify-between py-5">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
            <Sparkles size={22} />
          </div>

          <div>
            <h1 className="text-xl font-bold text-slate-900">
              Yojana AI
            </h1>
            <p className="text-xs text-slate-500">
              Government Scheme Assistant
            </p>
          </div>
        </div>


        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a 
            href="#features"
            className="hover:text-blue-600 transition"
          >
            Features
          </a>

          <a 
            href="#how-it-works"
            className="hover:text-blue-600 transition"
          >
            How It Works
          </a>

          <a 
            href="#impact"
            className="hover:text-blue-600 transition"
          >
            Impact
          </a>
        </div>


        {/* CTA */}
        <button className="btn-primary">
          Find My Scheme
        </button>

      </nav>
    </header>
  );
}