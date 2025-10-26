/* Change this file to get your personal Portfolio */
// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // keep or swap your own

// Splash Screen
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Summary And Greeting Section
const illustration = { animated: true };

const greeting = {
  username: "Bareaa Joudi",
  title: "Hi, I'm Bareaa",
  subTitle: emoji(
    "Finance & Computer Science student blending consulting research, AI engineering, and full-stack development — from agentic RAG chatbots to social-impact platforms. 🚀"
  ),
  resumeLink: "", // Paste Google Drive / Dropbox resume link here
  displayGreeting: true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/brj01",
  linkedin: "https://www.linkedin.com/in/bareaa-joudi",
  gmail: "bareaajoudi@gmail.com",
  display: true
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle:
    "Consulting-minded developer who ships AI assistants, web apps, and data-driven tools",
  skills: [
    emoji("⚡ Build full-stack web apps with React, Node.js/Express, and AWS"),
    emoji("⚡ Design & evaluate agentic RAG chatbots for real institutions"),
    emoji("⚡ Data analysis & modeling (Python/MATLAB), CV with OpenCV/MediaPipe"),
    emoji("⚡ Editorial leadership: plan, edit, and ship digital publications")
  ],
  softwareSkills: [
    { skillName: "html-5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "css3", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "sass", fontAwesomeClassname: "fab fa-sass" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "reactjs", fontAwesomeClassname: "fab fa-react" },
    { skillName: "nodejs", fontAwesomeClassname: "fab fa-node" },
    { skillName: "npm", fontAwesomeClassname: "fab fa-npm" },
    { skillName: "python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "java", fontAwesomeClassname: "fab fa-java" },
    { skillName: "docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "aws", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "sql-database", fontAwesomeClassname: "fas fa-database" },
    { skillName: "opencv", fontAwesomeClassname: "fas fa-camera" },
    { skillName: "huggingface", fontAwesomeClassname: "fas fa-robot" }
  ],
  display: true
};

// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "American University of Beirut (AUB)",
   
      subHeader:
        "BBA & BSc — Business Administration (Finance) and Computer Science",
      duration: "Aug 2023 – Jun 2027",
      desc:
        "Dean’s Honor List (Fall 2024–2025, Spring 2024–2025). Minors in Philosophy & Mathematics.",
      descBullets: [
        "Leadership & societies: OSB Review, CSSS, ESS, PSS, Dead Poets Society",
        "Exchange: American University in Cairo (Fall 2025–2026)"
      ]
    }
  ]
};

// Tech Stack
const techStack = {
  // Disable the skill/proficiency bars in the UI
  viewSkillBars: false,
  experience: [
    { Stack: "Frontend/Design", progressPercentage: "85%" },
    { Stack: "Backend & Cloud", progressPercentage: "80%" },
    { Stack: "ML / AI & Data", progressPercentage: "70%" }
  ],
  displayCodersrank: false
};

// Work Experience
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Consulting & AI Intern",
      company: "Siren Associates",

      date: "Jun 2025 – Sep 2025",
      desc:
        "Worked across MoIM AI RAG Chatbot and Parliamentary Election Consultation teams; delivered feasibility, budget studies, and a production-ready agentic workflow for official use.",
      descBullets: [
        "Evaluated & fine-tuned offline LLMs (Qwen 30B, GPT-oss20B)",
        "Advised on megacenters & Out-of-Country Voting (OCV) studies"
      ]
    },
    {
      role: "Legal Intern",
      company: "Eptalex: Aziz Torbey Law Firm",

      date: "Jan 2025 – Feb 2025",
      desc:
        "Due diligence for M&A and corporate transactions; contract analysis; regulatory research supporting governance and client decisions."
    },
    {
      role: "Environmental Modelling Research",
      company: "Columbia University (remote via Kaffi)",

      date: "Dec 2024 – Present",
      desc:
        "Python/MATLAB drought modelling with finite differences, Bayesian data assimilation; collaboration with field team."
    },
    {
      role: "Administrative Intern",
      company: "Rusted Radishes",

      date: "Sep 2024 – Sep 2025",
      desc:
        "Managed POS & revenue tracking, invoicing, and reporting workflows; improved administrative accuracy."
    }
  ]
};

// Open Source
const openSource = { showGithubProfile: "true", display: true };

// Big Projects

const bigProjects = {
  title: "Projects",
  subtitle: "A few things I’ve built or led",
  projects: [
    {
     
      projectName: "Tyebe Tyebak",
      projectDesc:
        "Co-founded a clothing donation platform connecting donors and NGOs across Lebanon. React, Node.js/Express, AWS, DynamoDB.",
      footerLink: [{ name: "Visit Website", url: "https://tyebetyebak.org/" }]
    },
    {

      projectName: "Afterthoughts Philosophy Journal",
      projectDesc:
        "Responsive journal platform with submissions, events, sentiment analysis, AI summarization, plagiarism detection. Node.js, MongoDB.",
      footerLink: [
        {
          name: "Preview",
          url: "https://husseinatoui.github.io/cmps271-frontend/index.html"
        }
      ]
    },
    {


      projectName: "Gesture-Based Interaction System",
      projectDesc:
        "Real-time hand-gesture UI (drawing, virtual piano, lightsaber game) using MediaPipe, OpenCV, ArUco, 3D pose estimation.",
      footerLink: [{ name: "GitHub", url: "https://github.com/brj01" }]
    }
  ],
  display: true
};

// Blogs Section (your AUB Outlook articles)
const blogSection = {
  title: "Articles",
  subtitle: "Writing on technology, society, and the human condition.",
  displayMediumBlogs: "false",
  blogs: [
    {
      url: "https://sites.aub.edu.lb/outlook/2024/01/08/under-the-digital-panopticon-exploring-activism-in-an-era-of-surveillance/",
      title:
        "Under the Digital Panopticon: Exploring Activism in an Era of Surveillance",
      description:
        "On activism’s shifting strategies amid pervasive data collection and monitoring."
    },
    {
      url: "https://sites.aub.edu.lb/outlook/2024/07/08/secrecy-upon-our-grave/",
      title: "Secrecy Upon Our Grave",
      description:
        "A reflection on memory, loss, and the architectures of silence."
    }
  ],
  display: true
};

// Optional hidden sections
const achievementSection = { title: "", subtitle: "", achievementsCards: [], display: false };
const talkSection = { title: "", subtitle: "", talks: [], display: false };
const podcastSection = { title: "", subtitle: "", podcast: [], display: false };

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

// Contact Info
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Want to collaborate on a project, research, or publication? My inbox is open.",
  number: "+961 81 917 649 | +20 12 1274 2500",
  email_address: "bareaajoudi@gmail.com"
};

// Footer/Twitter
const twitterDetails = { userName: "twitter", display: false };
const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
