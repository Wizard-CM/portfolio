function cursorEffect() {
  document.body.addEventListener("mousemove", (e) => {
    gsap.to(".circle", {
      left: e.pageX - 10,
      top: e.pageY - 10,
    });
  });

  document.querySelectorAll("h3").forEach((h3) => {
    h3.addEventListener("mousemove", () => {
      gsap.to(".circle", {
        scale: 7,
        opacity:0.4

      });

    });
  });
  document.querySelectorAll("h3").forEach((h3) => {
    h3.addEventListener("mouseleave", () => {
      gsap.to(".circle", {
        scale: 1,
        opacity:1
      });

    });
  });
}
cursorEffect();

function textAnimation() {
  gsap.from(".nav-items", {
    y: -30,
    duration: 0.4,
    opacity: 0,
    stagger:0.2,
    delay:0.3
  });
}
textAnimation();

function themeEffect() {
  const moon = document.querySelector(".moon");
  const sun = document.querySelector(".sun");
  const navbar = document.querySelector(".navbar");
  window.addEventListener("load", () => {
    const currTheme = localStorage.getItem("theme");
    if (currTheme) {
      if (currTheme == "light") {
        document.body.classList.remove("bg-[#111]");
        document.body.classList.remove("text-[#ffff]");
        document.body.classList.add("bg-[#ffff]");
        document.body.classList.add("text-[#000]");
        navbar.classList.remove("bg-[#111]");
        navbar.classList.add("bg-[#ffff]");
      } else document.body.classList = "bg-[#111] text-white overflow-x-hidden";
    } else document.body.classList = "bg-[#111] text-white overflow-x-hidden";
    sun.addEventListener("click", () => {
      document.body.classList = "bg-[#ffff] text-black overflow-x-hidden";
      navbar.classList.remove("bg-[#111]");
      navbar.classList.add("bg-[#ffff]");
      localStorage.setItem("theme", "light");
    });
    moon.addEventListener("click", () => {
      document.body.classList = "bg-[#111] text-white overflow-x-hidden";
      navbar.classList.remove("bg-[#ffff]");
      navbar.classList.add("bg-[#111]");
      localStorage.setItem("theme", "dark");
    });
  });
}
themeEffect();
function aboutModalEffect() {
  const aboutbtn = document.querySelector(".aboutbtn");
  const aboutModal = document.querySelector(".aboutModal");
  const xIcon = document.querySelector(".x-icon");
  aboutbtn.addEventListener("click", () => {
    aboutModal.style.display = "flex";
    aboutModal.style.opacity = "1";
  });
  xIcon.addEventListener("click", () => {
    aboutModal.style.display = "none";
  });
  aboutModal.addEventListener("click", (e) => {
    console.log(e.target);
    if (e.target !== aboutModal) {
      return;
    }
    aboutModal.style.display = "none";
  });
}
aboutModalEffect();

function GSAPEffect() {
  document.querySelectorAll(".project").forEach((card) => {
    gsap.to(card, {
      scale: 0.5,
      opacity: 0,
      scrollTrigger: {
        trigger: card,
        start: "mid 15%",
        end: "bottom 20%",
        scrub: !0,
      },
    });
  });
}
GSAPEffect();

let scrolled = window.scrollY;
let interval = null;

function navBarScroll() {
  window.addEventListener("scroll", (e) => {
    const navbar = document.querySelector(".navbar");
    clearDelay(interval);
    interval = setTimeout(() => {
      console.log(window.scrollY);
      if (window.scrollY > 600 && window.scrollY > scrolled) {
        navbar.style.display = "none";
        navbar.style.opacity = "0";
        scrolled = window.scrollY;
      } else {
        navbar.style.display = "block";
        navbar.style.opacity = "1";
        scrolled = window.scrollY;
      }
    }, 200);
  });
}
navBarScroll();

function clearDelay(interval) {
  if (!interval) return;
  clearInterval(interval);
}
