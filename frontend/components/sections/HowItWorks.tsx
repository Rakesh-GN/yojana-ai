import {
  UserRound,
  BrainCircuit,
  SearchCheck,
  HandHeart,
} from "lucide-react";

const steps = [
  {
    icon: UserRound,
    number: "01",
    title: "Share Your Details",
    description:
      "Citizens provide basic information like age, location, occupation, and needs.",
  },
  {
    icon: BrainCircuit,
    number: "02",
    title: "AI Understands",
    description:
      "Our AI analyzes the information and understands the citizen's requirements.",
  },
  {
    icon: SearchCheck,
    number: "03",
    title: "Find Matching Schemes",
    description:
      "The system identifies suitable government schemes based on eligibility.",
  },
  {
    icon: HandHeart,
    number: "04",
    title: "Get Complete Guidance",
    description:
      "Users receive benefits, documents, and application steps in simple language.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section bg-white">

      <div className="container">

        <div className="mx-auto max-w-2xl text-center">

          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            How{" "}
            <span className="gradient-text">
              Yojana AI
            </span>{" "}
            works
          </h2>


          <p className="mt-4 text-slate-600">
            A simple AI-powered journey that connects citizens with
            the right government support.
          </p>

        </div>


        <div className="mt-12 grid gap-8 md:grid-cols-4">

          {steps.map((step) => {

            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="relative text-center"
              >

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg">

                  <Icon size={30}/>

                </div>


                <div className="mt-4 text-sm font-bold text-blue-600">
                  STEP {step.number}
                </div>


                <h3 className="mt-2 text-xl font-bold text-slate-900">
                  {step.title}
                </h3>


                <p className="mt-3 text-sm text-slate-600">
                  {step.description}
                </p>

              </div>
            );

          })}

        </div>


      </div>

    </section>
  );
}