import React from "react";
import InfoBox from "./InfoBox";

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I&apos;m <span className="font-semibold">Myroslav Toloshnyi</span> 👋
      <br />A Software Engineer from Ukraine
    </h1>
  ),
  2: (
    <InfoBox
      text="Worked with many companies and pick up a lot of skills along the way"
      link="/about"
      buttontext="Learn More"
    />
  ),
  3: (
    <InfoBox
      text="Led multiple projects to success over the years. Curious about the impact?"
      link="/experience"
      buttontext="Check my Experience"
    />
  ),
  4: (
    <InfoBox
      text="Need a project done or looking for a partner? I'm just a few keystrokes away"
      link="/contact"
      buttontext="Let's talk"
    />
  ),
};

const HomeInfo = ({ currentStage }: { currentStage: number | null }) => {
  const Content = currentStage
    ? renderContent[currentStage as keyof typeof renderContent]
    : null;
  return <div>{Content}</div>;
};

export default HomeInfo;
