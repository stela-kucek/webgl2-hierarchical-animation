var viewMatrix;
var gMatrix;
var lvl2Matrix;

/*
 * initializes the "global" matrices,
 * translates the view to the back so the objects and the
 * global transformations are seen from a distance and
 * therefore more clear
 */
function initGlobalMatrices(){
    viewMatrix = mat4.create();
    mat4.translate(viewMatrix, viewMatrix, [0, 0, -6.5]);
    mat4.rotateY(viewMatrix, viewMatrix, degToRad(30));
    gMatrix = mat4.create();
    lvl2Matrix = mat4.create();
}
