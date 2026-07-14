"use client";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { experiences } from "@/lib/constants/experience";

export default function Projects() {
  return (
    <section className="max-container">
      <h1 className="head-text text-black">
        Hello, I&apos;m{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Myroslav
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Backend-leaning full-stack engineer with 6+ years of experience
          designing scalable Node.js and TypeScript architectures, and a track
          record acting as a hands-on technical partner for founding teams -
          owning architecture decisions, leading development, and shipping
          production platforms end-to-end. Deep expertise in Prisma/PostgreSQL
          data layers, Next.js/React frontends, and cloud deployment (Vercel,
          AWS). Hands-on experience building LLM-powered features with the
          Claude and OpenAI APIs, including Retrieval-Augmented Generation (RAG)
          pipelines, embeddings-based vector search, and AI-agent workflow
          automation.
        </p>
      </div>

      <div className="py-12 flex flex-col">
        <h3 className="subhead-text text-black">Work Experience</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            Comfortable operating as an embedded technical lead: setting
            engineering standards, coordinating with non-technical stakeholders,
            and integrating AI into both product features and the development
            workflow itself.
          </p>
        </div>
      </div>

      <div className="mt-12 flex">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <VerticalTimelineElement
              key={`experience-${index}`}
              date={experience.date}
              contentStyle={{
                background: "#fff",
                boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
              }}
              contentArrowStyle={{ borderRight: "7px solid #fff" }}
              iconStyle={{ background: experience.iconBg }}
              icon={
                <div className="flex justify-center items-center w-full h-full">
                  <img
                    src={experience.icon}
                    alt={experience.company_name}
                    className="w-[60%] h-[60%] object-contain"
                  />
                </div>
              }
            >
              <h3 className="text-black text-[24px] font-bold">
                {experience.title}
              </h3>
              <p className="text-black-500 font-semibold text-[16px] m-0">
                {experience.company_name}
              </p>

              <ul className="mt-5 list-disc ml-5 space-y-2">
                {experience.points.map((point, pointIndex) => (
                  <li
                    key={`experience-${index}-point-${pointIndex}`}
                    className="text-slate-500 font-normal pl-1 text-[14px]"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}
