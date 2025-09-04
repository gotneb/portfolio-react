import { FaDownload } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useLanguage } from "~/contexts/LanguageContext";

type HeaderProps = {
  id: string;
};

const Header = ({ id }: HeaderProps) => {
  const { t } = useLanguage();
  
  const buttons = [
    {
      text: t.header.downloadCV,
      icon: FaDownload,
      link: "/files/Desenvolvedor_FullStack.pdf",
    },
    {
      text: t.header.linkedin,
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/gabriel-bento-da-silva/",
    },
    {
      text: t.header.github,
      icon: FaGithub,
      link: "https://github.com/gotneb",
    },
  ];

  return (
    <div id={id} className="scroll-mt-20">
      <div className="flex flex-row flex-wrap items-start gap-8">
        {/* Left Image */}
        <div className="flex-shrink-0">
          <img
            src="/images/profile.jpg"
            alt="Profile picture"
            className="w-64 h-64 object-cover rounded-2xl shadow-2xl"
          />
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="font-bold text-5xl">{t.header.title}</h1>
          <div className="flex flex-row gap-4">
            <h2 className="py-1 px-4 rounded-full text-shadow-sm bg-gradient-to-r from-gray-100 to-gray-200 font-medium text-sm shadow-md">
              {t.header.fullstack}
            </h2>
            <h2 className="py-1 px-4 rounded-full text-shadow-sm bg-gradient-to-r from-gray-100 to-gray-200 font-medium text-sm shadow-md">
              {t.header.mobile}
            </h2>
          </div>
          <p className="text-lg first-letter:text-8xl first-letter:font-bold first-letter:mr-3 first-letter:leading-none first-letter:float-left">
            {t.header.description}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 my-6">
        {buttons.map((option) => (
          <a
            key={option.text}
            href={option.link}
            target="_blank"
            rel="noopener noreferrer"
            className="
        group
        w-full sm:w-64
        flex items-center justify-start px-4 py-4 rounded-lg
        bg-gradient-to-r from-gray-100 to-gray-200 shadow-md
        hover:from-gray-200 hover:to-gray-300 transition cursor-pointer
        first:bg-neutral-900 first:from-neutral-900 first:to-neutral-900
        first:hover:from-gray-900 first:hover:to-gray-800
      "
          >
            {/* Icon */}
            <option.icon className="text-2xl text-gray-600 group-first:text-stone-200" />

            {/* Vertical Divider */}
            <span className="w-px h-6 bg-gray-300 mx-3 group-first:bg-stone-200"></span>

            {/* Text */}
            <span className="flex-1 flex items-center font-medium text-gray-800 text-shadow-sm group-first:text-stone-200">
              {option.text}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Header;
