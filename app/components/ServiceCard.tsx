import type { IconType } from "react-icons";
import type { Service } from "~/models/service";

type ServiceCardProps = {
  service: Service;
};

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <div className="bg-gray-800 hover:bg-blue-900 border border-gray-700 p-4 rounded-lg transition hover:-translate-y-2 duration-300">
      <div className="bg-moon-300 p-2 rounded-full inline-flex">
        <service.icon className="h-8 w-8" />
      </div>
      <h2 className="mt-3 mb-2 font-bold text-xl">{service.title}</h2>
      <p>{service.description}</p>
    </div>
  );
};

export default ServiceCard;
