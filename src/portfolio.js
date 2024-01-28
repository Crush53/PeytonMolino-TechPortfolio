/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Peyton Molino",
  title: "Hi all, I'm Peyton",
  subTitle: emoji(
    "A dedicated Data Scientist and Software Engineer 🚀 with comprehensive expertise in developing data-driven solutions and full-stack web applications. Skilled in Python and its prominent libraries for Machine Learning and Data Analysis, such as Pandas, NumPy, and Matplotlib. Experienced in web development with robust frameworks like Django, complemented by a strong proficiency in HTML and JavaScript. Proficient in database management and optimization using PostgreSQL, ensuring efficient data storage and retrieval in complex web and data-centric applications."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1uA7GarOv4_lkcIsbeYZxiDu6c0FeS_A-/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Crush53",
  linkedin: "https://www.linkedin.com/in/peyton-molino-b7b549194/",
  gmail: "paxton715@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Here are some of my skills",
  subTitle:
    "VERSATILE DATA SCIENTIST AND SOFTWARE DEVELOPER WHO EXCELS IN MULTIPLE TECH STACKS",
  skills: [
    emoji(
      "⚡ Develop interactive and dynamic web applications using Django, HTML, and advanced JavaScript"
    ),
    emoji("⚡ Build and maintain robust databases with PostgreSQL and SQL"),
    emoji("⚡ Create data-driven solutions leveraging Python and R"),
    emoji(
      "⚡ Implement advanced data analytics and visualization with Plotly, Matplotlib, Django, and Tableau"
    ),
    emoji(
      "⚡ Develop predictive models and utilize machine learning techniques"
    ),
    emoji("⚡ Efficient project management and strong problem-solving skills"),
    emoji(
      "⚡ Excellent communication, collaboration, and technical writing abilities"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "r-project",
      fontAwesomeClassname: "fab fa-r-project"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "c-plus-plus",
      fontAwesomeClassname: "fab fa-cuttlefish" // Using 'C' as a substitute for C++
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "django",
      fontAwesomeClassname: "fas fa-project-diagram" // No direct icon for Django
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-square"
    },
    {
      skillName: "plotly",
      fontAwesomeClassname: "fas fa-chart-line" // Using a generic chart icon for Plotly
    },
    {
      skillName: "matplotlib",
      fontAwesomeClassname: "fas fa-chart-pie" // Using a pie chart icon as a substitute for Matplotlib
    },
    {
      skillName: "tableau",
      fontAwesomeClassname: "fas fa-table" // Using a table icon as a close match for Tableau
    },
    {
      skillName: "latex",
      fontAwesomeClassname: "fas fa-file-alt" // Using a file icon for LaTeX
    },
    {
      skillName: "markdown",
      fontAwesomeClassname: "fab fa-markdown" // Direct icon for Markdown
    },
    {
      skillName: "excel",
      fontAwesomeClassname: "far fa-file-excel" // Direct icon for Excel
    },
    {
      skillName: "agile-methodologies",
      fontAwesomeClassname: "fas fa-users" // Using a group icon as a substitute for Agile Methodologies
    },
    {
      skillName: "scikit-learn",
      fontAwesomeClassname: "fas fa-robot" // Using a robot icon as a substitute for Machine Learning
    },
    {
      skillName: "data-structures-algorithms",
      fontAwesomeClassname: "fas fa-code" // Using a code icon for Data Structures & Algorithms
    },
    {
      skillName: "excel",
      fontAwesomeClassname: "far fa-file-excel" // Direct icon for Excel
    },
    {
      skillName: "statistical-analysis",
      fontAwesomeClassname: "fas fa-chart-bar" // Using a bar chart icon for Statistical Analysis
    },
    {
      skillName: "machine-learning",
      fontAwesomeClassname: "fas fa-brain" // Using a brain icon as a substitute for Machine Learning
    },
    {
      skillName: "Mathematical-modeling",
      fontAwesomeClassname: "fas fa-users" // Using a group icon for Population Modeling
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Point Loma Nazarene University",
      logo: require("./assets/images/PLNUlogo.png"),
      subHeader: "Bachelors of Science in Mathematics",
      duration: "2019 - December 2023",
      desc: "Recieved my degree in Mathematics at the end of 2023.",
      descBullets: [
        "Engaged in Data Science Projects and Mathematical Modeling",
        "Advanced coursework in Applied Statistics, Mathematical Probability and Statistics",
        "Studied Abstract Algebra, Real Analysis, and Differential Equations",
        "Focused on Discrete Mathematics, Linear Algebra, and Data Analysis",
        "Completed coursework in Complex Analysis and Calculus I/II/III",
        "Developed proficiency in Data Structures And Algorithms using C++"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Data Science & Analytics", // Areas like Python, R, Statistical Analysis
      progressPercentage: "85%" // Estimate your proficiency
    },
    {
      Stack: "Full Stack Development", // Include Django, HTML, SQL, etc.
      progressPercentage: "75%" // Estimate your proficiency
    },
    {
      Stack: "Machine Learning", // Skills in predictive modeling, scikit-learn
      progressPercentage: "70%" // Estimate your proficiency
    },
    {
      Stack: "Database Management", // Skills in PostgreSQL and other database technologies
      progressPercentage: "70%" // Estimate your proficiency
    },
    {
      Stack: "Mathematical Modeling", // Reflecting your academic background
      progressPercentage: "70%" // Estimate your proficiency
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Accounting Clerk",
      company: "Atlas Radius Maps, CA",
      companylogo: require("./assets/images/atlasradiusmaps.png"), // Replace with Atlas Radius Maps logo
      date: "July 2020 - August 2022",
      desc: "Focused on streamlining invoicing and financial processes, enhancing efficiency and accuracy, and managing company expenses.",
      descBullets: [
        "Improved invoicing process, enhancing accuracy and efficiency by 20% in QuickBooks",
        "Reduced overdue accounts by 15%, mitigating financial risks",
        "Cut unnecessary expenditures by 10%, maintaining budget control",
        "Increased day-to-day operational productivity by 25% using Excel"
      ]
    },
    {
      role: "Teaching Assistant",
      company: "Point Loma Nazarene University",
      companylogo: require("./assets/images/PLNUlogo.png"), // Replace with university logo
      date: "August 2023 - December 2023",
      desc: "Assisted in grading and student support in mathematics, enhancing educational processes and student understanding.",
      descBullets: [
        "Aided professor in grading papers and managing class materials",
        "Provided assistance to students needing help in mathematics"
      ]
    }
    // Add any other relevant experiences
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
  title: "Big Projects",
  subtitle:
    "Projects I have worked on to improve my skills and gain experience",
  projects: [

    {
      image: require("./assets/images/Tri-State.png"), // Replace with your project image
      projectName: "Tri-State Reservoir Data Dashboard",
      projectDesc:
        "Enhanced multi-state reservoir analytics using Django, integrating Plotly for advanced data visualization, and optimizing data retrieval processes.",
      footerLink: [
        "https://github.com/PLNU-DataScience/week9-data-science-dashboard-2-Crush53"
      ]
    },
    {
      image: require("./assets/images/Energy_dashboard.png"), // Replace with your project image
      projectName: "Energy Consumption and Generation Analytics Dashboard",
      projectDesc:
        "Created a Python and Django application for real-time energy data analysis, featuring automated data extraction and advanced visualizations.",
      footerLink: [
        "https://github.com/PLNU-DataScience/week10-energy-analysis-Crush53"
      ]
    },
    {
      image: require("./assets/images/ML-Forecast.png"), // Replace with your project image
      projectName: "Reservoir ML Forecasting",
      projectDesc:
        "Developed a comprehensive Django-based web application for reservoir forecasting, implementing various machine learning models with high accuracy and an efficient Python data pipeline.",
      footerLink: [
        "https://github.com/Crush53/Reservoir-ML-Forecasting"
      ]
    },
    {
      image: require("./assets/images/forecast_paper.jpeg"), // Replace with your project image
      projectName: "Forecasting of Reservoir Storage Capacities",
      projectDesc: "Conducted a comprehensive study using Machine Learning algorithms for predicting reservoir storage capacities. Utilized various models to analyze data from California reservoirs, highlighting the efficacy of Multi-layer Perceptron Regressor and Random Forest Regression in forecasting.",
      footerLink: [
        "https://drive.google.com/file/d/1LpPyPeMAwQy4Ly13itZo_vgTl43rMFek/view?usp=sharing"
      ]
    },
    {
      image: require("./assets/images/A Mathematical Model of Demographics of California Women.pptx.png"), // Replace with your project image
      projectName: "Mathematical Modeling of Population Growth",
      projectDesc:
        "Engineered a sophisticated population model using Excel, integrating demographic variables for realistic projections and presenting findings to faculty for critical review.",
      footerLink: [
        "https://drive.google.com/file/d/1lyDbLahpIPIZgaAWxLWZJdZCBOMK9B4D/view?usp=sharing"
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
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
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 (714) 598-8542",
  email_address: "paxton715@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  isHireable
};
