import { EducationSection } from "../interfaces/education.interface";
import { ExternalSite } from "../interfaces/external-site.interface"
import { ProjectSection } from "../interfaces/project.interface";
import { SkillSection } from "../interfaces/skill-section.interface";
import { ExperienceSection } from "../interfaces/work-experience.interface";
import { AssetPaths } from "./asset-paths.enum";

// Social media links to show
const SocialMediaLinks: ExternalSite[] = [
    {
        name: "Github",
        link: "https://github.com/MohamedDiabyLR",
        simpleIconName: "github",
        backgroundColor: "#181717",
    },
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/dhruvilrathod/",
        simpleIconName: "linkedin", // this icon is not available in simple icon v14
        backgroundColor: "#0066c8", // manually checked
    },
    {
        name: "LeetCode",
        link: "https://leetcode.com/dhruvilrathod/",
        simpleIconName: "leetcode",
        backgroundColor: "#FFA116",
    },
    {
        name: "Gmail",
        link: "mailto:mdiaby.it@gmail.com",
        simpleIconName: "gmail",
        backgroundColor: "#EA4335",
    },
    {
        name: "Instagram",
        link: "https://www.instagram.com/momow.p/",
        simpleIconName: "instagram",
        backgroundColor: "#FF0069",
    }
]

// Fullstack skills
const FullstackSkills: ExternalSite[] = [
    {
        name: "Angular",
        link: "https://angular.dev/",
        simpleIconName: "angular",
        backgroundColor: "#ea2848",
    },
    {
        name: "HTML5",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        simpleIconName: "html5",
        backgroundColor: "#E34F26",
    },
    {
        name: "CSS3",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        simpleIconName: "css3",
        backgroundColor: "#1572B6",
    },
    {
        name: "Sass",
        link: "https://sass-lang.com/",
        simpleIconName: "sass",
        backgroundColor: "#CC6699",
    },
    {
        name: "NodeJS",
        link: "https://nodejs.org/",
        simpleIconName: "nodedotjs",
        backgroundColor: "#5FA04E",
    },
    {
        name: "JavaScript",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        simpleIconName: "javascript",
        backgroundColor: "#F7DF1E",
    },
    {
        name: "ExpressJS",
        link: "https://expressjs.com/",
        simpleIconName: "express",
        backgroundColor: "#000000",
    },
    {
        name: "ThreeJS",
        link: "https://threejs.org/",
        simpleIconName: "threedotjs",
        backgroundColor: "#000000",
    },
    {
        name: "Tailwind CSS",
        link: "https://tailwindcss.com/",
        simpleIconName: "tailwindcss",
        backgroundColor: "#06B6D4",
    },
    {
        name: "Bootstrap",
        link: "https://getbootstrap.com/",
        simpleIconName: "bootstrap",
        backgroundColor: "#7952B3",
    },
    {
        name: "PrimeNG",
        link: "https://primeng.org/",
        simpleIconName: "primeng",
        backgroundColor: "#DD0031",
    },
];

// Fullstack section
const FullstackSection: SkillSection = {
    sectionTitle: "Réseaux et Cybersécurité",
    imagePath: AssetPaths.FULL_STACK_DEVELOPMENT_SVG,
    skillLinks: FullstackSkills,
    skillsList: [
        "Mise en place et sécurisation d'infrastructures réseau",
        "Administration et configuration de serveurs sous Linux et Windows",
        "Déploiement et gestion de pare-feu (pfSense, Windows)",
        "Surveillance et analyse des performances réseau avec Zabbix et Grafana",
    ]
}

