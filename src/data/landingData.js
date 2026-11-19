/**
 * Centralized content for the EduPyramids landing page.
 * Facts, numbers and quotes are taken from the EduPyramids brochure.
 */

export const organizationInfo = {
  name: "EduPyramids",
  tagline: "Empowering Futures through Skills Training",
  heroLead:
    "IT, AI, communication and life skills for schools and colleges, and health training for frontline workers — a low-cost skilling solution that gets learners ready for the AI era.",
  trustPoints: ["A SINE, IIT Bombay–incubated company", "IEEE Standard 2955-2025"],
};

export const reachStats = [
  { value: "10 million+", label: "Learners" },
  { value: "5,000+", label: "Institutions" },
  { value: "1 million+", label: "New students every year" },
  { value: "100+", label: "Skilling courses" },
  { value: "22", label: "Indian languages, plus English" },
];

export const implementedIn = [
  "Army Public Schools",
  "Delhi Public School",
  "DAV Public School",
  "SNBP International School, Pune",
  "VIT, Chennai",
  "SWAYAM Plus",
  "WHEELS Global Foundation",
  "IIT Madras Zanzibar",
];

export const methodInfo = {
  eyebrow: "Our Method",
  heading: "Watch. Practice. Repeat.",
  graphic: "/assets/watch-practice-repeat.webp",
  lead:
    "EduPyramids builds on the multi-award-winning Spoken Tutorial project of IIT Bombay. Self-learning is our way of teaching.",
  body:
    "Learners watch a step, pause, try it themselves and move on, at their own pace. This builds strong skill retention and confidence.",
  points: [
    "Learners practice side by side with the tutorial",
    "Beginner-tested, so anyone can learn alone",
    "Assessments and certificates built in",
  ],
  standard: {
    code: "IEEE 2955-2025",
    title: "Recognised as an IEEE Standard",
    text: "The Spoken Tutorial method is a global standard for self-learning.",
  },
  settings: [
    "Works online, offline and on low bandwidth",
    "Aligned with NEP 2020",
    "Free and open source software, so no licence fees",
  ],
};

export const carouselSlides = [
  {
    id: 1,
    title: "Watch. Practice. Repeat.",
    subtitle: "Learners watch a short video in one window and practice the same steps in the next.",
    image: "/assets/carousel-side-by-side.webp",
    alt: "Two learners sharing a computer during a Spoken Tutorial workshop",
    tag: "Side-by-Side Learning",
  },
  {
    id: 2,
    title: "Strengthening Community Health",
    subtitle: "Training ASHA and Anganwadi workers with district administrations.",
    image: "/assets/carousel-health-training.webp",
    alt: "Frontline health workers in a group training session",
    tag: "Health",
  },
  {
    id: 3,
    title: "Taking Spoken Tutorial to Africa",
    subtitle: "Hands-on IT workshops at IIT Madras Zanzibar, in Swahili and English, May 2025.",
    image: "/assets/carousel-zanzibar-group.webp",
    alt: "Participants and trainers at the IIT Madras Zanzibar campus, Bweleo",
    tag: "Global Reach",
  },
  {
    id: 4,
    title: "Learning by Doing",
    subtitle: "A full lab during a workshop: every learner at a computer, at their own pace.",
    image: "/assets/carousel-workshop-lab.webp",
    alt: "A full computer lab during a Spoken Tutorial workshop",
    tag: "Workshops",
  },
];

export const verticalsData = [
  {
    id: "school",
    title: "EduPyramids School",
    tagline: "Computer, AI & life skills for schools",
    badge: "K-12 & Foundational",
    summary:
      "Students learn computer, AI, communication and life skills on their own, in English or 22 Indian languages.",
    initiatives: [
      "Matched to the school curriculum, for students and teachers",
      "No specialist teacher needed",
      "Works offline and on low bandwidth",
      "Personality and human development: empathy, communication, growth mindset",
    ],
    tone: "brand",
    ctaText: "Explore School",
    linkKey: "school",
    image: "/assets/vertical-school.webp",
    imageAlt: "School students holding their Spoken Tutorial certificates",
  },
  {
    id: "college",
    title: "EduPyramids College",
    tagline: "Hands-on IT courses with certification",
    badge: "Higher Education",
    summary:
      "Map 100+ IT courses to your syllabus, plus courses in AI, communication and life skills, and certify your students.",
    initiatives: [
      "C, C++, Java, Python and more, with certificates",
      "Strengthens your NAAC record",
      // Rendered with "SWAYAM Plus" linking to the SWAYAM Linux course page.
      { before: "We have partnered with ", link: "SWAYAM Plus", after: "; select courses earn ABC credits." },
      "Skill Accelerator Labs: a dedicated lab in your college",
    ],
    tone: "navy",
    ctaText: "Explore College",
    linkKey: "college",
    image: "/assets/vertical-college.webp",
    imageAlt: "College students practicing in a computer lab",
  },
  {
    id: "health",
    title: "EduPyramids Health",
    tagline: "Health Spoken Tutorial for frontline workers",
    badge: "Healthcare & Well-being",
    summary:
      "With district administrations, we train ASHA and Anganwadi workers on breastfeeding, infant feeding and adolescent nutrition.",
    initiatives: [
      "60,000 frontline workers trained",
      "105 video modules in 30 languages",
      "Underweight fell by 47% across 8,346 children",
      "Thousands of workers trained to one standard",
    ],
    tone: "health",
    ctaText: "Explore Health",
    linkKey: "health",
    image: "/assets/carousel-health-training.webp",
    imageAlt: "Frontline health workers in a Health Spoken Tutorial training session",
  },
];

