// headers
class Headers extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
         <header class="navbar h-[80px] fixed w-full top-0 z-[9] transition-opacity ease-linear duration-1000">
    <div class="header-inner px-5 md:px-10 max-w-[1200px] mx-auto h-full w-full flex items-center">
      <!-- left -->
      <h4 class="text-3xl font-bold">Logo</h4>
      <!--right -->
      <div class="w-full flex justify-end items-center gap-3 sm:gap-20">
        <div class="flex gap-2 sm:gap-7">
          <a href="#projects-section" class="nav-items cursor-pointer hover:text-secondary_clr ">Projects</a>
        </div>

        <div class="flex gap-2 sm:gap-4">
          <div class="sun w-6 h-6 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="nav-items w-full h-full"
            >
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
          </div>

          <div class="moon w-6 h-6 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="nav-items w-full h-full"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
    </header>
        `;
  }
}
customElements.define("my-headers", Headers);

// section 1
class section1 extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
          <section class="landing-section min-h-[calc(100vh-100px)] w-full flex items-center flex-col md:flex-row gap-3">
      <!-- section-1 : left -->
      <div class="md:w-1/2 md:my-0 md:text-start text-center left w-full my-10">
        <p class="hero-para font-thin my-0 text-secondary_clr text-[1rem]">
          Software Developer
        </p>
        <h3
          class="hero-heading lg:text-[7.5rem] text-[5rem] leading-[5rem] font-semibold mb-5 lg:leading-[7.5rem] whitespace-nowrap">
          Hello I'm <br />Ronak
        </h3>
        <h5 class="hero-para text-[1rem] tracking-wide">
          I excel at crafting elegant digital experiences and <br />I am
          proficient in various programming languages and technologies
        </h5>

        <!-- Social Media Links -->
        <div class="flex gap-2 mt-4 justify-center md:justify-start items-center">
          <h4 class="text-2xl">Contact Me : </h4>
          <a href="https://www.facebook.com/profile.php?id=100007012968206"
            class="h-[35px] w-[35px] flex justify-center items-center border-[2px] border-secondary_clr rounded-full"
            target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
              <path fill="currentColor"
                d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 25.832031 46 A 1.0001 1.0001 0 0 0 26.158203 46 L 31.832031 46 A 1.0001 1.0001 0 0 0 32.158203 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 33 44 L 33 30 L 36.820312 30 L 38.220703 23 L 33 23 L 33 21 C 33 20.442508 33.05305 20.398929 33.240234 20.277344 C 33.427419 20.155758 34.005822 20 35 20 L 38 20 L 38 14.369141 L 37.429688 14.097656 C 37.429688 14.097656 35.132647 13 32 13 C 29.75 13 27.901588 13.896453 26.71875 15.375 C 25.535912 16.853547 25 18.833333 25 21 L 25 23 L 22 23 L 22 30 L 25 30 L 25 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 32 15 C 34.079062 15 35.38736 15.458455 36 15.701172 L 36 18 L 35 18 C 33.849178 18 32.926956 18.0952 32.150391 18.599609 C 31.373826 19.104024 31 20.061492 31 21 L 31 25 L 35.779297 25 L 35.179688 28 L 31 28 L 31 44 L 27 44 L 27 28 L 24 28 L 24 25 L 27 25 L 27 21 C 27 19.166667 27.464088 17.646453 28.28125 16.625 C 29.098412 15.603547 30.25 15 32 15 z">
              </path>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/ronak-thapa7/"
            class="h-[35px] w-[35px] flex justify-center items-center border-[2px] border-secondary_clr rounded-full"
            target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
              <path fill="currentColor"
                d="M 11 4 C 7.1456661 4 4 7.1456661 4 11 L 4 39 C 4 42.854334 7.1456661 46 11 46 L 39 46 C 42.854334 46 46 42.854334 46 39 L 46 11 C 46 7.1456661 42.854334 4 39 4 L 11 4 z M 11 6 L 39 6 C 41.773666 6 44 8.2263339 44 11 L 44 39 C 44 41.773666 41.773666 44 39 44 L 11 44 C 8.2263339 44 6 41.773666 6 39 L 6 11 C 6 8.2263339 8.2263339 6 11 6 z M 13.085938 13 L 22.308594 26.103516 L 13 37 L 15.5 37 L 23.4375 27.707031 L 29.976562 37 L 37.914062 37 L 27.789062 22.613281 L 36 13 L 33.5 13 L 26.660156 21.009766 L 21.023438 13 L 13.085938 13 z M 16.914062 15 L 19.978516 15 L 34.085938 35 L 31.021484 35 L 16.914062 15 z">
              </path>
            </svg>
          </a>
          <a href="https://x.com/RonakThapa46632"
            class="h-[35px] w-[35px] flex justify-center items-center border-[2px] border-secondary_clr rounded-full"
            target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
              <path fill="currentColor"
                d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 41 6 C 42.668484 6 44 7.3315161 44 9 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 14 11.011719 C 12.904779 11.011719 11.919219 11.339079 11.189453 11.953125 C 10.459687 12.567171 10.011719 13.484511 10.011719 14.466797 C 10.011719 16.333977 11.631285 17.789609 13.691406 17.933594 A 0.98809878 0.98809878 0 0 0 13.695312 17.935547 A 0.98809878 0.98809878 0 0 0 14 17.988281 C 16.27301 17.988281 17.988281 16.396083 17.988281 14.466797 A 0.98809878 0.98809878 0 0 0 17.986328 14.414062 C 17.884577 12.513831 16.190443 11.011719 14 11.011719 z M 14 12.988281 C 15.392231 12.988281 15.94197 13.610038 16.001953 14.492188 C 15.989803 15.348434 15.460091 16.011719 14 16.011719 C 12.614594 16.011719 11.988281 15.302225 11.988281 14.466797 C 11.988281 14.049083 12.140703 13.734298 12.460938 13.464844 C 12.78117 13.19539 13.295221 12.988281 14 12.988281 z M 11 19 A 1.0001 1.0001 0 0 0 10 20 L 10 39 A 1.0001 1.0001 0 0 0 11 40 L 17 40 A 1.0001 1.0001 0 0 0 18 39 L 18 33.134766 L 18 20 A 1.0001 1.0001 0 0 0 17 19 L 11 19 z M 20 19 A 1.0001 1.0001 0 0 0 19 20 L 19 39 A 1.0001 1.0001 0 0 0 20 40 L 26 40 A 1.0001 1.0001 0 0 0 27 39 L 27 29 C 27 28.170333 27.226394 27.345035 27.625 26.804688 C 28.023606 26.264339 28.526466 25.940057 29.482422 25.957031 C 30.468166 25.973981 30.989999 26.311669 31.384766 26.841797 C 31.779532 27.371924 32 28.166667 32 29 L 32 39 A 1.0001 1.0001 0 0 0 33 40 L 39 40 A 1.0001 1.0001 0 0 0 40 39 L 40 28.261719 C 40 25.300181 39.122788 22.95433 37.619141 21.367188 C 36.115493 19.780044 34.024172 19 31.8125 19 C 29.710483 19 28.110853 19.704889 27 20.423828 L 27 20 A 1.0001 1.0001 0 0 0 26 19 L 20 19 z M 12 21 L 16 21 L 16 33.134766 L 16 38 L 12 38 L 12 21 z M 21 21 L 25 21 L 25 22.560547 A 1.0001 1.0001 0 0 0 26.798828 23.162109 C 26.798828 23.162109 28.369194 21 31.8125 21 C 33.565828 21 35.069366 21.582581 36.167969 22.742188 C 37.266572 23.901794 38 25.688257 38 28.261719 L 38 38 L 34 38 L 34 29 C 34 27.833333 33.720468 26.627107 32.990234 25.646484 C 32.260001 24.665862 31.031834 23.983076 29.517578 23.957031 C 27.995534 23.930001 26.747519 24.626988 26.015625 25.619141 C 25.283731 26.611293 25 27.829667 25 29 L 25 38 L 21 38 L 21 21 z">
              </path>
            </svg>
          </a>
          <a href="https://www.instagram.com/ronakthapa77/?next=%2F"
            class="h-[35px] w-[35px] flex justify-center items-center border-[2px] border-secondary_clr rounded-full"
            target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
              <path fill="currentColor"
                d="M 12 3 C 7.0414839 3 3 7.0414839 3 12 L 3 38 C 3 42.958516 7.0414839 47 12 47 L 38 47 C 42.958516 47 47 42.958516 47 38 L 47 12 C 47 7.0414839 42.958516 3 38 3 L 12 3 z M 12 5 L 38 5 C 41.877484 5 45 8.1225161 45 12 L 45 38 C 45 41.877484 41.877484 45 38 45 L 12 45 C 8.1225161 45 5 41.877484 5 38 L 5 12 C 5 8.1225161 8.1225161 5 12 5 z M 38 7 C 36.904545 7 36 7.9045455 36 9 L 36 12 C 36 13.095455 36.904545 14 38 14 L 41 14 C 42.095455 14 43 13.095455 43 12 L 43 9 C 43 7.9045455 42.095455 7 41 7 L 38 7 z M 38 9 L 41 9 L 41 12 L 38 12 L 38 9 z M 25 12 C 21.331661 12 18.01623 13.540914 15.648438 16 L 8 16 A 1.0001 1.0001 0 0 0 7 17 L 7 37 C 7 40.301625 9.6983746 43 13 43 L 37 43 C 40.301625 43 43 40.301625 43 37 L 43 17 A 1.0001 1.0001 0 0 0 42 16 L 34.351562 16 C 31.98377 13.540914 28.668339 12 25 12 z M 25 14 C 31.073477 14 36 18.926523 36 25 C 36 31.073477 31.073477 36 25 36 C 18.926523 36 14 31.073477 14 25 C 14 18.926523 18.926523 14 25 14 z M 25 16 A 1.0001 1.0001 0 0 0 24.589844 16.083984 C 19.831681 16.311415 16 20.186041 16 25 C 16 29.959394 20.041635 34 25 34 C 29.958365 34 34 29.959394 34 25 C 34 20.187371 30.170385 16.313404 25.414062 16.083984 A 1.0001 1.0001 0 0 0 25 16 z M 9 18 L 14.068359 18 C 12.766308 20.024088 12 22.423973 12 25 C 12 32.158523 17.841477 38 25 38 C 32.158523 38 38 32.158523 38 25 C 38 22.423973 37.233692 20.024088 35.931641 18 L 41 18 L 41 37 C 41 39.220375 39.220375 41 37 41 L 13 41 C 10.779625 41 9 39.220375 9 37 L 9 18 z M 25 18 C 28.877635 18 32 21.121394 32 25 C 32 28.878606 28.877635 32 25 32 C 21.122365 32 18 28.878606 18 25 C 18 21.121394 21.122365 18 25 18 z">
              </path>
            </svg>
          </a>

          <p class="text-2xl"> || </p>
          <p>ronakthapa37@gmail.com</p>
        </div>

        <div class="w-full flex justify-center md:justify-start gap-5 mt-6">
          <button
            class="aboutbtn btn px-[1rem] py-[0.5rem] border-2 border-secondary_clr rounded-lg text-[1rem] lg:text-[1.2rem] font-light cursor-pointer">
            My Skills
          </button>
          <a href="./Assests/ResumeMin.pdf" download="resume"
            class="btn px-[1rem] py-[0.5rem] border-2 border-secondary_clr rounded-lg text-[1rem] lg:text-[1rem] font-light cursor-pointer">
            Download Resume
          </a>
        </div>
      </div>
      <!-- section-1 : right -->
      <div class="md:w-1/2  w-full">
        <div class="img  flex items-center justify-center">
          <img src="./Assests/hero-img.png" class="" alt="">
        </div>
      </div>

    </section>
        `;
  }
}
customElements.define("my-section1", section1);