// Could skills
const CloudSkills: ExternalSite[] = [
    {
        name: "GCP",
        link: "https://cloud.google.com/",
        simpleIconName: "googlecloud",
        backgroundColor: "#4285F4",
    },
    {
        name: "AWS",
        link: "https://aws.amazon.com/",
        simpleIconName: "amazonwebservices",
        backgroundColor: "#232F3E",
    },
    {
        name: "Firebase",
        link: "https://firebase.google.com/",
        simpleIconName: "firebase",
        backgroundColor: "#FFCA28",
    },
    {
        name: "PostgreSQL",
        link: "https://www.postgresql.org/",
        simpleIconName: "postgresql",
        backgroundColor: "#336791",
    },
    {
        name: "MongoDB",
        link: "https://www.mongodb.com/",
        simpleIconName: "mongodb",
        backgroundColor: "#47A248",
    },
    {
        name: "Docker",
        link: "https://www.docker.com/",
        simpleIconName: "docker",
        backgroundColor: "#1488C6",
    },
    {
        name: "Render",
        link: "https://render.com/",
        simpleIconName: "render",
        backgroundColor: "#000000",
    },
    {
        name: "Heroku",
        link: "https://www.heroku.com/",
        simpleIconName: "heroku",
        backgroundColor: "#430098",
    },
];

// Could section
const CloudSection: SkillSection = {
    sectionTitle: "Cloud Infra-Architecture",
    imagePath: AssetPaths.CLOUD_INFRASTRUCTURE_SVG,
    skillLinks: CloudSkills,
    skillsList: [
        "Déploiement et gestion de machines virtuelles sous VmWare ou VirtualBox",
        "⚡ Mise en place de solutions de sauvegarde et de supervision",
        "Installation et configuration de systèmes d’exploitation (Windows Server, Linux)",
    ]
}

// Design skills
const DesignSkills: ExternalSite[] = [
    {
        name: "Adobe XD",
        link: "https://adobexdplatform.com/",
        simpleIconName: "adobexd",
        backgroundColor: "#FF2BC2",
    },
    {
        name: "Figma",
        link: "https://figma.com/",
        simpleIconName: "figma",
        backgroundColor: "#F24E1E",
    },
    {
        name: "Adobe Illustrator",
        link: "https://www.adobe.com/au/products/illustrator.html/",
        simpleIconName: "adobeillustrator",
        backgroundColor: "#FF7C00",
    },
    {
        name: "Adobe Photoshop",
        link: "https://www.adobe.com/products/photoshop.html/",
        simpleIconName: "adobephotoshop",
        backgroundColor: "#001e36",
    },
];

// Design section
const DesignSection: SkillSection = {
    sectionTitle: "Gestion et Sécurisation des Systèmes",
    imagePath: AssetPaths.UI_UX_DESIGN_SVG,
    skillLinks: DesignSkills,
    skillsList: [
        "Configuration et maintenance de postes de travail en réseau",
        "Gestion des comptes utilisateurs et des permissions (Active Directory)",
        "Application des bonnes pratiques en cybersécurité",
    ]
}

// Design skills
const DigitalSolutionSkills: ExternalSite[] = [

];

// Design section
const DigitalSolutionSection: SkillSection = {
    sectionTitle: "Digital Solutions & Consultancy",
    imagePath: AssetPaths.DIGITAL_SOLUTIONS_SVG,
    skillLinks: DigitalSolutionSkills,
    skillsList: [
        "Suivi et gestion de l'inventaire du parc informatique",
        "Configuration et maintenance des périphériques réseau (switchs, points d'accès WiFi)",
        "Assistance à l'intégration de nouveaux équipements dans l'infrastructure existante",
    ]
}

