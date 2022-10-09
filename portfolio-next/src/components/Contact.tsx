import { FC } from "react";
import { FaDiscord, FaGithub } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Contact: FC = () => {
  return (
    <div className="pb-20">
      <h1 className="text-center text-4xl mt-14 md:mt-28 mb-10">
        Get in touch
      </h1>
      <div
        data-scroll
        data-scroll-speed="1"
        className="flex justify-center mx-[5vw] mt-5"
      >
        <div className="w-full max-w-[1100px] flex gap-10 flex-col md:flex-row">
          <div className="flex mx-auto">
            <a
              href="https://github.com/kieran6000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-3 items-center p-2 transition duration-300"
            >
              <FaGithub />
              <h1>Github</h1>
            </a>
            <a
              href="https://discord.com/users/604929087093342227"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-3 items-center p-2 transition duration-300"
            >
              <FaDiscord />
              <h1>Discord</h1>
            </a>
            <a
              href="mailto:ousebk@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-3 items-center p-2 transition duration-300"
            >
              <GrMail />
              <h1>Email</h1>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
