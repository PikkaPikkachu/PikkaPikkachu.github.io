import { nanoid } from "nanoid";

// HEAD DATA
export const headData = {
  title: "Prakriti | Developer",
  lang: "en",
  description: "Welcome to my website!", // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "",
  name: "Prakriti",
  subtitle: "Yet another developer in existence.",
  cta: "",
};

// ABOUT DATA
export const aboutData = {
  img: "profilepic.jpeg",
  paragraphOne:
    "Hey there! I am Prakriti — software engineer by profession, artist by heart. Still figuring out how that works out together :)",
  paragraphTwo:
    "I was previously with Meta for 2+ years as a SWE. I have also been an active open source contributor at the CNCF org. Apart from being a SWE, I love to conduct mock coding interviews in my free time (conducted 50+ coding interviews at Meta).",
  paragraphThree:
    "I have a penchat for developing applications that solve real world problems and create an impact. I am a tech enthusiast at heart and love to learn/discuss everything tech and of course, any modern world problems that can be solved through tech.",
  resume:
    "https://drive.google.com/file/d/1Fu-pwFbT9LdJF_t_59U_uZJUL6uFS64M/view?usp=sharing", // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: "Project1.jpg",
    title: "DeepSketcher",
    info: "A human sketch recognition Android app. The sketch recognition model was trained on Google’s Quick, Draw! Dataset, that achieved an accuracy of 94% on 100 classes.",
    info2: "",
    repo: "https://github.com/PikkaPikkachu/quick-draw-app", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: "Project2.jpg",
    title: "KrishiMitra",
    info: "An Android app for farmers to recognize pests and diseases in crops through image recognition. For image recognition, a Convolution Neural Network model was trained on TensorFlow backend.",
    info2: "",
  },
];

// CONTACT DATA
export const contactData = {
  cta: "",
  btn: "",
  email: "prakriti.bansal98@gmail.com",
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: "quora",
      url: "https://www.quora.com/profile/Prakriti-Bansal-4",
    },
    {
      id: nanoid(),
      name: "medium",
      url: "https://medium.com/@prakriti.bansal98",
    },
    {
      id: nanoid(),
      name: "linkedin",
      url: "https://www.linkedin.com/in/prakriti-b-235843136/",
    },
    {
      id: nanoid(),
      name: "github",
      url: "https://github.com/PikkaPikkachu",
    },
  ],
};
