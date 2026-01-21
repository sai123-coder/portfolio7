import IconCloud from "./ui/icon-cloud";

const slugs = [
  // --- Data Analytics & Visualization (CRUCIAL for you) ---
  "powerbi",    // Added/Kept
  "tableau",    // Added/Kept
  "excel",
  "jupyter",    // Added
  "anaconda",   // Added
  "r",          // Added (R Language)
  
  // --- AI & Machine Learning ---
  "tensorflow",
  "pytorch",
  "scikitlearn",
  "pandas",
  "numpy",
  "keras",
  "openai",
  
  // --- Programming Languages ---
  "python",
  "sql",        // Generic SQL
  "mysql",      // MySQL specific
  "javascript",
  "typescript",
  "java",
  "dart",
  "html5",
  "css3",
  
  // --- Web Frameworks ---
  "react",
  "nodedotjs",
  "express",
  "nextdotjs",
  "flutter",
  "android",
  "threejs",    // Nice to have for 3D elements
  
  // --- Backend & Cloud ---
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "amazonaws",
  "docker",
  "prisma",
  
  // --- Dev Tools ---
  "git",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "figma",
  "postman",    // Added (Good for API testing)
  "jira",
];

function IconCloudDemo() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg px-20 pb-20 pt-8 bg-transparent">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

export default IconCloudDemo;