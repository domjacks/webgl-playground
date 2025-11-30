import { setupLightningRenderer } from "./setupLightningRenderer";

async function main() {

  const appElement = document.getElementById("app");

  const { renderer, canvasWrapper } = await setupLightningRenderer();

  appElement.appendChild(canvasWrapper);
}

await main();