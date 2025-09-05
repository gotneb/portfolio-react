import { useLanguage } from "~/contexts/LanguageContext";
import { IoSend } from "react-icons/io5";

const ContactForm = () => {
  const { t } = useLanguage();
  const base =
    "w-full border border-border rounded-md px-3 py-2 placeholder:text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-400 outline-none";
  const label = "block text-sm";

  return (
    <div className="bg-background border border-border p-6 shadow-lg rounded-lg">
      <form
        action="https://formspree.io/f/mkgvpqqn"
        method="POST"
        className="space-y-6"
      >
        {/* Name & Email */}
        <div className="grid md:grid-cols-2 gap-4">
          {/* Name */}
          <div className="space-y-2">
            <label htmlFor="name" className={`${label}`}>
              <span>{t.contact.name}</span>
              <span className="ml-1 text-red-500">*</span>
            </label>
            <input
              id="name"
              name="name"
              placeholder={t.contact.namePlaceholder}
              type="text"
              className={`${base}`}
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label htmlFor="email" className={`${label}`}>
              <span>{t.contact.email}</span>
              <span className="ml-1 text-red-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              placeholder={t.contact.emailPlaceholder}
              type="email"
              className={`${base}`}
            />
          </div>
        </div>

        {/* {t.contact.subject} */}
        <div className="space-y-2">
          <label htmlFor="subject" className={`${label}`}>
            {t.contact.subject}
            <span className="ml-1 text-red-500">*</span>
          </label>
          <input
            id="subject"
            name="subject"
            placeholder={t.contact.subjectPlaceholder}
            type="text"
            className={`${base}`}
          />
        </div>

        {/* Message */}
        <div className="space-y-2">
          <label htmlFor="message" className={`${label}`}>
            <span>{t.contact.message}</span>
            <span className="ml-1 text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder={t.contact.messagePlaceholder}
            className={`${base}`}
          ></textarea>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="bg-black/80 text-surface flex flex-row items-center gap-4 border border-pointer px-8 py-2 rounded-full cursor-pointer
          hover:scale-105 transition-transform duration-300
          "
        >
          <span>{t.contact.send}</span>
          <IoSend />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
