import { useState } from "react";
import { socialIcons } from "../constants/SocialMedia";
import Typewriter from "./Typewriter";

const Profile = () => {
  const [activeSocial, setActiveSocial] = useState(
    "linkedin.com/in/vamsi-ankabattula-a42b031b6"
  );
  const phrases = [
    "a Developer",
    "Android App Developer",
    "an Engineer",
    "a Web Designer",
  ];

  const downloadPDF = () => {
    // Constructing a blob with the PDF data
    const pdfBlob = new Blob(
      [
        "https://docs.google.com/document/d/1HUIQ2CU0jwJxFt8ZQnOZ9mXVbqCXQx4sjP2W21V_MKY/edit",
      ],
      {
        type: "application/pdf",
      }
    );

    // Creating a temporary anchor element
    const downloadLink = document.createElement("a");
    downloadLink.href = window.URL.createObjectURL(pdfBlob);

    // Setting the file name for the download
    downloadLink.download = "../../public/example.pdf";

    // Simulating a click on the anchor element to trigger the download
    downloadLink.click();
  };

  return (
    <div className="flex justify-between py-16">
      <div className="text-white w-6/12 flex items-center ">
        <div>
          <h1 className="text-4xl text-center font-bold font-serif leading-snug">
            Hello, i'm <br /> Vamsi Ankabattula
          </h1>

          <div className="h-20 text-center">
            <Typewriter phrases={phrases} />
          </div>

          <p className="font-light text-lg font-mono mt-10">
            I code beautifully simple things and i love what i do. Just simple
            like that!
          </p>

          <div className="flex justify-center items-center mx-auto py-16">
            <button
              // onClick={downloadPDF}
              className="border-[#13C5FD] border-2 px-16 py-4 mx-auto text-xl font-bold tracking-wider"
            >
              <a
                href="https://drive.google.com/file/d/1OaSdDmRbq_0QHA_GzMZbotrqHu_tVxDu/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </button>
            <button className="border-[#13C5FD] border-2 px-9 py-4 mx-auto text-xl font-bold tracking-wider">
              More About Me
            </button>
          </div>
        </div>
      </div>

      <div className="border border-zinc-600 shadow-gray-100 w-4/12 rounded-2xl px-6 py-10">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Vamsi ®</h1>
          <p className="text-lg text-right">
            Web & Android <br />
            Developer
          </p>
        </div>
        <img
          className="rounded-3xl w-full p-4 self-center"
          src="https://a.storyblok.com/f/191576/1200x800/faa88c639f/round_profil_picture_before_.webp"
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
              //   onClick={() => (window.location.href = social.path)}
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
            Hire Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