// section 2
class section2 extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
              <section class="section w-full  md:py-0 min-h-screen flex flex-col items-center" id="projects-section">

      <h3 class="text-center text-7xl my-10">Projects</h3>
      <!-- Project 1 -->
      <div class="project project1 border-[1px] sticky top-[15vh]  w-[50vw] p-8 my-3 bg-[#00000047] backdrop-blur-3xl ">

        <div class="flex justify-center">
          <img
            src="https://www.shutterstock.com/image-photo/blog-information-website-concept-workplace-260nw-1189626925.jpg"
            alt="">
        </div>
        <h2 class="mt-4 mb-2 text-5xl">Title : Blogging Website</h2>
        <p class="my-6">
          Teckstack : HTML,CSS,Javascript,React,Tailwind
        </p>
        <div>
          <button class="px-10 py-3 border-[1px]">Go to live Project</button>
        </div>
      </div>
      <!-- Project 2 -->
      <div class="project project1 border-[1px] sticky top-[15vh]  w-[50vw] p-8 my-3 bg-[#00000047] backdrop-blur-3xl ">

        <div class="flex justify-center">
          <img
            src="https://www.shutterstock.com/image-photo/blog-information-website-concept-workplace-260nw-1189626925.jpg"
            alt="">
        </div>
        <h2 class="mt-4 mb-2 text-5xl">Title : Blogging Website</h2>
        <p class="my-6">
          Teckstack : HTML,CSS,Javascript,React,Tailwind
        </p>
        <div>
          <button class="px-10 py-3 border-[1px]">Go to live Project</button>
        </div>
      </div>

      <!-- Project 3 -->
      <div class="project project1 border-[1px] sticky top-[15vh]  w-[50vw] p-8 my-3 bg-[#00000047] backdrop-blur-3xl ">

        <div class="flex justify-center">
          <img
            src="https://www.shutterstock.com/image-photo/blog-information-website-concept-workplace-260nw-1189626925.jpg"
            alt="">
        </div>
        <h2 class="mt-4 mb-2 text-5xl">Title : Blogging Website</h2>
        <p class="my-6">
          Teckstack : HTML,CSS,Javascript,React,Tailwind
        </p>
        <div>
          <button class="px-10 py-3 border-[1px]">Go to live Project</button>
        </div>
      </div>

    </section>
        `;
  }
}
customElements.define("my-section2", section2);

// Section 3
class section3 extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <section id="contact" class="section min-h-screen w-full flex flex-col items-center justify-center ">
      <h3 class="text-center text-7xl my-10">Lets Connect</h3>

      <!-- Section 3 : inner -->
      <div class="inner w-full flex flex-col md:flex-row items-center justify-center">
        <!-- Section 3 : left -->
        <div class="left w-full md:w-1/2">
          <img src="./Assests/Contact.svg" alt />
        </div>
        <!-- Section 3 : right -->
        <div class="right w-full md:w-1/2">
          <form class="w-full p-8 flex flex-col gap-7">
            <div class="w-full">
              <label for="name">Name</label>
              <input type="text" class="outline-none w-full text-black border-[1px] border-[#111] rounded-sm px-2 py-1"
                name="name" id="name" />
            </div>
            <div class="w-full">
              <label for="email">Email</label>
              <input type="email" class="outline-none w-full text-black border-[1px] border-[#111] rounded-sm px-2 py-1"
                name="email" id="email" />
            </div>

            <div class="w-full">
              <label for="message">Message</label>
              <textarea name="message"
                class="outline-none w-full text-black border-[1px] border-[#111] rounded-sm px-2 py-1" cols="25"
                rows="7" id="message"></textarea>
            </div>
          </form>
        </div>
      </div>
    </section>
        `;
  }
}
customElements.define("my-section3", section3);

