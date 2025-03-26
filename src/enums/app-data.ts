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
    sectionTitle: "Gestion de l'infrastructure",
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
    sectionSubtitle: "",
    entities: [
        {
            title: "Création d'un site vitrine pour un prestataire",
            coverImagePath: AssetPaths.PROJECT_THREEJS_IFC_VIEWER,
            liveLink: "https://www.wp-slf-sio2025.sio1-2lerebours.org/wordpress/",
            githubLink: "https://www.wp-slf-sio2025.sio1-2lerebours.org/wordpress/",
            description: " La création d’un site vitrine pour un prestataire via WordPress était de mettre en avant ses services, d’améliorer sa visibilité en ligne et de fournir une plateforme professionnelle.",
            techStack: ["CMS", "Wordpress", "Gantt"],
            year: 2024
        },
        {
            title: "La conception et la mise en place d'une infrastructure réseau et système avec Docker.",
            coverImagePath: AssetPaths.PROJECT_MUSIC_PLAYER,
            githubLink: "https://github.com/MohamedDiabyLR/Preuve/blob/main/ReseauDockerDIABY%20MOHAMED.pdf",
            description: "Conception et déploiement d'une première infrastructure réseau et système virtualisée à l'aide de Docker pour une gestion optimisée des services..",
            techStack: ["Docker","Infrastructure"],
            year: 2025
        },
        {
            title: "Monitoring d'un serveur web nginx",
            coverImagePath: AssetPaths.PROJECT_CUSTOM_DROPDOWN,
            liveLink: "https://github.com/MohamedDiabyLR/Preuve/blob/main/Monitoring.pdf",
            githubLink: "https://github.com/MohamedDiabyLR/Preuve/blob/main/Monitoring.pdf",
            description: "Ce projet déploie une stack web avec Docker, intégrant un serveur web, une base de données et un reverse proxy pour gérer le trafic via un load balancer.",
            techStack: ["Surveillance", "Supervision",],
            year: 2025,
            branch: "resource-tree-utility"
        },
        {
            title: "Mise en place d'un serveur AD",
            coverImagePath: AssetPaths.PROJECT_LMS_APP,
            githubLink: "https://github.com/MohamedDiabyLR/Preuve/blob/main/ServeurAD.pdf",
            description: "Ce projet vise à déployer un serveur Active Directory sur VMware pour centraliser la gestion des utilisateurs, des ressources et des stratégies de sécurité d'un réseau d'entreprise.",
            techStack: ["Service", "Windows", "Gestion"],
            year: 2024
        },
        {
            title: "Mise en place d'un serveur DHCP",
            coverImagePath: AssetPaths.PROJECT_ANGULAR_NEST_DOCKER,
            githubLink: "https://github.com/MohamedDiabyLR/Preuve/blob/main/DocumentationDHCP.pdf",
            description: "Virtualisation de clients et d'un serveur DHCP sur machine virtuelle Windows 2003 et 2016 afin d'automatiser l'attribution des adresses IP aux postes clients du réseau.",
            techStack: ["Service", "IP", "Automatique"],
            year: 2024
        },
        {
            title: "Mise en place d'un service HSRP",
            coverImagePath: AssetPaths.PROJECT_HMS_APP,
            githubLink: "https://github.com/MohamedDiabyLR/Preuve/blob/main/DocHSRP.pdf",
            description: "La mise en place d’une solution HSRP (Hot Standby Router Protocol) sur un réseau Cisco permet de garantir la redondance et la haute disponibilité des passerelles par défaut dans un environnement réseau.",
            techStack: ["Redondance","Haute Disponibilité"],
            year: 2025
        },
        {
            title: "Déploiement d'une Stack web avec Docker et loadbalancer",
            coverImagePath: AssetPaths.PROJECT_STACK,
            githubLink: "https://github.com/MohamedDiabyLR/Preuve/blob/main/Stackweb.pdf",
            description: "Ce projet déploie une stack web avec Docker, intégrant un serveur web, une base de données et un reverse proxy pour gérer le trafic via un load balancer.",
            techStack: ["Disponibilité","Repartition de charges"],
            year: 2025
        },
        {
            title: "Hebergement Local d'un site web sur Linux",
            coverImagePath: AssetPaths.PROJECT_HEBER,
            githubLink: "https://github.com/MohamedDiabyLR/Preuve/blob/main/HebergementLocal.pdf",
            description: "Hébergement local d’un site web sur Linux avec un serveur web pour un déploiement sécurisé et optimisé.",
            techStack: ["Disponibilité","Hebergement"],
            year: 2025
        },
        {
            title: "Monitoring des appareils d'une entreprise (imprimante , chauffage , serveurs)",
            coverImagePath: AssetPaths.PROJECT_MONI,
            githubLink: "https://github.com/MohamedDiabyLR/Preuve/blob/main/MonitoringACCPAV.pdf",
            description: "Monitoring des appareils réseaux de l'entreprise.",
            techStack: ["Surveillance","Alertes"],
            year: 2025
        },
        {
            title: "Veille technologique",
            coverImagePath: AssetPaths.PROJECT_VEILLE,
            githubLink: "https://github.com/MohamedDiabyLR/Preuve/blob/main/MonitoringACCPAV.pdf",
            description: "Etablissement d'une veille technologique permettant de rester à jour sur un sujet précis.",
            techStack: ["Actualités","DDOS"],
            year: 2025
        },
        {
            title: "Tableau de Synthese",
            coverImagePath: AssetPaths.PROJECT_TAB,
            githubLink: "https://github.com/MohamedDiabyLR/Preuve/blob/main/Tableaudesynthese.pdf",
            description: "Etablissement d'un tableau de synthèse resumant les projets de ces années.",
            techStack: ["Resumé","Projet"],
            year: 2025
        }

    ]
}

