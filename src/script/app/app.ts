import { getActivePathname } from "./url-parser";
import { Router } from "../router/router";

interface AppConfig {
  content: HTMLElement;
}

// Define interface untuk Page class
interface Page {
  render(): string | Promise<string>;
  afterRender(): void | Promise<void>;
}

// Define type untuk router
type RouterType = {
  [key: string]: new () => Page;
};

export default class App {
  private content: HTMLElement;

  constructor({ content }: AppConfig) {
    this.content = content;
  }

  async renderPage(): Promise<void> {
    const url: string = getActivePathname();
    const rute = Router[url];
    const content = this.content;

    // Check if route exists
    if (!rute) {
      console.error(`Route not found: ${url}`);
      content.innerHTML = "<h1>404 - Page Not Found</h1>";
      return;
    }

    document.startViewTransition(async () => {
      try {
        const page: Page = new rute();

        const renderedContent = await page.render();
        content.innerHTML = renderedContent;
        await page.afterRender();
      } catch (error) {
        console.error("Error rendering page:", error);
        content.innerHTML = "<h1>Error loading page</h1>";
      }
    });
  }
}
