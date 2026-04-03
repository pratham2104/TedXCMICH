// ============================================================
//  TEDxCMICH — Content Configuration
//  Edit this file to update all site content.
//  No code changes needed anywhere else.
// ============================================================

export const siteConfig = {
  name: "TEDxCMICH",
  year: 2026,
  edition: "Year III",
  theme: null, // Set to a string like "Beyond Borders" when confirmed
  date: "April 2026", // Update when confirmed e.g. "April 18, 2026"
  venue: "French Auditorium · Central Michigan University",
  instagram: "https://instagram.com/tedxcentralmichiganuniversity",
  eventDate: new Date("2026-04-18T18:00:00"), // Update with real date for countdown
};

// ============================================================
//  SPEAKERS
//  - image: put photo files in /public/images/ and reference as "/images/filename.jpg"
//  - image: can also be a full URL "https://..."
//  - image: set to null to show initials placeholder
// ============================================================
export const speakers = [
  {
    id: 1,
    name: "Dr. Cleamon Moorer Jr.",
    initials: "CM",
    role: "Entrepreneur",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAA6Tmn5yXMEnd2ARo2iFOt2S7JHJ68tqLnf9ptNGZlwjGDJCol8Sh4TwgzgJu3Z247AEGJpOoQO8-O-OpO1wXI4f61Q3UkzZ96zZvMVHWBnugHqg8FRfrKHv0b0lT1NC-hr7VhQ7H9pQrYRFA6qFAr8JJ6EB61GW6UrSj9D6ZAw4wSUfvodJ2eDTRen88RGhvWRfE5nvqlkhF0vUn6A9-getizJaNday8yPGDN6v2VrHQSIacNLWIcFJDQo7jlct-A6lDydVsZiW8",
    bio: 'Dr. Cleamon Moorer, Jr. was legally blind at 21. A community paid for the surgery that restored his sight. His mother's last words were simple: "Promise me you'll give back."
He's spent the last 25 years keeping that promise.
Dr. Moorer is the Founding Executive Director of Eye Care for Michigan, a mobile vision nonprofit serving homebound seniors statewide, and President & CEO of American Advantage Home Care. He invented horEYESontal.ai, a provisionally patented AI platform detecting early markers for Alzheimer's and dementia through a routine eye exam.
An Entrepreneur in Residence and Lecturer at Central Michigan University's College of Business Administration, host of The Home Health Care Today Show on WMYD TV-20 Detroit, and bestselling author. Dr. Moorer delivered his first TEDx talk in 2016. He returns with a decade more of promises delivered.
',
  },
  {
    id: 2,
    name: "Jeannine Rashidi",
    initials: "JR",
    role: "Doctor of Ayurveda",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB80fH_He6uX7B6WwHQ6hm4zmx8Q22pH2swwd1FPCZSFTtVTUi2xnS1z5I4aKg53rrkIGrLpPz1rr51ddymC6HHDBKpErtY1oxTrVdNhfkNVFZ_VAp7Vd5hdGGv6w8QWqBNpHY7bb-tO-JVBHs4XtF5FTAd-b6HT-dJLcyu77ItDYpSLDABIgNmf5QbO3vu3GJWh3cr9TpPqnYxa9tfy-6pxSoIAwtpZ0g1_5zHmdRZrsH3ZvMlU5_58CoWSSgUcSnUZWBGcE0Bklg",
    bio: "Bridging ancient wisdom with contemporary health practices to address modern chronic stress through holistic methodologies.",
  },
  {
    id: 3,
    name: "Joseph Cope",
    initials: "JC",
    role: "Empathy Guy",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPv90v18XxmXv8g-6CsyI_dR9Z8VQKmidjZRCHk2hW4NFnLNpE1tHPIgaTTt3uUG0NQ0DvEkyVTAiHC497pEoRmp2A7V00qzItI3g33-WrkBZSM8AMVg_UXy39CC9PzgrK6ks87W6PNZ72cXRFdQtjHHNsWYtLQkvyK8qiVLKT3qRLbYdITYUIgaH3NF82lShPFuMh7mDIFLH6X3pPXUYTBC2h8Rvp_VL3_XEjPUZfxBPevQWESuVAgIkvcylz7aVjNtqvaDOoVZQ",
    bio: "Radical empathy as a tool for systemic cultural change, teaching us how to connect deeply in a disconnected digital age.",
  },
  {
    id: 4,
    name: "Kait Philp",
    initials: "KP",
    role: "Mental Health Advocate",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuABpzit3XIdyvF4sSYbyeHNVU_YdWOZqAGof7RiuJLDtFFfBpdGcnGKH2pT6Qj_mYB6D56sNy3xKhl6rhI8aA4joRcWrgntUIYgqbikFFKhGxdndUul6S3DXD130H_VkZRgOtY_P2blq0l0TogC728zikTKg5a1w43rUfnsmXbhJ0kQA4YmE0OY-QDj8jKMayEG7-kEd8Ez-a8s6gqzhKyHw2HQq8qL6VB_XzNtKucqcp_Svq0Hf_JiHQfA5tIWIcCORlPzfVcmMN8",
    bio: "De-stigmatizing the journey toward mental well-being through storytelling and shared experience.",
  },
  {
    id: 5,
    name: "Lauren Lasceski",
    initials: "LL",
    role: "Speaker",
    image: null, // Replace null with "/images/lauren.jpg" once you have a photo
    bio: "Bringing a powerful perspective to the TEDxCMICH stage in 2026.",
  },
  {
    id: 6,
    name: "Lisa Blosser",
    initials: "LB",
    role: "Speaker",
    image: null,
    bio: "Bringing a powerful perspective to the TEDxCMICH stage in 2026.",
  },
  {
    id: 7,
    name: "Zarinah El-Amin",
    initials: "ZE",
    role: "Speaker",
    image: null,
    bio: "Bringing a powerful perspective to the TEDxCMICH stage in 2026.",
  },
  {
    id: 8,
    name: "Holly Jones",
    initials: "HJ",
    role: "Speaker",
    image: null,
    bio: "Bringing a powerful perspective to the TEDxCMICH stage in 2026.",
  },
];

