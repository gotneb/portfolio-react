import type React from "react";

export type Project = {
    id: string;
    projectKey: string; // Key to reference translations
    category: string[];
    image: string;
}

export const projects: Project[] = [
    {
        id: "1",
        projectKey: "crypto-tracker",
        category: ["Mobile"],
        image: "/images/projects/1.png",
    },
    {
        id: "2",
        projectKey: "course-app",
        category: ["Mobile", "Backend"],
        image: "/images/projects/2.png",
    },
    {
        id: "3",
        projectKey: "book-reader",
        category: ["Mobile"],
        image: "/images/projects/3.png",
    },
    {
        id: "4",
        projectKey: "rlox-language",
        category: ["Others"],
        image: "/images/no-image.png",
    },
    {
        id: "5",
        projectKey: "manga-hub",
        category: ["Mobile"],
        image: "/images/projects/5.png",
    },
    {
        id: "6",
        projectKey: "studio-ghibli-site",
        category: ["Frontend"],
        image: "/images/projects/6.png",
    },
    {
        id: "7",
        projectKey: "manga-scrapper",
        category: ["Backend"],
        image: "/images/no-image.png",
    },
    {
        id: "8",
        projectKey: "youtube-downloader",
        category: ["Mobile"],
        image: "/images/projects/8.png",
    },
    {
        id: "9",
        projectKey: "circuit-simulator",
        category: ["Desktop"],
        image: "/images/projects/9.png",
    },
    {
        id: "10",
        projectKey: "studio-ghibli-api",
        category: ["Backend"],
        image: "/images/no-image.png",
    },
    {
        id: "11",
        projectKey: "manga-api",
        category: ["Backend"],
        image: "/images/no-image.png",
    },
    {
        id: "12",
        projectKey: "super-bomberman",
        category: ["Game"],
        image: "/images/projects/12.png",
    },
    {
        id: "13",
        projectKey: "advocacia-site",
        category: ["Frontend"],
        image: "/images/projects/13.png",
    },
    {
        id: "14",
        projectKey: "crypto-dash",
        category: ["Frontend"],
        image: "/images/projects/14.png",
    },
    {
        id: "15",
        projectKey: "react-ecommerce",
        category: ["Frontend"],
        image: "/images/projects/15.png",
    },
];