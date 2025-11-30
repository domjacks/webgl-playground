import { setupLightningRenderer } from "./setupLightningRenderer";

async function main() {
  const appElement = document.getElementById("app");
  const { renderer, canvasWrapper } = await setupLightningRenderer();
  appElement.appendChild(canvasWrapper);

    const myNode = renderer.createNode({
      parent: renderer.root,
      x: 2,
      y: 2,
      w: 100,
      h: 100,
      color: 0x000000ff,
    });

    setTimeout(() => {
      myNode.destroy()
    }, 2000);
}

await main();