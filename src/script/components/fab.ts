import { LitElement, html, type PropertyDeclarations } from "lit";

export class FabBtn extends LitElement {
  // Deklarasi properti, akan diinisialisasi otomatis
  public showMenu = false;

  // Mendefinisikan properti Lit
  static properties: PropertyDeclarations = {
    showMenu: { type: Boolean },
  };

  // Nonaktifkan Shadow DOM
  protected createRenderRoot(): HTMLElement | DocumentFragment {
    return this;
  }

  // Metode untuk mengganti nilai showMenu saat tombol diklik
  private toggleMenu() {
    // Cukup ubah nilainya, Lit akan otomatis merender ulang
    this.showMenu = !this.showMenu;
  }

  protected render() {
    return html`
      <div class="fixed bottom-6 right-6 flex flex-col items-center">
        <button
          @click=${this.toggleMenu}
          class="bg-blue-600 text-white p-6 shadow-lg rounded-full hover:bg-blue-700 active:scale-95"
        >
          <span class="text-3xl font-bold select-none leading-none">+</span>
        </button>

        <div
          class="absolute bottom-full mb-2 w-48 bg-white rounded-lg shadow-xl py-2 transition-all duration-300 transform ${this
            .showMenu
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"}"
        >
          <a
            href="#/"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Home
          </a>
          <a
            href="#/login"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Login
          </a>
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Menu Item 3
          </a>
        </div>
      </div>
    `;
  }
}

customElements.define("fab-btn", FabBtn);
