import React from "react";
import { Fade } from "react-reveal"

import TopBio from "./Top-bio";
import GeneralInfo from "./General-info";
import Skills from "./Skills";
import WorkExperience from "./Work-experience";
import cvData from "../cv-data.json";

export default function CvContainer() {
  return (
    <Fade duration={3000}>
      <section className="main-container">
        <TopBio data={cvData.topbio} />
        <GeneralInfo data={cvData["general-info"]} />
        <Skills data={cvData.skills} />
        <WorkExperience data={cvData["work-experience"]} />
      </section>
    </Fade>
  );
}
