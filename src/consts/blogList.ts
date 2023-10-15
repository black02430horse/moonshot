import { Png1, Png2, Png3, Png4, Png5, Png6, Png7 } from "../assets/image";
import { BlogModel } from "../models";
import { blueBtn, carBtn, greenBtn, navyBtn, orangeBtn, pinkBtn, purpleBtn } from "./button.color";

export const BlogList: BlogModel[] = [
  {
    img: Png1,
    creator: "Olivia Rhye - 20 Jan 2024",
    title: "UX review presentations",
    content:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    buttons: [
      { content: "Design", color: purpleBtn },
      { content: "Research", color: blueBtn },
      { content: "Presentation", color: pinkBtn },
    ],
  },
  
  {
    img: Png2,
    creator: "Phoenix Baker • 19 Jan 2024",
    title: "Migrating to Linear 101",
    content:
      "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
    buttons: [
      { content: "Product", color: navyBtn },
      { content: "Tools", color: pinkBtn },
      { content: "SaaS", color: pinkBtn },
    ],
  },

  {
    img: Png3,
    creator: "Lana Steiner • 18 Jan 2024",
    title: "Building your API stack",
    content:
      "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
    buttons: [
      { content: "Software Development", color: greenBtn },
      { content: "Tools", color: pinkBtn },
    ],
  },

  {
    img: Png4,
    creator: "Alec Whitten • 17 Jan 2024",
    title: "Bill Walsh leadership lessons",
    content:
      "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    buttons: [
      { content: "Leadership", color: purpleBtn },
      { content: "Management", color: carBtn },
    ],
  },

  {
    img: Png5,
    creator: "Demi WIlkinson • 16 Jan 2024",
    title: "PM mental models",
    content:
      "Mental models are simple expressions of complex processes or relationships.",
    buttons: [
      { content: "Product", color: navyBtn },
      { content: "Research", color: purpleBtn },
      { content: "Frameworks", color: orangeBtn },
    ],
  },

  {
    img: Png6,
    creator: "Candice Wu • 15 Jan 2024",
    title: "What is wireframing?",
    content:
      "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    buttons: [
      { content: "Design", color: purpleBtn },
      { content: "Research", color: blueBtn },
    ],
  },

  {
    img: Png7,
    creator: "Natali Craig • 14 Jan 2024",
    title: "How collaboration makes us better designers",
    content:
      "Collaboration can make our teams stronger, and our individual designs better.",
    buttons: [
      { content: "Design", color: purpleBtn },
      { content: "Research", color: blueBtn },
    ],
  },

]