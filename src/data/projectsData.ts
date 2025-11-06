export interface ProjectData {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  logo?: string;
  awards?: {
    name: string;
    badge?: string;
    link?: string;
  }[];
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
      mask?: string;
    }[];
    showcaseImages?: {
      src: string;
      caption: string;
      link?: string;
    }[];
    showcaseImageGroups?: {
      title: string;
      images: {
        src: string;
        caption: string;
        link?: string;
      }[];
    }[];
  };
}

export const projectsData: ProjectData[] = [
  {
    id: 1,
    title: "Rimon Studio — Nick Academy",
    description:
      "An educational game platform for children featuring interactive lessons, mini-games, and engaging storytelling across multiple subjects.",
    tags: ["Unity", "C#", "Mobile", "Educational", "UI/UX", "Localization"],
    image: "/projects/nick-academy/banner.png",
    awards: [
      {
        name: "GESA People's Choice Award Winner",
        badge: "/projects/nick-academy/gesa-award.png",
        link: "https://www.globaledtechawards.org/copy-of-2023-winners",
      },
    ],
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.KFFE.NickAcademy&pcampaignid=web_share",
      youtube: "https://www.youtube.com/watch?v=xsW3PM5whWg",
    },
    content: {
      overview: [
        "Nick Academy is an game platform developed in Rimon Studio by the sister company KFEE. Winner of the GESA People's Choice Award, this project demonstrates excellence in educational game design and user engagement.",
        "As a Junior Unity Programmer, I contributed to creating an engaging learning experience for children through minigames, animations and the Adventures feature. The app features comprehensive lessons across multiple subjects, unique mini-games, avatar customization and much more. Available in English, Arabic, and Hebrew with full RTL support.",
        "The platform combines education with entertainment, allowing children to learn important STEM subjects while playing and exploring the Nickelodeon universe. Each lesson is carefully designed to be both educational and engaging, with progress tracking and increasing difficulties that go side-by-side with the topics learned in the lessons",
      ],
      keyFeatures: [
        "Interactive lessons across multiple subjects (Science, Math, Space and Coding)",
        "5 Unique educational mini-games with increasing difficulty levels",
        "Multi-language support: English, Arabic, and Hebrew with full RTL support",
        'Special Adventure "Escape Room"-like games that use learned knowledge in order to solve puzzles',
        "Comprehensive UI systems for lessons, mini-games, navigation, dialogue, and more",
        "Cloud save functionality for progress tracking across devices",
      ],
      technicalHighlights: [
        'Developed a robust Adventure game - an "Escape Room" minigame, complete with a level editor and a dialogue system',
        "Developed complex UI systems for lessons and mini-games with responsive layouts optimized for various mobile devices",
        "Created a unique profile panel to display the players achievements and avatar",
        "Implemented full localization system supporting RTL languages (Arabic, Hebrew) with proper text alignment and UI mirroring",
        "Optimized performance for mobile platforms ensuring smooth gameplay on low-end devices",
        "Integrated seamless screen-switching animation system for smooth transitions and no loading times",
        "Added and edited countless effects and animations using code, particle effects and shaders to make a satisfying user experience across the platform",
      ],
      myRole: [
        "Developed and integrated the Adventure games",
        "Designed and implemented the profile management system including avatar selection and displaying user achievements",
        "Created a system for seamless navigation across the platform",
        "Built UI systems for lessons, minigames and popups",
        "Implemented the localization framework supporting three languages with full RTL support for Arabic and Hebrew",
        "Designed and implemented animations, procedural content and menus",
        "Collaborated with artists and game designers to integrate assets and ensure visual consistency across the application",
        "Participated in code reviews, managed the git repository and maintained clean, documented code following Unity best practices",
        "Performed and later managed quality assurance throughout the application",
      ],
    },
    media: {
      mainVideo: "/projects/nick-academy/main-video.mp4",
      showcaseVideos: [
        {
          src: "/projects/nick-academy/adventure-1.mp4",
          caption: "Adventure Game - Loud Lab",
        },
        {
          src: "/projects/nick-academy/adventure-dialogues.mp4",
          caption: "Dialogue System",
        },
        {
          src: "/projects/nick-academy/corridor-flow.mp4",
          caption: "Navigation and Screen Flow",
        },
        {
          src: "/projects/nick-academy/profile-panel.mp4",
          caption: "Profile Panel",
        },
        {
          src: "/projects/nick-academy/screen-swap.mp4",
          caption: "Screen Transitions",
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
    title: "Rimon Studio — NickWatch",
    description:
      "A children's smartwatch with interactive games and activities featuring Nickelodeon characters like SpongeBob and TMNT, combining accelerometer-based entertainment with safety features.",
    tags: ["Unity", "C#", "Wearables", "Game Development", "QA", "Localization", "Performance"],
    image: "/projects/nickwatch/NickWatch_Banner.png",
    awards: [
      {
        name: "RedDot Design Award Winner 2024",
        badge: "/projects/nickwatch/reddot-winner-2024.png",
        link: "https://www.red-dot.org/project/nickwatch-68476",
      },
    ],
    links: {
      youtube: "https://www.youtube.com/watch?v=X5ki4-8Y4IE",
      live: "https://www.nickwatch.com/",
    },
    content: {
      overview: [
        "NickWatch is a children's smartwatch developed by Rimon Studio for Nickelodeon, featuring games and activities with popular characters like SpongeBob SquarePants and the Teenage Mutant Ninja Turtles. Winner of the RedDot Design Award 2024, this innovative wearable combines accelerometer-based entertainment with safety features, allowing for two-way voice communication and approved contact management.",
        "As the initial QA technician for NickWatch, I conducted comprehensive tests, setting the foundation for the QA process and later training new technicians. I then transitioned to a developer role where I created two games from scratch and optimized existing ones, enhancing performance by 20-30% throughout the Play app.",
        "My technical contributions spanned multiple critical systems: dynamic localization across eleven languages (including RTL support for Arabic and Hebrew), a sophisticated haptics feedback system used in every game, an internal analytics system that enabled data-driven improvements, and various innovative features and apps.",
      ],
      keyFeatures: [
        "Developed two complete games: Piñata (accelerometer-based) and Tunnel Runner (complete overhaul)",
        "Performance optimization achieving 20-30% CPU usage reduction across most games",
        "Dynamic localization system supporting 11 languages with full RTL support",
        "Sophisticated haptic feedback system with amplitude simulation through on-off patterns",
        "Internal analytics system tracking gameplay data and player progression",
        "Quest system to boost engagement and encourage game exploration",
        "Fidgets mini-app with multiple stress-relief microgames",
        "Story/Daily Fun Fact narration system with dynamic content management",
        "Avatar Creator with modular 2D layering and cloud-based asset integration",
      ],
      technicalHighlights: [
        "Engineered accelerometer-based swing detection for Piñata game with nuanced force response",
        "Implemented frame-perfect collision detection using tweens for Tunnel Runner's obstacle system",
        "Created Text-By-Language editor tool for real-time language-specific text property adjustments",
        "Developed sophisticated haptic feedback system with amplitude simulation using on-off vibration patterns to overcome hardware limitations",
        "Built analytics system with minimal coupling, supporting generalized scoring across different game types",
        "Designed modular avatar system with automated layer sorting and dynamic asset fetching",
        "Optimized games using Unity Profiler and on-device testing, improving battery life and reducing heat",
        "Created content management system for stories/facts with designer-friendly configuration files",
        "Implemented circular smartwatch UI layouts optimized for tiny form factors",
      ],
      myRole: [
        "Started as the initial QA technician, establishing comprehensive testing processes and training new team members",
        "Led end-to-end development of multiple games, combining hands-on programming with creative direction and cross-team coordination across art and sound.",
        "Led performance optimization efforts across all games, achieving 20-30% CPU usage improvements",
        "Managed and mentored a junior developer while maintaining hands-on development work",
        "Developed a dynamic localization implementation system for 11 languages with custom Unity editor tools",
        "Developed the haptic feedback system used throughout the entire application",
        "Built the Avatar Creator system with modular layer management and designer-friendly workflows",
        "Developed internal analytics system that laid groundwork for the Quest system",
        "Created internal tools for designers and artists",
        "Built Story/Fun Fact content management system with designer-friendly workflows",
        "Collaborated extensively with art, design, and sound teams to refine animations and effects",
      ],
    },
    media: {
      showcaseVideos: [
        {
          src: "/projects/nickwatch/avatar.mp4",
          caption: "Avatar Creator - Circular Smartwatch UI",
          mask: "/projects/nickwatch/watch-mask.png",
        },
        {
          src: "/projects/nickwatch/ninja-school.mp4",
          caption: "Ninja School Gameplay",
        },
        {
          src: "/projects/nickwatch/shake.mp4",
          caption: "Shake Gameplay",
        },
        {
          src: "/projects/nickwatch/text-properties.mp4",
          caption: "Dynamic Localization System - Text-By-Language Editor",
        },
        {
          src: "/projects/nickwatch/tunnel-runner.mp4",
          caption: "Tunnel Runner Gameplay",
        },
      ],
    },
  },
  {
    id: 3,
    title: "Surgical Science — VR Medical Simulation",
    description:
      "A VR first-responder simulation training medical professionals in real-time emergency procedures, integrating physical sensors with an interactive 3D environment.",
    tags: ["Unity", "C#", "VR", "Animation", "Medical Simulation", "Hardware Integration"],
    image: "/projects/surgical-science/simulator-preview.png",
    links: {
      live: "https://vimeo.com/1080810960?fl=pl&fe=sh",
    },
    content: {
      overview: [
        "Simbionix (a Surgical Science company) develops advanced medical training simulations. During my time there, I contributed to a VR first-responder simulation project designed to train paramedics and doctors in real-time field emergency procedures. The system integrated physical sensors and a mannequin with a fully interactive 3D environment, providing realistic feedback and situational accuracy.",
        "I was responsible for designing and implementing a modular humanoid animation system that allowed the virtual medic to respond dynamically to real-world sensor data and the users themselves. The system blended animated and procedural motion using Unity's animation rigging tools, ensuring natural interaction between the virtual medic, virtual patient, the users, and instruments.",
        "I collaborated closely with the animation team to define the animation pipeline and create consistent motion logic—determining pivot points, blending layered animations, and maintaining physical realism during complex scenarios.",
      ],
      keyFeatures: [
        "Real-time VR simulation for first-responder emergency training",
        "Integration of physical sensors with mannequin hardware",
        "Interactive 3D environment with realistic medical scenarios",
        "Dynamic virtual medic responses synchronized with real-world actions",
        "Modular humanoid animation system with procedural motion blending",
      ],
      technicalHighlights: [
        "Created a real-time animation controller that synchronized the virtual medic's posture and actions with external hardware sensors",
        "Implemented adaptive behaviors to maintain realism - e.g., transitioning from leaning to walking when tools moved beyond reach, and adjusting arm, shoulder, and body motion in response to tool orientation",
        "Built the system for extensibility, supporting multiple animation states and override conditions without manual retargeting",
        "Utilized Unity's animation rigging tools to blend animated and procedural motion naturally",
        "Collaborated with animation team to establish consistent motion logic and physical realism standards",
      ],
      myRole: [
        "Designed and implemented the modular humanoid animation system for the virtual medic",
        "Created real-time animation controller synchronizing virtual actions with physical sensor data",
        "Developed adaptive behavior system maintaining realism across complex medical scenarios",
        "Collaborated with animation team to define the animation pipeline and motion logic",
        "Built extensible architecture supporting multiple animation states without manual retargeting",
        "Ensured natural blending between animated and procedural motion using Unity's rigging tools",
      ],
    },
    media: {},
  },
  {
    id: 4,
    title: "TEMA Creative — Discover the Collections",
    description:
      "An interactive digital installation helping visitors explore and visually connect artworks and artifacts through human- and AI-curated keywords.",
    tags: ["Unity", "C#", "Interactive Installation", "Runtime Data Handling", "Museum", "Touch Interface"],
    image: "/projects/tema-creative/dtc.png",
    links: {
      live: "https://www.temacreative.com/temacreative-theisraelmuseum",
    },
    content: {
      overview: [
        "Discover the Collections is an interactive installation that enables visitors to browse the museum’s hidden archives and uncover relationships between thousands of artworks through AI-curated keywords. Built for large-scale touch displays, it presents continuously moving image grids and real-time transitions for a smooth, responsive exploration experience.",
        "As the project's sole Unity developer, I was responsible for building the entire interactive application — from runtime handling of thousands of connections to user interaction and motion design. Working closely with the curators, art director, CEO and CTO, I ensured that the artistic vision was faithfully represented while maintaining demanding technical performance.",
        "Implemented a custom animation and input framework to maintain seamless visual motion and interaction responsiveness under heavy runtime data loads.",
      ],
      keyFeatures: [
        "Real-time relational sorting system processing tens of thousands of keyword–image connections per interaction",
        "Dynamic visualization of museum collection with semantic links between artworks",
        "Large touch screen interface optimized for multiple users and constant runtime",
        "Seamless performance with background loading and coroutine-based optimization",
        "Custom shader design for enhanced image presentation",
        "Permanent installation running continuously at the Israel Museum in Jerusalem",
      ],
      technicalHighlights: [
        "Developed a real-time relational sorting system that efficiently processed tens of thousands of keyword–image connections per interaction",
        "Designed a custom shader to enhance image presentation, contributing to the exhibit's cohesive artistic identity",
        "Engineered background loading and coroutine-based optimization, enabling seamless performance with no visible lag or loading times",
        "Built the entire Unity application architecture, integrating the visual design, input system, and data management pipeline",
        "Collaborated with curators, art director, and CEO to faithfully represent artistic vision while maintaining technical performance",
	"Participated in artistic decision-making processes and delivered the artistic vision of the project"
      ],
      myRole: [
        "Served as the sole Unity developer responsible for the entire interactive application",
        "Built complete application from large scale real-time data handling user interaction and motion design",
        "Designed and implemented real-time sorting and visual representation of artwork relationships",
        "Created custom shaders to enhance image presentation and artistic identity",
        "Optimized performance with background loading and coroutine-based systems to ensure smooth, constant performance",
        "Collaborated closely with curators, art director, and CEO to align technical implementation with artistic vision",
        "Delivered permanent installation that runs continuously as part of the museum's visitor experience",
      ],
    },
    media: {
      showcaseImages: [
        {
          src: "/projects/tema-creative/dtc-2.jpg",
          caption: "Visitors exploring the interactive installation",
        },
        {
          src: "/projects/tema-creative/dtc-live.gif",
          caption: "Live Installation at Israel Museum",
        },
        {
          src: "/projects/tema-creative/dtc-1.png",
          caption: "Interactive visualization of museum collections",
        },
        {
          src: "/projects/tema-creative/keyword-showcase.gif",
          caption: "Keyword-based visual exploration system in action",
        },
        {
          src: "/projects/tema-creative/me-pointing-1.jpg",
          caption: "Close-up of me pointing at the installation",
        },
        {
          src: "/projects/tema-creative/me-pointing-2.jpg",
          caption: "Long shot of me pointing at the installation",
        },
      ],
    },
  },
  {
    id: 5,
    title: "Utah Tech Labs — Mobile Games",
    description:
      "A collection of three mobile applications developed during my first role out of college: Cure Commando (time management game), DotBot (3D puzzle platformer), and Makeover Plus (photo styling app).",
    tags: ["Unity", "C#", "Mobile", "Game Development", "Level Design", "UI/UX"],
    image: "/projects/utah-tech-labs/cure-commando.png",
    links: {},
    content: {
      overview: [
        "Utah Tech Labs was my first professional role straight out of college. Our small team in Lithuania was tasked with developing mobile games, and in just under 4 months, we successfully released two games with a third in development.",
        "Working as the lead programmer on these projects, I was responsible for all programming aspects, from core gameplay mechanics to UI systems and level editors. This experience taught me the importance of rapid development, scalability, and creating tools that empower the entire team.",
      ],
      keyFeatures: [
        "Cure Commando: Fast-paced resource management game where players control a hazmat team to cleanse a city from a viral outbreak",
        "DotBot: Innovative 3D puzzle platformer where players program a robot to navigate through various challenges",
        "Makeover Plus: Photo styling app with drag-and-drop customization for clothing, hair, accessories, and more",
        "Custom level editors for both Cure Commando and DotBot enabling rapid content creation",
        "Scalable architecture allowing easy additions and modifications for future updates",
        "Optimized mobile performance across all three applications",
      ],
      technicalHighlights: [
        "Developed complete game programming for Cure Commando as sole programmer, implementing resource management mechanics, internal tools for level creation and testing, and complex user interface solutions",
        "Created intuitive level editors for both Cure Commando and DotBot, facilitating quick and creative level designs",
        "Built DotBot's core programming mechanics allowing players to code robot behavior with adjustable movement, jumping, and timing",
        "Implemented Makeover Plus's photo capture system and drag-and-drop interface for real-time customization",
        "Designed all three games with scalability in mind, enabling seamless content additions post-release",
        "Managed rapid development cycles across multiple projects using agile methodologies",
        "Optimized performance for various mobile devices ensuring smooth gameplay experiences",
      ],
      myRole: [
        "Lead Programmer for Cure Commando: Solely responsible for all game programming, ensuring smooth gameplay and strategic resource management mechanics",
        "Lead Programmer for DotBot: Handled complete programming implementation, crafting core mechanics and puzzle-solving logic",
        "Initial Programmer for Makeover Plus: Laid foundational groundwork for UI and core functionality before transitioning to other team members",
        "Developed custom level editors and internal tools for multiple games, empowering designers to create diverse content without code modifications",
        "Implemented photo capture and manipulation systems for Makeover Plus, including drag-and-drop customization",
        "Ensured visual appeal and interactive ease across all projects, enhancing player experience",
        "Built scalable architectures supporting future content additions and feature expansions",
      ],
    },
    media: {
      showcaseVideos: [
        // Placeholder for videos to be added later
      ],
      showcaseImages: [
        {
          src: "/projects/utah-tech-labs/cure-commando.png",
          caption: "Cure Commando - Time Management Game",
          link: "https://play.google.com/store/apps/details?id=com.UtahTechLabs.CureCommando&pcampaignid=web_share",
        },
        {
          src: "/projects/utah-tech-labs/dotbot.png",
          caption: "DotBot - 3D Puzzle Platformer",
          link: "https://play.google.com/store/apps/details?id=com.UtahTechLabs.DotBot&pcampaignid=web_share",
        },
        {
          src: "/projects/utah-tech-labs/makeover-plus.png",
          caption: "Makeover Plus - Photo Styling App",
          link: "https://play.google.com/store/apps/details?id=com.UtahTechLabs.MakeoverPlus&pcampaignid=web_share",
        },
      ],
    },
  },
  {
    id: 6,
    title: "Game Jams",
    description:
      "Two award-winning game jam submissions: Major Doctor Bing Bong (GGJ 2024, IAC 1st place) and SIDE EFFECTS (GMTK 2025, Top 20 globally).",
    tags: ["Unity", "C#", "Game Jam", "Rapid Prototyping", "Team Collaboration", "Shaders"],
    image: "/projects/game-jams/major-doctor-bing-bong-cover.png",
    links: {},
    content: {
      overview: [
        "Game jams have always been a core part of my development as a game developer, giving me the opportunity to participate in a full game's lifecycle in just a couple of days at a time. These are unique challenges that I learn from every time I participate in one, and most importantly - they're fun!
Here I'm showcasing 2 prize winning game jam submissions I was lucky enough to be a part of: Major Doctor Bing Bong, and SIDE EFFECTS. Most of the other game jam submissions are on my itch.io page.",
        "Major Doctor Bing Bong (Global Game Jam 2024) won 1st place at the IAC for the 'Make Me Laugh' theme. As lead programmer, I designed a modular architecture that allowed our team to independently develop and integrate multiple minigames into a cohesive time management experience.",
        "SIDE EFFECTS (GMTK Game Jam 2025) achieved Top 20 globally out of just under 10,000 entries for the 'Loop' theme. Taking a production-focused role, I coordinated between programming, art, and design teams while contributing some of the core functionalities, particle effects and custom shaders.",
      ],
      keyFeatures: [
        "Major Doctor Bing Bong: Fast-paced time management game with multiple condition-specific minigames",
        "SIDE EFFECTS: Rubik's Cube-inspired puzzle game where each face applies environmental effects to objects",
        "Modular architecture enabling parallel development of independent game systems",
        "Custom shaders and particle effects creating cohesive visual identity",
        "Rapid prototyping and iteration",
        "Team collaboration with developers, artists, and designers",
      ],
      technicalHighlights: [
        "Major Doctor Bing Bong: Designed core architecture allowing minigames to be developed and integrated independently into main gameplay loop",
        "Major Doctor Bing Bong: Handled animation setup and technical art direction, supporting the game's playful and humorous atmosphere",
        "SIDE EFFECTS: Created particle effect systems that enhanced visual feedback and game feel",
        "SIDE EFFECTS: Focused on clean, readable, modular code that harmonized contributions from multiple developers",
        "SIDE EFFECTS: Coordinated programming team efforts, ensuring code cohesion across unfamiliar team members",
        "Both projects: Delivered polished, engaging games under game jam timelines",
      ],
      myRole: [
        "Major Doctor Bing Bong (GGJ 2024) - Lead Programmer: Designed modular game architecture, implemented user interfaces and assisted with other's code",
        "Major Doctor Bing Bong: Created core game loop allowing independent minigame development and integration",
        "Major Doctor Bing Bong: Set up animation pipeline supporting the game's comedic and absurd energy",
        "SIDE EFFECTS (GMTK 2025) - Programmer & Production Coordinator: Balanced hands-on development with team coordination",
        "SIDE EFFECTS: Developed custom shaders and particle effects for visual polish and cohesion",
        "SIDE EFFECTS: Developed core gameplay features in code that integrated smoothly with other developers’, aligning implementation practices and maintaining overall project consistency.",
        "SIDE EFFECTS: Coordinated between programming, art, and design teams ensuring smooth collaboration",
      ],
    },
    media: {
      showcaseImageGroups: [
        {
          title: "Major Doctor Bing Bong (GGJ 2024 - 1st Place)",
          images: [
            {
              src: "/projects/game-jams/mdbb-gameplay-1.png",
              caption: "Fast-Paced Time Management",
              link: "https://mtklng.itch.io/major-doctor-bing-bong",
            },
            {
              src: "/projects/game-jams/mdbb-gameplay-2.png",
              caption: "Unique Minigames",
              link: "https://mtklng.itch.io/major-doctor-bing-bong",
            },
            {
              src: "/projects/game-jams/mdbb-gameplay-3.png",
              caption: "Farts",
              link: "https://mtklng.itch.io/major-doctor-bing-bong",
            },
            {
              src: "/projects/game-jams/mdbb-gameplay-4.png",
              caption: "Refined Visual Comedy",
              link: "https://mtklng.itch.io/major-doctor-bing-bong",
            },
          ],
        },
        {
          title: "SIDE EFFECTS (GMTK 2025 - Top 20 Globally)",
          images: [
            {
              src: "/projects/game-jams/side-effects-1.png",
              caption: "Visual Goal Communication",
              link: "https://slamdan.itch.io/side-effects",
            },
            {
              src: "/projects/game-jams/side-effects-2.png",
              caption: "Custom Shader & Particle Effects",
              link: "https://slamdan.itch.io/side-effects",
            },
            {
              src: "/projects/game-jams/side-effects-3.png",
              caption: "Unique Artwork",
              link: "https://slamdan.itch.io/side-effects",
            },
          ],
        },
      ],
    },
  },
];
