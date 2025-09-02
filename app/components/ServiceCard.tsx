import type { IconType } from "react-icons";
import type { Service } from "~/models/service";

type ServiceCardProps = {
  service: Service;
};

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <div className="group bg-surface hover:bg-indigo-500 hover:text-background border border-border p-4 rounded-lg transition hover:-translate-y-2 duration-300 hover:shadow-soft hover:border-indigo-400">
      <div className="bg-indigo-500 p-2 rounded-full inline-flex">
        <service.icon className="h-8 w-8 text-surface" />
      </div>
      <h2 className="mt-3 mb-2 font-bold text-lg">{service.title}</h2>
      <p className="text-text-secondary group-hover:text-background text-sm">{service.description}</p>
    </div>
  );
};

export default ServiceCard;
