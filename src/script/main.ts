import "../style/style.css";
import "../script/components/index";
import App from "./app/app";

document.addEventListener("DOMContentLoaded", async function () {
  const content = document.getElementById("content");
  const app = new App({ content: content! });
  await app.renderPage();

  window.addEventListener("hashchange", async () => {
    await app.renderPage();
  });
});
