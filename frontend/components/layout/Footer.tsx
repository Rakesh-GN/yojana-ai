export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">

      <div className="container py-10">

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">


          <div>

            <h2 className="text-xl font-bold text-slate-900">
              Yojana AI
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Making government services simple with AI.
            </p>

          </div>


          <div className="flex gap-6 text-sm text-slate-600">

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


        </div>


        <div className="mt-8 border-t border-slate-100 pt-6 text-center text-sm text-slate-500">

          © 2026 Yojana AI. Built for social impact through artificial intelligence.

        </div>


      </div>

    </footer>
  );
}