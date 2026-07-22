import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Sparkles,
} from "lucide-react";

export default function CTA() {
  return (
    <section className="section">

      <div className="container">

        <div className="card relative overflow-hidden border-blue-100 bg-gradient-to-br from-blue-50 via-white to-green-50 p-8 md:p-12">

          {/* Decorative circles */}
          <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-100/60" />

          <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-green-100/60" />


          <div className="relative mx-auto max-w-3xl text-center">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg">

              <Bot size={30} />

            </div>


            <div className="mt-5 flex items-center justify-center gap-2 text-sm font-medium text-blue-600">

              <Sparkles size={16} />

              AI Powered Citizen Assistance

            </div>


            <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">

              Find government schemes made for you

            </h2>


            <p className="mx-auto mt-4 max-w-xl text-slate-600">

              Start a simple conversation with Yojana AI and discover
              benefits, eligibility details, and application guidance.

            </p>


            <div className="mt-8 flex flex-wrap justify-center gap-4">


              <Link
  href="/assistant"
  className="btn-primary flex items-center gap-2"
>

  Try Yojana AI

  <ArrowRight size={18} />

</Link>

              <button className="rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:bg-white">

                Explore Features

              </button>


            </div>


          </div>

        </div>

      </div>

    </section>
  );
}