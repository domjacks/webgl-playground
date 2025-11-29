import { RendererMain } from '@lightningjs/renderer';
import { SdfTextRenderer, WebGlCoreRenderer } from '@lightningjs/renderer/webgl';

function setupLightningRenderer() {
    const canvasWrapperDivElement = document.createElement('div');
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
        canvasWrapperDivElement
    );

    return {
        canvasElement,
        renderer
    }
}

export { setupLightningRenderer };