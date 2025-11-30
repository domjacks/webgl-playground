import { RendererMain } from '@lightningjs/renderer';
import { Inspector } from '@lightningjs/renderer/inspector';
import { SdfTextRenderer, WebGlCoreRenderer } from '@lightningjs/renderer/webgl';
import { shaders } from '@lightningjs/renderer/webgl';

async function setupLightningRenderer() {
    const canvasWrapper = document.createElement('div');
    const canvasElement = document.createElement('canvas');

    const renderer = new RendererMain(
        {
            appHeight: window.innerHeight < 1080 ? 720 : 1080,
            appWidth: window.innerWidth < 1920 ? 1280 : 1920,
            renderEngine: WebGlCoreRenderer,
            fontEngines: [SdfTextRenderer],
            fpsUpdateInterval: 1000,
            canvas: canvasElement,
            textureMemory: {
                targetThresholdLevel: 0.5,
            },
            inspector: Inspector,
            inspectorOptions: {
                animationStatsInterval: 5,
                enablePerformanceMonitoring: true,
                enableAnimationMonitoring: true,
            },
        },
        canvasWrapper
    );

    await installShaders(renderer.stage);

    return {
        canvasWrapper,
        renderer
    }
}

async function installShaders(stage) {
  stage.shManager.registerShaderType('Border', shaders.Border);
  stage.shManager.registerShaderType('LinearGradient', shaders.LinearGradient);
  stage.shManager.registerShaderType('RadialGradient', shaders.RadialGradient);
  stage.shManager.registerShaderType('Rounded', shaders.Rounded);
  stage.shManager.registerShaderType('RoundedWithBorder', shaders.RoundedWithBorder);
}

export { setupLightningRenderer };