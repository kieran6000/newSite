import { FC } from "react";
import { allDataType } from "../shared/types";

interface SmallProjectsProps {
  projects: allDataType["smallProjects"];
}

const SmallProjects: FC<SmallProjectsProps> = ({ projects }) => {
  return (
    <div className="flex justify-center mx-[5vw] mt-16">
      <div className="w-full max-w-[1100px]">
        <h1 className="text-4xl text-center mb-2">More of my work</h1>

        <div
          data-scroll
          data-scroll-speed="1"
          className="grid gap-2 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] md:grid-cols-[repeat(auto-fill,_minmax(400px,_1fr))]"
        >
            <a
              href="https://alum.gg"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-3 p-3 transition duration-300"
            >
              <img
                className="h-[40px] my-1 object-fit"
                src="https://ik.imagekit.io/r9l1fsmew/image_E4aqWVn6k.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665233709889"
                alt=""
              />
              <div>
                <h1>Alum</h1>
                <p className="text-gray-400">Just another giftcard gpt site.</p>
              </div>
            </a>
            <a
              href="https://alts.club"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-3 p-3 transition duration-300"
            >
              <img
                className="h-[40px] my-1 object-fit"
                src="https://ik.imagekit.io/r9l1fsmew/white_2x_VChUWF2C_.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665235005081"
                alt=""
              />
              <div>
                <h1>AltsClub</h1>
                <p className="text-gray-400">The affordable alt shop.</p>
              </div>
            </a>
            <a
              href="https://ibot.gg"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-3 p-3 transition duration-300"
            >
              <img
                className="h-[40px] my-1 object-fit"
                src="https://ik.imagekit.io/r9l1fsmew/image_1__Nh2I5evTa.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665235094327"
                alt=""
              />
              <div>
                <h1>iBot</h1>
                <p className="text-gray-400">Cheap SMM that provides social media services.</p>
              </div>
            </a>
            <a
              href="https://cookinguse.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-3 p-3 transition duration-300"
            >
              <img
                className="h-[40px] my-1 object-fit"
                src="https://ik.imagekit.io/r9l1fsmew/cooking_use_icon_1-8_ZBbU6V0ub.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665235005289"
                alt=""
              />
              <div>
                <h1>CookingUse</h1>
                <p className="text-gray-400">Find the best gadgets for your kitchen! Shop now..</p>
              </div>
            </a>
        </div>
      </div>
    </div>
  );
};

export default SmallProjects;
