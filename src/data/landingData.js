/**
 * Centralized content repository for the EduPyramids main landing page.
 * Temporary placeholder and brochure-aligned content that can be easily updated.
 */

export const organizationInfo = {
  name: "EduPyramids",
  tagline: "Empowering Futures through Integrated Education & Healthcare",
  aboutHeading: "About EduPyramids",
  aboutBadge: "Integrated Knowledge & Well-being",
  aboutLead:
    "EduPyramids is dedicated to building inclusive, high-impact ecosystems across foundational schooling, higher education, and community healthcare literacy.",
  aboutParagraphs: [
    "Established with a vision to democratize access to high-quality learning and well-being resources, EduPyramids operates across three core pillars: EduPyramids School, EduPyramids College, and EduPyramids Health. We believe that societal progress starts with robust education and healthy communities.",
    "By bridging modern pedagogical methods with accessible technology and community-centered initiatives, EduPyramids empowers learners, educators, and healthcare advocates to develop meaningful skills and make lasting contributions.",
  ],
  statsHighlights: [
    { label: "Core Pillars", value: "3 Verticals" },
    { label: "Community Focus", value: "Nationwide" },
    { label: "Integrated Approach", value: "Holistic" },
  ],
};

export const carouselSlides = [
  {
    id: 1,
    title: "Nurturing Foundational Minds",
    subtitle: "Empowering school students with digital literacy, STEM fundamentals, and modern classroom resources.",
    image: "/assets/edupyramids-carousel.webp",
    alt: "EduPyramids School foundational learning",
    tag: "School Education",
  },
  {
    id: 2,
    title: "Bridging College & Industry",
    subtitle: "Preparing collegiate students for meaningful careers through industry-aligned certifications and practical skills.",
    image: "/assets/edupyramids-carousel-1.webp",
    alt: "EduPyramids College higher education",
    tag: "Higher Education",
  },
  {
    id: 3,
    title: "Strengthening Community Health",
    subtitle: "Promoting preventive health literacy, well-being awareness, and accessible healthcare training initiatives.",
    image: "/assets/edupyramids-carousel-2.webp",
    alt: "EduPyramids Health community initiatives",
    tag: "Health & Well-being",
  },
];

export const verticalsData = [
  {
    id: "school",
    title: "EduPyramids School",
    tagline: "Foundational & K-12 Educational Excellence",
    badge: "K-12 & Foundational",
    description:
      "EduPyramids School transforms school learning by pairing curriculum-aligned pedagogy with interactive technology. We support schools, teachers, and young learners with digital learning resources, foundational coding, and experiential STEM education designed to spark lifelong curiosity.",
    initiatives: [
      "Curriculum-aligned digital learning tools & audio-visual modules",
      "Experiential STEM, coding, and digital literacy for school students",
      "Teacher enablement workshops & contemporary pedagogical training",
      "Collaborative programs tailored for private and regional schools",
    ],
    ctaText: "Explore School",
    linkKey: "school",
    image: "/assets/digital-literacy.webp",
    imageAlt: "EduPyramids School digital literacy and learning",
    accentColor: "#F26321",
    accentLight: "#FFF4EE",
  },
  {
    id: "college",
    title: "EduPyramids College",
    tagline: "Higher Education & Industry Readiness",
    badge: "Higher Education",
    description:
      "EduPyramids College bridges the transition from academic study to professional accomplishment. Working closely with colleges and universities, we deliver career-ready skills, industry certifications, and hands-on technical workshops that prepare collegiate graduates for the competitive workforce.",
    initiatives: [
      "Industry-recognized certifications in emerging technologies",
      "Hands-on project development and practical skill workshops",
      "Faculty Development Programs (FDP) and academic institutional support",
      "Career mentorship, seminar series, and employability training",
    ],
    ctaText: "Explore College",
    linkKey: "college",
    image: "/assets/industry-relevant-courses.webp",
    imageAlt: "EduPyramids College students and technical training",
    accentColor: "#2E3494",
    accentLight: "#EEF0FC",
  },
  {
    id: "health",
    title: "EduPyramids Health",
    tagline: "Community Wellness & Healthcare Literacy",
    badge: "Healthcare & Well-being",
    description:
      "EduPyramids Health champions preventative health awareness, wellness education, and community healthcare training. By making vital health information accessible and actionable, we empower individuals, families, and institutions to adopt proactive health practices.",
    initiatives: [
      "Community health awareness campaigns and preventative care literacy",
      "Essential first-aid, CPR, and basic life-support awareness programs",
      "Student & institutional mental well-being and ergonomic health guides",
      "Multilingual healthcare communication and public health outreach",
    ],
    ctaText: "Explore Health",
    linkKey: "health",
    image: "/assets/skill-certification.webp",
    imageAlt: "EduPyramids Health wellness and healthcare programs",
    accentColor: "#0D9488",
    accentLight: "#E6FFFA",
  },
];

export const navigationLinks = [
  { name: "About Us", href: "#about" },
  { name: "School", href: "#school" },
  { name: "College", href: "#college" },
  { name: "Health", href: "#health" },
];

export const contactInfo = {
  email: "info@edupyramids.org",
  phone: "+91 22 2576 4229",
  address: "Seat 60, SINE, RBTIC Building, IIT Bombay, Powai, Mumbai - 400 076, India",
};

export const socialLinks = [
  {
    name: "LinkedIn",
    iconSrc: "/assets/linkedin.png",
    href: "https://www.linkedin.com/company/spoken-tutorial-school/home/",
  },
  {
    name: "YouTube",
    iconSrc: "/assets/youtube.png",
    href: "https://www.youtube.com/user/SpokenTutorialIITB",
  },
  {
    name: "Facebook",
    iconSrc: "/assets/facebook.png",
    href: "https://www.facebook.com/SpokenTutorial.org",
  },
  {
    name: "Instagram",
    iconSrc: "/assets/instagram.png",
    href: "https://www.instagram.com",
  },
];
