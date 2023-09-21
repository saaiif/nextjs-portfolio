import React, { Fragment } from "react";
import SectionHeading from "./SectionHeading";
import { projectsData } from "@/lib/data";

import Project from "./Project";
import Link from "next/link";

function Projects() {
  return (
    <section>
      <SectionHeading>Projects</SectionHeading>
      <div>
        {projectsData?.map((project, index) => (
          <Project {...project} />
        ))}
        {/* <button>Explore More</button> */}
      </div>
    </section>
  );
}

export default Projects;
