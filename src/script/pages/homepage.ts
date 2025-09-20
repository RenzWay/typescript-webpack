import { msg, str } from "@lit/localize";
import { html } from "lit";

export default class HomePage {
  include: string[];
  use: string[];
  routing: string[];

  constructor() {
    this.include = [];
    this.use = [];
    this.routing = [];
  }

  model() {
    const Included = [
      "✅ Webpack 5 + Babel",
      "⚙️ Development & Production Modes",
      "⌨️ Typescript language",
      "🎨 CSS asset loader support",
      "🧭 SPA (Single Page Application) Routing",
      "📄 Auto HTML via HtmlWebpackPlugin",
    ];

    const gettingStarted = [
      "Clone the repo: git clone https://github.com/RenzWay/typescript-webpack.git",
      "Remove Remote: git remote remove origin",
      "Install: npm install",
      "Start dev server: npm run dev",
      "Edit code in src/ & see it live!",
    ];

    const routerUsage = [
      "Create pages inside the pages folder.",
      "Import those pages into router.js.",
      "Use URL hash (e.g., #/) to navigate between pages.",
      "Try switching pages without full reload!",
      "Don't worry — using ( #/ ) won't cause any errors.",
    ];

    this.use = gettingStarted;
    this.routing = routerUsage;
    this.include = Included;
  }

  init() {
    this.model();
  }

  render(): string {
    return `
        <header class="header-home text-center bg-gradient-to-bl from-[var(--cerulean)] to-[var(--aqua)] p-[5em] rounded-b-lg shadow-lg">
            <h1 class="text-white">Typescript Webpack Starter</h1>
            <h6 class="mb-8 text-[var(--outer-space)]">${msg(
              str`A simple starter for Typescript with Webpack`
            )}</h6>
            <a href="https://github.com/RenzWay/" class="link-btn" target="_blank">🔗 ${msg(
              str`Visit Github`
            )}</a>
        </header>
        <section>
            <section class="card mx-20 my-8">
                <header class="card-header">
                    <h3 class="card-title">${msg(str`What's Included?`)}</h3>
                </header>
                <div class="card-body">
                    <ul class="list-include select-none">
                    </ul>
                </div>
            </section>

            <section class="card card-aqua mx-20 my-8">
                <header class="card-header">
                    <h3 class="card-title">${msg(str`How to use?`)}</h3>
                </header>
                <div class="card-body">
                    <ol class="list-use list-decimal pl-6"></ol>
                </div>
            </section>
            <section class="card card-purple mx-20 my-8">
                <header class="card-header">
                    <h3 class="card-title">${msg(str`Routing Usage`)}</h3>
                </header>
                <div class="card-body">
                    <ol class="list-routing list-decimal pl-6"></ol>
                </div>
            </section>           
        </section>
        `;
  }

  afterRender() {
    this.init();
    const list = document.querySelector(".list-include") as HTMLElement;
    const use = document.querySelector(".list-use") as HTMLElement;
    const routing = document.querySelector(".list-routing") as HTMLElement;

    const listItems = this.include
      .map((feature) => {
        return `<li class="py-2 hover:bg-gray-700 backdrop-blur-[5px] rounded-sm">${msg(
          str`${feature}`
        )}</li>`;
      })
      .join("");
    list.innerHTML = listItems;

    const useItems = this.use
      .map((step) => {
        return `<li
          class="py-2 hover:bg-gray-700 backdrop-blur-[5px] rounded-sm relative pl-2"
        >
          ${msg(str`${step}`)}
        </li>`;
      })
      .join("");
    use.innerHTML = useItems;

    const routingItems = this.routing
      .map((step) => {
        return `<li class="py-2 hover:bg-gray-700 backdrop-blur-[5px] rounded-sm relative pl-2">${msg(
          str`${step}`
        )}</li>`;
      })
      .join("");

    routing.innerHTML = routingItems;
  }
}
