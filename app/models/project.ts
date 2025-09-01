import type React from "react";
import { FaAndroid, FaNodeJs, FaPython } from "react-icons/fa";

export type Project = {
    id: string;
    title: string;
    description: string;
    category: string[];
    image: string;
    icons: React.ElementType[];
}

export const projects: Project[] = [
    {
        id: "1",
        title: "Crypto Tracker App",
        description: "This project follows the MVI pattern using a clear separaiton of concerns and modulaity.",
        category: ["Mobile"],
        image: "/images/projects/1.png",
        icons: [FaAndroid],
    },
    {
        id: "2",
        title: "Course App",
        description: "This project follows the MVVM pattern. It uses Room for handle saving bookmarked courses using SQL.",
        category: ["Mobile", "Backend"],
        image: "/images/projects/2.png",
        icons: [FaPython],
    },
    {
        id: "3",
        title: "Book Reader",
        description: "This project follows the MVI pattern using a clear separaiton of concerns and modulaity.",
        category: ["Mobile"],
        image: "/images/projects/3.png",
        icons: [],
    },
    {
        id: "4",
        title: "Rlox Language",
        description: "This project follows the MVI pattern using a clear separaiton of concerns and modulaity.",
        category: ["Others"],
        image: "/images/no-image.png",
        icons: [],
    },
    {
        id: "5",
        title: "MangaHub - Read Manga",
        description: "This project follows the MVI pattern using a clear separaiton of concerns and modulaity.",
        category: ["Mobile"],
        image: "/images/projects/5.png",
        icons: [],
    },
    {
        id: "6",
        title: "Studio Ghibli Site",
        description: "This project follows the MVI pattern using a clear separaiton of concerns and modulaity.",
        category: ["Frontend"],
        image: "/images/projects/6.png",
        icons: [],
    },
    {
        id: "7",
        title: "Manga Scrapper",
        description: "This project follows the MVI pattern using a clear separaiton of concerns and modulaity.",
        category: ["Backend"],
        image: "/images/no-image.png",
        icons: [],
    },
    {
        id: "8",
        title: "Youtube Downloader",
        description: "This project follows the MVI pattern using a clear separaiton of concerns and modulaity.",
        category: ["Mobile"],
        image: "/images/projects/8.png",
        icons: [],
    },
    {
        id: "9",
        title: "Electric Circuit Simulator",
        description: "This project follows the MVI pattern using a clear separaiton of concerns and modulaity.",
        category: ["Desktop"],
        image: "/images/projects/9.png",
        icons: [],
    },
    {
        id: "10",
        title: "Studio Ghibli Api",
        description: "This project follows the MVI pattern using a clear separaiton of concerns and modulaity.",
        category: ["Backend"],
        image: "/images/no-image.png",
        icons: [],
    },
    {
        id: "11",
        title: "Manga Api",
        description: "This project follows the MVI pattern using a clear separaiton of concerns and modulaity.",
        category: ["Backend"],
        image: "/images/no-image.png",
        icons: [],
    },
    {
        id: "12",
        title: "Super Bomberman 2",
        description: "This project follows the MVI pattern using a clear separaiton of concerns and modulaity.",
        category: ["Game"],
        image: "/images/projects/12.png",
        icons: [],
    },
    {
        id: "13",
        title: "Advocacia Site",
        description: "Lading page site pattern using a clear separaiton of concerns and modulaity.",
        category: ["Frontend"],
        image: "/images/projects/13.png",
        icons: [],
    },
];