// Personal projects
const PersonalProjects: ProjectSection = {
    sectionTitle: "Mes Projets",
    sectionSubtitle: "🚀 Showcasing innovative solutions and real-world applications built with cutting-edge technologies.",
    entities: [
        {
            title: "Web-Based 3D IFC File Viewer",
            coverImagePath: AssetPaths.PROJECT_THREEJS_IFC_VIEWER,
            liveLink: "https://dhruvilrathod.github.io/webifcviewer/",
            githubLink: "https://github.com/dhruvilrathod/three_ifc_angular",
            description: "🧱 This tool enables seamless visualization of IFC files in your browser. Toggle elements, explore real-time details by hovering, search and highlight elements, and interact with ease for a dynamic 3D experience.",
            techStack: ["Angular", "ThreeJS", "ExpressJS", "Heroku"],
            year: 2022
        },
        {
            title: "Customizable Multi-Select Dropdown",
            coverImagePath: AssetPaths.PROJECT_CUSTOM_DROPDOWN,
            githubLink: "https://github.com/dhruvilrathod/custom-dropdown/tree/resource-tree-utility",
            description: "🌲 An Angular-based, asynchronous multi-select dropdown designed for tree-structured data with custom validation. It's a powerful replacement for jQuery's Select2.",
            techStack: ["Angular", "TypeScript", "SCSS"],
            year: 2023,
            branch: "resource-tree-utility"
        },
        {
            title: "Learning Management System",
            coverImagePath: AssetPaths.PROJECT_LMS_APP,
            githubLink: "https://github.com/dhruvilrathod/lms-asite",
            description: "📚 A production-grade frontend for a Learning Management System, designed with scalability in mind to deliver a seamless and efficient user experience.",
            techStack: ["Angular", "PrimeNG", "Tailwind", "Figma"],
            year: 2023
        },
        {
            title: "Angular + NestJS Boilerplate",
            coverImagePath: AssetPaths.PROJECT_ANGULAR_NEST_DOCKER,
            githubLink: "https://github.com/dhruvilrathod/sample-angular-nest",
            description: "🛠️ A production-grade boilerplate integrating Angular, NestJS, and Nginx for seamless fullstack development. Perfect for kickstarting robust and scalable web applications.",
            techStack: ["Angular", "NestJS", "NgINX", "Docker"],
            year: 2023
        },
        {
            title: "Hospital Management System Dashboard",
            coverImagePath: AssetPaths.PROJECT_HMS_APP,
            githubLink: "https://github.com/freelancer-dhruvil/hms-demo",
            description: "🏥 Transformed Figma designs into a fully functional, user-friendly dashboard for a Hospital Management System, ensuring precision and intuitive interface.",
            techStack: ["Angular", "PrimeNG", "PrimeFlex", "Figma"],
            year: 2024
        },
        {
            title: "Cross-Platform Music Player",
            coverImagePath: AssetPaths.PROJECT_MUSIC_PLAYER,
            githubLink: "https://github.com/dhruvilrathod/music_player",
            description: "🎵 Developed with Angular and NestJS, this music player evolved into a fullstack app and was wrapped with ElectronJS for a seamless desktop experience.",
            techStack: ["Angular", "NestJS", "ElectronJS", "ExpressJS"],
            year: 2023
        }
    ]
}

// Freelancing projects



// Job experience
const JobExperience: ExperienceSection = {
    experienceSectionTitle: "Parcours Scolaire",
    experiences: [
        {
            orgLink: "https://www.lerebours.fr/",
            orgLogoPath: AssetPaths.WORK_ACQUIRE_LOGO,
            orgName: "Lycée Le Rebours",
            positions: [
                {
                    positionName: "BTS SIO option : Solutions d'infrastructure, systèmes et réseaux",
                    duration: "Septembre 2023 - Present",
                    location: "75013 Paris",
                    workPoints: [
                        "Administration de systèmes (Windows, Linux)",
                        "Mise en place de solutions de cybersécurité",
                        "Configuration de réseaux et pare-feux",
                    ]
                }
            ]
        },
        {
            orgLink: "https://www.univ-spn.fr/",
            orgLogoPath: AssetPaths.WORK_ASITE_LOGO,
            orgName: "Université Sorbonne Paris Nord",
            positions: [
                {
                    positionName: "Licence Informatique",
                    duration: "Septembre 2021 - Juin 2023",
                    location: "93400 Villetaneuse ",
                    
                    
                    workPoints: [
                        "Langages de programmation : [C , Python , JavaScript]",
                        "Bases de données : SQL",
                        "Programmation web et mobile",
                    ]
                }
            ]
        },
        {
            orgLink: "https://pia.ac-paris.fr/serail/jcms/s1_95115/fr/accueil",
            orgLogoPath: AssetPaths.WORK_ASITE_LOGO,
            orgName: "Lycée Honoré de Balzac",
            positions: [
                {
                    positionName: "Baccalauréat Général",
                    duration: "Septembre 2018 - Juin 2021",
                    location: "75017 Paris ",
                    
                    
                    workPoints: [
                        "Programmation Python",
                        "Algorithmique",
                        "Probabilités et statistiques",
                    ]
                }
            ]
        }
    ]
}

