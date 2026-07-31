document.documentElement.classList.remove("no-js");
document.documentElement.classList.add("js");

const header = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");

function closeMenu() {
  if (!menuButton || !nav) return;
  menuButton.setAttribute("aria-expanded", "false");
  nav.classList.remove("is-open");
  document.body.classList.remove("nav-open");
}

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const open = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!open));
    nav.classList.toggle("is-open", !open);
    document.body.classList.toggle("nav-open", !open);
  });
  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
}

function updateHeader() {
  header?.classList.toggle("is-scrolled", window.scrollY > 24);
}
updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

const currentPath = window.location.pathname.replace(/index\.html$/, "");
document.querySelectorAll(".site-nav a[data-path]").forEach((link) => {
  const path = new URL(link.href, window.location.origin).pathname;
  if (path === currentPath || (path !== "/" && currentPath.startsWith(path))) {
    link.setAttribute("aria-current", "page");
  }
});

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const parallaxItems = [...document.querySelectorAll("[data-parallax]")];
let ticking = false;

function renderParallax() {
  ticking = false;
  if (reducedMotion.matches) return;
  const viewport = window.innerHeight;
  parallaxItems.forEach((item) => {
    const rect = item.getBoundingClientRect();
    if (rect.bottom < -150 || rect.top > viewport + 150) return;
    const strength = Number(item.dataset.parallax || 18);
    const centerOffset = (rect.top + rect.height / 2 - viewport / 2) / viewport;
    const y = Math.max(-strength, Math.min(strength, -centerOffset * strength));
    const progress = Math.max(0, Math.min(1, (viewport - rect.top) / (viewport + rect.height)));
    item.style.setProperty("--parallax-y", `${y.toFixed(2)}px`);
    item.style.setProperty("--parallax-progress", progress.toFixed(3));
  });
}

function requestParallax() {
  if (!ticking) {
    ticking = true;
    window.requestAnimationFrame(renderParallax);
  }
}

if (parallaxItems.length && !reducedMotion.matches) {
  renderParallax();
  window.addEventListener("scroll", requestParallax, { passive: true });
  window.addEventListener("resize", requestParallax, { passive: true });
}

const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && !reducedMotion.matches) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

const year = document.querySelector("[data-current-year]");
if (year) year.textContent = String(new Date().getFullYear());

const mobileCta = document.querySelector(".mobile-cta");
const inquirySection = document.querySelector("#inquiry");
if (mobileCta && inquirySection && "IntersectionObserver" in window) {
  const ctaObserver = new IntersectionObserver(([entry]) => {
    mobileCta.hidden = entry.isIntersecting;
  }, { threshold: 0.08 });
  ctaObserver.observe(inquirySection);
}
