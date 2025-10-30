/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// emoji support removed ??? plain strings used without emoji characters
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: false, // set false to disable splash screen
  animation: splashAnimation,
  duration: 1000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Hussein Atoui",
  title: "Hi all, I'm Hussein!",
  subTitle:
    "A passionate Full Stack Software Developer having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks.",
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/saadpasta",
  linkedin: "https://www.linkedin.com/in/saadpasta/",
  gmail: "saadpasta70@gmail.com",
  gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@saadpasta",
  stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  pinterest: "https://www.pinterest.com/yourusername",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    "Agentic AI solutions, data pipelines, and cloud-native services built with Angular, Spring Boot, React, Node.js, Express, and AWS.",
    "Technical Skills: Power BI, MongoDB, SQL, Python, Java, C/C++, MATLAB, R, LaTeX, OpenCV, MediaPipe, Hugging Face, AutoCAD, QGIS, Agisoft Metashape, HTML, CSS.",
    "Soft Skills: Leadership, Research and Analysis, Communication and Editorial excellence, Problem-Solving, Innovation mindset.",
    "Languages: Arabic (Native); English (Fluent); German (A2); French (Beginner)."],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "American University of Beirut",
      logo: require("./assets/images/harvardLogo1.png"),
      subHeader: "Business Administration and Computer Science Double Major ",
      duration: "September 2023 - June 2027",
      
      descBullets: [
        "Finance Concentration  ",
        "Minor in Philosophy and Mathematics",
        "Dean's Honor List in Fall 2024-2025(3.7) and Spring 2024-2025(4.0)",
        "Exchange Program at the American University of Cairo in Fall 2025-2026 "
      ]
    }
  ]
};

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Consulting Intern",
      company: "Siren Associates | Beirut,Lebanon",
      companylogo: require("./assets/images/download (26).jpeg"),
      date: "June 2025 - September 2025",
      desc: "Worked across the Ministry of Interior AI RAG Chatbot Team and the Parliamentary Election Consultation Team.",
      descBullets: [
        "Conducted feasibility and budget studies for voting megacenters and Out-of-Country Voting (OCV).",
        "Supported the Ministry of Interior in strategic planning and digital transformation for the 2026 parliamentary elections.",
        "Researched and documented electoral law procedures, recommending policy and process improvements.",
        "Evaluated and fine-tuned offline LLMs (Qwen 30B, GPT-oss20B) to ensure accuracy and minimal hallucination in official government queries.",
        "Developed agentic video understanding pipelines that answer detailed questions about recorded incidents and procedures."
      ]
    },
    {
      role: "Legal Intern",
      company: "Eptalex: Aziz Torbey Law Firm | Beirut,Lebanon",
      companylogo: require("./assets/images/download (1).png"),
      date: "January 2025 - February 2025",
      desc: "Supported transactional and corporate engagements through due diligence, contract analysis, and regulatory research.",
      descBullets: [
        "Conducted due diligence for M&A and corporate transactions, reviewing financial statements, shareholder agreements, and corporate records to evaluate deal structures and compliance.",
        "Analyzed distribution, licensing, and commercial contracts to confirm obligations, mitigate risk, and support dispute resolution.",
        "Researched corporate and cross-border regulatory frameworks, delivering legal and financial insights to strengthen governance and inform client decisions."
      ]
    },
    {
      skillName: "Power BI",
      fontAwesomeClassname: "fas fa-chart-line"
    },
    {
      role: "Environmental Modelling Research Intern",
      company: "Columbia Climate School | Remote",
       companylogo: require("./assets/images/download (2).png"),

      date: "December 2024- Present",
      descBullets: [
        "Used Python, MATLAB, and finite difference methods to solve numerical equations for drought modelling. ",
        "Applied data assimilation and Bayesian statistics to integrate observational data into vegetation models. ",
        "Conducted research with Dr. Mazen Nakad through Kaffi, collaborating with a field team gathering drought-related data. "
      ]
    },
    {
      role: "Administrative Intern",
      company: "Rusted Radishes | Beirut, Lebanon",
      companylogo: require("./assets/images/download (3).png"),
      date: "September 2024 - September 2025",
      desc: "Streamlined administrative and finance operations for a literary and arts magazine.",
      descBullets: [
        "Managed financial and sales records, including POS operations, revenue tracking, and invoice preparation.",
        "Developed a database and automated administrative workflows, improving reporting efficiency and record accuracy."
      ]
    },
    {
      role: "Private Legal Translation Assistance",
      company: "Freelance | Beirut & GCC Clients",
      companylogo: "",
      date: "2021 - 2023",
      descBullets: [
        "Translated legal documents between English and Arabic, covering Articles of Association, Memoranda of Agreement and Understanding, NDAs, advisory contracts, distribution and commercial agreements, joint venture and retail agreements, and support or legal service contracts.",
        "Delivered accurate, context-aware translations for international and regional clients across Saudi Arabia, Bahrain, and Kuwait, ensuring alignment with local legal terminology and compliance requirements."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/Screenshot 2025-09-09 170239.png"),
      projectName: "TyebeTyebak",
      projectRole: "Full-Stack Developer",
      projectDesc:
        "Clothing donation platform connecting donors and NGOs across Lebanon.",
      projectDescBullets: [
        "Co-founded and built a clothing donation platform connecting donors with NGOs across Lebanon, with features like city-based search, NGO onboarding, and matching algorithms.",
        "Developed a production-ready web app using React, Node.js, Express, AWS, and DynamoDB to streamline humanitarian support and improve donation logistics."
      ],
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.tyebetyebak.org/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/Kingdom Of A Goddess.jpeg"),
      projectName: "Afterthoughts",
      projectRole: "Full-Stack Developer",
      projectDesc:
        "Philosophy journal platform with rich editorial tooling and intelligent assistance.",
      projectDescBullets: [
        "Built user profiles, article submissions, and event pages with sentiment analysis, AI summarization, and plagiarism detection to support the editorial workflow.",
        "Developed an embedding-based recommendation engine using Hugging Face models with cosine similarity, delivering end-to-end features across HTML, CSS, JavaScript, Node.js, Express, and MongoDB."
      ],
      footerLink: [
        {
          name: "Visit Website",
          url: "https://husseinatoui.github.io/cmps271-frontend/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const extracurricularSection = {
  title: "Extracurricular Activities",
  subtitle:
    "Leadership across student media, societies, and community service throughout AUB.",
    activities: [
    {
      title: "Editor-in-Chief",
      organization: "OSB Review | AUB",
      period: "May 2025 - Present"
    },
    {
      title: "Residence Editor",
      organization: "Watchdogs Gazette | AUB",
      period: "January 2025 - Present"
    },
    {
      title: "Secretary",
      organization: "Philosophy Student Society | AUB",
      period: "2024 - Present"
    },
    {
      title: "Title IX Committee Member",
      organization: "AUB",
      period: "2023 - Present"
    },
    {
      title: "Associate Event Manager",
      organization: "Computer Science Student Society | AUB",
      period: "2024 - 2025"
    },
    {
      title: "Treasurer",
      organization: "English Student Society | AUB",
      period: "2024 - 2025"
    },
    {
      title: "Treasurer",
      organization: "Dead Poets Society | AUB",
      period: "2024 - 2025"
    },
    {
      title: "Volunteer",
      organization: "Haven (Children's Cancer Center) | AUB",
      period: "2023 - 2025"
    },
    {
      title: "Staff Writer",
      organization: "Outlook Newspaper | AUB",
      period: "2023 - 2025"
    }
  ],
  display: true // Set false to hide this section
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: "Achievements And Certifications",
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://sites.aub.edu.lb/outlook/2024/01/08/under-the-digital-panopticon-exploring-activism-in-an-era-of-surveillance/",
      title: "Under the Digital Panopticon",
      description:
        "Exploring how activists navigate modern surveillance, safeguard movements, and reclaim digital agency."
    },
    {
      url: "https://sites.aub.edu.lb/outlook/2024/07/08/secrecy-upon-our-grave/",
      title: "Secrecy Upon Our Grave",
      description:
        "A reflection on collective memory, grief, and resilience through the stories we choose to protect or reveal."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks and Podcast sections removed

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: "Contact Me",
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "saadpasta70@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,

  workExperiences,
  openSource,
  bigProjects,
  extracurricularSection,
  achievementSection,
  blogSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};




















