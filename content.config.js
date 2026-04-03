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
    role: "Entrepreneur & Innovator",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAA6Tmn5yXMEnd2ARo2iFOt2S7JHJ68tqLnf9ptNGZlwjGDJCol8Sh4TwgzgJu3Z247AEGJpOoQO8-O-OpO1wXI4f61Q3UkzZ96zZvMVHWBnugHqg8FRfrKHv0b0lT1NC-hr7VhQ7H9pQrYRFA6qFAr8JJ6EB61GW6UrSj9D6ZAw4wSUfvodJ2eDTRen88RGhvWRfE5nvqlkhF0vUn6A9-getizJaNday8yPGDN6v2VrHQSIacNLWIcFJDQo7jlct-A6lDydVsZiW8",
    bio: "At 21, Dr. Cleamon Moorer Jr. was legally blind. A community paid for the surgery that restored his sight — and his mother's dying words sealed the rest: \"Promise me you'll give back.\" He's spent 25 years keeping that promise. Founding Executive Director of Eye Care for Michigan, CEO of American Advantage Home Care, and inventor of horEYESontal.ai — an AI platform that detects early markers for Alzheimer's through a routine eye exam — Dr. Moorer returns to the TEDx stage with a decade more of promises delivered.",
  },
  {
    id: 2,
    name: "Jeannine Rashidi",
    initials: "JR",
    role: "Doctor of Ayurveda",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB80fH_He6uX7B6WwHQ6hm4zmx8Q22pH2swwd1FPCZSFTtVTUi2xnS1z5I4aKg53rrkIGrLpPz1rr51ddymC6HHDBKpErtY1oxTrVdNhfkNVFZ_VAp7Vd5hdGGv6w8QWqBNpHY7bb-tO-JVBHs4XtF5FTAd-b6HT-dJLcyu77ItDYpSLDABIgNmf5QbO3vu3GJWh3cr9TpPqnYxa9tfy-6pxSoIAwtpZ0g1_5zHmdRZrsH3ZvMlU5_58CoWSSgUcSnUZWBGcE0Bklg",
    bio: "Jeannine Rashidi scored a 10 out of 10 on the Adverse Childhood Experiences scale — and turned that pain into a life's mission. A Doctor of Ayurveda, international speaker, and creator of the EDHIR® Process, she has spent over 20 years helping people break cycles of trauma and reconnect with joy. Her work lives at the intersection of neuroscience, mind-body healing, and the deeply human need to stop asking \"why me\" and start moving forward.",
  },
  {
    id: 3,
    name: "Joseph Cope",
    initials: "JC",
    role: "The Empathy Guy",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPv90v18XxmXv8g-6CsyI_dR9Z8VQKmidjZRCHk2hW4NFnLNpE1tHPIgaTTt3uUG0NQ0DvEkyVTAiHC497pEoRmp2A7V00qzItI3g33-WrkBZSM8AMVg_UXy39CC9PzgrK6ks87W6PNZ72cXRFdQtjHHNsWYtLQkvyK8qiVLKT3qRLbYdITYUIgaH3NF82lShPFuMh7mDIFLH6X3pPXUYTBC2h8Rvp_VL3_XEjPUZfxBPevQWESuVAgIkvcylz7aVjNtqvaDOoVZQ",
    bio: "Joseph Cope built his reputation on a radical idea: empathy isn't soft — it's the hardest and most transformative leadership skill there is. A keynote speaker, workshop facilitator, and author, he has traveled from award-winning educator to one of the most sought-after voices on human connection. Spend any time with Joseph and you leave with one clear conviction — the space you create for others begins with the space you create for yourself.",
  },
  {
    id: 4,
    name: "Kait Philp",
    initials: "KP",
    role: "Mental Health Advocate",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuABpzit3XIdyvF4sSYbyeHNVU_YdWOZqAGof7RiuJLDtFFfBpdGcnGKH2pT6Qj_mYB6D56sNy3xKhl6rhI8aA4joRcWrgntUIYgqbikFFKhGxdndUul6S3DXD130H_VkZRgOtY_P2blq0l0TogC728zikTKg5a1w43rUfnsmXbhJ0kQA4YmE0OY-QDj8jKMayEG7-kEd8Ez-a8s6gqzhKyHw2HQq8qL6VB_XzNtKucqcp_Svq0Hf_JiHQfA5tIWIcCORlPzfVcmMN8",
    bio: "Kait Philp knows that mental health care doesn't begin in a crisis — it begins in the everyday moments that make people feel seen. A CMU graduate student in clinical mental health counseling, first-generation college student, and creator of Flourish, a guided wellness journal, she brings both lived experience and professional training to her advocacy. Her work centers on community and belonging as the quiet infrastructure that holds us together before we ever fall apart.",
  },
  {
    id: 5,
    name: "Lauren Lasceski",
    initials: "LL",
    role: "Engineer & Mentor",
    image: null, // Replace null with "/images/lauren.jpg" once you have a photo
    bio: "Lauren Lasceski is a mechanical engineer who never lost sight of the human on the other side of the design. A Division I student-athlete at CMU, mentor, and guest lecturer, she believes that thoughtful engineering is an act of care — ensuring that the people we love come home safely. Through storytelling and community outreach, she carries a message that resonates far beyond any blueprint: resilience, purpose, and the power of showing up for others.",
  },
  {
    id: 6,
    name: "Lisa Blosser",
    initials: "LB",
    role: "Executive Coach",
    image: null,
    bio: "Lisa Blosser was living the dream — flying the world, coaching executives, shaping organizations — until she realized she was breaking under the very patterns she had been celebrated for. That reckoning became her lens. Today she works with founders and leadership teams to surface the invisible dynamics that keep them stuck: the unspoken agreements, inherited roles, and subtle choreography that high performance hides behind. Her gift is naming what others can't quite see — and helping leaders unbind what's old so something new can emerge.",
  },
  {
    id: 7,
    name: "Zarinah El-Amin",
    initials: "ZE",
    role: "Cultural Anthropologist",
    image: null,
    bio: "Zarinah El-Amin left a path in computer science to spend her life doing something harder: helping people preserve the stories that make them who they are. A cultural anthropologist, author, and founder of Legacy Storykeepers, she has guided individuals around the world in documenting their histories before they are lost to time. Her work expands the definition of legacy beyond wealth — into wisdom, memory, and the lived experience we owe to the generations that follow.",
  },
  {
    id: 8,
    name: "Holly Jones",
    initials: "HJ",
    role: "Sobriety Advocate",
    image: null,
    bio: "Holly Jones is a wife, a mother of two, and a woman who rebuilt her life from the inside out. Nearly four years ago she chose sobriety — and what started as a personal decision became a window into something much larger: a quiet cultural shift of people rethinking their relationship with alcohol and rewriting what it means to connect, celebrate, and cope. Through honesty, humor, and raw storytelling, Holly's message cuts through the noise. It's not about perfection. It's about presence.",
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
