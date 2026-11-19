
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
    slug: "ogre-chocolates",
    title: "Ogre Chocolates",
    description:
      "A custom-branded ecommerce website developed from Figma designs with WooCommerce shopping functionality.",
    technologies: ["WordPress", "WooCommerce", "CSS", "JavaScript"],
    url: "https://ogrechocolates.com",
    featured: true,
    image: "/projects/ogre-chocolates.webp",
    role: "Front-End & Ecommerce Development",
    category: "Ecommerce",
  },
   // ADDITIONAL PROJECTS

  {
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
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
    id: 9,
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
    id: 10,
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
    id: 11,
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
    id: 12,
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
    id: 13,
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
    id: 14,
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
    id: 15,
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
    id: 16,
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
    id: 17,
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
    id: 18,
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
    id: 19,
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
    id: 20,
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
    id: 21,
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