import type { IconType } from "react-icons";
import { AiOutlineSketch } from "react-icons/ai";
import { BiCodeBlock } from "react-icons/bi";
import { BiCodeAlt } from "react-icons/bi";
import { BiSolidCube } from "react-icons/bi";

export type Service = {
  title: string;
  description: string;
  icon: IconType;
};

export const services: Service[] = [
  {
    title: "FullStack Web",
    description:
      "I build modern, scalable web applications with clean architecture and solid integration between frontend and backend.",
    icon: BiCodeAlt,
  },
  {
    title: "Mobile",
    description:
      "I create high-quality mobile apps, with experience in both Native (Android) and Cross-Platform (Flutter) development.",
    icon: BiSolidCube,
  },
];
