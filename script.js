const header = document.getElementById("siteHeader");
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

const syncHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 24);
};

syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });

menuBtn.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.toggle("is-open");
  header.classList.toggle("menu-open", isOpen);
  menuBtn.setAttribute("aria-label", isOpen ? "关闭导航" : "打开导航");
});

mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("is-open");
    header.classList.remove("menu-open");
    menuBtn.setAttribute("aria-label", "打开导航");
  });
});

const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

reveals.forEach((node) => observer.observe(node));
