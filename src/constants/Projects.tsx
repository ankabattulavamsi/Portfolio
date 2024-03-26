import netflixImg from "../assets/PorjectImages/netflixgptimg.png";
import portfolioimg from "../assets/PorjectImages/portfolioapp.png";
import myntraimg from "../assets/PorjectImages/myntra.png";
import todoImg from "../assets/PorjectImages/todoimg.png";
import visitImg from "../assets/PorjectImages/visitPlaceImg.png";
import podcostImg from "../assets/PorjectImages/podcostsImg.png";

export const projectsList = [
  {
    id: 1,
    title: "Portfolio",
    path: "https://vamsi-portfolio-app.netlify.app/",
    img: portfolioimg,
    about:
      "my personal portfolio app here i added resume, eduction and experience.",
  },
  {
    id: 2,
    title: "Netflix GPT",
    path: "https://netfilixgpt-vamsi.netlify.app/",
    img: netflixImg,
    about:
      "Here user can sign up and login with user crediationals after login user can browse movies using gpt search and speech recognization",
  },
  {
    id: 3,
    title: "Myntra Landing",
    path: "https://vamsimyntra.ccbp.tech/",
    img: myntraimg,
    about:
      "myntra landing page for web here i used css animations with beautiful styling and images with static",
  },
  {
    id: 4,
    title: "Todo App",
    path: "https://vamsitodoslist.ccbp.tech/",
    img: todoImg,
    about:
      "Here user can add task if completed that task user can mark and delete task.",
  },
  {
    id: 5,
    title: "Natural Places",
    path: "https://visitingplaces.ccbp.tech/",
    img: visitImg,
    about:
      "a beatiful dynamic carousel with multiple natural places here user can another album when click on carousel navigator",
  },
  {
    id: 6,
    title: "podcast`s",
    path: "https://podcosts.ccbp.tech/",
    img: podcostImg,
    about:
      "Here user can see all persons podcosts and navigate their individual posdcosts there all list podcosts shown with beatiful styling",
  },
];
