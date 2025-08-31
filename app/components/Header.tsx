const Header = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-8">

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
        <h1>Gabriel Bento</h1>
        <h2>FullStack Web &amp; Mobile Developer</h2>
        <p>
          This site is a demonstration of my skills and a celebration of my
          hobbies. From computer hardware, to aerial photography, I tend to
          showcase a little bit of everything. I see it as an open space for me
          to quickly express myself and share my content without relying on
          third parties.
        </p>
      </div>
    </div>
  );
};

export default Header;
