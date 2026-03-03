import "./assets/styles/global.css";
import "./assets/styles/styles.css";

import logo from "./assets/media/img/logo.png";
import reactLogo from "./assets/media/img/react.png";
import svelteLogo from "./assets/media/img/svelte.png";
import vueLogo from "./assets/media/img/vue.svg";

type LogoItem = {
  href: string;
  img: string;
  alt: string;
};

const logos: LogoItem[] = [
  {
    href: "https://github.com/IkramMbz/nakas-ui",
    img: logo,
    alt: "Nakas UI Logo",
  },
  {
    href: "https://github.com/IkramMbz/nakas-ui-react",
    img: reactLogo,
    alt: "React logo",
  },
  {
    href: "https://github.com/IkramMbz/nakas-ui-svelte",
    img: svelteLogo,
    alt: "Svelte logo",
  },
  {
    href: "https://github.com/IkramMbz/nakas-ui-vue",
    img: vueLogo,
    alt: "Vue logo",
  },
];

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
  <div class="bg-neutral-800 flex flex-col gap-6 items-center justify-center p-8 text-white min-h-screen">
    <h1 class="text-2xl font-bold">Nakas UI</h1>

    <div class="flex flex-wrap gap-6 items-center justify-center">
      ${logos
        .map(
          (item) => `
          <a 
            href="${item.href}" 
            target="_blank" 
            rel="noopener noreferrer"
            class="bg-white duration-300 p-1 rounded-lg shadow-md transition-transform hover:scale-95"
          >
            <img 
              src="${item.img}" 
              alt="${item.alt}"
              loading="lazy"
              width="48"
              height="48"
              class="w-12 h-12 object-contain aspect-square rounded-xl"
            />
          </a>
        `
        )
        .join("")}
    </div>
  </div>
`;
