import { experience } from '../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-neutral-100 mb-2">Experience</h2>
        <div className="w-12 h-0.5 bg-teal-400 mb-12" />
        <div className="space-y-6">
          {experience.map((job, i) => (
            <div
              key={i}
              className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-neutral-700 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-4">
                <div>
                  <h3 className="text-neutral-100 font-semibold text-lg">{job.company}</h3>
                  <p className="text-teal-400 text-sm">{job.role}</p>
                </div>
                <div className="sm:text-right flex-shrink-0">
                  <p className="text-neutral-500 text-sm">{job.period}</p>
                  {job.location && (
                    <p className="text-neutral-600 text-sm">{job.location}</p>
                  )}
                </div>
              </div>
              <ul className="space-y-2">
                {job.bullets.map((bullet, j) => (
                  <li key={j} className="text-neutral-400 text-sm leading-relaxed flex gap-3">
                    <span className="text-teal-400 mt-0.5 flex-shrink-0">▹</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
