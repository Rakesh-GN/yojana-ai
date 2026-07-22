import AssistantForm from "@/components/assistant/forms/AssistantForm";
import ProgressSteps from "@/components/assistant/ui/ProgressSteps";

export default function AssistantPage() {
  return (
    <main className="min-h-screen bg-slate-50">

      <section className="border-b bg-white">
        <div className="container py-14">

          <div className="max-w-3xl">

            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
              🤖 AI Government Scheme Assistant
            </span>

            <h1 className="mt-6 text-5xl font-bold text-slate-900">
              Find Government Schemes
              <span className="gradient-text"> made for you</span>
            </h1>

            <p className="mt-5 text-lg text-slate-600">
              Tell us a few details about yourself. Yojana AI will
              identify schemes you may be eligible for and explain
              benefits, required documents, and application guidance.
            </p>

          </div>

        </div>
      </section>

      <section className="container py-12">

        <ProgressSteps />

        <div className="mt-10">

          <AssistantForm />

        </div>

      </section>

    </main>
  );
}