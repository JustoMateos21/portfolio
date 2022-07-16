import React, { useState } from 'react'
import marketingWebApp from '../assets/Portfolio/marketingWebApp.png'
import YelpCamp from '../assets/Portfolio/YelpCamp.png'
import FormDesign from '../assets/Portfolio/FormDesign.png'
import Decidite from '../assets/Portfolio/Decidite.png'
import Popup from './Popup'

const Portfolio = () => {

  const [showPopUp, setShowPopUp] = useState(false)
  const [title, setTitle] = useState("")
  const [description, setDescription]= useState("")
  const [showStatus, setShowStatus] = useState(false)

const portfolios = [
  {
    title: "Marketing Web App",
    id: 1,
    src: marketingWebApp,
    description:` A marketing page created with express, css, ejs, and javascript.
     It contains an integrated app that simulates calculating the profit of a product with a given budget.
      Weekly, monthly and yearly ROI is obtained. 
     It stores the products with their respective prices and so on in a JSON file.`
     ,status: "Code Published",
     hrefCode: "https://github.com/JustoMateos21/MargetingwebApp"
  },
  {
    title: "YelpCamp",
    id: 2,
    src: YelpCamp,
    description: "A full stack application, created with ejs, express, bootstrap, CSS, and different npm packages. Contains the ability to create users, and login, protected against XXS attacks. It also allows to create camps and show them around the world, using the Mapbox API. In the camps, you can put reputation by stars and comments."
    ,status: "Code Published",
    hrefCode:"https://github.com/JustoMateos21/YelpCamp.-"
  },
   {
    title: "Form Design",
    id:3,
    src: FormDesign,
    description: "A form that was used to test a minimum viable product. Particularly it is one of my favorite form designs I have done. It is a simple project but with a nice design, in which Html, Css and Javascript are used."
    ,status: "Deployed",
    hrefCode: "https://github.com/JustoMateos21/Decidite",
    demoHref: "https://decidite-form.netlify.app/"
   },
   {
    title: "Decidite App",
    id:4,
    src: Decidite,
    description: "A complete web application made with firebase and react native. In order to allow users to choose their university career. It uses user authentication, a quiz of questions and a final result.",
    status: "Not deployed, still developing",
   }
 
];

const popUpHandler= (title, description) =>{
  setShowPopUp(true)
  setTitle(title)
  setDescription(description)
}

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black 
    to-gray-800 w-full text-white md:h-screen"
    >
      <div
        className="max-w-screen-lg p-4 mx-auto flex flex-col
        justify-center w-full h-full"
      >
        <div className="pb-8">
          <p
            className="text-4xl font-bold inline
                border-b-4 border-gray-500"
          >
            Portfolio
          </p>
          <p className="py-6">Check some of my latest projects.</p>
        </div>

        <div
          className="grid sm:grid-cols-2 md:grid-cols-3
        gap-8 px-12 sm:px-0"
        >
          {portfolios.map(({ id, src, title, description, status,hrefCode, demoHref }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <p className="pb-5">{title}</p>
              <img
                src={src}
                alt=""
                onMouseOver={() => setShowStatus(true)}
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a
                href={demoHref}
                target='_blank'
                  className="w-1/2 px-6 py-3 m-4
            hover:scale-105 duration-200"
                >
                  Demo
                </a>
                <button
                  className="w-1/2 px-6 py-3 m-4
            hover:scale-105 duration-200 text-4xl"
                  onClick={() => popUpHandler(title, description)}
                >
                  +
                </button>
                <a
                  className="w-1/2 px-6 py-3 m-4
            hover:scale-105 duration-200"
            href={hrefCode}
            target='_blank'

                >
                  Code
                </a>
              </div>
              {showStatus && <p className='text-blue-100 p-2'>Status: {status}</p>}
            </div>
          ))}
          {showPopUp && (
            <Popup
            className="align-center"
              title={title}
              description={description}
              open={showPopUp}
              onClose={() => setShowPopUp(false)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Portfolio