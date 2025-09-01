import type { Project } from "~/models/project";

export type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="bg-gray-800 w-full p-3 rounded-lg space-y-2 cursor-pointer border border-gray-700">
      <div className="w-full h-40 rounded-lg overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform transition duration-300 hover:scale-105"
        />
      </div>
      <div className="flex flex-row gap-2">
        {project.category.map((category) => (
          <h4 key={category} className="inline-block px-4 border border-blue-500 rounded-full">
            {category}
          </h4>
        ))}
      </div>
      <h2 className="font-semibold">{project.title}</h2>
      <p className="mb-4">{project.description}</p>
    </div>
  );
};

export default ProjectCard;
