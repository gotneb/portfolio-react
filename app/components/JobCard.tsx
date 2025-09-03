import { MdOutlinePlace } from "react-icons/md";
import { MdOutlineCalendarMonth } from "react-icons/md";

import type { Job } from "~/models/job";

type JobCardProps = {
  job: Job;
};

const JobCard = ({ job }: JobCardProps) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
  };
  const start = job.startDate.toLocaleDateString("en-US", options);
  const end = job.isActual
    ? "Present"
    : job.endDate?.toLocaleDateString("en-US", options);

  return (
    <div className="bg-surface border border-border p-4 rounded-lg transition hover:-translate-y-2 duration-300 hover:shadow-soft hover:border-indigo-400">
      <div className="flex flex-rows items-center gap-4">
        {/* Image */}
        <div className="h-12 w-12 overflow-hidden shadow-sm rounded-sm">
          <img src={job.logo} alt={`${job.company} logo`} />
        </div>

        {/* Header */}
        <div className="flex-1">
          <h3 className="font-semibold text-lg">{job.role}</h3>
          <h4 className="text-md">{job.company}</h4>
        </div>

        {/* Date and Locality*/}
        <div>
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
            <span className="text-sm text-text-secondary">{job.modality}</span>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="mt-4 mb-4 text-sm text-text-secondary">{job.description}</p>

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
