
import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 1,
    slug: "concours-vault",
    title: "Concours Vault",
    description:
      "A membership-based automotive platform featuring custom user profiles, personalized garages, and integrated services.",
    technologies: ["WordPress", "PHP", "JavaScript", "Stripe", "API Integrations"],
    url: "https://concoursvault.com",
    featured: true,
    image: "/projects/concours-vault.webp",
    role: "Custom Development & Integrations",
    category: "Custom Web Development",
    overview:
  "A custom automotive membership platform featuring personalized member profiles, vehicle management, and integrated subscription functionality.",

gallery: [
  "/projects/concours-vault-garage.jpg",
  "/projects/concours-vault.webp",
  "/projects/concours-vault-marketplace.jpg",
  "/projects/concours-vault-members.jpg",
  "/projects/concours-vault-addcar.jpg",
  "/projects/concours-vault-profile.jpg",
],

features: [
  {
    title: "Custom Vehicle Dashboard",
    description:
      "Developed My Garage using PHP, JavaScript, and WordPress custom post types, allowing members to view and manage their vehicle records.",
  },
  {
    title: "Vehicle Submissions & File Management",
    description:
      "Extended Formidable Forms with custom processing hooks to associate vehicle information, image galleries, and supporting documents with member records.",
  },
  {
    title: "VIN Decoder API",
    description:
      "Integrated a third-party VIN decoding API to retrieve vehicle specifications and automatically populate submission form fields.",
  },
  {
    title: "Member Profiles & Directory Integration",
    description:
      "Connected GeoDirectory listings to Ultimate Member profiles using custom queries and ownership-based filtering.",
  },
  {
    title: "Membership Access Automation",
    description:
      "Used WooCommerce hooks to automatically assign Ultimate Member roles based on completed membership purchases.",
  },
  {
    title: "Appointment & Calendar Integration",
    description:
      "Implemented appointment displays with Google Calendar, Outlook, and downloadable ICS calendar options.",
  },
 
],
 highlights: [
  "Custom WordPress functionality",
  "Third-party API integrations",
  "Membership and access automation",
  "User-specific dashboards and directories",
],
technicalApproach:
  "Extended WordPress with custom PHP, JavaScript, post types, and plugin hooks to connect member profiles, vehicle records, and directory listings. Integrated external APIs and automated membership permissions while building responsive, user-specific interfaces.",

  },
  
{
  id: 2,
  slug: "hubble-therapeutics",
  title: "Hubble Therapeutics",
  description:
    "A responsive WordPress website developed from provided Figma designs, with a focus on accurate visual implementation and usability.",
  technologies: [
    "WordPress",
    "Divi",
    "CSS",
    "Figma",
  ],
  url: "https://hubbletx.com",
  featured: true,
  image: "/projects/hubble-therapeutics.webp",
  role: "Front-End Development",
  category: "Website Development",
  overview:
    "Developed a responsive WordPress website for Hubble Therapeutics, translating provided Figma designs into functional web pages using Divi and custom CSS.",

  highlights: [
    "Figma-to-WordPress implementation",
    "Responsive website development",
    "Custom CSS styling",
    "Front-end layout development",
  ],

  features: [
    {
      title: "Figma Design Implementation",
      description:
        "Translated provided Figma designs into functional WordPress pages using Divi, recreating the intended layouts, typography, spacing, and visual elements.",
    },
    {
      title: "Responsive Layout Development",
      description:
        "Adapted page layouts for desktop, tablet, and mobile screen sizes to maintain a consistent and usable experience.",
    },
    {
      title: "Custom CSS Styling",
      description:
        "Applied custom CSS to refine styling and layout details beyond Divi's standard design controls.",
    },
  ],

  technicalApproach:
    "Built the website in WordPress using Divi to structure and implement the provided Figma designs. Used CSS to refine visual details and responsive layouts, focusing on consistency between the original designs and the finished website.",
},

