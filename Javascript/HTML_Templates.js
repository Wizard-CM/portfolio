class Headers extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
         <header class="navbar h-[80px] fixed w-full top-0 z-[9]   transition-opacity ease-linear duration-1000">
    <div class="header-inner px-5 md:px-10 max-w-[1300px] mx-auto h-full w-full flex items-center">
      <!-- left -->
      <h4 class="text-3xl font-bold">Logo</h4>
      <!--right -->
      <div class="w-full flex justify-end items-center gap-3 sm:gap-20">
        <div class="flex gap-2 sm:gap-7">
          <a href="#projects-section" class="cursor-pointer hover:text-secondary_clr transition-all duration-200 ease-linear">Projects</a>
          <a href="#contact" class="cursor-pointer hover:text-secondary_clr transition-all duration-200 ease-linear">Contact</a>
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
              class="w-full h-full"
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
              class="w-full h-full"
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
customElements.define('my-headers',Headers);






