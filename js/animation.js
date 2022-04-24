
function animate() {

       mat4.rotateY(gMatrix, gMatrix, degToRad(0.2));

        level2.forEach(function (o) {

            o.children.forEach(function (c) {
              mat4.rotateY(c.modelMatrix, c.modelMatrix, degToRad(-0.8));

              c.children.forEach(function (cc) {
                  mat4.rotateY(cc.modelMatrix, cc.modelMatrix, degToRad(2));
              });

            });

        });


}
