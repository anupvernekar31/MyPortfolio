import React from "react";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { textVariant, fadeIn } from "../utils/motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { education } from "../constants";

const EducationCard = ({ education }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={education.date}
      iconStyle={{ background: education.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          {education.icon ? (
            <img
              src={education.icon}
              alt={education.company_name}
              className="w-[100%] h-[100%] rounded-full object-fill"
            />
          ) : null}
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{education.name}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {education.major}
        </p>
        <p className="text-secondary text-[16px] font-semibold">{`Grade: ${education.grade}`}</p>
      </div>

      <ul className="mt-5 space-y-2">
        {education.points.map((point, index) => (
          <li
            key={`education-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center`}>Education</h2>
      </motion.div>
      <div className="w-full flex justify-center">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] text-center leading-[30px]"
        >
          My education has been a journey of self-discovery and growth. My
          educational details are as follows.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {education.map((education, index) => (
            <EducationCard
              key={`education-${index}`}
              education={education}
            />
          ))}
        </VerticalTimeline>
      </div>

      <div className="flex justify-center my-10">
        <button
          target="display"
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/10CPABfCTluV5r_HU1PitLY4GVZSi2nfS/view?usp=drive_link",
              "_blank"
            )
          }
          className="bg-purple-500 p-3 text-xl rounded-2xl w-40"
        >
          Resume
        </button>
      </div>
    </>
  );
};

export default SectionWrapper(Education, "");
