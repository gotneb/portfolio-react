import type React from "react";
import { FaAndroid, FaNodeJs, FaPython } from "react-icons/fa";

export type Project = {
    id: string;
    projectKey: string; // Key to reference translations
    category: string[];
    image: string;
    icons: React.ElementType[];
}

export const projects: Project[] = [
    {
        id: "1",
        projectKey: "crypto-tracker",
        category: ["Mobile"],
        image: "/images/projects/1.png",
        icons: [FaAndroid],
    },
    {
        id: "2",
        projectKey: "course-app",
        category: ["Mobile", "Backend"],
        image: "/images/projects/2.png",
        icons: [FaPython],
    },
    {
        id: "3",
        projectKey: "book-reader",
        category: ["Mobile"],
        image: "/images/projects/3.png",
        icons: [],
    },
    {
        id: "4",
        projectKey: "rlox-language",
        category: ["Others"],
        image: "/images/no-image.png",
        icons: [],
    },
    {
        id: "5",
        projectKey: "manga-hub",
        category: ["Mobile"],
        image: "/images/projects/5.png",
        icons: [],
    },
    {
        id: "6",
        projectKey: "studio-ghibli-site",
        category: ["Frontend"],
        image: "/images/projects/6.png",
        icons: [],
    },
    {
        id: "7",
        projectKey: "manga-scrapper",
        category: ["Backend"],
        image: "/images/no-image.png",
        icons: [],
    },
    {
        id: "8",
        projectKey: "youtube-downloader",
        category: ["Mobile"],
        image: "/images/projects/8.png",
        icons: [],
    },
    {
        id: "9",
        projectKey: "circuit-simulator",
        category: ["Desktop"],
        image: "/images/projects/9.png",
        icons: [],
    },
    {
        id: "10",
        projectKey: "studio-ghibli-api",
        category: ["Backend"],
        image: "/images/no-image.png",
        icons: [],
    },
    {
        id: "11",
        projectKey: "manga-api",
        category: ["Backend"],
        image: "/images/no-image.png",
        icons: [],
    },
    {
        id: "12",
        projectKey: "super-bomberman",
        category: ["Game"],
        image: "/images/projects/12.png",
        icons: [],
    },
    {
        id: "13",
        projectKey: "advocacia-site",
        category: ["Frontend"],
        image: "/images/projects/13.png",
        icons: [],
    },
];