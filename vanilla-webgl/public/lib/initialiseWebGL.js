function initialiseWebGL($canvas) {
    console.log('Bootstrapping WebGL context');
    const gl = $canvas.getContext('webgl');

    if (!gl) {
        throw new Error('Error WebGL not initialised');
    }
    return gl;
}

export { initialiseWebGL };

