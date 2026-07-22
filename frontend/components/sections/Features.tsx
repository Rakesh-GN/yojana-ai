import {
  Search,
  UserCheck,
  FileText,
  Languages,
} from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Smart Scheme Discovery",
    description:
      "AI analyzes citizen information and finds government schemes that match their needs.",
  },
  {
    icon: UserCheck,
    title: "Eligibility Guidance",
    description:
      "Understand whether you qualify for a scheme with simple AI-powered explanations.",
  },
  {
    icon: FileText,
    title: "Application Support",
    description:
      "Get required documents, application steps, and important instructions in one place.",
  },
  {
    icon: Languages,
    title: "Multilingual Assistance",
    description:
      "Access government information in simple language for wider inclusion.",
  },
];

export default function Features() {
  return (
    <section id="features" className="section">

      <div className="container">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">

          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Everything citizens need to access{" "}
            <span className="gradient-text">
              government benefits
            </span>
          </h2>

          <p className="mt-4 text-slate-600">
            Yojana AI removes complexity from government schemes and
            makes public services easier to understand.
          </p>

        </div>


        {/* Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {features.map((feature) => {

            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="card transition hover:-translate-y-2"
              >

                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">

                  <Icon size={24}/>

                </div>


                <h3 className="text-xl font-bold text-slate-900">
                  {feature.title}
                </h3>


                <p className="mt-3 text-sm text-slate-600">
                  {feature.description}
                </p>

              </div>
            );

          })}

        </div>


      </div>

    </section>
  );
}