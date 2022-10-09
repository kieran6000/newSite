import { FC } from "react";

const Who: FC = () => {
  return (
    <div
      id="who"
      className="flex gap-[5vw] px-[5vw] lg:px-[15vw] z-[2] lg:min-h-[70vh] items-center justify-center flex-col md:flex-row"
    >
      <div>
        <h1
          data-scroll
          data-scroll-speed="0.5"
          className="title text-center text-[40px]"
        >
          Who am I?
        </h1>

        {/* Hide my age :v */}
        <p data-scroll className="text-lg text-gray-200 text-center" id="story">
          Web developer with extensive knowledge working in new web technologies, UI/UX design and graphics design. I
          can build your new products from the ground up, or upgrade existing
          ones to cope with new demands/trends with various technologies.
        </p>
      </div>
    </div>
  );
};

export default Who;
