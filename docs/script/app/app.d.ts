interface AppConfig {
    content: HTMLElement;
}
export default class App {
    private content;
    constructor({ content }: AppConfig);
    renderPage(): Promise<void>;
}
export {};
//# sourceMappingURL=app.d.ts.map