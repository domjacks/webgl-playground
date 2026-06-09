import { initialiseWebGL } from './initialiseWebGL.js';
import { ErrorDisplay } from './ErrorDisplay.js';

function main() {
    const $canvas = document.getElementById('webgl-canvas'); 
    const $error = document.getElementById('error');
    const $errorDisplay = new ErrorDisplay($error);

    let gl;

    try {
        gl = initialiseWebGL($canvas)
        gl.clearColor(0.0, 0.0, 0.5, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);
    } catch (e) {
        $errorDisplay.addError(e.message);
        $errorDisplay.showError();
    }
}

main()