import {
  ArrowRight,
  Bot,
  CheckCircle,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-24">

      <div className="absolute left-0 top-20 -z-10 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl" />
      <div className="absolute right-0 top-20 -z-10 h-80 w-80 rounded-full bg-emerald-100/40 blur-3xl" />


      <div className="container grid items-center gap-16 lg:grid-cols-2">


        {/* LEFT */}

        <div>


          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">

            <Sparkles size={16}/>

            AI Powered Government Scheme Assistant

          </div>



          <h1 className="mt-7 max-w-xl text-4xl font-bold leading-[1.15] tracking-tight text-slate-900 md:text-5xl">

            Helping citizens access

            <span className="gradient-text">
              {" "}government schemes
            </span>

            without complexity.


          </h1>



          <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">

            Yojana AI understands your needs, checks eligibility,
            and guides you towards the right government benefits
            through a simple AI conversation.

          </p>



          <div className="mt-8 flex flex-wrap gap-4">


            <button className="flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3 font-semibold text-white shadow-md shadow-blue-200 transition hover:bg-blue-700">

              Find My Scheme

              <ArrowRight size={18}/>

            </button>



            <button className="rounded-full border border-slate-300 bg-white px-7 py-3 font-semibold text-slate-700 transition hover:border-blue-300 hover:bg-blue-50">

              How It Works

            </button>


          </div>




          <div className="mt-8 space-y-3 text-sm text-slate-600">


            <div className="flex items-center gap-3">

              <CheckCircle
                size={18}
                className="text-emerald-600"
              />

              Personalized recommendations

            </div>



            <div className="flex items-center gap-3">

              <ShieldCheck
                size={18}
                className="text-blue-600"
              />

              Reliable government information

            </div>


          </div>


        </div>





        {/* RIGHT CARD */}


        <div className="relative">


          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">


            <div className="flex items-center gap-4">


              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-emerald-500 text-white">

                <Bot size={28}/>

              </div>


              <div>

                <h3 className="font-bold text-slate-900">
                  Yojana AI Assistant
                </h3>


                <p className="text-sm text-emerald-600">
                  ● Ready to help citizens
                </p>


              </div>


            </div>




            <div className="mt-8 space-y-4">


              <div className="rounded-2xl bg-slate-100 p-4 text-sm text-slate-700">

                Hello! Tell me about your needs and I will find suitable schemes.

              </div>



              <div className="rounded-2xl bg-blue-600 p-4 text-sm text-white">

                I can help with eligibility, benefits, documents and applications.

              </div>



              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-700">

                ✓ AI matched schemes successfully

              </div>


            </div>


          </div>


        </div>


      </div>


    </section>
  );
}