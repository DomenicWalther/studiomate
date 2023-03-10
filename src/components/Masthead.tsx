import React from "react";
import Image from "next/image";
import { useState } from "react";

const Masthead: React.FC = () => {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const subscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("loading");

    try {
      const response = await fetch("/api/mailchimp/subscribeUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      });
      setState("success");
      setEmail("");
    } catch (error) {
      setErrorMsg("Something went wrong. Please try again later.");
      setState("error");
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="absolute top-0 left-0 z-[2] h-full w-full bg-[#000B13] opacity-70"></div>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute h-full w-full object-cover"
        src="/masthead-bg.mp4"
      ></video>
      <div className="drop-shadow[0_5px_3px_rgba(0,0,0,0.4)] z-10 flex flex-1 flex-col items-center justify-center p-12 text-center font-bold text-white">
        <h1 className="absolute top-20 mb-6 text-xl font-normal">StudioMate</h1>
        <h2 className="mb-2 text-2xl font-bold xl:text-3xl">
          The next generation <br></br> Studio Management Software
        </h2>
        <form
          onSubmit={(e: React.FormEvent) => void subscribe(e)}
          className="mx relative mt-14 w-96 font-light  "
        >
          <input
            required
            id="email-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className=" z-0 h-14 w-96 rounded-lg pl-5 text-[#102A43] focus:shadow focus:outline-none "
            placeholder="Enter your email address"
          ></input>

          <button className="mt-5 h-14 w-96 rounded-lg bg-[#444F5A] text-white transition-colors hover:bg-gray-800">
            Stay Updated
          </button>
        </form>
      </div>
      <Image
        src="/svg/scroll-bottom-mouse.svg"
        height={62 * 0.8}
        width={32 * 0.8}
        alt="Icon to indicate the possibility to scroll further down"
        className="z-10 mb-14 animate-bounce"
      />
      <h6 className="absolute bottom-3 z-10 text-xs font-thin text-white">
        ?? 2023 StudioMate | Coming Soon{" "}
      </h6>
    </div>
  );
};

export default Masthead;