// Freelancing projects



// Job experience
const JobExperience: ExperienceSection = {
    experienceSectionTitle: "Voici mon parcours scolaire",
    experiences: [
        {
            orgLink: "https://linware.fr/",
            orgLogoPath: AssetPaths.WORK_ACQUIRE_LOGO,
            orgName: "Linware",
            positions: [
                {
                    positionName: "Expérience en Réseaux et Systèmes",
                    duration: "Janvier 2025 - Fevrier 2025",
                    location: "75010 Paris",
                    workPoints: [
                        "Administration de systèmes (Windows, Linux)",
                        "Mise en place d'une supervision",
                        "Configuration de réseaux et serveurs",
                    ]
                }
            ]
        },
        {
            orgLink: "https://www.univ-spn.fr/",
            orgLogoPath: AssetPaths.WORK_ASITE_LOGO,
            orgName: "Cefisi",
            positions: [
                {
                    positionName: "Expérience en Maintenance et Creation de site",
                    duration: "Mai 2024 - Juin 2024",
                    location: "94000 Creteil",
                    
                    
                    workPoints: [
                        "Gestion de Multisite OVH",
                        "Gestion de serveur SSH",
                        "Création de sauvegardes",
                    ]
                }
            ]
        },
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
    logoImagePath: AssetPaths.EDUCATION_univ_LOGO,
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
    logoImagePath: AssetPaths.EDUCATION_UNISA_LOGO,
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
    logoImagePath: AssetPaths.EDUCATION_GTU_LOGO,
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
    professionalTitle: "Réseaux | Cybersécurité | Administration Systèmes",
    professionalSummary: "Passionné par les réseaux et la cybersécurité, je développe mes compétences en administration système et gestion des infrastructures informatiques.",
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
    projectsPageTitle: "Projets",    // Title of projects page
    projectsPageDescription: "Vous pouvez ici trouvez mes projets effectués lors de ces 2 années.",
    projectSections: [                  // Define and add a custom section if needed
        
        PersonalProjects,
    ],

    // Experience page
    experiencePageTitle: "Experiences",
    experiencePageDescription: "💼 Voici mes experiences.",
    experienceSections: [               // Define and add a custom section if needed
        JobExperience,
    ],

    // Education page
    educationPageTitle: "Etudes",
    educationPageDescription: "🎓 Voici mon parcours scolaire. 🌟",
    educationSections: [
        MastersDegree,
        BachelorsDegree,
        LyceeDegree,
    ],


    // Achievements Page
    achievementsPageTitle: "Achievements, Participation and Community Involvement",
    achievementsPageDescription: "🚀 Milestones, Contributions & Impact: Driving Innovation, Engaging Communities, and Making a Difference 🌍",
    achievementsSections: [
        AchievementInvolvement,
        CommunityInvolvement,
    ],
}
