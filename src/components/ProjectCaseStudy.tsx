
import type { Project } from "@/types/project";

type ProjectCaseStudyProps = Pick<
  Project,
  "features" | "technicalApproach" | "challenges"
>;

export default function ProjectCaseStudy({
  features,
  technicalApproach,
  challenges,
}: ProjectCaseStudyProps) {
  return (
    <div className="mt-16 space-y-14">
      {features && features.length > 0 && (
        <section>
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            Key Contributions
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-gray-200 p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>

                <p className="mt-3 leading-relaxed text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

{technicalApproach && (
  <section className="border-t border-gray-200 pt-12">
    <h2 className="mb-4 text-2xl font-bold text-gray-900">
      Technical Approach
    </h2>

    <p className="max-w-3xl leading-relaxed text-gray-600">
      {technicalApproach}
    </p>
  </section>
)}


      {challenges && challenges.length > 0 && (
        <section>
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            Challenges & Solutions
          </h2>

          <div className="space-y-6">
            {challenges.map((challenge, index) => (
              <div key={index}>
                <h3 className="font-semibold text-gray-900">
                  Challenge
                </h3>
                <p className="mt-2 text-gray-600">
                  {challenge.problem}
                </p>

                <h3 className="mt-4 font-semibold text-gray-900">
                  Solution
                </h3>
                <p className="mt-2 text-gray-600">
                  {challenge.solution}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
