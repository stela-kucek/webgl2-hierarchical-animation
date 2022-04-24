/*
 * this is the main script of the program
 */

// Constant strings used in the script
const context = "webgl2";
const canvasId = "Canvas";

const phongVS = "vertexPhongShader";
const phongFS = "fragmentPhongShader";

// Set default shaders
var fShaderId = phongFS;
var vShaderId = phongVS;

// Global vars - general
var gl;
var fshader;
var vshader;
var shaderProgram;
var canvas;
var objects = []; // holds created objects

// Illumination
var mode = 0; //  diffuse 0 (default) /specular 1

// Transformation mode
var lightTransformsActive = false;
var lightMatrix = mat4.create();
var lightPosition = vec3.fromValues(0, 10, 0);

function degToRad(degrees) {
    return degrees * Math.PI / 180;
}

function setUpCanvas() {
    canvas = document.getElementById(canvasId);
    gl = canvas.getContext(context);
    gl.viewport(0, 0, canvas.width, canvas.height);
}

function initialize() {
    importObjects();
    setUpCanvas();
    setShaders();
    initGlobalMatrices();
}

function renderLoop() {
    requestAnimationFrame(renderLoop);
    if (!ready || !ready2) return;

    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    gl.enable(gl.DEPTH_TEST);

    animate();
    draw();

}

function draw() {
    var projMatrix = mat4.create();
    mat4.identity(projMatrix);
    mat4.perspective(projMatrix, 45 * Math.PI / 180.0, (canvas.width / canvas.height), 0.1, 1000);

    gl.uniform1i(gl.getUniformLocation(shaderProgram, "mode"), mode);
    gl.uniform3fv(gl.getUniformLocation(shaderProgram, "lightPosition"), lightPosition);
    gl.uniformMatrix4fv(gl.getUniformLocation(shaderProgram, "viewMatrix"), false, viewMatrix);
    gl.uniformMatrix4fv(gl.getUniformLocation(shaderProgram, "projectionMatrix"), false, projMatrix);

    objects.forEach(function (object) {

        mat4.multiply(object.modelMatrix, gMatrix, object.modelMatrix);
        gl.uniformMatrix4fv(gl.getUniformLocation(shaderProgram, "modelMatrix"), false, object.modelMatrix);
        var modelInvTranspose = mat4.create();
        mat4.invert(modelInvTranspose, object.modelMatrix);
        mat4.transpose(modelInvTranspose, modelInvTranspose);
        gl.uniformMatrix4fv(gl.getUniformLocation(shaderProgram, "normalMatrix"), false, modelInvTranspose);
        gl.disableVertexAttribArray(shaderProgram.textureCoordinateAttributeLocation);
        if (object instanceof sphere || object instanceof importedObject) {
            gl.enableVertexAttribArray(shaderProgram.vertexNormalAttribute);
            // gl.disableVertexAttribArray(shaderProgram.vertexColorAttribute);
            if (object instanceof sphere) gl.uniform1i(gl.getUniformLocation(shaderProgram, "type"), 2);
            else if (object.name === T1) gl.uniform1i(gl.getUniformLocation(shaderProgram, "type"), 4);
            else gl.uniform1i(gl.getUniformLocation(shaderProgram, "type"), 5);

            gl.bindBuffer(gl.ARRAY_BUFFER, object.vPositionBuffer);
            gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, object.vPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);

            gl.bindBuffer(gl.ARRAY_BUFFER, object.normalBuffer);
            gl.vertexAttribPointer(shaderProgram.vertexNormalAttribute, object.normalBuffer.itemSize, gl.FLOAT, false, 0, 0);

            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, object.indicesBuffer);

            gl.drawElements(gl.TRIANGLES, object.indices.length, gl.UNSIGNED_SHORT, 0);

        }
        else if (object instanceof thread) {
            gl.disableVertexAttribArray(shaderProgram.vertexNormalAttribute);
            gl.uniform1i(gl.getUniformLocation(shaderProgram, "type"), 0);
            gl.bindBuffer(gl.ARRAY_BUFFER, object.vPositionBuffer);
            gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, object.vPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);

            gl.drawArrays(gl.LINES, 0, 2);
        }

        else {
            gl.enableVertexAttribArray(shaderProgram.textureCoordinateAttributeLocation);
            gl.enableVertexAttribArray(shaderProgram.vertexNormalAttribute);
            if (object instanceof cube) {

                gl.uniform1i(gl.getUniformLocation(shaderProgram, "type"), 3);
                gl.activeTexture(gl.TEXTURE0);
                gl.bindTexture(gl.TEXTURE_2D, object.texture1);
                gl.uniform1i(object.samplerUniformLocation, 0);
            }
            else {

                gl.uniform1i(gl.getUniformLocation(shaderProgram, "type"), 1);
                gl.activeTexture(gl.TEXTURE1);
                gl.bindTexture(gl.TEXTURE_2D, object.texture1);
                gl.uniform1i(object.samplerUniformLocation, 1);
            }

            gl.bindBuffer(gl.ARRAY_BUFFER, object.textureCoordinatesBuffer);
            gl.vertexAttribPointer(shaderProgram.textureCoordinateAttributeLocation, 2, gl.FLOAT, false, 0, 0);

            gl.bindBuffer(gl.ARRAY_BUFFER, object.vPositionBuffer);
            gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, object.vPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);

            gl.bindBuffer(gl.ARRAY_BUFFER, object.normalBuffer);
            gl.vertexAttribPointer(shaderProgram.vertexNormalAttribute, object.normalBuffer.itemSize, gl.FLOAT, false, 0, 0);

            gl.drawArrays(gl.TRIANGLES, 0, 36);
        }


    });

    mat4.identity(gMatrix);

}


function main() {
    initialize();
    createSculpture();
    renderLoop();
}