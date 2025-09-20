import HomePage from "../pages/homepage";

type PageConstructor = new () => {
  render(): string | Promise<string>;
  afterRender(): void | Promise<void>;
};

type RouterType = {
  [key: string]: PageConstructor;
  "/": PageConstructor;
};

export const Router: RouterType = {
  "/": HomePage,
};
