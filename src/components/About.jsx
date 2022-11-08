import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p
            className="text-4xl font-bold inline border-b-4
          border-gray-500"
          >
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          I'm a front-end web developer with over a year of experience. Over the
          last few years, I've worked mainly on personal and startup projects.
        </p>
        <br />
        <p className="text-xl">
          I'm familiar with the use of frameworks, but I create sites also using
          Javascript, html5 and css3.
        </p>
        <br />
        <p className="text-xl">
          Among the projects, the one that stands out the most is "Decidite", a
          startup I created with the goal of helping people who are finishing
          high school to choose a college career. In it I managed to form a team
          of 20 psychologists and reach more than 400 downloads on google play.
        </p>
        <br />
        <p className="text-xl">
          I am passionate about design and I am very detailed, I do not stop
          until I get the results I expect in each project.
        </p>
        <br />
        <p className="text-xl">
          To keep myself updated, I take courses in different programming
          languages and watch tutorials that help me write cleaner and optimized
          code.{" "}
        </p>
      </div>
    </div>
  );
};

export default About;