// ============================================================
//  DEPARTMENT LEADS (Meet the Leads section)
// ============================================================
export const leads = [
  {
    id: 1,
    name: "Carolina Hernandez Ruiz",
    initials: "CH",
    role: "Lead Organizer",
    image: null,
    bio: "Inspired by the first TEDx at CMICH, Carolina brought the event back — as Student Body President, she is the driving force behind this vision.",
  },
  {
    id: 2,
    name: "Aashka Barot",
    initials: "AB",
    role: "Speaker Curation",
    image: null,
    bio: "Dedicated to creating a platform that empowers speakers to inspire meaningful conversations and spark change across campus.",
  },
  {
    id: 3,
    name: "Sophia Laurain",
    initials: "SL",
    role: "Head of Operations",
    image: null,
    bio: "On her second year running Operations — now as Lead. Passionate about bringing large-scale intellectual experiences to our community.",
  },
  {
    id: 4,
    name: "Sakshi Rajput",
    initials: "SR",
    role: "Head of Outreach",
    image: null,
    bio: "Accounting and Finance student who leads Outreach to make TEDxCMICH visible and impactful across all campus networks.",
  },
  {
    id: 5,
    name: "Pratham Agarwal",
    initials: "PA",
    role: "Head of Marketing",
    image: null,
    bio: "CS and Data Science student passionate about building digital brand solutions that create real world impact through strategy.",
  },
];

// ============================================================
//  PLANNING COMMITTEE
//  Add/remove members freely — the UI auto-adjusts.
// ============================================================
export const committee = [
  {
    department: "Leadership",
    members: [
      {
        name: "Carolina Hernandez",
        initials: "CH",
        role: "Lead Organizer",
        image: null,
        bio: "Overseeing general strategy and organizational vision for the 2026 conference.",
      },
    ],
  },
  {
    department: "Curation",
    members: [
      {
        name: "Marcus Thorne",
        initials: "MT",
        role: "Speaker Curation",
        image: null,
        bio: "Scouting and preparing the intellectual voices for this year's stage.",
      },
      {
        name: "Sarah Lee",
        initials: "SL",
        role: "Content Lead",
        image: null,
        bio: "Developing script arcs and visual presentation narratives for all talks.",
      },
      {
        name: "Jason Wong",
        initials: "JW",
        role: "Research Lead",
        image: null,
        bio: "Fact-checking and refining the scientific basis of speaker proposals.",
      },
    ],
  },
  {
    department: "Operations",
    members: [
      {
        name: "David Ross",
        initials: "DR",
        role: "Logistics",
        image: null,
        bio: "Managing technical requirements and day-of-event production schedules.",
      },
    ],
  },
  {
    department: "Marketing",
    members: [
      {
        name: "Elena White",
        initials: "EW",
        role: "Creative Director",
        image: null,
        bio: "Defining the visual identity and aesthetic language of the 2026 event.",
      },
      {
        name: "Nina Kim",
        initials: "NK",
        role: "Social Media",
        image: null,
        bio: "Driving community engagement and digital storytelling across platforms.",
      },
    ],
  },
];

// ============================================================
//  ARCHIVE — past events, newest first
//  soldOut: true shows the red SOLD OUT badge
// ============================================================
export const archive = [
  {
    year: 2025,
    theme: "Navigating the Unknown",
    description:
      "Our second year challenged the boundaries of comfort and certainty, bringing together thinkers who explored the void of the future at Central Michigan University's French Auditorium.",
    soldOut: true,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBKj7mTSaJ95wpmctFofJv-gtbeloi4QDfNSjpR_GvSf2C9luejRmLu7_nakx6lm-yeOxuOMm_vIoa0u7Wes9sucGIOesl80VdhwGceS1u4fiEEV_1oHkl1wVL3tsXyBY-557ZEdnbXnQ1pJOyZ-rfCtWnneSAtA-waLSJ9nrLJiq3Q96mZZ97HS3cQwieylTKEyyNOnnR9aswOd21MuZ4nYQ4tuwT1agH_uXxqpTbMYyyJgBAzkvcLsAq0Z364gXfAzPvawGOSxP0",
  },
  {
    year: 2023,
    theme: "Inaugural",
    description:
      "The dawn of TEDx at Central Michigan University. Setting the standard for intellectual curiosity and storytelling in Mt. Pleasant.",
    soldOut: false,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDpvl0s8nTzJsg5Ki3mFbyk_LMqWa90J2l9_uyVQMCkRhNLpU-11_A2b1Rc6q_VGrZj_glRwIIm4N95n_fobvqeiGAov0hKN4S5QeDC_uL416tz6malzc_QW2o6jibJz0WVG_Eu7Pi384ekaRb165qr9FEnK0COMIKpHbgeka1TwNtnjyfLGSJuQDivkeq6qQ5yxLMyNYXLCTAKvV8CeM5fJpu9KECAZfMCFgtygnu-oHqAcX4MyDbNlJ5kbUiU322lSvVbVUDXftg",
  },
];
