class thread extends object {
    constructor(){
        super();

        this.vertices = [
            0, 0.5, 0,
            0, -0.5, 0
        ];

        this.modelMatrix = mat4.create();

        this.index = objects.push(this)-1;

        this.vPositionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, this.vPositionBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.vertices), gl.STATIC_DRAW);
        this.vPositionBuffer.itemSize = 3;
        this.vPositionBuffer.numItems = this.vertices.length / 3;


    }
}