{
  id: 3,
  slug: "beantown-pals",
  title: "Beantown Pals",
  description:
    "An interactive membership website featuring daily games, user accounts, and a points-based engagement system.",
  technologies: [
    "WordPress",
    "Divi",
    "CSS",
    "Ultimate Member",
    "JavaScript",
  ],
  url: "https://beantownpals.com/",
  featured: true,
  image: "/projects/beantown-pals.webp",
  role: "Website Design & Development",
  category: "Membership & Interactive Websites",
  overview:
    "Designed and developed an interactive WordPress website for Beantown Pals, combining a playful visual experience with member accounts, daily games, and a points-based engagement system.",
gallery: [
  "/projects/beantown-pals.webp",
  "/projects/beantown-pals-join.webp",
  "/projects/beantown-pals-profile.webp",
  
],
  highlights: [
    "Custom website design and development",
    "Membership platform integration",
    "Interactive games and activities",
    "User scoring and engagement features",
  ],

  features: [
    {
      title: "Custom Website Design & Development",
      description:
        "Designed and developed the website using WordPress, Divi, and custom CSS to create a colorful, engaging, and responsive experience.",
    },
    {
      title: "Membership Platform",
      description:
        "Integrated Ultimate Member to support user registration, login, and member accounts.",
    },
    {
      title: "Daily Games & Activities",
      description:
        "Implemented daily games and interactive activities to encourage members to return and participate.",
    },
    {
      title: "Points-Based Engagement",
      description:
        "Implemented a scoring system that allows members to earn points through participation in games and activities.",
    },
  ],

  technicalApproach:
    "Built the website using WordPress and Divi, with custom CSS for visual styling and responsive layouts. Integrated Ultimate Member for account management and implemented interactive game and points-based functionality to support ongoing member engagement.",
},

  {
    id: 4,
    slug: "ogre-chocolates",
    title: "Ogre Chocolates",
    description:
      "A custom-branded ecommerce website developed from Figma designs with WooCommerce shopping functionality.",
    technologies: ["WordPress", "WooCommerce", "CSS", "JavaScript"],
    url: "https://ogrechocolates.com",
    featured: false,
    image: "/projects/ogre-chocolates.webp",
    role: "Front-End & Ecommerce Development",
    category: "Ecommerce",
  },
   // ADDITIONAL PROJECTS

  {
    id: 5,
    slug: "lumber-barn",
    title: "Lumber Barn",
    description: "Website development for Lumber Barn.",
    technologies: ["WordPress"],
    url: "https://lumberbarn.com",
    featured: false,
    role: "Website Development",
    category: "Website Development",
  },
  {
    id: 6,
    slug: "blind-citizens",
    title: "American Blind Citizens",
    description: "Website development for a nonprofit organization.",
    technologies: ["WordPress"],
    url: "https://blindcitizens.org",
    featured: false,
    role: "Website Development",
    category: "Nonprofit Website",
  },
  {
    id: 7,
    slug: "fieldstone-land-consultants",
    title: "Fieldstone Land Consultants",
    description: "Website development for Fieldstone Land Consultants.",
    technologies: ["WordPress"],
    url: "https://fieldstonelandconsultants.com",
    featured: false,
    role: "Website Development",
    category: "Business Website",
  },
  {
    id: 8,
    slug: "woodpecker-medicare",
    title: "Woodpecker Medicare",
    description: "Website development for Woodpecker Medicare.",
    technologies: ["WordPress"],
    url: "https://woodpeckermedicare.com",
    featured: false,
    role: "Website Development",
    category: "Business Website",
  },
  {
    id: 9,
    slug: "opening-new-doors",
    title: "Opening New Doors",
    description: "Website development for Opening New Doors.",
    technologies: ["WordPress"],
    url: "https://openingnewdoorsnh.com",
    featured: false,
    role: "Website Development",
    category: "Business Website",
  },
  {
    id: 10,
    slug: "audiology-specialists",
    title: "Audiology Specialists",
    description: "Website development and content implementation for an audiology practice.",
    technologies: ["WordPress"],
    url: "https://audiologyspecialists.com",
    featured: false,
    role: "Website Development & Content",
    category: "Healthcare Website",
  },
  {
    id: 11,
    slug: "southern-charm-farm",
    title: "Southern Charm Farm",
    description: "Website development for Southern Charm Farm.",
    technologies: ["WordPress"],
    url: "https://southerncharmfarmnh.com",
    featured: false,
    role: "Website Development",
    category: "Business Website",
  },
  {
    id: 12,
    slug: "sheer-empowerment",
    title: "Sheer Empowerment",
    description: "Website development for Sheer Empowerment.",
    technologies: ["WordPress"],
    url: "https://sheerempowerment.com",
    featured: false,
    role: "Website Development",
    category: "Business Website",
  },
  {
    id: 13,
    slug: "vermont-country-deli",
    title: "Vermont Country Deli",
    description: "Website development and online ordering functionality for Vermont Country Deli.",
    technologies: ["WordPress", "Formidable Forms", "Square"],
    url: "https://vermontcountrydeli.com",
    featured: false,
    role: "Website Development & Integrations",
    category: "Restaurant Website",
  },
  {
    id: 14,
    slug: "safe-medical-waste",
    title: "Safe Medical Waste",
    description: "Website development for Safe Medical Waste.",
    technologies: ["WordPress"],
    url: "https://safemedicalwaste.com",
    featured: false,
    role: "Website Development",
    category: "Business Website",
  },
  {
    id: 15,
    slug: "joe-electric",
    title: "Joe Electric",
    description: "Website development for Joe Electric.",
    technologies: ["WordPress"],
    url: "https://joeelectricnh.com",
    featured: false,
    role: "Website Development",
    category: "Business Website",
  },
  {
    id: 16,
    slug: "whitetail",
    title: "Whitetail",
    description: "Website development for Whitetail.",
    technologies: ["WordPress"],
    url: "https://whitetailnh.com",
    featured: false,
    role: "Website Development",
    category: "Business Website",
  },
  {
    id: 17,
    slug: "salisbury-woods",
    title: "Salisbury Woods",
    description: "Website development for Salisbury Woods.",
    technologies: ["WordPress"],
    url: "https://salisburywoods.com",
    featured: false,
    role: "Website Development",
    category: "Business Website",
  },
  {
    id: 18,
    slug: "beantown-pals",
    title: "Beantown Pals",
    description: "A membership-based website featuring custom member functionality.",
    technologies: ["WordPress"],
    url: "https://beantownpals.com",
    featured: false,
    role: "Website Development & Membership Functionality",
    category: "Membership Website",
  },
  {
    id: 19,
    slug: "platinum-travel",
    title: "Platinum Travel",
    description: "Website development for Platinum Travel.",
    technologies: ["WordPress"],
    url: "https://platinumtravelnh.com",
    featured: false,
    role: "Website Development",
    category: "Business Website",
  },
  {
    id: 20,
    slug: "monadnock-art",
    title: "Monadnock Art",
    description: "Website development for Monadnock Art.",
    technologies: ["WordPress"],
    url: "https://monadnockart.org",
    featured: false,
    role: "Website Development",
    category: "Arts & Nonprofit Website",
  },
  {
    id: 21,
    slug: "concord-colonics",
    title: "Concord Colonics",
    description: "Website development for Concord Colonics.",
    technologies: ["WordPress"],
    url: "https://concordcolonics.com",
    featured: false,
    role: "Website Development",
    category: "Business Website",
  },
  {
    id: 22,
    slug: "penelope-perri",
    title: "Penelope Perri",
    description: "Website development and maintenance for Penelope Perri.",
    technologies: ["WordPress"],
    url: "https://penelopeperri.com",
    featured: false,
    role: "Website Development & Maintenance",
    category: "Business Website",
  },
];