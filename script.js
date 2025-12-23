const translations = {
  zh: {
    hero_badge: "行政・專案管理・流程設計",
    hero_title: "明新科技大學｜雙語教育中心｜行政助理",
    hero_cta: "聯繫我",
    hero_linkedin: "查看 LinkedIn",
    about_tag: "Profile",
    about_title: "關於我 About Me",
    skills_tag: "Toolkit",
    skills_title: "核心能力 Skills",
    exp_tag: "Experience",
    exp_title: "工作經歷 Experience",
    proj_tag: "Highlights",
    proj_title: "專案亮點 Projects",
    edu_tag: "Education",
    edu_title: "學歷與領導經驗 Education & Leadership",
    traits_tag: "Mindset",
    traits_title: "個人特質與自我期許 Traits & Goals",
    contact_tag: "Contact",
    contact_title: "聯絡方式 Contact",
  },
  en: {
    hero_badge: "Admin • Project Ops • Workflow Design",
    hero_title: "Educational Administration & Project Management",
    hero_cta: "Contact Me",
    hero_linkedin: "View LinkedIn",
    about_tag: "Profile",
    about_title: "About Me",
    skills_tag: "Toolkit",
    skills_title: "Core Skills",
    exp_tag: "Experience",
    exp_title: "Experience",
    proj_tag: "Highlights",
    proj_title: "Highlighted Projects",
    edu_tag: "Education",
    edu_title: "Education & Leadership",
    traits_tag: "Mindset",
    traits_title: "Traits & Career Goals",
    contact_tag: "Contact",
    contact_title: "Contact",
  },
};

const langBtn = document.getElementById("lang-toggle");
const heroBioZh = document.querySelector("[data-i18n='hero_bio_zh']");
const heroBioEn = document.querySelector("[data-i18n='hero_bio_en']");
let currentLang = "zh";

langBtn?.addEventListener("click", () => {
  currentLang = currentLang === "zh" ? "en" : "zh";
  langBtn.textContent = currentLang === "zh" ? "EN / 中文" : "中文 / EN";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const text = translations[currentLang][key];
    if (text) {
      el.textContent = text;
    }
  });

  if (currentLang === "zh") {
    heroBioZh?.removeAttribute("hidden");
    heroBioEn?.setAttribute("hidden", "true");
  } else {
    heroBioZh?.setAttribute("hidden", "true");
    heroBioEn?.removeAttribute("hidden");
  }
});

// Timeline toggles
const timelineItems = document.querySelectorAll(".timeline-item");
timelineItems.forEach((item) => {
  const toggle = item.querySelector(".toggle");
  const content = item.querySelector(".content");
  toggle?.addEventListener("click", () => {
    const isOpen = item.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    if (isOpen) {
      content.style.maxHeight = `${content.scrollHeight}px`;
    } else {
      content.style.maxHeight = "0";
    }
  });
  if (item.classList.contains("open") && content) {
    content.style.maxHeight = `${content.scrollHeight}px`;
  }
});

// Back to top
const backToTopBtn = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 420) {
    backToTopBtn?.classList.add("show");
  } else {
    backToTopBtn?.classList.remove("show");
  }
});

backToTopBtn?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Reveal on scroll
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

reveals.forEach((el) => observer.observe(el));
