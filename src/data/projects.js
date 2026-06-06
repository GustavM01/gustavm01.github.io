import snakeImg from "../assets/projects/games/snake.webp";
import ticTacToeImg from "../assets/projects/games/tictactoe.webp";
import connectFourImg from "../assets/projects/games/connect-four.webp";

import webshopImg from "../assets/projects/webshop/webshop.webp";
import webshopProductImg from "../assets/projects/webshop/webshop-product.webp";
import adminOrderImg from "../assets/projects/webshop/admin-order.webp";
import adminProductImg from "../assets/projects/webshop/admin-product.webp";

export const projects = [
  {
    id: 1,
    title: "Games Collection",
    image: [snakeImg, ticTacToeImg, connectFourImg],
    description:
      "A games website with 3 games, classic snake, TicTacToe where you can challange a friend or a bot and Connect Four where you can challange a friend",
    technologies: ["React"],
    github: "...",
    live: "https://gustavm01.github.io/Games/",
    featured: true,
  },

  {
    id: 2,
    title: "E-Commerce Store",
    image: [webshopImg, webshopProductImg, adminOrderImg, adminProductImg],
    description:
      "An e-commerce store with stripe checkout and an admin panel where you can see and manage orders and products",
    technologies: ["React", "JavaScript", "HTML", "CSS"],
    github: "...",
    live: "https://gustavm01.github.io/Games/#/snake",
    featured: true,
  },
  {
    id: 3,
    title: "Connect Four",
    image: [connectFourImg],
    description: "This is a website with Connect Four",
    technologies: ["React", "JavaScript"],
    github: "...",
    live: "https://gustavm01.github.io/Games/#/connectfour",
    featured: true,
  },
  //   {
  //     id: 4,
  //     title: "Australien Blog",
  //     image: ,
  //     description: "...",
  //     technologies: ["React", "Firebase", "Google Auth"],
  //     github: "...",
  //     live: "...",
  //     featured: true,
  //   },
];
