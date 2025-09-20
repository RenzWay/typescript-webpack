type PageConstructor = new () => {
    render(): string | Promise<string>;
    afterRender(): void | Promise<void>;
};
type RouterType = {
    [key: string]: PageConstructor;
    "/": PageConstructor;
};
export declare const Router: RouterType;
export {};
//# sourceMappingURL=router.d.ts.map