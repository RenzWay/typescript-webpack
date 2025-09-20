import { html, LitElement, css } from "lit";

export class Footer extends LitElement {
  static styles = css`
    :host {
      display: block;
      width: 100%;
      background: var(--aqua, #f0f0f0);
      margin-top: auto;
    }
    footer {
      padding: 1.5em;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: var(--outer-space, #333);
    }
    .link-btn {
      color: var(--cerulean, #036);
      text-decoration: none;
      margin-left: 0.5em;
      font-weight: bold;
    }
    .link-btn:hover {
      text-decoration: underline;
    }
  `;

  render() {
    return html`
      <footer>
        <div class="flex items-center">
          <span>© 2025 Webpack Starter by:</span>
          <a href="https://github.com/RenzWay" class="link-btn" target="_blank"
            >RenzWay</a
          >
        </div>
      </footer>
    `;
  }
}
customElements.define("app-footer", Footer);
