// ---------------------------------------------------------------------------
// PORTFOLIO DATA
// Edit everything here. No component below this file needs to change
// for a content update — that's the point of keeping data separate from UI.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Craje",
  role: "Full-Stack Developer",
  location: "Bulacan, Philippines",
  tagline: "CJ NAPOLES",
  subhead:
    "CS graduate (Cum Laude) and freelance developer with 3+ years building real, shipped systems — desktop, web, and networked applications. AI is a tool I direct, not a substitute for understanding what I ship.",
  email: "napoles1cj@gmail.com", // TODO: replace with your real email
  resumeUrl: "./src/CJ_Napoles_Resume.pdf.pdf", // TODO: drop your resume PDF into /public and update this path
  socials: [
    { label: "GitHub", url: "https://github.com/CrajeX" }, // TODO
    { label: "LinkedIn", url: "https://www.linkedin.com/in/cj-napoles-a2361a411" }, // TODO
  ],
};

export const manifesto = {
  eyebrow: "Philosophy",
  headline: "To Create,\n From Nothing",
  paragraphs: [
    "To create what you imagine and to make it happen. That's been my motto for 3 years ",
    "3 years of freelance work made me realize what I really wanted to happen in my life - to discover, the need to provide and to satisfy my own creativity and curiosity. Through out my studies,work, and hobbies I always challenge what I think is impossible; I never stopped doing the best and to look for more on what is beyond my current knowledge and it pushes me to strive further and to push the walls my mind has set its limits onto.  ",
  ],
 
};

export const stack = {
  eyebrow: "Bill of Materials",
  headline: "What I build with",
  groups: [
    {
      label: "Languages",
      items: ["Python", "JavaScript", "PHP","VB.NET", "SQL", "C++", "Java"],
    },
    {
      label: "Frameworks & Libraries",
      items: ["React", "Laravel"],
    },
    {
      label: "Data & ML",
      items: ["LightGBM", "XGBoost", "CatBoost", "scikit-learn", "Pandas"],
    },
    {
      label: "Systems & Infra",
      items: ["MySQL", "Windows Services", "PyInstaller", "Networking / Sockets"],
    },
  ],
};

export const projects = {
  eyebrow: "Case Files",
  headline: "Selected work",
  items: [
    {
      code: "FILE-01",
      name: "ACCLABS",
      status: "Shipped",
      summary:
        "A full classroom and computer-lab management system: a 25,000+ line admin server paired with a lightweight client, built for real-time lab monitoring, remote control, screen sharing, file transfer, and web-access restriction.",
      details: [
        "Custom file transfer microservice with a chunked, resumable batch-acknowledgment protocol (BACT) for high-speed lab-wide transfers.",
        "Three-layer web restriction system spanning browser policy, DNS, and host-level blocking.",
        "Packaged as native Windows executables and a session-safe background service for unattended deployment across a full lab.",
      ],
      tags: ["Python", "PyQt5", "MySQL", "Windows Service"],
    },
    {
      code: "FILE-02",
      name: "8ConEdge Market Scanner",
      status: "Shipped",
      summary:
        "A market-scanning tool built during internship work with 8Con Academy. Utilizing every public API available to check the current trends in Forex Market - showing real time charts, news, and statistics. Logs from previous years,months, and days are available through this app. ", // TODO: add more specifics — features, stack, outcome
      details: ["Real time foreign exchange chart are being shown inside the app using public API making users see the current trends without leaving the site.",
                "Utility tools are also available such as news, calculators, practice windows, and account creation are being utilized inside the system making it a real all-in-one system that let's user enjoy the benefits from outside sources inside on one system"
        ],
      tags: ["JavaScript", "SQL", "HTML", "CSS", "API"],
    },
    {
      code: "FILE-03",
      name: "ComputerVision",
      status: "Shipped",
      summary: "A Python assisted software using image recognition to check for helmets and driver license.", // TODO: describe what this project actually is and does
      details: [
        "This software let's security checks on school much more better by checking the visitors that will be entering the establishment by letting them see their driver licenses but also LOG ON the system.",
        "The system also recognizes if the visitor have their motorcycle helmets for safety and wellfare checks.",
        "System uses trained model for checking the helmets and Image reading for the driver license, validating the legitimancy of the licenses."
      ],
      tags: ["Python", "Numpy", "Arduino", "SQL", "Excel"], // TODO
    },
     {
      code: "FILE-04",
      name: "IntelliSense",
      status: "Shipped",
      summary: "An Arduino combined with Javascript tool for assisting the blind",
      details: [
       "This tool let's its user to feel vibrations through their canes. The vibrations are caused by obstacles being detected by the Arduino - those vibrations are also being transmitted on a ReactJS Created mobile app",
       "The ReactJS Mobile app provides the warning through bluetooth signal connected to the arduino, it also vibrates but not only that it also tracks the user's location using GPS and sending those data to the Arduino for processing",
       "The Arduino sends a Google Maps Link to where the user is currently staying, walking, or going.",
       "This task was enabled without any use of database nor server and only relied purely on bluetooth connection."
      ],
      tags: ["Arduino", "ReactJS"], // TODO
    },
     {
      code: "FILE-05",
      name: "School Registrar",
      status: "Shipped",
      summary: "An System with JAVA as the Frontend And C++ as the Backend",
      details: [
      "This system utilizes a server created VB Net so that the frontend can send data continously",
      "This system was commissioned for a School Thesis and the hardest part is integrating Java with C++ as it's my first time to be doing this.",
      "The product was successfully been shipped with only minor revisions made"
      ],
      tags: ["Java", "C++", "VBNet"], // TODO
    },
     {
      code: "FILE-06",
      name: "8Con-Academy Website",
      status: "Shipped",
      summary: "Company website and landing pages built during my internship — React front end with an Express + Nodemailer back end for contact and file handling.",
      details: [
      "Created using React with Express and Nodemailer for API calling and Email sending",
      ],
      tags: ["React","Express","Nodemailer"], // TODO
    },
  ],
};

export const experience = {
  eyebrow: "Service Record",
  headline: "Where I've worked",
  items: [
    {
      role: "Lead Developer",
      org: "8Con Academy (Intership)", 
      period: "June 2025 - July 2026",
      summary: "Led a small team to create websites, webapps, and software for the company", // TODO: expand with real scope
    },
    {
      role: "Workshop Speaker / Instructor",
      org: "8Con Academy (Intership)",
      period: "",
      summary: "Taught Foreign Exchange basics and tactics to aid listener on trading.",
    },
    {
      role: "Customer Support / Sales Representative",
      org: "VXI", // TODO
      period: "January 2026 - March 2026",
      summary: "Handled solving customer's problems, debugging technical issues, and providing satsifactory solutions to the clients. Also, selling the company's product on potential clients providing service alongside with benefits for the service",
    },
    {
      role: "Freelance Developer",
      org: "Independent",
      period: "3+ years",
      summary:
        "Desktop, web, and networked applications across Python, PHP, JavaScript, Go, and VB.NET. I didn't have a stable language to work on but I always did my best to learn and to deliver quality products to my clients",
    },
  ],
};

export const contact = {
  eyebrow: "Get In Touch",
  headline: "Let's build\nsomething real.",
  subhead: "Open to any development roles.",
};

export const footer = {
  note: `DRAWN BY: ${profile.name.toUpperCase()} — REV. ${new Date().getFullYear()} — NOT TO SCALE`,
};
