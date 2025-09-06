import { MdOutlinePlace } from "react-icons/md";
import { MdOutlineCalendarMonth } from "react-icons/md";

import type { Job } from "~/models/job";
import { useLanguage } from "~/contexts/LanguageContext";

type JobCardProps = {
  job: Job;
};

const JobCard = ({ job }: JobCardProps) => {
  const { t, language } = useLanguage();
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
  };

  // Map language to locale for date formatting
  const locale = language === "pt" ? "pt-BR" : "en-US";

  const start = job.startDate.toLocaleDateString(locale, options);
  const end = job.isActual
    ? t.jobs.present
    : job.endDate?.toLocaleDateString(locale, options);

  const jobTranslation = t.jobs[job.jobKey];

  return (
    <div className="bg-surface border border-border p-4 rounded-lg transition hover:-translate-y-2 duration-300 hover:shadow-soft hover:border-indigo-400">
      <div className="flex flex-rows items-center gap-4">
        {/* Image */}
        <div className="h-12 w-12 overflow-hidden shadow-sm rounded-sm">
          <img src={job.logo} alt={`${job.company} logo`} />
        </div>

        {/* Header */}
        <div className="flex-1">
          <h3 className="font-semibold text-lg">{jobTranslation.role}</h3>
          <h4 className="text-md">{job.company}</h4>
        </div>

        {/* Date and Locality*/}
        <div className="hidden md:block">
          {/* Date */}
          <div className="flex flex-rows items-center mb-1">
            <MdOutlineCalendarMonth className="mr-1 text-text-secondary" />
            <span className="text-sm text-text-secondary">
              {start} - {end}
            </span>
          </div>

          {/* Modality */}
          <div className="flex flex-rows items-center">
            <MdOutlinePlace className="mr-1 text-text-secondary" />
            <span className="text-sm text-text-secondary">
              {jobTranslation.modality}
            </span>
          </div>
        </div>
      </div>

      {/* Date and Locality */}
      <div className="my-2 block md:hidden flex flex-row items-center gap-4">
        {/* Date */}
        <div className="flex flex-row items-center">
          <MdOutlineCalendarMonth className="mr-1 text-text-secondary" />
          <span className="text-sm text-text-secondary">
            {start} - {end}
          </span>
        </div>

        {/* Modality */}
        <div className="flex flex-row items-center">
          <MdOutlinePlace className="mr-1 text-text-secondary" />
          <span className="text-sm text-text-secondary">
            {jobTranslation.modality}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="mb-4 text-sm text-text-secondary">
        {jobTranslation.description}
      </p>

      {/* Chips */}
      <div className="flex flex-rows gap-2">
        {job.technologies.map((tech) => (
          <span className="text-sm text-indigo-400 border border-border px-3 rounded-full">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default JobCard;