export const testimonials = [
  {
    quote:
      "This approach consistently helped my students achieve a 100% pass rate with 85% average and strong confidence for 10 years in a row.",
    name: "Mr. Amit Kumar",
    role: "Computer Teacher",
    org: "Jawahar Navodaya Vidyalaya, Himachal Pradesh",
    tone: "brand",
  },
  {
    quote:
      "So far, 56,883 VIT students have cleared the Spoken Tutorial tests and received their certificates. Courses in regional languages have greatly helped students from rural backgrounds.",
    name: "Prof. Subbulakshmi",
    role: "VIT, Chennai",
    org: "",
    tone: "navy",
  },
  {
    quote:
      "Spoken Tutorial enabled large-scale, standardized training that would have been impossible through in-person sessions.",
    name: "Ms. Ashima Mittal, IAS",
    role: "CEO, Zilla Parishad",
    org: "Nashik district",
    tone: "health",
  },
  {
    quote:
      "Before this course, I knew nothing about computers and was scared to learn. Spoken Tutorial explained everything in very simple language, and I became interested in learning more. I have now completed four Spoken Tutorial courses and earned certificates. My dream is to become an IT engineer.",
    name: "Krupa Jangam",
    role: "Class 8",
    org: "Vandangi village, Maharashtra",
    tone: "brand",
  },
  {
    quote:
      "Spoken Tutorials helped our participants prepare for the workshop by learning to install and use Blender beforehand. During the workshop, they turned to the tutorials again and again for reference. In just four days, they became confident in 3D animation and interactive game development.",
    name: "Prof. Uma Kanjilal",
    role: "Vice-Chancellor",
    org: "Indira Gandhi National Open University (IGNOU)",
    tone: "navy",
  },
  {
    quote:
      "While the National Nutrition Mission guidelines recommend 28 grams weight gain per day, the Health Spoken Tutorials have helped us achieve weight gain of 35-40 grams and even 50 grams per day.",
    name: "Minal Karanwal, IAS",
    role: "Sub Divisional Officer and Project Officer",
    org: "Nandurbar district, Maharashtra",
    tone: "health",
  },
];

export const partnerAudiences = [
  {
    id: "school",
    title: "If You Are a School",
    text: "Students learn computer, AI, communication and life skills on their own, in English or 22 Indian languages. No specialist teacher needed, and it works offline.",
  },
  {
    id: "college",
    title: "If You Are a College",
    text: "Map 100+ IT courses to your syllabus, plus courses in AI, communication and life skills. Certify students and strengthen your NAAC record.",
  },
  {
    id: "ngo",
    title: "If You Are an NGO or CSR Team",
    text: "Make your budget go further and reach lakhs of learners. We co-create tutorials in your communities' languages and give you data to report to funders.",
  },
  {
    id: "district",
    title: "If You Are a District Administration",
    text: "Train thousands of frontline workers to one standard. In our health projects, underweight fell by 47% across 8,346 children.",
  },
];

/**
 * Founder's vision.
 * Final wording, approved by the EduPyramids team (18 Nov 2026).
 * Based on his own published writing:
 *   - headline, para 3: "Why Every Student Needs an Educational Laptop"
 *   - para 1: "A Note from Prof. Kannan M. Moudgalya" (Future-Ready Children flyer)
 *   - paras 2 and 4: "Spoken Tutorial: A Collaborative and Scalable Education Technology",
 *     CSI Communications, September 2011
 * Set this to null to hide the section.
 */
export const founderVision = {
  name: "Prof. Kannan M. Moudgalya",
  title: "Founder and Director, EduPyramids Educational Services Pvt. Ltd.",
  photo: "/assets/prof-kannan-moudgalya.jpg",
  headline: "In the age of AI, every student must learn how to learn.",
  quote: [
    "From my humble beginnings in Namakkal, studying in a Tamil-medium school, to becoming a professor at IIT Bombay, I received opportunities that shaped my life. Today, I want to help create similar opportunities for children across India.",
    "Every Spoken Tutorial is made for a child in a remote area, working alone at midnight with no one to help her. This is the only time she gets to study, after finishing all her chores.",
    "One cannot learn to swim by watching a video. The same is true for any skill. A student learns only by doing. Watch. Practice. Repeat.",
    "Spoken Tutorial has the potential to empower every child in our country.",
  ],
};

export const navigationLinks = [
  { name: "School", href: "#school" },
  { name: "College", href: "#college" },
  { name: "Health", href: "#health" },
  { name: "Our Method", href: "#about" },
  { name: "Founder", href: "#founder" },
  { name: "Testimonials", href: "#testimonials" },
];

export const contactInfo = {
  email: "contact@edupyramids.org",
  phone: "+91 77381 88213",
  company: "EduPyramids Educational Services Pvt. Ltd.",
  address: "6016A, SINE, RBTIC, IIT Bombay, Powai, Mumbai 400076",
};

// Official accounts, as linked from the footer of edupyramids.org / spoken-tutorial.org.
// Add Instagram (or X) here once an official EduPyramids account exists.
export const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/spokentutorial" },
  { name: "YouTube", href: "https://www.youtube.com/user/SpokenTutorialIITB" },
  { name: "Facebook", href: "https://www.facebook.com/SpokenTutorial.org" },
];
