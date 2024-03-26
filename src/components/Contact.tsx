import { personData } from "../constants/PersonalData";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { socialIcons } from "../constants/SocialMedia";
import { validationForm } from "../constants/validationForm";

const Contact = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");
  const [errMessage, setErrorMessage] = useState("");
  const [errValidMsg, setValidMsg] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const form: any = useRef();

  // useEffect(() => {
  //   setTimeout(() => {
  //     setShowMessage(false);
  //   }, 2000);
  // }, [showMessage]);

  const sendEmail = (e: any) => {
    e.preventDefault();
    const message: any = validationForm(mail);
    setValidMsg(message);
    if (message) return null;
    if (showMessage) return null;
    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false);
    }, 2000);

    emailjs
      .sendForm("service_zijahge", "template_v7w0q79", form.current, {
        publicKey: "npLAO4Mp5iXiRASRm",
      })
      .then(
        () => {
          setErrorMessage("Message sent successfully");
          console.log("success");
        },
        (error) => {
          setErrorMessage("Failed" + error.text);
          console.log("fail");
        }
      );
    setName("");
    setMail("");
    setMessage("");
  };
  return (
    <div className=" md:px-16 bg-[#2D0249] py-10 relative">
      <div className="text-center pb-10">
        <h1 className="inline-block font-bold text-4xl text-white after:content-[''] after:block after:border-b-4 after:border-pink-600 after:mt-1">
          Contact
        </h1>
      </div>
      <div className="md:flex md:justify-evenly space-y-10">
        <div className="md:w-4/12 mx-6">
          <h1 className="font-bold text-4xl mb-16 leading-tight tracking-wider">
            Let's discuss <br /> on something
            <span className="text-pink-600"> cool </span> <br /> together
          </h1>
          <div className="md:w-10/12 w-full">
            {personData?.map((p: any) => (
              <div className="cursor-pointer flex  py-4  hover:bg-pink-500  md:px-4  hover:bg-opacity-30 rounded-xl  border-pink-500">
                <p>{p.svgIcon}</p>{" "}
                <p className="ml-4 font-mono font-medium w-full">{p.title}</p>
              </div>
            ))}
          </div>

          <ul className="flex md:justify-evenly md:mt-16 md:-ml-14 space-x-10 ">
            {socialIcons?.map((social: any) => (
              <a
                //   onClick={() => (window.location.href = social.path)}
                href={social.path}
                target="_blank"
                className="rounded-full border border-orange-800 p-2 cursor-pointer hover:border-pink-600"
              >
                {social.icon}
              </a>
            ))}
          </ul>
        </div>

        <div className="md:w-4/12 bg-grey px-10 py-6 bg-white rounded-2xl mx-4 md:mx-0">
          <h1 className="text-black py-4 font-semibold mb-4">
            Have a question or want to work together?
          </h1>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="grid grid-rows-2 gap-8"
          >
            <input
              name="user_name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              type="text"
              className=" outline-none border-b-2 py-2 px-2 border-pink-700 text-gray-900 text-lg bg-gray-100 font-medium"
            />
            <input
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              name="user_email"
              type="email"
              placeholder="Your Email"
              className=" outline-none border-b-2 py-2 px-2 border-pink-700 text-gray-900 text-lg bg-gray-100"
            />
            {errValidMsg && (
              <span className="text-red-600 -mt-6">{errValidMsg}</span>
            )}
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              name="message"
              placeholder="Write a message"
              rows={3}
              className=" outline-none border-b-2 py-2 px-2 border-pink-700 text-gray-900 text-lg bg-gray-100"
            />

            <button
              type="submit"
              value="Send"
              className="bg-pink-600 md:px-10 py-6 mt-10 rounded-2xl font-bold tracking-wide text-xl  justify-center inline-flex cursor-pointer"
            >
              <svg
                className="h-6 w-6 mr-2 mt-1 text-white"
                viewBox="0 0 24 24"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <line x1="22" y1="2" x2="11" y2="13" />{" "}
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
              Send Message
            </button>
          </form>
        </div>
      </div>

      {showMessage ? (
        <div
          id="toast-simple"
          className="flex items-center w-full max-w-xs p-4 space-x-4 rtl:space-x-reverse text-gray-500
        top-0 right-0 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800 absolute"
          role="alert"
        >
          <svg
            className="w-5 h-5 text-blue-600 dark:text-blue-500 rotate-45"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"
            />
          </svg>
          <div className="ps-4 text-sm font-normal z-50">{errMessage}</div>
        </div>
      ) : null}
    </div>
  );
};

export default Contact;
