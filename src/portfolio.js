/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Pavan Reddy",
  logo_name: "pavan.reddy()",
  nickname: "Pavan Reddy",
  full_name: "Pavan Reddy Gottimukkula",
  subTitle: "Software Engineer with Passion for creating 🔥 Impactful Applications",
  resumeLink:
    "https://docs.google.com/document/d/1P-uHWEJEOVgUkeQD3qHN2daYAseIU5vta-j-DCP3Tr4/edit?usp=sharing",
  mail: "mailto:pavanreddy1998@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/pavanreddy21",
  linkedin: "https://www.linkedin.com/in/pavanreddy-g/",
  gmail: "pavanreddy1998@gmail.com",
  twitter: "https://twitter.com/pavanreddy1998",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive Front end / User Interfaces for web and mobile applications",
        "⚡ Building responsive website front end using ReactJS",
        "⚡ Creating Backend API's with Java, Ruby, Python, Node, Express",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "GraphQL",
          fontAwesomeClassname: "simple-icons:graphql",
          style: {
            color: "#DE33A6",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "jQuery",
          fontAwesomeClassname: "simple-icons:jquery",
          style: {
            color: "#0865A6",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Experience hosting and managing websites",
        "⚡ Experience with Continuous Integration",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#5b77ef",
          },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#5b77ef",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Oklahoma State University",
      subtitle: "Masters in Computer Science",
      logo_path: "osu.png",
      alt_name: "OSU",
      duration: "Jan 2022 - May 2023",
      descriptions: [
        "⚡ I'm currently pursuing my Master's in Computer Science - Artificial Intelligence.",
        // "⚡ I have studied core subjects like Data Structures, DBMS, Networking, Security, etc.",
        // "⚡ I have also completed various online courses for Backend , Web , Mobile App Development, etc.",
        // "⚡ I have implemented several projects based on what I've leart under my Computer Engineering course. ",
      ],
      website_link: "https://go.okstate.edu/",
    },
    {
      title: "Jawaharlal Nehru Technological University Hyderabad",
      subtitle: "Bachelor in Computer Science",
      logo_path: "jntu.jpeg",
      alt_name: "JNTU",
      duration: "2015 - 2019",
      descriptions: [
        "⚡ I have studied core subjects like Data Structures, DBMS, Networking, Security, etc.",
        "⚡ I have also completed various online courses for Backend , Web , Mobile App Development, etc.",
        "⚡ I have implemented several projects based on what I've leart under my Computer Engineering course. ",
      ],
      website_link: "https://sreenidhi.edu.in/",
    },
  ],
};

const certifications = {
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Where I created Impact",
  description:
    "Below is my work Experience where I showcased my effort and Skills for creating Impact",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Research Assistant",
          company: "Oklahoma State University",
          company_url: "https://go.okstate.edu/",
          logo_path: "osu.png",
          duration: "Aug 2022 - Present",
          location: "Stillwater, USA",
          description: `➔ Successfully developed a custom KNN ensemble model that improved the accuracy of healthcare predictions by around 15%. \n
          ➔ Implemented techniques such as parallelization to reduce the training time of the model by almost 96%, resulting in a significant decrease in time taken for training. Now it is 1/27th of the total time taken previously while preserving the accuracy of predictions.\n 
          ➔ Developed interpretable machine learning models that aid medical decision-making and currently trying to improve their interpretability.
          `,
          color: "#0071C5",
        },
        {
          title: "Software Engineer - 2",
          company: "InterviewBit - Scaler Academy",
          company_url: "https://www.scaler.com/",
          logo_path: "scaler.png",
          duration: "July 2021 - Jan 2022",
          location: "Banglore, India",
          description: `➔ Led the development of the landing page and onboarding flow for the Scaler Forever product, which helped software engineers to grow in their careers as a community and the product caters to 2000+ mentors who help guide 10000+ users. \n 
          ➔ Implemented metrics tracking to measure the overall impact of the product and users signing up through the hosted campaign, resulting in a 60% increase in user sign-ups. \n 
          ➔ Developed and implemented the Crown Jobs feature to reward mentors for their karma achieved, resulting in an 80% increase in mentor NPS scores and mentor reward coins usage. \n
          ➔ Helped build a platform that entertains 3000+ mentor-student session calls every week, which helped to improve mentor-student engagement. ➔ Implemented real-time analytics to monitor and troubleshoot performance issues, resulting in a 50% reduction in downtime.
          ➔ Collaborated with cross-functional teams such as design, marketing, and customer success to ensure product alignment with company goals and user needs.`,
          // "I worked on the Dashboard project which helps users track their activities while using Walo Application. I also worked on Ocean Inventory Application and it's Admin panel Backend as well as on Ocean Inventory Admin Front-end using React and also worked on Walo Admin Backend.",
          color: "#0071C5",
        },
        {
          title: "Software Engineer - 2",
          company: "ZeMoSo Technologies",
          company_url: "https://www.zemosolabs.com/",
          logo_path: "zemoso.png",
          duration: "Jan 2019 - July 2021",
          location: "Hyderabad, India",
          description: `➔ Successfully developed and launched a web application that integrated real-time user navigation on the map, resulting in a 15% increase in user engagement. \n 
          ➔ Contributed to building MVP products from Scratch which raised around 1B$ in Funding. \n 
          ➔ Implemented continuous integration flow for microservices using Kubernetes and Docker, resulting in a 30% reduction in deployment time. \n
          ➔ Developed multiple UI dashboards that handled real-time data streams, resulting in a 40% increase in app usage by users.`,
          // "Created Front end of Yearn Financial Mutual Funds website. also degined simple web application for better user experience, designed DB Schemas as well.",
          color: "#ee3c26",
        },
      ],
    }
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
};


export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  contactPageData
};
