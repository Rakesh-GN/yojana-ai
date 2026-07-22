import {
  Users,
  Landmark,
  Languages,
  Clock,
} from "lucide-react";

const impacts = [
  {
    icon: Users,
    value: "Every Citizen",
    title: "Better Access",
    description:
      "Helping people discover benefits they may not know about.",
  },
  {
    icon: Landmark,
    value: "Government",
    title: "Simplified Services",
    description:
      "Making schemes easier to understand and access.",
  },
  {
    icon: Languages,
    value: "Multiple",
    title: "Language Inclusion",
    description:
      "Supporting citizens through simple and accessible communication.",
  },
  {
    icon: Clock,
    value: "24/7",
    title: "AI Assistance",
    description:
      "Providing guidance anytime through an intelligent assistant.",
  },
];

export default function Impact() {
  return (
    <section id="impact" className="section">

      <div className="container">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">

          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Building a more{" "}
            <span className="gradient-text">
              inclusive future
            </span>{" "}
            with AI
          </h2>

          <p className="mt-4 text-slate-600">
            Yojana AI reduces the gap between citizens and government
            support by making information simple and accessible.
          </p>

        </div>


        {/* Impact Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {impacts.map((impact) => {

            const Icon = impact.icon;

            return (
              <div
                key={impact.title}
                className="card group transition hover:-translate-y-2"
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-600 transition group-hover:bg-blue-100 group-hover:text-blue-600">

                  <Icon size={24} />

                </div>


                <div className="mt-5 text-2xl font-bold text-blue-600">
                  {impact.value}
                </div>


                <h3 className="mt-2 text-xl font-bold text-slate-900">
                  {impact.title}
                </h3>


                <p className="mt-3 text-sm text-slate-600">
                  {impact.description}
                </p>

              </div>
            );

          })}

        </div>


      </div>

    </section>
  );
}