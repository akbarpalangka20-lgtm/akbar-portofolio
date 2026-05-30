export const PROFILE = {
  name: "Akbar",
  title: "Web Developer & Creative Programmer",
  tagline:
    "I craft elegant interfaces, intelligent systems, and playful experiments — where engineering precision meets creative curiosity.",
  bio: `I'm a self-taught developer obsessed with the intersection of design, code, and machine learning. Over the past few years I've shipped production-grade web apps, trained models that detect emotion from text, and built tools that quietly make life easier for thousands of users. I believe great software should feel like a calm conversation — minimal, responsive, and just a little magical.`,
  avatar:
    "https://static.prod-images.emergentagent.com/jobs/0ddacee1-fc00-4200-b19a-b9272cf823b2/images/780fcb540bf3e5b0dfd5daba86bba1138c212d4034880c637abdf76149b86f7b.png",
  socials: {
    github: "#",
    linkedin: "#",
    email: "mailto:hello@akbar.dev",
  },
};

export const ACHIEVEMENTS = [
  { value: "10+", label: "Completed Projects", hint: "Shipped from idea to launch" },
  { value: "4+", label: "Years of Coding", hint: "Web, ML & systems" },
  { value: "20K+", label: "Lines of Code", hint: "Open source contributions" },
];

export const TECH_STACK = [
  { name: "HTML", category: "Markup", level: 96, icon: "Code2" },
  { name: "CSS", category: "Styling", level: 94, icon: "Palette" },
  { name: "JavaScript", category: "Language", level: 92, icon: "Braces" },
  { name: "React", category: "Framework", level: 90, icon: "Atom" },
  { name: "Next.js", category: "Framework", level: 84, icon: "Triangle" },
  { name: "Python", category: "Language", level: 88, icon: "Terminal" },
  { name: "TensorFlow", category: "ML", level: 78, icon: "Brain" },
  { name: "Machine Learning", category: "Discipline", level: 80, icon: "Sparkles" },
];

export const PROJECTS = [
  {
    id: "ai-emotion",
    title: "AI Emotion Detection",
    description:
      "A neural-network powered web app that reads short text and classifies the underlying emotion in real time. Built with a fine-tuned transformer, served behind a slick React UI.",
    image:
      "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxBSSUyMG5ldXJhbCUyMG5ldHdvcmslMjBicmFpbiUyMGFic3RyYWN0fGVufDB8fHx8MTc4MDE3ODQzMnww&ixlib=rb-4.1.0&q=85",
    tech: ["React", "Python", "TensorFlow", "FastAPI"],
    github: "#",
    demo: "#",
  },
  {
    id: "coding-game",
    title: "Educational Coding Game",
    description:
      "A browser game that teaches programming concepts through puzzles, level progression, and instant code feedback. Designed for absolute beginners.",
    image:
      "https://images.pexels.com/photos/7869093/pexels-photo-7869093.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    github: "#",
    demo: "#",
  },
  {
    id: "video-downloader",
    title: "Video Downloader",
    description:
      "Lightweight, ad-free video downloader supporting multiple platforms with adaptive quality selection and queue management.",
    image:
      "https://images.unsplash.com/photo-1540655037529-dec987208707?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMG1lZGlhJTIwcGxheWVyJTIwZGFzaGJvYXJkfGVufDB8fHx8MTc4MDE3ODQzMnww&ixlib=rb-4.1.0&q=85",
    tech: ["React", "Node.js", "FFmpeg"],
    github: "#",
    demo: "#",
  },
  {
    id: "weather-ml",
    title: "Weather Prediction ML",
    description:
      "A regression model that forecasts local weather using historical data, paired with a radar-style dashboard for visual confidence.",
    image:
      "https://images.unsplash.com/photo-1705077296278-d82dd5c8662f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHx3ZWF0aGVyJTIwcmFkYXIlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MHx8fHwxNzgwMTc4NDMyfDA&ixlib=rb-4.1.0&q=85",
    tech: ["Python", "scikit-learn", "React"],
    github: "#",
    demo: "#",
  },
  {
    id: "youtube-tools",
    title: "YouTube Tools Suite",
    description:
      "A toolkit for creators: thumbnail testing, title scoring, tag suggestions, and analytics-driven recommendations.",
    image:
      "https://images.unsplash.com/photo-1611162616475-46b635cb6868?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTV8MHwxfHNlYXJjaHwxfHx5b3V0dWJlJTIwY3JlYXRvciUyMHN0dWRpbyUyMGFuYWx5dGljc3xlbnwwfHx8fDE3ODAxNzg0MzJ8MA&ixlib=rb-4.1.0&q=85",
    tech: ["Next.js", "Python", "YouTube API"],
    github: "#",
    demo: "#",
  },
];

export const TIMELINE = [
  {
    year: "2021",
    title: "First Lines of Code",
    body: "Discovered the web. Wrote my first HTML page and never looked back. Spent late nights breaking and fixing layouts.",
  },
  {
    year: "2022",
    title: "Going Full-Stack",
    body: "Picked up React and Node.js. Shipped my first deployed project — a portfolio for a friend's bakery.",
  },
  {
    year: "2023",
    title: "Diving Into ML",
    body: "Started learning Python, scikit-learn and TensorFlow. Built the first emotion detection prototype as a weekend hack.",
  },
  {
    year: "2024",
    title: "Open Source & Tools",
    body: "Released the YouTube Tools suite and the educational coding game. Crossed 20K+ lines of public code.",
  },
  {
    year: "2025",
    title: "Crafting Premium Products",
    body: "Now focused on building polished, production-grade apps that blend ML capability with cinematic interfaces.",
  },
];
