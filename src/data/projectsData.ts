export interface ProjectData {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  logo?: string;
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
          caption: "Profile Preview System",
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
  {
    id: 2,
    title: "NickWatch",
    description:
      "A children's smartwatch with interactive games and activities featuring Nickelodeon characters like SpongeBob and TMNT, combining accelerometer-based entertainment with safety features.",
    tags: ["Unity", "C#", "Wearables", "Game Development", "QA", "Localization", "Performance"],
    image: "/projects/nickwatch/banner.png",
    logo: "/projects/nickwatch/logo.png",
    links: {
      youtube: "https://www.youtube.com/watch?v=X5ki4-8Y4IE",
      live: "https://www.nickwatch.com/",
    },
    content: {
      overview: [
        "NickWatch is a children's smartwatch developed by Rimon Studio for Nickelodeon, featuring games and activities with popular characters like SpongeBob SquarePants and the Teenage Mutant Ninja Turtles. It combines accelerometer-based entertainment with safety features, allowing for two-way voice communication and approved contact management.",
        "As the initial QA technician for NickWatch, I conducted comprehensive manual and automated tests, setting the foundation for the QA process and later training new technicians. I then transitioned to a developer role where I created two games from scratch and optimized existing ones, enhancing performance by 20-30% throughout the Play app.",
        "My technical contributions spanned multiple critical systems: dynamic localization across eleven languages (including RTL support for Arabic and Hebrew), a sophisticated haptics feedback system used in every game, an internal analytics system that enabled data-driven improvements, and various innovative features like the Sprite Randomizer and Fidgets mini-app.",
      ],
      keyFeatures: [
        "Developed two complete games: Piñata (accelerometer-based) and Tunnel Runner (complete overhaul)",
        "Performance optimization achieving 20-30% CPU usage reduction across most games",
        "Dynamic localization system supporting 11 languages with full RTL support",
        "Sophisticated haptic feedback system with amplitude simulation through on-off patterns",
        "Internal analytics system tracking gameplay data and player progression",
        "Quest system to boost engagement and encourage game exploration",
        "Sprite/Color randomization system for dynamic 2D art variety",
        "Fidgets mini-app with multiple stress-relief microgames",
        "Story/Daily Fun Fact narration system with dynamic content management",
        "Avatar Creator with modular 2D layering and cloud-based asset integration",
      ],
      technicalHighlights: [
        "Engineered accelerometer-based swing detection for Piñata game with nuanced force response",
        "Implemented frame-perfect collision detection using tweens for Tunnel Runner's obstacle system",
        "Created TextByLanguage editor tool for real-time language-specific text property adjustments",
        "Developed TMP serializer to convert TextMeshPro components to RTL-compatible versions",
        "Developed sophisticated haptic feedback system with amplitude simulation using on-off vibration patterns to overcome hardware limitations",
        "Built analytics system with minimal coupling, supporting generalized scoring across different game types",
        "Designed modular avatar system with automated layer sorting and dynamic asset fetching",
        "Optimized games using Unity Profiler and on-device testing, improving battery life and reducing heat",
        "Created content management system for stories/facts with designer-friendly configuration files",
        "Implemented circular smartwatch UI layouts optimized for tiny form factors",
      ],
      myRole: [
        "Started as the initial QA technician, establishing comprehensive testing processes and training new team members",
        "Transitioned to developer role, creating Piñata and completely overhauling Tunnel Runner game",
        "Led performance optimization efforts across all games, achieving 20-30% CPU usage improvements",
        "Managed and mentored a junior developer while maintaining hands-on development work",
        "Spearheaded dynamic localization implementation for 11 languages with custom Unity editor tools",
        "Developed the haptic feedback system used throughout the entire application",
        "Built the Avatar Creator system with modular layer management and designer-friendly workflows",
        "Developed internal analytics system that laid groundwork for the Quest system",
        "Created Sprite Randomizer for dynamic visual variety in the Fidgets mini-app",
        "Built Story/Fun Fact content management system with designer-friendly workflows",
        "Collaborated extensively with art, design, and sound teams to refine animations and effects",
      ],
    },
    media: {
      showcaseVideos: [
        {
          src: "/projects/nickwatch/ninja-school.mp4",
          caption: "Ninja School Gameplay",
        },
        {
          src: "/projects/nickwatch/shake.mp4",
          caption: "Shake Game Interaction",
        },
        {
          src: "/projects/nickwatch/text-properties.mp4",
          caption: "Dynamic Localization System - TextByLanguage Editor",
        },
      ],
    },
  },
];
