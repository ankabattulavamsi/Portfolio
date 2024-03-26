import { socialIcons } from "../constants/SocialMedia";
import Typewriter from "./Typewriter";
import profileImg from "../assets/PorjectImages/mypicture.jpeg";

const Profile = () => {
  const phrases = [
    "a Developer",
    "Android App Developer",
    "an Engineer",
    "a Web Designer",
  ];

  return (
    <div className="md:flex  md:justify-between py-16">
      <div className="text-white md:w-6/12 flex items-center ">
        <div>
          <h1 className="text-4xl text-center font-bold font-serif leading-snug">
            Hello, i'm <br /> Vamsi Ankabattula
          </h1>

          <div className="md:h-20 h-24 text-center">
            <Typewriter phrases={phrases} />
          </div>

          <p className="font-light text-lg font-mono mt-10">
            I code beautifully simple things and i love what i do. Just simple
            like that!
          </p>

          <div className=" md:flex space-y-6 md:space-y-0 py-16">
            <button className="border-[#13C5FD] border-2 px-16 py-4 mx-auto text-xl font-bold tracking-wider rounded-lg w-full md:w-auto">
              <a
                href="https://drive.google.com/file/d/1OaSdDmRbq_0QHA_GzMZbotrqHu_tVxDu/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </button>
            <button className="border-[#13C5FD] border-2 px-9 py-4 mx-auto text-xl font-bold tracking-wider rounded-lg w-full md:w-auto">
              <a href="#about">More About Me</a>
            </button>
          </div>
        </div>
      </div>

      <div className="border border-zinc-600 shadow-gray-100 md:w-4/12 rounded-2xl px-6 py-10">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Vamsi ®</h1>
          <p className="text-lg text-right">
            Web & Android <br />
            Developer
          </p>
        </div>
        <img
          className="rounded-3xl w-full p-4 self-center"
          src={profileImg}
          alt=""
        />

        <div className="py-4">
          <h1 className="text-center font-bold text-xl">Vamsi Ankabattula</h1>
          <h1 className="text-center font-medium text-lg">
            Frontend Developer
          </h1>
        </div>
        <p className="flex justify-center text-gray-300 py-2">
          © 2024 Vamsi. All Rights Reserve
        </p>

        <ul className="flex justify-evenly">
          {socialIcons?.map((social: any) => (
            <a
              href={social.path}
              target="_blank"
              className="rounded-full border border-slate-500 p-2 cursor-pointer hover:border-[#13C5FD]"
            >
              {social.icon}
            </a>
          ))}
        </ul>

        <div className="flex justify-center py-4 w-full">
          <button className="border border-[#13C5FD] w-full py-4 rounded-xl font-bold tracking-widest">
            <a href="#contact">Hire Me</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
