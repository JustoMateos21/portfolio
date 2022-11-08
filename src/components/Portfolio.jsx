import React, { useState } from "react";
import marketingWebApp from "../assets/Portfolio/marketingWebApp1.png";
import FormDesign1 from "../assets/Portfolio/FormDesign1.png";
import FormDesign2 from "../assets/Portfolio/FormDesign2.png";
import Decidite1 from "../assets/Portfolio/deciditeApp1.png";
import Decidite2 from "../assets/Portfolio/decidite2.png";
import { BsPlusCircleDotted } from "react-icons/bs";
import Modal from "../components/Modal";
import AmazeApp from "../assets/Portfolio/AmazeApp1.png";
import AmazeApp2 from "../assets/Portfolio/AmazeApp2.png";

const Portfolio = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [links, setLinks] = useState({
    demoLink: "",
    codeLink: "",
    image1: "",
    image2: "",
  });
  const portfolios = [
    {
      title: "Decidite App",
      id: 1,
      image1: Decidite1,
      image2: Decidite2,
      description:
        "An application built using mainly react native and firebase, which had and has as an objective that people who are finishing high school will find it easier to choose their college career. In the application (published in play store) users can take vocational tests and talk to a psychologist in a messaging system that I built, and is already implemented. In this project I managed to form a team of 20 psychologists and reached almost 400 downloads .For security reasons, the code is not published but the application can be seen in play store. ",
      demoHref: "https://play.google.com/store/apps/details?id=com.Decidite",
    },
    {
      title: '"Amaze" Ecommerce App',
      id: 2,
      image1: AmazeApp,
      image2: AmazeApp2,
      description:
        "Amaze is an eCommerce website created mainly using React Js. In it, you can filter products by price range, lowest to the highest price, etc, the user can make a purchase simulation which is then displayed in a list with the record of all purchases made. The backend of the application uses express, creating an API in which queries are made from the frontend side. The website is still being built and is very close to completion. ",
      hrefCode: "https://github.com/JustoMateos21/amaze",
      demoHref: "https://mern-amaze-app.herokuapp.com",
    },
    {
      title: "Marketing Web App",
      id: 3,
      image1: marketingWebApp,
      description: ` A marketing page created with express, css, ejs, and javascript.
     It contains an integrated app that simulates calculating the profit of a product with a given budget.
      Weekly, monthly and yearly ROI is obtained. 
     It stores the products with their respective prices and so on in a JSON file.`,
      hrefCode: "https://github.com/JustoMateos21/MargetingwebApp",
    },

    {
      title: "Form Design",
      id: 4,
      image1: FormDesign1,
      image2: FormDesign2,
      description:
        "A form that was used to test a minimum viable product. Particularly it is one of my favorite form designs I have done. It is a simple project but with a nice design, in which Html, Css and Javascript are used.",
      hrefCode: "https://github.com/JustoMateos21/Decidite",
      demoHref: "https://decidite-form.netlify.app/",
    },
  ];

  const popUpHandler = (
    title,
    description,
    demoHref,
    codeHref,
    image1,
    image2
  ) => {
    setShowPopUp(!showPopUp);
    setTitle(title);
    setDescription(description);
    setLinks({
      demoLink: demoHref,
      codeLink: codeHref,
      image1: image1,
      image2: image2,
    });
  };

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black top-28 to-gray-800 w-full text-white md:h-screen"
    >
      {showPopUp && (
        <Modal
          imgLinks={{ image1: links.image1, image2: links.image2 }}
          demoLink={links.demoLink}
          codeLink={links.codeLink}
          description={description}
          title={title}
          open={showPopUp}
          onClose={() => setShowPopUp(false)}
        />
      )}
      <div
        className="max-w-screen-lg p-4 mx-auto  flex-col
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

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(
            ({
              id,
              image1,
              image2,
              title,
              description,
              hrefCode,
              demoHref,
            }) => (
              <div
                key={id}
                className=" shadow-md shadow-gray-600 rounded-xl p-5"
              >
                <p className="text-xl text-center">{title}</p>
                <img
                  src={image1}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105 p-5"
                />

                <div
                  onClick={() =>
                    popUpHandler(
                      title,
                      description,
                      demoHref,
                      hrefCode,
                      image1,
                      image2
                    )
                  }
                  className="flex items-center justify-center"
                >
                  <p className="mr-2 cursor-pointer hover:scale-105">
                    Learn More
                  </p>
                  <br />
                  <BsPlusCircleDotted
                    className="cursor-pointer hover:scale-105"
                    size={20}
                  />
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
