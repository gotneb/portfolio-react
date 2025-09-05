import { IoSend } from "react-icons/io5";

const ContactForm = () => {
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
              <span>Name</span>
              <span className="ml-1 text-red-500">*</span>
            </label>
            <input
              id="name"
              name="name"
              placeholder="Your complete name"
              type="text"
              className={`${base}`}
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label htmlFor="email" className={`${label}`}>
              <span>Email</span>
              <span className="ml-1 text-red-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              placeholder="exemplo@gmail.com"
              type="email"
              className={`${base}`}
            />
          </div>
        </div>

        {/* Subject */}
        <div className="space-y-2">
          <label htmlFor="subject" className={`${label}`}>
            Subject
            <span className="ml-1 text-red-500">*</span>
          </label>
          <input
            id="subject"
            name="subject"
            placeholder="What would like to talk?"
            type="text"
            className={`${base}`}
          />
        </div>

        {/* Message */}
        <div className="space-y-2">
          <label htmlFor="message" className={`${label}`}>
            <span>Message</span>
            <span className="ml-1 text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Hi Gabriel! I'd like to talk about..."
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
          <span>Send</span>
          <IoSend />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
