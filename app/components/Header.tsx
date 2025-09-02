const Header = () => {
  return (
    <div className="relative w-full h-auto mb-8">
      {/* Background image */}
      {/* <img
        src="/images/bg-4.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-none object-down"
      /> */}

      {/* Blurred overlay with content */}
      <div className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Left Image */}
          <div className="flex justify-start md:justify-start">
            <img
              src="/images/profile.jpg"
              alt="Profile picture"
              className="w-64 h-64 object-cover rounded-lg"
            />
          </div>

          {/* Content */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <h1 className="font-bold text-3xl">Gabriel Bento</h1>
            <div className="flex flex-row gap-4">
              <h2 className="py-1 px-4 rounded-full bg-surface border border-moon-400">
                FullStack Web
              </h2>
              <h2 className="py-1 px-4 rounded-full bg-surface border border-moon-400">
                Mobile Developer
              </h2>
            </div>
            <p className="first-letter:text-7xl first-letter:font-bold first-letter:mr-3 first-letter:leading-none first-letter:float-left">
              This site is a demonstration of my skills and a celebration of my
              hobbies. From computer hardware, to aerial photography, I tend to
              showcase a little bit of everything. I see it as an open space for me
              to quickly express myself and share my content without relying on
              third parties.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Header;