// Section 4
class section4 extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <section
    class="aboutModal fixed top-0 left-0 h-screen hidden justify-center items-center w-full bg-[#00000047] backdrop-blur-3xl z-[12] transition-all duration-700 opacity-0">
    <section class="border-[1px] w-[70%] flex py-14 px-8 flex-col lg:flex-row relative" id="about-section">
      <div class="w-full text-center lg:text-start lg:w-1/2 about-left">
        <h5 class="text-5xl mb-5">My Skills</h5>
        <p class="py-5 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa veniam
          ex ipsam esse vel sapiente eos doloribus accusamus distinctio! Amet
          praesentium rerum maiores aliquid omnis illo earum dignissimos quos
          doloremque?
        </p>
        <ul class="flex w-full flex-wrap gap-2 justify-center lg:justify-start">
          <li class="about-li">#html</li>
          <li class="about-li">#css</li>
          <li class="about-li">#SASS</li>
          <li class="about-li">#javascript</li>
          <li class="about-li">#react.js</li>
          <li class="about-li">#redux</li>
          <li class="about-li">#routing</li>
          <li class="about-li">#bootstrap</li>
          <li class="about-li">#tailwind</li>
          <li class="about-li">#git</li>
          <li class="about-li">#github</li>
        </ul>
      </div>
      <div class="w-full lg:w-1/2 about-right justify-center items-center hidden lg:flex">
        <img src="https://anuragsinghbam.netlify.app/images/coder.svg"
          class="w-[337px] min-h-[337px] lg:w-auto lg:h-auto" alt />
      </div>

      <p class="x-icon text-secondary_clr cursor-pointer absolute text-3xl font-thin right-6 top-6">X</p>
    </section>
  </section>
        `;
  }
}
customElements.define("my-section4", section4);
