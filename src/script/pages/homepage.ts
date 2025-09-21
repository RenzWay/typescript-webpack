import { msg, str } from "@lit/localize";

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
    this.include = [
      msg(str`✅ Webpack 5 + Babel`),
      msg(str`⚙️ Development & Production Modes`),
      msg(str`⌨️ Typescript language`),
      msg(str`🎨 CSS asset loader support`),
      msg(str`🧭 SPA (Single Page Application) Routing`),
      msg(str`📄 Auto HTML via HtmlWebpackPlugin`),
      msg(str`🚀 Lit web component included`),
    ];

    this.use = [
      msg(
        str`Clone the repo: git clone https://github.com/RenzWay/typescript-webpack.git`
      ),
      msg(str`Remove Remote: git remote remove origin`),
      msg(str`Install: npm install`),
      msg(str`Start dev server: npm run dev`),
      msg(str`Edit code in src/ & see it live!`),
    ];

    this.routing = [
      msg(str`Create pages inside the pages folder.`),
      msg(str`Import those pages into router.js.`),
      msg(str`Use URL hash (e.g., #/) to navigate between pages.`),
      msg(str`Try switching pages without full reload!`),
      msg(str`Don't worry — using ( #/ ) won't cause any errors.`),
    ];
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
        <a href="https://github.com/RenzWay/typescript-webpack" class="link-btn" target="_blank">🔗 ${msg(
          str`Visit Github`
        )}</a>
      </header>
      <section>
        <section class="card mx-20 my-8">
          <header class="card-header">
            <h3 class="card-title">${msg(str`What's Included?`)}</h3>
          </header>
          <div class="card-body">
            <ul class="list-include select-none"></ul>
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

    const listInclude = document.querySelector(".list-include") as HTMLElement;
    const listUse = document.querySelector(".list-use") as HTMLElement;
    const listRouting = document.querySelector(".list-routing") as HTMLElement;

    if (listInclude) {
      listInclude.innerHTML = this.include
        .map(
          (feature) =>
            `<li class="py-2 hover:bg-gray-700 backdrop-blur-[5px] rounded-sm">${feature}</li>`
        )
        .join("");
    }

    if (listUse) {
      listUse.innerHTML = this.use
        .map(
          (step) =>
            `<li class="py-2 hover:bg-gray-700 backdrop-blur-[5px] rounded-sm relative pl-2">${step}</li>`
        )
        .join("");
    }

    if (listRouting) {
      listRouting.innerHTML = this.routing
        .map(
          (step) =>
            `<li class="py-2 hover:bg-gray-700 backdrop-blur-[5px] rounded-sm relative pl-2">${step}</li>`
        )
        .join("");
    }
  }
}
