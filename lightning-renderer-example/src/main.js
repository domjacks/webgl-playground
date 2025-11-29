import { setupLightningRenderer } from "./setupLightningRenderer";

function main() {

  const appElement = document.getElementById("app");

  const { renderer, canvasElement } = setupLightningRenderer();

  appElement.appendChild(canvasElement);


}
