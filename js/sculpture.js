var level0 = [];
var level1 = [];
var level2 = [];
var level3 = [];
var level4 = [];
const T1 = "teapot";
const T2 = "teddy";

function arrangeLevel1() {
    mat4.translate(level1[0].modelMatrix, level1[0].modelMatrix, [0.95, 1.5, 0]);
    mat4.translate(level1[1].modelMatrix, level1[1].modelMatrix, [-0.95, 1.5, 0]);
    mat4.translate(level1[2].modelMatrix, level1[2].modelMatrix, [0, 1.5, 0.95]);
    mat4.translate(level1[3].modelMatrix, level1[3].modelMatrix, [0, 1.5, -0.95]);

    level1.forEach(function (sphere) {
        mat4.scale(sphere.modelMatrix, sphere.modelMatrix, [0.5, 0.5, 0.5]);
    });
}

function arrangeLevel2() {

    mat4.translate(level2[0].modelMatrix, level2[0].modelMatrix, [0.95, 1, 0]);
    mat4.rotateZ(level2[0].modelMatrix, level2[0].modelMatrix, degToRad(-90));
    mat4.translate(level2[1].modelMatrix, level2[1].modelMatrix, [-0.95, 1, 0]);
    mat4.rotateZ(level2[1].modelMatrix, level2[1].modelMatrix, degToRad(-90));
    mat4.translate(level2[2].modelMatrix, level2[2].modelMatrix, [0, 1, 0.95]);
    mat4.rotateX(level2[2].modelMatrix, level2[2].modelMatrix, degToRad(-90));
    mat4.translate(level2[3].modelMatrix, level2[3].modelMatrix, [0, 1, -0.95]);
    mat4.rotateX(level2[3].modelMatrix, level2[3].modelMatrix, degToRad(-90));

    level2.forEach(function (rect) {
        mat4.scale(rect.modelMatrix, rect.modelMatrix, [1, 0.5, 1]);

        if (level2.indexOf(rect) === 0) {
            rect.thread1 = new thread();
            mat4.translate(rect.thread1.modelMatrix, rect.thread1.modelMatrix, [0.58, 0.5, 0]);
            rect.thread2 = new thread();
            mat4.translate(rect.thread2.modelMatrix, rect.thread2.modelMatrix, [1.3, 0.5, 0]);
        }

        else if (level2.indexOf(rect) === 1) {
            rect.thread1 = new thread();
            mat4.translate(rect.thread1.modelMatrix, rect.thread1.modelMatrix, [-0.58, 0.5, 0]);
            rect.thread2 = new thread();
            mat4.translate(rect.thread2.modelMatrix, rect.thread2.modelMatrix, [-1.3, 0.5, 0]);
        }

        else if (level2.indexOf(rect) === 2) {
            rect.thread1 = new thread();
            mat4.translate(rect.thread1.modelMatrix, rect.thread1.modelMatrix, [0, 0.5, 0.58]);
            rect.thread2 = new thread();
            mat4.translate(rect.thread2.modelMatrix, rect.thread2.modelMatrix, [0, 0.5, 1.3]);

        }

        else if (level2.indexOf(rect) === 3) {
            rect.thread1 = new thread();
            mat4.translate(rect.thread1.modelMatrix, rect.thread1.modelMatrix, [0, 0.5, -0.58]);
            rect.thread2 = new thread();
            mat4.translate(rect.thread2.modelMatrix, rect.thread2.modelMatrix, [0, 0.5, -1.3]);
        }

    });
}

function arrangeLevel3() {
    level3.forEach(function (cube) {
        mat4.scale(cube.modelMatrix, cube.modelMatrix, [0.55, 0.55, 0.55]);
    });

    mat4.translate(level3[0].modelMatrix, level3[0].modelMatrix, [1.05, 0.55, 0]);
    mat4.translate(level3[1].modelMatrix, level3[1].modelMatrix, [2.35, 0.55, 0]);

    mat4.translate(level3[2].modelMatrix, level3[2].modelMatrix, [-1.05, 0.55, 0]);
    mat4.translate(level3[3].modelMatrix, level3[3].modelMatrix, [-2.35, 0.55, 0]);

    mat4.translate(level3[4].modelMatrix, level3[4].modelMatrix, [0, 0.55, 1.05]);
    mat4.translate(level3[5].modelMatrix, level3[5].modelMatrix, [0, 0.55, 2.35]);

    mat4.translate(level3[6].modelMatrix, level3[6].modelMatrix, [0, 0.55, -1.05]);
    mat4.translate(level3[7].modelMatrix, level3[7].modelMatrix, [0, 0.55, -2.35]);
}

