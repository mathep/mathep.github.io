/* Personal config. Edit this file — it drives every section of the site.
   Sections set to display:false are hidden entirely. Fill one in, flip it to
   true. Never ship a section with placeholder text in it. */

import emoji from "react-easy-emoji";

const greeting = {
  username: "mathep",
  title: "Hi, I'm mathep",
  subTitle:
    "Gameplay programmer working in Luau, C# and GDScript. I write gameplay systems and the tools that go with them, mostly on Roblox.",
  resumeLink: "", // paste a public link to your resume PDF to show the button
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/mathep",
  linkedin: "", // add yours, or leave empty to hide the icon
  gmail: "helloMathep@proton.me",
  x: "https://x.com/mathep11",
  display: true
};

/* Scroll-revealed intro + headline figures for each section.
   Replace the text and the numbers with your own. Delete any stat you don't
   want. Empty a whole block ({text: "", stats: []}) and that section's blurb
   disappears completely rather than rendering an empty box. */
const sectionBlurbs = {
  work: {
    text: "",
    stats: []
  },
  about: {
    text: "",
    stats: []
  },
  contact: {
    text: "",
    stats: []
  }
};

/* Square cards, one per area you work in. Add, remove or reword freely -
   each card is just a title, a line of description, and a list of tools. */
const disciplines = {
  display: true,
  cards: [
    {
      title: "Software Development",
      description:
        "Building things end to end - from a Discord bot that chews through images to a browser extension with thousands of lines of typed front-end code.",
      skills: ["Python", "TypeScript", "JavaScript", "Git"]
    },
    {
      title: "Web & Browser Extensions",
      description:
        "Front-end work against real browser APIs, shipped to actual users rather than left in a repo.",
      skills: ["TypeScript", "SCSS", "HTML", "Web Extension APIs"]
    },
    {
      title: "Bots & Automation",
      description:
        "Small tools that do one thing well - image processing pipelines, chat integrations, and scripted data wrangling.",
      skills: ["Python", "Discord API", "Image processing"]
    }
  ]
};

const skillsSection = {
  title: "What I do",
  subTitle:
    "GAMEPLAY PROGRAMMER WHO CARES ABOUT HOW THINGS FEEL, NOT JUST WHETHER THEY RUN",
  skills: [],

  /* Icons come from Iconify — browse names at https://icon-sets.iconify.design
     Swap any "iconifyIcon" value for another set, e.g. "logos:godot-icon". */
  softwareSkills: [
    {skillName: "Python", iconifyIcon: "devicon:python"},
    {skillName: "TypeScript", iconifyIcon: "devicon:typescript"},
    {skillName: "JavaScript", iconifyIcon: "devicon:javascript"},
    {skillName: "Lua", iconifyIcon: "devicon:lua"},
    {skillName: "GDScript", iconifyIcon: "devicon:godot"},
    {skillName: "HTML5", iconifyIcon: "devicon:html5"},
    {skillName: "Sass", iconifyIcon: "devicon:sass"},
    {skillName: "Roblox Studio", iconifyIcon: "simple-icons:robloxstudio"},
    {skillName: "Git", iconifyIcon: "devicon:git"}
  ],
  display: true
};

// TODO: add your school, then flip display to true
const educationInfo = {
  display: false,
  schools: []
};

// TODO: add real roles (studio, freelance, or serious personal projects),
// then flip display to true. An absent section beats an invented one.
const workExperiences = {
  display: false,
  experience: []
};

// Needs a GitHub token to fetch pinned repos — see README. Off by default.
const openSource = {
  showGithubProfile: "false",
  display: false
};

/* ⭐ THE SECTION THAT MATTERS ⭐
   This is your case-study shelf — the reason anyone stays on the page.
   Add 2–3 real projects with a screenshot each, then flip display to true.

   {
     image: require("./assets/images/yourScreenshot.png"),
     projectName: "Deep Cover",
     projectDesc: "Server-authoritative melee for a 24-player round-based shooter. Cut perceived hit delay to ~40ms while moving all validation server-side.",
     footerLink: [
       {name: "Play", url: "https://roblox.com/games/..."},
       {name: "Source", url: "https://github.com/mathep/..."}
     ]
   }
*/
const bigProjects = {
  title: "Projects",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/rospheal.png"),
      projectName: "RoSpheal",
      projectDesc:
        "Fork of RoSeal with convenient features that I like, such as swipe-based unfriending and an outfit randomizer.",
      footerLink: [{name: "Source", url: "https://github.com/mathep/RoSpheal"}]
    },
    {
      projectName: "TCG-Cardle",
      projectDesc:
        "Small game I made for a couple of friends that like Pokémon cards.",
      footerLink: [
        {name: "Play", url: "https://mathep.github.io/TCG-Cardle/"},
        {name: "Source", url: "https://github.com/mathep/TCG-Cardle"}
      ]
    },
    {
      projectName: "Spinda Discord Bot",
      projectDesc:
        "A Discord bot that converts any image into a mosaic built from Spinda sprites.",
      footerLink: [
        {name: "Source", url: "https://github.com/mathep/Spinda-Discord-Bot"}
      ]
    }
  ],
  display: true
};

/* Roblox titles you've contributed to. Thumbnails are the games' own
   16:9 store art, saved locally so they render without a network request.
   "role" is optional - leave it empty and the line is skipped. Visit counts
   are static text; update them whenever you refresh the images. */
const robloxGames = {
  title: "Roblox Games",
  subtitle: "Live titles I've worked on",
  games: [
    {
      image: require("./assets/images/mapleHospital.png"),
      name: "Maple Hospital",
      studio: "Marizma Games",
      role: "",
      description:
        "Medical roleplay where players staff and visit a working hospital as doctors, nurses and patients. One of the most-played roleplay titles on Roblox.",
      stat: "1.8B+ visits",
      url: "https://www.roblox.com/games/8704997000/Maple-Hospital"
    },
    {
      image: require("./assets/images/momoCity.png"),
      name: "Momo City",
      studio: "ももスタジオ",
      role: "",
      description:
        "Pastel-styled social city in alpha - roleplay, mini-games and character customisation in a kawaii town shared with other players.",
      stat: "1.6M+ visits",
      url: "https://www.roblox.com/games/131856811555630/Momo-City"
    },
    {
      image: require("./assets/images/objectsGlobal.png"),
      name: "Objects Global - BFDI RP",
      studio: "Fish Frontier",
      role: "",
      description:
        "Object-show roleplay inspired by Battle for Dream Island. Play as object characters across a shared world with a large character roster.",
      stat: "15M+ visits",
      url: "https://www.roblox.com/games/5361481791/Objects-Global-BFDI-RP"
    }
  ],
  display: true
};

const achievementSection = {
  title: emoji("Achievements 🏆"),
  subtitle: "Game jams, shipped titles, and things worth bragging about",
  achievementsCards: [],
  display: false
};

const blogSection = {
  title: "Blogs",
  subtitle: "",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

const talkSection = {title: "Talks", subtitle: "", talks: [], display: false};

const podcastSection = {
  title: "Podcast",
  subtitle: "",
  podcast: [],
  display: false
};

const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: false // flip to true once greeting.resumeLink is set
};

const contactInfo = {
  title: "Get in touch",
  subtitle: "",
  number: "",
  email_address: "helloMathep@proton.me"
};

const twitterDetails = {
  userName: "",
  display: false
};

const isHireable = true;

export {
  disciplines,
  sectionBlurbs,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  workExperiences,
  openSource,
  bigProjects,
  robloxGames,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