// Freenacing Experience
const FreelancingExperience: ExperienceSection = {
    experienceSectionTitle: "Freelancing",
    experiences: [
        {
            orgLink: "https://southaustraliatiling.com.au/",
            orgLogoPath: AssetPaths.WORK_SA_TILING_LOGO,
            orgName: "South Australia Tiling",
            positions: [
                {
                    positionName: "Professional Freelancer",
                    duration: "2025",
                    location: "Adelaide, WA",
                    locationType: "Remote",
                    jobType: "Contract",
                    workPoints: [
                        "Designed and developed a visually appealing website to highlight the high-quality work of a South Australian tiling and bathroom renovation business, improving their online presence.📊",
                        "Utilized Server-Side Rendering (SSR) and Static Site Generation (SSG) to enhance search engine visibility and drive organic traffic to the website. 🚀",
                    ]
                }
            ]
        },
        {
            orgLink: "https://kiwifinance.com.au/",
            orgLogoPath: AssetPaths.WORK_KIWI_LOGO,
            orgName: "Kiwi Finance",
            positions: [
                {
                    positionName: "Professional Freelancer",
                    duration: "2025",
                    location: "Perth, WA",
                    locationType: "Remote",
                    jobType: "Contract",
                    workPoints: [
                        "Designed and developed an SEO-friendly website with financial calculators, and a custom contact form tailored to Astute Financial's requirements. 🌐📊",
                        "Streamlined data collection and client inquiries by integrating the contact form with Google Sheets and Gmail. 📋",
                    ]
                }
            ]
        },
        {
            orgLink: "https://rasfinance.com.au/",
            orgLogoPath: AssetPaths.WORK_RAS_LOGO,
            orgName: "RAS Finance",
            positions: [
                {
                    positionName: "Professional Freelancer",
                    duration: "2024",
                    location: "Adelaide, SA",
                    locationType: "Hybrid",
                    jobType: "Contract",
                    workPoints: [
                        "Built a dynamic website featuring financial calculators, a CMS for articles, and a sleek contact form. 📊📝",
                        "Streamlined client inquiries by integrating the contact form with Google Sheets and Gmail. 📧📋✨",
                    ]
                }
            ]
        },
        {
            orgLink: "https://acquireconveyancing.com.au/",
            orgLogoPath: AssetPaths.WORK_ACQUIRE_LOGO,
            orgName: "Acquire Conveyancing",
            positions: [
                {
                    positionName: "Professional Freelancer",
                    duration: "2023",
                    location: "Adelaide, SA",
                    locationType: "Remote",
                    jobType: "Contract",
                    workPoints: [
                        "Crafted a professional logo, business cards, and responsive website using Illustrator. 🎨💼",
                        "Set up a custom domain email and Office 365 with SharePoint for seamless operations. 📧🔗",
                        "Developed and hosted an SEO-friendly website with a contact form to boost online presence. 🌐📈",
                    ]
                }
            ]
        },
    ]
}

