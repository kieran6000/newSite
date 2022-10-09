import { FC } from "react";
import { allDataType } from "../shared/types";

interface SkillsProps {
  skills: allDataType["skills"];
}

const Skills: FC<SkillsProps> = ({ skills }) => {
  return (
    <div className="lg:min-h-[70vh] px-[5vw] py-[80px] flex flex-col items-center justify-center z-[4]">
      <h1 className="text-center text-3xl lg:text-4xl">
        My skills & Knowledge
      </h1>
      <p className="description text-lg text-center my-[30px]">
        Technologies and languages that I use to make my products everyday
      </p>
      <div className="grid justify-center grid-cols-3 md:grid-cols-4 gap-x-4">
        <div className="skills">
          <div
            className="skills_img"
            style={{
              backgroundImage:
                "url(" +
                "https://ik.imagekit.io/r9l1fsmew/html_59GRVzKdt.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1665218404941" +
                ")",
            }}
          ></div>
          <div className="text-center text-sm">HTML5</div>
        </div>
        <div className="skills">
          <div
            className="skills_img"
            style={{
              backgroundImage:
                "url(" +
                "https://ik.imagekit.io/r9l1fsmew/css_xQGc392Fy.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1665218402375" +
                ")",
            }}
          ></div>
          <div className="text-center text-sm">CSS3</div>
        </div>
        <div className="skills">
          <div
            className="skills_img"
            style={{
              backgroundImage:
                "url(" +
                "https://ik.imagekit.io/r9l1fsmew/javascript_B_jq_KamO.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1665218402378" +
                ")",
            }}
          ></div>
          <div className="text-center text-sm">JavaScript</div>
        </div>
        <div className="skills">
          <div
            className="skills_img"
            style={{
              backgroundImage:
                "url(" +
                "https://ik.imagekit.io/r9l1fsmew/react_5lB4ylq_0.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1665218402385" +
                ")",
            }}
          ></div>
          <div className="text-center text-sm">React</div>
        </div>
        <div className="skills">
          <div
            className="skills_img"
            style={{
              backgroundImage:
                "url(" +
                "https://ik.imagekit.io/r9l1fsmew/nodejs_rzXlSt3aY.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1665218402370" +
                ")",
            }}
          ></div>
          <div className="text-center text-sm">NodeJS</div>
        </div>
        <div className="skills">
          <div
            className="skills_img"
            style={{
              backgroundImage:
                "url(" +
                "https://ik.imagekit.io/r9l1fsmew/php_8CGXCiORr.png?ik-sdk-version=javascript-1.4.3&updatedAt=1664704146566" +
                ")",
            }}
          ></div>
          <div className="text-center text-sm">PHP</div>
        </div>
        <div className="skills">
          <div
            className="skills_img"
            style={{
              backgroundImage:
                "url(" +
                "https://ik.imagekit.io/r9l1fsmew/mysql_sH-TGiBJP.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1665218431152" +
                ")",
            }}
          ></div>
          <div className="text-center text-sm">MySQL</div>
        </div>
        <div className="skills">
          <div
            className="skills_img"
            style={{
              backgroundImage:
                "url(" +
                "https://ik.imagekit.io/r9l1fsmew/scss_wxT7vwAXFj.png?ik-sdk-version=javascript-1.4.3&updatedAt=1664704152826" +
                ")",
            }}
          ></div>
          <div className="text-center text-sm">SCSS</div>
        </div>
        <div className="skills">
          <div
            className="skills_img"
            style={{
              backgroundImage:
                "url(" +
                "https://ik.imagekit.io/r9l1fsmew/bootstrap_TTW-9WdZ3.png?ik-sdk-version=javascript-1.4.3&updatedAt=1664704150988" +
                ")",
            }}
          ></div>
          <div className="text-center text-sm">Bootstrap</div>
        </div>
        <div className="skills">
          <div
            className="skills_img"
            style={{
              backgroundImage:
                "url(" +
                "https://ik.imagekit.io/r9l1fsmew/tailwindcss_N8mhNU1fz.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1665218402384" +
                ")",
            }}
          ></div>
          <div className="text-center text-sm">Tailwind</div>
        </div>
        <div className="skills">
          <div
            className="skills_img"
            style={{
              backgroundImage:
                "url(" +
                "https://ik.imagekit.io/r9l1fsmew/wordpress_3znmpOgZkP.png?ik-sdk-version=javascript-1.4.3&updatedAt=1664704144100" +
                ")",
            }}
          ></div>
          <div className="text-center text-sm">Wordpress</div>
        </div>
      </div>
      <div className="grid justify-center grid-cols-3 md:grid-cols-4 gap-x-4 mt-[50px]">
        <div className="skills">
          <div
            className="skills_img"
            style={{
              backgroundImage:
                "url(" +
                "https://ik.imagekit.io/r9l1fsmew/photoshop_Yv2VM6QZO.png?ik-sdk-version=javascript-1.4.3&updatedAt=1664704147488" +
                ")",
            }}
          ></div>
          <div className="text-center text-sm">Photoshop</div>
        </div>
        <div className="skills">
          <div
            className="skills_img"
            style={{
              backgroundImage:
                "url(" +
                "https://ik.imagekit.io/r9l1fsmew/illustrator_2TXccqaUV.png?ik-sdk-version=javascript-1.4.3&updatedAt=1664704144166" +
                ")",
            }}
          ></div>
          <div className="text-center text-sm">Illustrator</div>
        </div>
        <div className="skills">
          <div
            className="skills_img"
            style={{
              backgroundImage:
                "url(" +
                "https://ik.imagekit.io/r9l1fsmew/xd_HidL1JSqV.png?ik-sdk-version=javascript-1.4.3&updatedAt=1664704151782" +
                ")",
            }}
          ></div>
          <div className="text-center text-sm">Adobe Xd</div>
        </div>
        <div className="skills">
          <div
            className="skills_img"
            style={{
              backgroundImage:
                "url(" +
                "https://ik.imagekit.io/r9l1fsmew/premiere_NE8whqOkI.png?ik-sdk-version=javascript-1.4.3&updatedAt=1664704154189" +
                ")",
            }}
          ></div>
          <div className="text-center text-sm">Premiere</div>
        </div>
        <div className="skills">
          <div
            className="skills_img"
            style={{
              backgroundImage:
                "url(" +
                "https://ik.imagekit.io/r9l1fsmew/figma_xLigumKlH.png?ik-sdk-version=javascript-1.4.3&updatedAt=1664704151876" +
                ")",
            }}
          ></div>
          <div className="text-center text-sm">Figma</div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
