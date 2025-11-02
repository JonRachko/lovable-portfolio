export interface ProjectData {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  links: {
    playStore?: string;
    appStore?: string;
    youtube?: string;
    github?: string;
    live?: string;
  };
  content: {
    overview: string[];
    keyFeatures: string[];
    technicalHighlights: string[];
    myRole: string[];
  };
  media: {
    mainVideo?: string;
    showcaseVideos?: {
      src: string;
      caption: string;
    }[];
  };
}

export const projectsData: ProjectData[] = [
  {
    id: 1,
    title: "Nick Academy",
    description:
      "An educational adventure game for children featuring interactive lessons, mini-games, and engaging storytelling across multiple subjects.",
    tags: ["Unity", "C#", "Mobile", "Educational", "UI/UX", "Localization"],
    image: "/projects/nick-academy/banner.png",
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.KFFE.NickAcademy&pcampaignid=web_share",
      youtube: "https://www.youtube.com/watch?v=xsW3PM5whWg",
    },
    content: {
      overview: [
        "Nick Academy is an educational adventure game developed by the Kaplan Foundation for Equity in Education (KFEE). As a Junior Unity Programmer, I contributed to creating an engaging learning experience for children through interactive lessons, mini-games, and storytelling.",
        "The app features 8 comprehensive lessons across multiple subjects, 5 unique mini-games, and a dialogue system that brings characters to life. Available in English, Arabic, and Hebrew with full RTL support.",
        "The game combines education with entertainment, allowing children to explore a vibrant academy while learning through play. Each lesson is carefully designed to be both educational and engaging, with progress tracking and profile customization.",
      ],
      keyFeatures: [
        "8 interactive lessons across multiple subjects (Science, Math, Language Arts, and more)",
        "5 unique educational mini-games with increasing difficulty levels",
        "Multi-language support: English, Arabic, and Hebrew with full RTL support",
        "Profile customization system with avatars and user preferences",
        "Dynamic adventure progression with conditional content based on lesson completion",
        "Comprehensive UI systems for lessons, mini-games, and navigation",
        "Cloud save functionality for progress tracking across devices",
      ],
      technicalHighlights: [
        "Implemented a robust dialogue system, managing branching conversations and character interactions",
        "Developed complex UI systems for lessons and mini-games with responsive layouts optimized for various mobile devices",
        "Created an adventure panel system with conditional content display based on player progress",
        "Built a comprehensive profile management system including avatar customization and user settings",
        "Implemented full localization system supporting RTL languages (Arabic, Hebrew) with proper text alignment and UI mirroring",
        "Optimized performance for mobile platforms ensuring smooth gameplay on low-end devices",
        "Integrated cloud save system for seamless progress synchronization",
      ],
      myRole: [
        "Developed and integrated the DialogueSystem, enabling writers to create branching narratives without code modifications",
        "Designed and implemented the profile management system including avatar selection, customization options, and user preferences",
        "Created the adventure progression system that dynamically unlocks content based on lesson completion",
        "Built UI systems for multiple mini-games and interactive lessons, ensuring intuitive and child-friendly interfaces",
        "Implemented the localization framework supporting three languages with full RTL support for Arabic and Hebrew",
        "Collaborated with artists and game designers to integrate assets and ensure visual consistency across the application",
        "Participated in code reviews and maintained clean, documented code following Unity best practices",
      ],
    },
    media: {
      mainVideo: "/projects/nick-academy/main-video.mp4",
      showcaseVideos: [
        {
          src: "/projects/nick-academy/adventure-1.mp4",
          caption: "Adventure Mode - Exploring the Academy",
        },
        {
          src: "/projects/nick-academy/adventure-dialogues.mp4",
          caption: "Dialogue System",
        },
        {
          src: "/projects/nick-academy/corridor-flow.mp4",
          caption: "Navigation and Level Flow",
        },
        {
          src: "/projects/nick-academy/profile-panel.mp4",
          caption: "Profile Customization System",
        },
        {
          src: "/projects/nick-academy/screen-swap.mp4",
          caption: "UI Transitions and Screen Management",
        },
        {
          src: "/projects/nick-academy/space-lesson.mp4",
          caption: "Interactive Science Lesson - Space",
        },
      ],
    },
  },
];