// Internships Experience
const InternshipExperience: ExperienceSection = {
    experienceSectionTitle: "Internships",
    experiences: [
        {
            orgLink: "https://asite.com/",
            orgLogoPath: AssetPaths.WORK_ASITE_LOGO,
            orgName: "Asite Solution",
            positions: [
                {
                    positionName: "UI Developer Intern",
                    duration: "Feb 2023 - May 2023",
                    location: "Ahmedabad, India",
                    locationType: "Hybrid",
                    jobType: "Full-time",
                    workPoints: [
                        "Led an 11-member team to design and implement the frontend architecture of an LMS using Angular, following the latest methodologies and best practices. 🚀💻",
                        "Gained expertise in Angular, jQuery, SCSS, and DSA through personalized training and hands-on assignments during the internship. 🌟📊✨",
                    ]
                },
                {
                    positionName: "Software Engineering Intern",
                    duration: "Jun 2022 — Jul 2022",
                    location: "Ahmedabad, India",
                    locationType: "On-Site",
                    jobType: "Full-time",
                    workPoints: [
                        "Developed an innovative 3D IFC file viewer using Three.js, applying DSA concepts to create a tree-like structure for exploring model internals. 🌐🌳📐",
                        "Deployed the Node.js backend on Heroku and hosted the frontend on GitHub Pages for seamless accessibility. 🚀💻✨",
                    ]
                }
            ]
        },
        {
            orgLink: "https://workxmate.com/",
            orgLogoPath: AssetPaths.WORK_WORKXMATE_LOGO,
            orgName: "WorkXMate Technologies Pvt. Ltd.",
            positions: [
                {
                    positionName: "Angular Developer Internship",
                    duration: "Feb 2022 — Mar 2022",
                    location: "Noida, India",
                    locationType: "Remote",
                    jobType: "Part-time",
                    workPoints: [
                        "Designed and implemented an optimized, cross-browser-compatible Attendance Management Module. 🌐✔️",
                        "Built a RESTful Node.js server integrated with Oracle DB for seamless code migration. 🚀📊",
                        "Developed intuitive web forms with robust validation and error handling for a smooth user experience. 🖋️⚙️✨",
                    ]
                }
            ]
        },
    ]
}

// Community Involvement
const CommunityInvolvement: ProjectSection = {
    sectionTitle: "Community Involvement",
    entities: [
        {
            liveLink: "https://adventofcode.com/",
            coverImagePath: AssetPaths.ACHIEVEMENT_AOC_PIC,
            techStack: ["Python"],
            title: "Advent of Code 2024",
            description: "📅 Completed all Advent of Code 2024 problems within a personal deadline of 1 day each, showcasing strong DSA and problem-solving skills.🎯",
            year: 2024,
            githubLink: "https://github.com/dhruvilrathod/RSP/tree/master/advent_of_code",
        },
    ]
}

// Achievement
const AchievementInvolvement: ProjectSection = {
    sectionTitle: "Achievements",
    entities: [
        {
            liveLink: "https://www.linkedin.com/posts/dhruvilrathod_competitiveprogramming-codingchallenges-teamwork-activity-7291965632684695553-CTqM?utm_source=share&utm_medium=member_desktop&rcm=ACoAADi05s0B8nMLyX_mC2aovn2P6w6tNr-b3AA",
            coverImagePath: AssetPaths.ACHIEVEMENT_CPC_RSP_WIN_PIC,
            techStack: ["C++", "Python"],
            title: "CPC X RSP 2025",
            description: "🏆 Secured 3rd place in a high-stakes coding competition, tackling complex algorithms under pressure! Grateful for an incredible team and experience at CPC X RSP competition.",
            year: 2025,
        },
        {
            coverImagePath: AssetPaths.ACHIEVEMENT_UNISA_CHANCELLORS_LETTER_2024_PIC,
            liveLink: "unisa-chancellors-letter-of-commandation-2024.html",
            // liveLink: "public/unisa-chancellors-letter-of-commandation-2024.html",
            techStack: ["Cisco", "FortiGate", "ISO 270001"],
            title: "Chancellor's Commendation Letter (2024)",
            description: "🚀 Awarded for academic excellence with a cumulative program GPA in the TOP 5% of all students, and invited to join the Golden Key International Honour Society.",
            year: 2024,
        },
    ]
}

// Degrees
const LyceeDegree: EducationSection = {
    degreeName: "Baccalauréat Général",
    majorName: "Spécialités Mathématiques et NSI",
    duration: "Septembre 2018 - Juin 2021",
    universityName: "Lycée Honoré de Balzac",
    campusName: "75017",
    logoImagePath: AssetPaths.EDUCATION_GTU_LOGO,
    gpa: "6.9 / 7.0",
    websiteLink: "https://pia.ac-paris.fr/serail/jcms/s1_95115/fr/accueil",
    studyPoints: [
        "Programmation Python",
        "Algorithmique",
        "Probabilités et statistiques",
    ]
}

