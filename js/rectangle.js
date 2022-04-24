/*
 * this is the second 'primitive', with 1x1x4 dimensions,
 * where the unit size in the model space equals 0.0625
 */
var ready2 = false;

class rectangle extends object {
    constructor() {
        super();
        this.vertices = [
            -0.0625, -1.0, -0.0625,
            0.0625, -1.0, -0.0625,
            0.0625, 1.0, -0.0625,
            0.0625, 1.0, -0.0625,
            -0.0625, 1.0, -0.0625,
            -0.0625, -1.0, -0.0625,

            -0.0625, -1.0, 0.0625,
            0.0625, -1.0, 0.0625,
            0.0625, 1.0, 0.0625,
            0.0625, 1.0, 0.0625,
            -0.0625, 1.0, 0.0625,
            -0.0625, -1.0, 0.0625,

            -0.0625, 1.0, 0.0625,
            -0.0625, 1.0, -0.0625,
            -0.0625, -1.0, -0.0625,
            -0.0625, -1.0, -0.0625,
            -0.0625, -1.0, 0.0625,
            -0.0625, 1.0, 0.0625,

            0.0625, 1.0, 0.0625,
            0.0625, 1.0, -0.0625,
            0.0625, -1.0, -0.0625,
            0.0625, -1.0, -0.0625,
            0.0625, -1.0, 0.0625,
            0.0625, 1.0, 0.0625,

            -0.0625, -1.0, -0.0625,
            0.0625, -1.0, -0.0625,
            0.0625, -1.0, 0.0625,
            0.0625, -1.0, 0.0625,
            -0.0625, -1.0, 0.0625,
            -0.0625, -1.0, -0.0625,

            -0.0625, 1.0, -0.0625,
            0.0625, 1.0, -0.0625,
            0.0625, 1.0, 0.0625,
            0.0625, 1.0, 0.0625,
            -0.0625, 1.0, 0.0625,
            -0.0625, 1.0, -0.0625
        ];

        this.colors = [];

        this.vertexNormals = [

            0.0, 0.0, -1.0,
            0.0, 0.0, -1.0,
            0.0, 0.0, -1.0,
            0.0, 0.0, -1.0,
            0.0, 0.0, -1.0,
            0.0, 0.0, -1.0,

            0.0, 0.0, 1.0,
            0.0, 0.0, 1.0,
            0.0, 0.0, 1.0,
            0.0, 0.0, 1.0,
            0.0, 0.0, 1.0,
            0.0, 0.0, 1.0,

            -1.0, 0.0, 0.0,
            -1.0, 0.0, 0.0,
            -1.0, 0.0, 0.0,
            -1.0, 0.0, 0.0,
            -1.0, 0.0, 0.0,
            -1.0, 0.0, 0.0,

            1.0, 0.0, 0.0,
            1.0, 0.0, 0.0,
            1.0, 0.0, 0.0,
            1.0, 0.0, 0.0,
            1.0, 0.0, 0.0,
            1.0, 0.0, 0.0,

            0.0, -1.0, 0.0,
            0.0, -1.0, 0.0,
            0.0, -1.0, 0.0,
            0.0, -1.0, 0.0,
            0.0, -1.0, 0.0,
            0.0, -1.0, 0.0,

            0.0, 1.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 1.0, 0.0

        ];
        this.textureCoordinates = [
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            1.0, 1.0,
            0.0, 1.0,
            0.0, 0.0,

            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            1.0, 1.0,
            0.0, 1.0,
            0.0, 0.0,

            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,
            0.0, 1.0,
            0.0, 0.0,
            1.0, 0.0,

            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,
            0.0, 1.0,
            0.0, 0.0,
            1.0, 0.0,

            0.0, 1.0,
            1.0, 1.0,
            1.0, 0.0,
            1.0, 0.0,
            0.0, 0.0,
            0.0, 1.0,

            0.0, 1.0,
            1.0, 1.0,
            1.0, 0.0,
            1.0, 0.0,
            0.0, 0.0,
            0.0, 1.0
        ];

        this.modelMatrix = mat4.create();

        this.index = objects.push(this) - 1;

        this.vPositionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, this.vPositionBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.vertices), gl.STATIC_DRAW);
        this.vPositionBuffer.itemSize = 3;
        this.vPositionBuffer.numItems = this.vertices.length / 3;

        this.normalBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, this.normalBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.vertexNormals), gl.STATIC_DRAW);
        this.normalBuffer.itemSize = 3;
        this.normalBuffer.numItems = this.normalBuffer.length / 3;

        this.textureCoordinatesBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, this.textureCoordinatesBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.textureCoordinates), gl.STATIC_DRAW);

        this.texture1 = gl.createTexture();

        this.texture1.image = new Image();
        this.texture1.image.src = ".\\img\\wood2.jpg";
        var that = this;

        /*
            Checking if power of 2 and onload function for texture image derived from:
            https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL
        */
        this.texture1.image.onload = function () {
            gl.bindTexture(gl.TEXTURE_2D, that.texture1);
            gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, that.texture1.image);

            if (isPowerOf2(that.texture1.image.width) && isPowerOf2(that.texture1.image.height)) {
                gl.generateMipmap(gl.TEXTURE_2D);
            }
            else {
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
                gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
            }

            that.samplerUniformLocation = gl.getUniformLocation(shaderProgram, "sampler1");

            ready2 = true;
        };

        function isPowerOf2(value) {
            return (value & (value - 1)) === 0;
        }


    }


}
