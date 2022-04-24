/*
 * this is the top object, which holds the rest of the
 * hanging objects and it hangs by a thread
 * it consists of 2 cuboids
 * this object is static
 */
class holder {
    constructor() {
        this.mainthread = new thread();
        mat4.translate(this.mainthread.modelMatrix, this.mainthread.modelMatrix, [0, 2.5, 0]);

        this.thread1 = new thread();
        mat4.translate(this.thread1.modelMatrix, this.thread1.modelMatrix, [0.95, 1.5, 0]);
        this.thread2 = new thread();
        mat4.translate(this.thread2.modelMatrix, this.thread2.modelMatrix, [-0.95, 1.5, 0]);
        this.thread3 = new thread();
        mat4.translate(this.thread3.modelMatrix, this.thread3.modelMatrix, [0, 1.5, 0.95]);
        this.thread4 = new thread();
        mat4.translate(this.thread4.modelMatrix, this.thread4.modelMatrix, [0, 1.5, -0.95]);

        this.stick1 = new rectangle();
        this.stick2 = new rectangle();

        mat4.translate(this.stick1.modelMatrix, this.stick1.modelMatrix, [0, 2, 0]);
        mat4.translate(this.stick2.modelMatrix, this.stick2.modelMatrix, [0, 2, 0]);

        mat4.rotateX(this.stick1.modelMatrix, this.stick1.modelMatrix, degToRad(90));
        mat4.rotateZ(this.stick2.modelMatrix, this.stick2.modelMatrix, degToRad(-90));
    }
}
