import { BiLinkExternal } from "react-icons/bi";
import { IoConstruct } from "react-icons/io5";
import { FC } from "react";
import { FaGithub } from "react-icons/fa";
import { allDataType } from "../shared/types";

interface MainProjectsProps {
  projects: allDataType["projects"];
}

const MainProjects: FC<MainProjectsProps> = ({ projects }) => {
  return (
    <>
      <h1 className="text-center text-4xl mb-10 md:mb-20">Selected projects</h1>
      <div
        className={`item flex gap-[20px] lg:gap-[50px] w-full px-[5vw] md:min-h-[60vh] mb-20 md:my-10 flex-col lg:flex-row
          }`}
      >
        <div data-scroll data-scroll-speed="3" className="lg:flex-1">
          <div className="border-[#888] border-2 rounded-[20px] overflow-hidden">
            <div className="border-black border-[8px]">
              <img
                className="w-full h-auto rounded-[12px]"
                src="https://ik.imagekit.io/r9l1fsmew/image_pnve3zXd9.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665232482194"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="item-info lg:flex-1">
          <h1 className="text-3xl">CardZ</h1>
          <p className="text-[20px] text-justify my-3">
            CardZ is a GPT website which automatically pay users in giftcards,
            paypal and crypto for completing offers.
          </p>

          <div className="flex gap-[5px]">
            <img
              className="w-[30px] h-[30px]"
              src="https://ik.imagekit.io/r9l1fsmew/react_5lB4ylq_0.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1665218402385"
              alt=""
            />
            <img
              className="w-[30px] h-[30px]"
              src="https://ik.imagekit.io/r9l1fsmew/nodejs_rzXlSt3aY.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1665218402370"
              alt=""
            />
            <img
              className="w-[30px] h-[30px]"
              src="https://ik.imagekit.io/r9l1fsmew/css_xQGc392Fy.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1665218402375"
              alt=""
            />
          </div>

          <div className="flex mt-[25px] gap-[20px]">
            <div className="h-[45px] px-[15px] text-white rounded transition duration-300 flex items-center cursor-not-allowed gap-[10px] bg-[#1876d2] opacity-70">
              <IoConstruct size={20} />
              <span> Work In Progress</span>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`item flex gap-[20px] lg:gap-[50px] w-full px-[5vw] md:min-h-[60vh] mb-20 md:my-10 flex-col lg:flex-row-reverse
          }`}
      >
        <div data-scroll data-scroll-speed="3" className="lg:flex-1">
          <div className="border-[#888] border-2 rounded-[20px] overflow-hidden">
            <div className="border-black border-[8px]">
              <img
                className="w-full h-auto rounded-[12px]"
                src="https://ik.imagekit.io/r9l1fsmew/image_1__nTntcdanM.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665232560443"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="item-info lg:flex-1">
          <h1 className="text-3xl">KGHype</h1>
          <p className="text-[20px] text-justify my-3">
            KGHype helps you to buy products from China easily. We offer
            purchasing, warehousing, and shipping services with 0 service fee,
            we have user-friendly features for you to manage your orders, view
            HD photos, and share with a simple one click.
          </p>

          <div className="flex gap-[5px]">
            <img
              className="w-[30px] h-[30px]"
              src="https://ik.imagekit.io/r9l1fsmew/html_59GRVzKdt.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1665218404941"
              alt=""
            />
            <img
              className="w-[30px] h-[30px]"
              src="https://ik.imagekit.io/r9l1fsmew/css_xQGc392Fy.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1665218402375"
              alt=""
            />
            <img
              className="w-[30px] h-[30px]"
              src="https://ik.imagekit.io/r9l1fsmew/javascript_B_jq_KamO.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1665218402378"
              alt=""
            />
            <img
              className="h-[30px] w-[30px]"
              src="https://ik.imagekit.io/r9l1fsmew/nodejs_rzXlSt3aY.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1665218402370"
              alt=""
            />
            <img
              className="w-[30px] h-[30px]"
              src="https://ik.imagekit.io/r9l1fsmew/mysql_sH-TGiBJP.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1665218431152"
              alt=""
            />
          </div>

          <div className="flex mt-[25px] gap-[20px]">
            <div className="h-[45px] px-[15px] text-white rounded transition duration-300 flex items-center cursor-not-allowed gap-[10px] bg-[#1876d2] opacity-70">
              <span> Currently Down</span>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`item flex gap-[20px] lg:gap-[50px] w-full px-[5vw] md:min-h-[60vh] mb-20 md:my-10 flex-col lg:flex-row
          }`}
      >
        <div data-scroll data-scroll-speed="3" className="lg:flex-1">
          <div className="border-[#888] border-2 rounded-[20px] overflow-hidden">
            <div className="border-black border-[8px]">
              <img
                className="w-full h-auto rounded-[12px]"
                src="https://ik.imagekit.io/r9l1fsmew/image_3__eAQ54Hxbq.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665232694779"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="item-info lg:flex-1">
          <h1 className="text-3xl">RBXPlug</h1>
          <p className="text-[20px] text-justify my-3">
            Earn Free R$ by Completing Easy Tasks! Play games, download apps,
            watch videos & more.
          </p>

          <div className="flex gap-[5px]">
            <img
              className="w-[30px] h-[30px]"
              src="https://ik.imagekit.io/r9l1fsmew/react_5lB4ylq_0.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1665218402385"
              alt=""
            />
            <img
              className="w-[30px] h-[30px]"
              src="https://ik.imagekit.io/r9l1fsmew/nodejs_rzXlSt3aY.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1665218402370"
              alt=""
            />
            <img
              className="w-[30px] h-[30px]"
              src="https://ik.imagekit.io/r9l1fsmew/tailwindcss_N8mhNU1fz.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1665218402384"
              alt=""
            />
            <img
              className="w-[30px] h-[30px]"
              src="https://ik.imagekit.io/r9l1fsmew/mysql_sH-TGiBJP.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1665218431152"
              alt=""
            />
          </div>

          <div className="flex mt-[25px] gap-[20px]">
            <a
              href="https://rbxplug.gg"
              target="_blank"
              rel="noopener noreferrer"
              className="h-[45px] px-[15px] text-white rounded transition duration-300 flex items-center gap-[10px] bg-[#1876d2] hover:bg-[#2884e0]"
            >
              <BiLinkExternal size={25} />
              <span> Live Site</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainProjects;
