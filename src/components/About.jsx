import React from 'react'

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
          I'm a Full-Stack developer located in Argetina. I have a serious
          passion for Front-End development and design.
        </p>
        <br />
        <p className="text-xl">
          I am a well organized and insistent person, if I have a problem, I
          don't stop until I solve it. I am a fanatic of Trail Running and I
          dedicate a big part of my life to it. I also like to learn and talk
          with other people about our passions.
        </p>
        <br />
        <p className="text-xl">
        I have a great entrepreneur spirit
        </p>
      </div>
    </div>
  );
}

export default About;