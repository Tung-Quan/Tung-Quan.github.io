const timelineData = [
  {
    date: "Nov 2023 - Expected Nov 2027",
    title: "B.Sc. in Computer Science",
    institution: "University of Technology (HCMUT - VNUHCM)",
    description:
      "Undergraduate in Computer Science with a GPA of 3.2/4.0. Achieved top 1% in the national university entrance exam for Computer Science."
  },
  {
    date: "2026",
    title: "Lead Developer",
    institution: "Open Source Project - Real-time Chat Ecosystem",
    description:
      "Built a full-stack real-time chat application using Socket.IO with secure authentication, image sharing, and high-performance messaging."
  },
  {
    date: "2026",
    title: "Developer",
    institution: "Vortex AI - Interview Platform",
    description:
      "Contributed to an AI-powered interview simulation platform featuring CV screening, technical interviews, voice assessments, and automated feedback."
  },
  {
    date: "2025",
    title: "Frontend Developer",
    institution: "HCMUT Tutor Support System",
    description:
      "Engineered a scalable frontend with Tailwind CSS, Material UI, and TanStack libraries, while enforcing code quality through Husky and Git hooks."
  },
  {
    date: "2025",
    title: "Developer / Team Leader",
    institution: "Open Source Project - Volunteer Web",
    description:
      "Architected an MVP using React 19, FastAPI, and PostgreSQL, and set up CI/CD with GitHub Actions and Docker for AWS deployment."
  }
];

const projects = [
  {
    title: "Real-time Chat Ecosystem",
    role: "Lead Developer",
    year: "2026",
    description:
      "A full-stack real-time chat application designed for fast, reliable communication with secure authentication, image sharing, unread message management, and online/offline presence.",
    technologies: ["React", "Socket.IO", "Express", "MongoDB", "Tailwind CSS"],
    link: "https://shorturl.at/F5jWC",
    linkLabel: "Repository"
  },
  {
    title: "Vortex AI Interview Platform",
    role: "Developer",
    year: "2026",
    description:
      "An AI-powered interview preparation platform that supports CV screening, technical interviews, voice-based assessments, and automated candidate feedback.",
    technologies: ["React", "TypeScript", "Express.js", "PostgreSQL", "Supabase", "OpenAI", "LangChain", "ElevenLabs", "Monaco Editor"],
    link: "#",
    linkLabel: "Project Reference"
  },
  {
    title: "HCMUT Tutor Support System",
    role: "Frontend Developer",
    year: "2025",
    description:
      "A scalable frontend architecture for a tutor support system with strong UI consistency, maintainability, and code quality control.",
    technologies: ["React", "Tailwind CSS", "Material UI", "TanStack", "Husky"],
    link: "https://tinyurl.com/yc8yfbw6",
    linkLabel: "Repository"
  },
  {
    title: "Volunteer Web",
    role: "Developer / Team Leader",
    year: "2025",
    description:
      "An MVP web platform for volunteer management, built with a modern stack and automated through Docker-based CI/CD workflows for deployment readiness.",
    technologies: ["React 19", "FastAPI", "PostgreSQL", "Docker", "GitHub Actions", "AWS"],
    link: "https://tinyurl.com/25f5vje6",
    linkLabel: "Repository"
  }
];

const skills = [
  {
    category: "Programming Languages",
    items: ["C++", "Python", "JavaScript", "C# (fundamentals)"]
  },
  {
    category: "Frontend",
    items: ["React", "HTML", "CSS", "Tailwind CSS", "Material UI", "Angular (fundamentals)"]
  },
  {
    category: "Backend & APIs",
    items: ["FastAPI", "Socket.IO", "REST API development", "Express.js"]
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "NoSQL", "Supabase"]
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "GitHub", "Docker", "GitHub Actions", "AWS", "Overleaf"]
  },
  {
    category: "Core Concepts",
    items: ["Object-Oriented Programming", "Component-based frontend development", "Full-stack web development", "CI/CD", "Real-time systems"]
  }
];

const achievements = [
  {
    type: "Award",
    title: "LotusHacks 2026 - Top 30",
    description: "Achieved Top 30 placement in the LotusHacks 2026 competition."
  },
  {
    type: "Certification",
    title: "IELTS 6.5",
    description: "English proficiency certification achieved in 2023."
  },
  {
    type: "Certification",
    title: "Microsoft Office Specialist (MOS)",
    description: "Excel (2025), PowerPoint (2024), and Word (2023)."
  }
];

function renderTimeline() {
  const container = document.getElementById("timeline-container");
  if (!container) return;

  container.innerHTML = timelineData.map(item => `
    <article class="timeline-item">
      <div class="timeline-date">${item.date}</div>
      <div class="timeline-content">
        <h3>${item.title}</h3>
        <h4>${item.institution}</h4>
        <p>${item.description}</p>
      </div>
    </article>
  `).join("");
}

function renderProjects() {
  const container = document.getElementById("project-grid");
  if (!container) return;

  container.innerHTML = projects.map(project => `
    <article class="project-card">
      <div class="card-topline">
        <span class="pill">${project.role}</span>
        <span class="year">${project.year}</span>
      </div>
      <h3>${project.title}</h3>
      <p class="project-desc">${project.description}</p>
      <div class="tech-list">
        ${project.technologies.map(tech => `<span class="tech-chip">${tech}</span>`).join("")}
      </div>
      <div class="project-links">
        <a href="${project.link}" target="_blank" rel="noopener noreferrer">${project.linkLabel}</a>
      </div>
    </article>
  `).join("");
}

function renderSkills() {
  const container = document.getElementById("skills-grid");
  if (!container) return;

  container.innerHTML = skills.map(skill => `
    <article class="skill-card">
      <h3>${skill.category}</h3>
      <p>${skill.items.join(" • ")}</p>
    </article>
  `).join("");
}

function renderAchievements() {
  const container = document.getElementById("achievement-grid");
  if (!container) return;

  container.innerHTML = achievements.map(item => `
    <article class="achievement-card">
      <span class="section-tag small">${item.type}</span>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
    </article>
  `).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderTimeline();
  renderProjects();
  renderSkills();
  renderAchievements();
});