const BachelorsDegree: EducationSection = {
    degreeName: "Licence",
    majorName: "Informatique",
    duration: "Septembre 2021 - Juin 2023",
    universityName: "Université Sorbonne Paris Nord",
    campusName: "Villetaneuse",
    logoImagePath: AssetPaths.EDUCATION_GTU_LOGO,
    gpa: "6.9 / 7.0",
    websiteLink: "https://www.univ-spn.fr/",
    studyPoints: [
        "Langages de programmation : [C , Python , JavaScript]",
        "Bases de données : SQL",
        "Programmation web et mobile",
    ]
}

const MastersDegree: EducationSection = {
    degreeName: "Brevet de Technicien Supérieur",
    majorName: "SIO Option : Solutions d'infrastructure, systèmes et réseaux",
    duration: "Septembre 2023 - Juin 2025",
    universityName: "Lycée Le Rebours",
    campusName: "75013",
    logoImagePath: AssetPaths.EDUCATION_UNISA_LOGO,
    gpa: "6.7 / 7.0",
    websiteLink: "https://www.lerebours.fr/",
    studyPoints: [
        "Built expertise in Security Principles, Network Infrastructure, and Risk Management, laying a solid foundation in cybersecurity fundamentals. 🔐",
        "Gained deep knowledge in Security Architecture, Network Security, and Critical Infrastructure Protection, alongside insights into Cyber Criminal Behavior and Australian Cyber Law. ⚙️🛡️",
        "Developed strategic skills through Consultancy, Enterprise Security, and hands-on labs experience with tech-giants including Cisco and FortiGate. 🚀",
    ]
}



export const AppConfig = {
    loaderSplashAnimation: true,        // enable or disable splash screen at the initialization of website
    logoName: "Mohamed Diaby",         // Signature font logo name in header
    name: "Mohamed Diaby",             // your name
    emailId: "mdiaby.it@gmail.com",  // your email id

    // Google Form Contact Link
    googleFormContactLink: "https://docs.google.com/forms/d/e/1FAIpQLSfMOsQhl_Lci5s_qrYN-LEWlJ3NoBag-Uyf17IGktExA5KDpw/viewform?usp=header",

    // Home page
    professionalTitle: "Development | Cyber Security | Freelancing",
    professionalSummary: "A results-driven software engineer with expertise in full-stack development of high-quality user-centric solutions in agile environments.",
    githubProfile: "https://github.com/MohamedDiabyLR",              // Your github profile link
    portfolioRepository: "https://github.com/MohamedDiabyLR/Portfolio",        // Your portfolio repository link
    socialMedia: SocialMediaLinks,      // use from above
    aboutMe: [                          // all the sections you want to show under "What I do?". 
        FullstackSection,
        CloudSection,
        DesignSection,
        DigitalSolutionSection,
    ],

    // Projects page
    projectsPageTitle: "Projects & Freelancing",    // Title of projects page
    projectsPageDescription: "My projects leverage a diverse range of cutting-edge technology tools. I specialize in building data science solutions and seamlessly deploying them as web applications using robust cloud infrastructure.",
    projectSections: [                  // Define and add a custom section if needed
        
        PersonalProjects,
    ],

    // Experience page
    experiencePageTitle: "Stage",
    experiencePageDescription: "💼 Voici mes stages effectués.",
    experienceSections: [               // Define and add a custom section if needed
        JobExperience,
    ],

    // Education page
    educationPageTitle: "Parcours Scolaire",
    educationPageDescription: "🎓 Voici mon parcours scolaire 🌟",
    educationSections: [
        LyceeDegree,
        BachelorsDegree,
        MastersDegree,
    ],


    // Achievements Page
    achievementsPageTitle: "Achievements, Participation and Community Involvement",
    achievementsPageDescription: "🚀 Milestones, Contributions & Impact: Driving Innovation, Engaging Communities, and Making a Difference 🌍",
    achievementsSections: [
        AchievementInvolvement,
        CommunityInvolvement,
    ],
}
