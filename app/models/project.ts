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
        description: "A crypto tracking app built with Kotlin and Jetpack Compose using the MVI pattern. Features real-time API communication, smooth graph rendering with Canvas, dynamic theme colors, and seamless navigation.",
        category: ["Mobile"],
        image: "/images/projects/1.png",
        icons: [FaAndroid],
    },
    {
        id: "2",
        title: "Course App",
        description: "A course browsing app built with Kotlin and Jetpack Compose using the MVVM pattern. Features local storage with Room, smooth image loading with Coil, real-time API communication, and seamless navigation.",
        category: ["Mobile", "Backend"],
        image: "/images/projects/2.png",
        icons: [FaPython],
    },
    {
        id: "3",
        title: "Book Reader",
        description: "A book reading app built with Kotlin and Jetpack Compose using the MVVM pattern. Fetches books from the Gutenberg Project, parses content with Jsoup, loads images with Coil, and ensures smooth navigation.",
        category: ["Mobile"],
        image: "/images/projects/3.png",
        icons: [],
    },
    {
        id: "4",
        title: "Rlox Language",
        description: "An interpreter for a dynamically typed scripting language built in Rust. Supports variables, control flow, functions, closures, classes, and inheritance.",
        category: ["Others"],
        image: "/images/no-image.png",
        icons: [],
    },
    {
        id: "5",
        title: "MangaHub - Read Manga",
        description: "A manga reader app with support for 3 languages, offline reading, bookmarks, reading progress tracking, and light/dark themes. Includes all core features expected in a modern manga reader.",
        category: ["Mobile"],
        image: "/images/projects/5.png",
        icons: [],
    },
    {
        id: "6",
        title: "Studio Ghibli Site",
        description: "A beautifully crafted website showcasing Studio Ghibli movies with a Netflix-style interface. Features smooth scroll animations, intuitive navigation, and carefully designed UI transitions.",
        category: ["Frontend"],
        image: "/images/projects/6.png",
        icons: [],
    },
    {
        id: "7",
        title: "Manga Scrapper",
        description: "A modular Python script that scrapes manga images and descriptions, with support for dynamic loading using Selenium. Built with BeautifulSoup4 for parsing and designed for extensibility.",
        category: ["Backend"],
        image: "/images/no-image.png",
        icons: [],
    },
    {
        id: "8",
        title: "Youtube Downloader",
        description: "A tool to download videos and audio from YouTube, featuring download progress tracking and a simple, user-friendly interface.",
        category: ["Mobile"],
        image: "/images/projects/8.png",
        icons: [],
    },
    {
        id: "9",
        title: "Electric Circuit Simulator",
        description: "A simulator designed for learning electrical circuits. Users can build circuits with various components, run simulations, and generate graphs of the results for educational purposes.",
        category: ["Desktop"],
        image: "/images/projects/9.png",
        icons: [],
    },
    {
        id: "10",
        title: "Studio Ghibli Api",
        description: "A lightweight API providing Studio Ghibli movie data. Supports searching by title, fetching movie details, listing all movies, and retrieving a random movie. Built with speed and reliability in mind.",
        category: ["Backend"],
        image: "/images/no-image.png",
        icons: [],
    },
    {
        id: "11",
        title: "Manga Api",
        description: "A Go-based API using MongoDB that provides manga data through web scraping. Supports searching, fetching details, and retrieving pages from multiple manga servers.",
        category: ["Backend"],
        image: "/images/no-image.png",
        icons: [],
    },
    {
        id: "12",
        title: "Super Bomberman 2",
        description: "A remake of the original Super Bomberman game developed in Godot. The project is still in development and explores game mechanics and level design.",
        category: ["Game"],
        image: "/images/projects/12.png",
        icons: [],
    },
    {
        id: "13",
        title: "Advocacia Site",
        description: "A clean, professional landing page for a lawyer, featuring intuitive navigation and a prominent contact form.",
        category: ["Frontend"],
        image: "/images/projects/13.png",
        icons: [],
    },
];