function arrangeLevel4() {
    level4.forEach(function (obj) {
        if (obj.name === T2) {

            if (level4.indexOf(obj) === 4) {
                mat4.translate(obj.modelMatrix, obj.modelMatrix, [1.3, -0.2, 0]);
            }
            if (level4.indexOf(obj) === 5) {
                mat4.translate(obj.modelMatrix, obj.modelMatrix, [-1.3, -0.2, 0]);
                mat4.rotateY(obj.modelMatrix, obj.modelMatrix, degToRad(180));
            }
            if (level4.indexOf(obj) === 6) {
                mat4.translate(obj.modelMatrix, obj.modelMatrix, [0, -0.2, 1.3]);
                mat4.rotateY(obj.modelMatrix, obj.modelMatrix, degToRad(-90));
            }
            if (level4.indexOf(obj) === 7) {
                mat4.translate(obj.modelMatrix, obj.modelMatrix, [0, -0.2, -1.3]);
                mat4.rotateY(obj.modelMatrix, obj.modelMatrix, degToRad(90));
            }
            mat4.scale(obj.modelMatrix, obj.modelMatrix, [0.012, 0.012, 0.012]);
        }
        else {
            if (level4.indexOf(obj) === 0) {
                mat4.translate(obj.modelMatrix, obj.modelMatrix, [0.58, -0.2, 0]);
            }
            if (level4.indexOf(obj) === 1) {
                mat4.translate(obj.modelMatrix, obj.modelMatrix, [-0.58, -0.2, 0]);
                mat4.rotateY(obj.modelMatrix, obj.modelMatrix, degToRad(180));
            }
            if (level4.indexOf(obj) === 2) {
                mat4.translate(obj.modelMatrix, obj.modelMatrix, [0, -0.2, 0.58]);
                mat4.rotateY(obj.modelMatrix, obj.modelMatrix, degToRad(-90));
            }
            if (level4.indexOf(obj) === 3) {
                mat4.translate(obj.modelMatrix, obj.modelMatrix, [0, -0.2, -0.58]);
                mat4.rotateY(obj.modelMatrix, obj.modelMatrix, degToRad(90));
            }
            mat4.scale(obj.modelMatrix, obj.modelMatrix, [0.004, 0.004, 0.004]);
        }

    });

}

function createSculpture() {
    level0.push(new holder());

    var teapots = [];
    var teddies = [];

    for (let i = 0; i < importedObjects.length; ++i) {
        if (importedObjects[i].name === T1) {
            teapots.push(importedObjects[i]);
        }
        else teddies.push(importedObjects[i]);
    }

    level1 = [new sphere(), new sphere(), new sphere(), new sphere()];
    level2 = [new rectangle(), new rectangle(), new rectangle(), new rectangle()];
    level3 = [new cube(), new cube(), new cube(), new cube(),
        new cube(), new cube(), new cube(), new cube()];
    level4 = [new importedObject(T1, teapots[0].vertices, teapots[0].normals, teapots[0].indices),
        new importedObject(T1, teapots[0].vertices, teapots[0].normals, teapots[0].indices),
        new importedObject(T1, teapots[0].vertices, teapots[0].normals, teapots[0].indices),
        new importedObject(T1, teapots[0].vertices, teapots[0].normals, teapots[0].indices),
        new importedObject(T2, teddies[0].vertices, teddies[0].normals, teddies[0].indices),
        new importedObject(T2, teddies[0].vertices, teddies[0].normals, teddies[0].indices),
        new importedObject(T2, teddies[0].vertices, teddies[0].normals, teddies[0].indices),
        new importedObject(T2, teddies[0].vertices, teddies[0].normals, teddies[0].indices)];


    arrangeLevel1();
    arrangeLevel2();
    arrangeLevel3();
    arrangeLevel4();

    setHierarchy();
}

function setHierarchy() {

    level3[0].children = [level4[0]];
    level3[1].children = [level4[4]];
    level3[2].children = [level4[1]];
    level3[3].children = [level4[5]];
    level3[4].children = [level4[2]];
    level3[5].children = [level4[6]];
    level3[6].children = [level4[3]];
    level3[7].children = [level4[7]];

    for (let i = 0; i < 4; ++i) {
        level2[i].children = [level3[i + i], level3[i + (i + 1)]];
    }
    for (let i = 0; i < 4; ++i) {
        level1[i].children = [level2[i]];
    }

}